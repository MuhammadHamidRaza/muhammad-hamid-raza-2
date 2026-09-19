import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import {
  ChevronDown,
  ChevronUp,
  Bot,
  Star,
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  AlertCircle,
  Cpu,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string>('agetic');
  const [showAgeticAgentsModal, setShowAgeticAgentsModal] = useState<boolean>(false);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  const ageticProject = PROJECTS.find((p) => p.id === 'agetic')!;

  return (
    <section
      id="projects"
      aria-label="Work and Case Studies"
      className="py-20 sm:py-28 relative bg-[#0A0A0F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151522] border border-[#222338] text-xs font-mono text-[#8B7EFF]">
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Production systems, not theoretical prototypes.
          </h2>
          <p className="text-base text-[#A0A3B1]">
            Detailed breakdowns of multi-agent architectures, enterprise ERP layers, and cloud automation engines shipped for commercial clients.
          </p>
        </div>

        {/* Projects Case Studies List */}
        <div className="space-y-6">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                id={`case-study-${project.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#12121E] border-[#6D5EF5]/60 shadow-2xl shadow-[#6D5EF5]/5'
                    : 'bg-[#0E0E18] border-[#222338] hover:border-[#383955]'
                }`}
              >
                {/* Clickable Header Bar */}
                <header
                  onClick={() => toggleExpand(project.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#1C1C2C] text-[#8B7EFF] border border-[#2B2C44]">
                        Case 0{index + 1}
                      </span>
                      <span className="text-xs text-[#A0A3B1] font-mono">
                        Client: {project.client}
                      </span>
                      {project.agentsCount && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <Bot className="w-3 h-3" />
                          {project.agentsCount} Specialized Agents
                        </span>
                      )}
                      {project.review && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-300" />
                          5-Star Review + Bonus Tip
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#A0A3B1]">{project.subtitle}</p>
                  </div>

                  {/* Right Side Controls */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden sm:flex flex-col items-end text-xs font-mono text-[#A0A3B1]">
                      <span>{project.category}</span>
                      <span className="text-white text-[11px] font-medium">Click to inspect</span>
                    </div>

                    <button
                      type="button"
                      aria-label={isExpanded ? 'Collapse case study' : 'Expand case study'}
                      className="p-2.5 rounded-xl bg-[#181828] border border-[#2B2C44] text-white hover:text-[#8B7EFF] transition-colors"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </header>

                {/* Expandable Body: Problem -> Approach -> Result */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#222338]/80 space-y-8 animate-in fade-in duration-200">
                    {/* Metrics Strip */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#0A0A12] border border-[#1E1F30]">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="p-2">
                            <div className="text-xs text-[#A0A3B1] font-mono">{m.label}</div>
                            <div className="text-base sm:text-lg font-display font-bold text-white mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Problem -> Approach -> Result Triad */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Problem */}
                      <div className="p-5 rounded-xl bg-[#141422] border border-[#222338] space-y-2.5">
                        <div className="flex items-center gap-2 text-[#EF4444] text-xs font-mono uppercase tracking-wider">
                          <AlertCircle className="w-4 h-4" />
                          <span>The Problem</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Approach */}
                      <div className="p-5 rounded-xl bg-[#141422] border border-[#222338] space-y-2.5">
                        <div className="flex items-center gap-2 text-[#8B7EFF] text-xs font-mono uppercase tracking-wider">
                          <Cpu className="w-4 h-4" />
                          <span>The Approach</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                          {project.approach}
                        </p>
                        {project.id === 'agetic' && (
                          <button
                            type="button"
                            onClick={() => setShowAgeticAgentsModal(true)}
                            className="mt-2 text-xs font-mono text-[#8B7EFF] hover:text-white flex items-center gap-1 underline underline-offset-4"
                          >
                            <span>View 15+ Agent Directory</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Result */}
                      <div className="p-5 rounded-xl bg-[#141422] border border-[#222338] space-y-2.5">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>The Result</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>

                    {/* Client Review Callout for CAP Design Group */}
                    {project.review && (
                      <div className="p-5 rounded-xl bg-gradient-to-r from-[#181826] to-[#12121E] border border-amber-500/30 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex text-amber-300">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-300" />
                            ))}
                          </div>
                          <span className="text-xs font-mono text-amber-200">
                            Verified Fiverr 5-Star Client Review
                          </span>
                        </div>
                        <p className="text-sm text-white italic">
                          &ldquo;{project.review.quote}&rdquo;
                        </p>
                        <div className="flex items-center justify-between text-xs text-[#A0A3B1] pt-1">
                          <span>— {project.review.client}</span>
                          <span className="text-emerald-400 font-mono">
                            {project.review.tipNote}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Technology Stack Tags */}
                    <div className="pt-2">
                      <div className="text-xs font-mono text-[#A0A3B1] uppercase tracking-wider mb-2.5">
                        Production Architecture & Tech Stack:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-[#0A0A12] border border-[#222338] text-xs font-mono text-[#D0CCFF]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Agetic 15+ Agent Roster Modal */}
      {showAgeticAgentsModal && (
        <div
          id="agetic-agents-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#12121E] border border-[#2E2F48] rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#222338]">
              <div>
                <span className="text-xs font-mono text-[#8B7EFF]">
                  Agetic — Sangani Traders
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  15+ Specialized Agent System Architecture
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAgeticAgentsModal(false)}
                className="p-2 rounded-lg bg-[#181828] text-[#A0A3B1] hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#A0A3B1] leading-relaxed">
              In Agetic, every store operation is delegated to a bounded-context micro-agent. The Triage Coordinator classifies incoming conversational intent, and hands off the session state deterministically with full rollback guards:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {ageticProject.agentsList?.map((agentName, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#0B0B13] border border-[#1E1F30] flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-[#8B7EFF]">#{i + 1}</span>
                  <span className="text-xs font-medium text-white mt-1">{agentName}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#0E0E18] border border-[#1E1F30] text-xs text-[#A0A3B1] flex items-center justify-between font-mono">
              <span>Stack: React + Node + OpenAI Agents SDK + Gemini</span>
              <span className="text-emerald-400">Status: Shipped in Production</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
