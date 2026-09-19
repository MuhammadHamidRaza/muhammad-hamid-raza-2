import { ShieldAlert, CheckCircle, ArrowRight, Layers, FileCheck, Server, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function PositioningStatement() {
  const pillars = [
    {
      title: "Spec-Driven vs. Guesswork",
      desc: "Every agent handoff and tool-call is constrained by formal machine-readable contracts (github/spec-kit & Zod schemas) rather than unpredictable natural-language prompts.",
      icon: FileCheck,
      color: "#6D5EF5",
    },
    {
      title: "Production Full-Stack Foundation",
      desc: "Agents are not toy scripts in Jupyter notebooks. They run inside hardened Express.js and FastAPI microservices with JWT-based RBAC and database transactions.",
      icon: Server,
      color: "#8B7EFF",
    },
    {
      title: "Model Context Protocol (MCP) Standard",
      desc: "Standardized client-server tool communication decouples LLM logic from proprietary schemas, enabling dynamic tool discovery and secure resource scoping.",
      icon: Layers,
      color: "#10B981",
    },
    {
      title: "Human-in-the-Loop Safeguards",
      desc: "Destructive database operations and high-value transactional flows pass through deterministic Slack or webhook approval gates before execution.",
      icon: Lock,
      color: "#EC4899",
    },
  ];

  return (
    <section
      id="positioning"
      aria-label="Engineering Philosophy and Positioning"
      className="py-16 sm:py-20 relative bg-[#0C0C14] border-y border-[#222338]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Callout Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#151524] to-[#0F0F1A] border border-[#2B2C44] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle glowing circuit background lines */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#6D5EF5]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D5EF5]/10 border border-[#6D5EF5]/30 text-xs font-mono text-[#8B7EFF]">
              <span>CORE ARCHITECTURAL POSITIONING</span>
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white leading-snug tracking-tight">
              &ldquo;{PERSONAL_INFO.positioningStatement}&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#A0A3B1] max-w-2xl mx-auto leading-relaxed">
              Moving beyond naive prompt engineering. Grounding intelligent agent swarms in rigorous software engineering specifications, deterministic execution guarantees, and resilient cloud infrastructure.
            </p>
          </div>

          {/* 4 Architectural Pillars Grid */}
          <div className="mt-12 pt-10 border-t border-[#222338] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#10101C] border border-[#1E1F30] hover:border-[#6D5EF5]/50 rounded-xl p-5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#181829] border border-[#2A2B42] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#8B7EFF]" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#A0A3B1] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
