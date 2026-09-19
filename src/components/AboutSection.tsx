import { MapPin, Briefcase, Award, Code2, Terminal, Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Hamid Raza - Agentic AI Developer"
      className="py-20 sm:py-28 relative bg-[#0A0A0F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151522] border border-[#222338] text-xs font-mono text-[#8B7EFF]">
            <span>SYSTEMS ARCHITECT IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Engineering multi-agent intelligence into commercial software.
          </h2>
          <p className="text-base text-[#A0A3B1]">
            A practitioner's look into how I bridge research-grade AI orchestration with production-grade full-stack architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Profile Card, Avatar & Quick Metrics */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-[#12121D] border border-[#222338] p-6 shadow-xl relative overflow-hidden">
              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6D5EF5] to-transparent" />

              {/* Avatar with descriptive keyword-rich alt text */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-[#2E2F48] shadow-2xl group">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Hamid Raza - Agentic AI Developer and Full-Stack Engineer specializing in multi-agent systems and MCP"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent" />
              </div>

              {/* Identity Details */}
              <div className="text-center space-y-1">
                <h3 className="text-xl font-display font-bold text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-mono text-[#8B7EFF]">{PERSONAL_INFO.title}</p>
                <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#A0A3B1]">
                  <MapPin className="w-3.5 h-3.5 text-[#6D5EF5]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Structured Metadata List */}
              <div className="mt-6 pt-5 border-t border-[#222338] space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#A0A3B1]">Primary Role:</span>
                  <span className="text-white font-medium text-right text-[11px]">Full-Stack & AI Integration</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#A0A3B1]">Company:</span>
                  <span className="text-white font-medium">SidTechno (Full-time)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#A0A3B1]">Experience:</span>
                  <span className="text-white font-medium">{PERSONAL_INFO.experienceYears} Commercial</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#A0A3B1]">Focus:</span>
                  <span className="text-[#8B7EFF] font-mono">Multi-Agent & MCP</span>
                </div>
              </div>

              {/* Open Source Contribution Badges */}
              <div className="mt-6 pt-4 border-t border-[#222338]">
                <span className="text-[11px] font-mono text-[#A0A3B1] uppercase tracking-wider block mb-2">
                  Verified Upstream Merges:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded bg-[#1A1A2A] border border-[#2B2C44] text-[10px] font-mono text-white">
                    openai/openai-agents-python
                  </span>
                  <span className="px-2 py-1 rounded bg-[#1A1A2A] border border-[#2B2C44] text-[10px] font-mono text-white">
                    openai/openai-agents-js
                  </span>
                  <span className="px-2 py-1 rounded bg-[#1A1A2A] border border-[#2B2C44] text-[10px] font-mono text-white">
                    n8n-io/n8n
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Dual Tech Stack & Architectural Approach */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-2xl bg-[#12121D] border border-[#222338] p-6 sm:p-8 space-y-6">
              <div className="space-y-4 text-[#A0A3B1] leading-relaxed text-sm sm:text-base">
                <p>
                  Based in <strong className="text-white">Karachi, Pakistan</strong>, I am an{' '}
                  <strong className="text-white">Agentic AI Developer & Full-Stack Engineer</strong> with 2+ years of hands-on experience architecting autonomous AI agent swarms, deterministic orchestration pipelines, and full-scale MERN applications.
                </p>
                <p>
                  I currently work full-time at <strong className="text-white">SidTechno</strong> as a{' '}
                  <strong className="text-white">Full-Stack Developer & AI Integration Engineer</strong>, alongside high-stakes freelance consulting engagements for commercial clients worldwide. Over this tenure, I have shipped <strong className="text-white">17+ enterprise and consumer platforms</strong> ranging from multi-sided marketplaces to compliance CRMs.
                </p>
                <p>
                  My dual-engine approach relies on <strong className="text-white">Node.js/Express and TypeScript</strong> for high-concurrency web platforms, paired with <strong className="text-white">Python and FastAPI</strong> for agent-heavy asynchronous runtime backends.
                </p>
              </div>

              {/* Technical Dual-Engine Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#0B0B12] border border-[#1E1F30]">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-[#6D5EF5]" />
                    <h4 className="text-sm font-display font-semibold text-white">Full-Stack Platforms</h4>
                  </div>
                  <p className="text-xs text-[#A0A3B1] mb-3 leading-relaxed">
                    Production MERN (React, Next.js, Node.js, Express, MongoDB/MySQL) for real-time dashboards, client portals, and secure RBAC data layers.
                  </p>
                  <div className="text-[11px] font-mono text-[#D0CCFF]">
                    Stack: TypeScript • React • Node • MongoDB • Tailwind
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0B12] border border-[#1E1F30]">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-[#8B7EFF]" />
                    <h4 className="text-sm font-display font-semibold text-white">Agentic & MCP Runtimes</h4>
                  </div>
                  <p className="text-xs text-[#A0A3B1] mb-3 leading-relaxed">
                    Python & FastAPI microservices implementing OpenAI Agents SDK, Model Context Protocol (MCP), and spec-driven tool registration.
                  </p>
                  <div className="text-[11px] font-mono text-[#D0CCFF]">
                    Stack: Python 3.12+ • FastAPI • MCP • spec-kit • AsyncIO
                  </div>
                </div>
              </div>

              {/* Long Term Direction Callout */}
              <div className="pt-4 border-t border-[#222338] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A0A3B1]">Current Mission & Direction</span>
                  <p className="text-sm font-medium text-white">
                    Transitioning into high-level AI Agent Architect roles and engineering international SaaS products.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#8B7EFF] hover:text-white transition-colors"
                >
                  <span>Connect with Hamid</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
