import { useState, useEffect } from 'react';
import { AGENT_NODES_DATA } from '../data/portfolioData';
import { AgentNode } from '../types';
import { Play, RotateCcw, ShieldCheck, Cpu, Terminal, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface PacketRoute {
  id: string;
  from: string;
  to: string;
  progress: number;
  label: string;
  color: string;
}

interface LogEvent {
  id: string;
  timestamp: string;
  source: string;
  target: string;
  action: string;
  payload: string;
  status: 'routed' | 'verified' | 'executed' | 'halted';
}

export default function AgentOrchestratorVisualizer() {
  const [nodes] = useState<AgentNode[]>(AGENT_NODES_DATA);
  const [selectedNode, setSelectedNode] = useState<AgentNode>(AGENT_NODES_DATA[1]); // Orchestrator Brain
  const [activePackets, setActivePackets] = useState<PacketRoute[]>([]);
  const [logs, setLogs] = useState<LogEvent[]>([
    {
      id: 'init-1',
      timestamp: '00:00:01.102',
      source: 'Orchestrator Brain',
      target: 'Triage Agent',
      action: 'BOOT_STATE_MACHINE',
      payload: 'Spec: v2.4.0 (github/spec-kit) verified',
      status: 'verified',
    },
    {
      id: 'init-2',
      timestamp: '00:00:01.340',
      source: 'MCP Tool Server',
      target: 'DB Sync Worker',
      action: 'REGISTER_PROTOCOL',
      payload: 'JSON-RPC 2.0 stdio channel online',
      status: 'executed',
    },
  ]);
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string>('order');

  // Hardcoded node positions mapped to percentage
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  // Static connection topology
  const connections = [
    { from: 'triage', to: 'orchestrator' },
    { from: 'orchestrator', to: 'products' },
    { from: 'orchestrator', to: 'orders' },
    { from: 'orchestrator', to: 'mcp_tools' },
    { from: 'products', to: 'orders' },
    { from: 'orders', to: 'checkout' },
    { from: 'orders', to: 'hitl' },
    { from: 'mcp_tools', to: 'db_sync' },
    { from: 'checkout', to: 'db_sync' },
    { from: 'hitl', to: 'db_sync' },
  ];

  // Background idle pulsing
  useEffect(() => {
    const interval = setInterval(() => {
      if (!simulationRunning && activePackets.length < 2) {
        const randomConn = connections[Math.floor(Math.random() * connections.length)];
        const newPacket: PacketRoute = {
          id: Math.random().toString(),
          from: randomConn.from,
          to: randomConn.to,
          progress: 0,
          label: 'HEARTBEAT_ACK',
          color: '#6D5EF5',
        };
        setActivePackets((prev) => [...prev.slice(-3), newPacket]);
      }
    }, 2800);
    return () => clearInterval(interval);
  }, [simulationRunning, activePackets.length]);

  // Packet travel animation loop
  useEffect(() => {
    if (activePackets.length === 0) return;

    const timer = setInterval(() => {
      setActivePackets((prev) =>
        prev
          .map((p) => ({ ...p, progress: p.progress + 0.08 }))
          .filter((p) => p.progress < 1)
      );
    }, 40);

    return () => clearInterval(timer);
  }, [activePackets]);

  const addLog = (
    source: string,
    target: string,
    action: string,
    payload: string,
    status: 'routed' | 'verified' | 'executed' | 'halted'
  ) => {
    const now = new Date();
    const timeStr = `${now.toTimeString().split(' ')[0]}.${now.getMilliseconds().toString().padStart(3, '0')}`;
    setLogs((prev) => [
      {
        id: Math.random().toString(),
        timestamp: timeStr,
        source,
        target,
        action,
        payload,
        status,
      },
      ...prev.slice(0, 14),
    ]);
  };

  const runScenario = (scenario: 'order' | 'mcp' | 'hitl') => {
    setActiveScenario(scenario);
    setSimulationRunning(true);

    if (scenario === 'order') {
      // Step 1: Triage -> Orchestrator
      setActivePackets([
        { id: '1', from: 'triage', to: 'orchestrator', progress: 0, label: 'INTENT_ORDER_REQUEST', color: '#6D5EF5' },
      ]);
      addLog('Triage Agent', 'Orchestrator Brain', 'INTENT_CLASSIFIED', 'Customer prompt: "Reorder SKU-8842 with 20% discount"', 'routed');

      setTimeout(() => {
        // Step 2: Orchestrator -> Products
        setActivePackets([
          { id: '2', from: 'orchestrator', to: 'products', progress: 0, label: 'VERIFY_STOCK', color: '#10B981' },
        ]);
        addLog('Orchestrator Brain', 'Products Agent', 'INVENTORY_CHECK', 'SKU-8842 stock verified: 48 units available', 'verified');
      }, 700);

      setTimeout(() => {
        // Step 3: Products -> Orders
        setActivePackets([
          { id: '3', from: 'products', to: 'orders', progress: 0, label: 'ALLOCATE_INVENTORY', color: '#06B6D4' },
        ]);
        addLog('Products Agent', 'Orders Agent', 'RESERVE_INVENTORY', 'Hold: 2 units locked in warehouse cluster', 'verified');
      }, 1400);

      setTimeout(() => {
        // Step 4: Orders -> MCP Tool Server -> DB Sync
        setActivePackets([
          { id: '4a', from: 'orchestrator', to: 'mcp_tools', progress: 0, label: 'EXECUTE_MCP_CALL', color: '#EC4899' },
          { id: '4b', from: 'mcp_tools', to: 'db_sync', progress: 0, label: 'ATOMIC_COMMIT', color: '#6366F1' },
        ]);
        addLog('Orders Agent', 'MCP Tool Server', 'MCP_INVOKE', 'tool: "commit_order_transaction" -> DB Sync', 'executed');
        setSimulationRunning(false);
      }, 2100);
    } else if (scenario === 'mcp') {
      // MCP Tool Calling Flow
      setActivePackets([
        { id: 'mcp1', from: 'orchestrator', to: 'mcp_tools', progress: 0, label: 'MCP_DISCOVERY', color: '#EC4899' },
      ]);
      addLog('Orchestrator Brain', 'MCP Tool Server', 'SCHEMA_DISCOVERY', 'Fetching standardized tool catalog via JSON-RPC', 'routed');

      setTimeout(() => {
        setActivePackets([
          { id: 'mcp2', from: 'mcp_tools', to: 'db_sync', progress: 0, label: 'DATA_STREAM', color: '#6366F1' },
        ]);
        addLog('MCP Tool Server', 'DB Sync Worker', 'SECURE_QUERY', 'SELECT catalog_records WHERE status = ACTIVE', 'executed');
        setSimulationRunning(false);
      }, 900);
    } else if (scenario === 'hitl') {
      // Human-in-the-Loop Safety Gate
      setActivePackets([
        { id: 'h1', from: 'orders', to: 'hitl', progress: 0, label: 'ESCALATE_HIGH_RISK', color: '#EF4444' },
      ]);
      addLog('Orders Agent', 'Human-in-the-Loop', 'THRESHOLD_EXCEEDED', 'Invoice > $5,000 threshold triggered approval gate', 'halted');

      setTimeout(() => {
        setActivePackets([
          { id: 'h2', from: 'hitl', to: 'db_sync', progress: 0, label: 'SLACK_APPROVED', color: '#10B981' },
        ]);
        addLog('Human-in-the-Loop', 'DB Sync Worker', 'HUMAN_APPROVAL_RECEIVED', 'Manager Slack hook: Approved by @operations-lead', 'executed');
        setSimulationRunning(false);
      }, 1100);
    }
  };

  return (
    <div
      id="agent-orchestration-visualizer"
      className="relative rounded-2xl bg-[#0D0D15] border border-[#222338] shadow-2xl overflow-hidden p-4 sm:p-6"
    >
      {/* Visualizer Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222338]/80">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4" />
          <h2 className="font-mono text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2">
            <span>Multi-Agent Orchestration Mesh</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#6D5EF5]/15 text-[#8B7EFF] border border-[#6D5EF5]/30">
              Interactive Runtime
            </span>
          </h2>
        </div>

        {/* Scenario Buttons */}
        <div className="flex items-center gap-1.5 bg-[#141420] p-1 rounded-lg border border-[#222338] text-xs">
          <button
            type="button"
            onClick={() => runScenario('order')}
            disabled={simulationRunning}
            className={`px-3 py-1 rounded transition-all font-mono text-[11px] flex items-center gap-1.5 ${
              activeScenario === 'order'
                ? 'bg-[#6D5EF5] text-white shadow-[0_0_12px_rgba(109,94,245,0.4)]'
                : 'text-[#A0A3B1] hover:text-white hover:bg-[#1E1F30]'
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>Order Flow (15+ Agents)</span>
          </button>
          <button
            type="button"
            onClick={() => runScenario('mcp')}
            disabled={simulationRunning}
            className={`px-3 py-1 rounded transition-all font-mono text-[11px] flex items-center gap-1.5 ${
              activeScenario === 'mcp'
                ? 'bg-[#6D5EF5] text-white shadow-[0_0_12px_rgba(109,94,245,0.4)]'
                : 'text-[#A0A3B1] hover:text-white hover:bg-[#1E1F30]'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>MCP Protocol Handoff</span>
          </button>
          <button
            type="button"
            onClick={() => runScenario('hitl')}
            disabled={simulationRunning}
            className={`px-3 py-1 rounded transition-all font-mono text-[11px] flex items-center gap-1.5 ${
              activeScenario === 'hitl'
                ? 'bg-[#6D5EF5] text-white shadow-[0_0_12px_rgba(109,94,245,0.4)]'
                : 'text-[#A0A3B1] hover:text-white hover:bg-[#1E1F30]'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>HITL Slack Gate</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative h-72 sm:h-88 w-full my-4 rounded-xl bg-[#09090F] border border-[#1E1F2E] overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'linear-gradient(to right, #6D5EF5 1px, transparent 1px), linear-gradient(to bottom, #6D5EF5 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* SVG Connections and Animated Packets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E2F48" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6D5EF5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2E2F48" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Static Route Edges */}
          {connections.map((conn, idx) => {
            const fromNode = nodeMap.get(conn.from);
            const toNode = nodeMap.get(conn.to);
            if (!fromNode || !toNode) return null;

            return (
              <line
                key={`edge-${idx}`}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="url(#edge-gradient)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-70"
              />
            );
          })}

          {/* Active Animated Traveling Packets */}
          {activePackets.map((packet) => {
            const fromNode = nodeMap.get(packet.from);
            const toNode = nodeMap.get(packet.to);
            if (!fromNode || !toNode) return null;

            const curX = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
            const curY = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

            return (
              <g key={`packet-${packet.id}`}>
                <circle cx={`${curX}%`} cy={`${curY}%`} r="6" fill={packet.color} className="animate-pulse" />
                <circle cx={`${curX}%`} cy={`${curY}%`} r="12" fill={packet.color} opacity="0.3" />
              </g>
            );
          })}
        </svg>

        {/* Agent Node Buttons */}
        {nodes.map((node) => {
          const isSelected = selectedNode.id === node.id;
          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <button
                type="button"
                onClick={() => setSelectedNode(node)}
                className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#181828] border-[#6D5EF5] shadow-[0_0_20px_rgba(109,94,245,0.4)] scale-105'
                    : 'bg-[#10101A] border-[#222338] hover:border-[#424466] hover:bg-[#141424]'
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: node.activeColor,
                    boxShadow: `0 0 8px ${node.activeColor}`,
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono font-bold text-white tracking-tight leading-tight">
                    {node.name}
                  </span>
                  <span className="text-[9px] text-[#A0A3B1] tracking-tight leading-none">
                    {node.role}
                  </span>
                </div>
              </button>
            </div>
          );
        })}

        {/* Canvas Bottom Legend */}
        <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#A0A3B1] flex items-center gap-3 bg-[#0D0D15]/80 px-2.5 py-1 rounded border border-[#222338]/60 backdrop-blur-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D5EF5]" /> Core
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Commerce
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" /> MCP / Ops
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" /> Safety Gate
          </span>
        </div>
      </div>

      {/* Detail Inspector & Live Terminal Log Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
        {/* Selected Node Spec Card */}
        <div className="md:col-span-5 bg-[#12121D] border border-[#222338] rounded-xl p-3.5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A3B1]">Inspecting Node</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              STATUS: READY
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selectedNode.activeColor }}
            />
            <h3 className="font-display font-semibold text-sm text-white">{selectedNode.name}</h3>
            <span className="text-xs text-[#6D5EF5] font-mono">({selectedNode.role})</span>
          </div>
          <p className="text-xs text-[#A0A3B1] mt-1.5 leading-relaxed">{selectedNode.shortDesc}</p>
          <div className="mt-2.5 pt-2 border-t border-[#222338] flex items-center justify-between text-[11px] font-mono text-[#A0A3B1]">
            <span>Spec Protocol: MCP / JSON-RPC</span>
            <span className="text-white">Deterministic: 100%</span>
          </div>
        </div>

        {/* Live Packet Log Terminal */}
        <div className="md:col-span-7 bg-[#09090F] border border-[#1E1F2E] rounded-xl p-3 font-mono text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E1F2E] text-[10px] text-[#A0A3B1]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#6D5EF5]" />
              <span>DETERMINISTIC EVENT LOG</span>
            </span>
            <span>SPEC: github/spec-kit</span>
          </div>
          <div className="space-y-1.5 my-1.5 max-h-24 overflow-y-auto pr-1">
            {logs.slice(0, 3).map((log) => (
              <div key={log.id} className="flex items-start gap-2 text-[11px] leading-tight">
                <span className="text-[#A0A3B1] shrink-0 text-[10px]">{log.timestamp}</span>
                <span className="text-[#8B7EFF] shrink-0 font-semibold">[{log.action}]</span>
                <span className="text-white truncate">{log.payload}</span>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-[#A0A3B1] pt-1 border-t border-[#1E1F2E] flex items-center justify-between">
            <span>Routing latency: ~18ms</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Zero unhandled exceptions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
