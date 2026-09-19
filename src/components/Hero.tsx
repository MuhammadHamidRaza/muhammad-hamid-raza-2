import { ArrowRight, Terminal, Github, Mail, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import AgentOrchestratorVisualizer from './AgentOrchestratorVisualizer';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hamid Raza Portfolio Hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#6D5EF5]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#8B7EFF]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151523] border border-[#222338] text-xs font-mono text-[#A0A3B1]">
              <span className="w-2 h-2 rounded-full bg-[#6D5EF5] animate-pulse" />
              <span className="text-white font-medium">Agentic AI Developer & Full-Stack Systems Engineer</span>
            </div>

            {/* Main H1 Title - Keyword optimized */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
              I design and ship{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D0CCFF] to-[#8B7EFF]">
                multi-agent AI systems
              </span>{' '}
              that run in production.
            </h1>

            {/* One-Line Pitch & Description */}
            <p className="text-base sm:text-lg text-[#A0A3B1] leading-relaxed max-w-xl">
              From orchestration logic to production full-stack platforms — built with{' '}
              <span className="text-white font-medium">spec-driven development, not guesswork</span>.
              Specializing in <span className="text-white font-medium">Model Context Protocol (MCP)</span>,
              OpenAI Agents SDK, and production-tested MERN architectures.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-[#A0A3B1]">
              <span className="px-2.5 py-1 rounded-md bg-[#12121D] border border-[#222338] text-[#D0CCFF]">
                ✓ OpenAI Agents SDK
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#12121D] border border-[#222338] text-[#D0CCFF]">
                ✓ Model Context Protocol (MCP)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#12121D] border border-[#222338] text-[#D0CCFF]">
                ✓ Spec-Kit Architect
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#12121D] border border-[#222338] text-[#D0CCFF]">
                ✓ Full-Stack MERN + FastAPI
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#6D5EF5] hover:bg-[#5B4BE3] transition-all duration-200 shadow-[0_0_24px_rgba(109,94,245,0.4)] hover:shadow-[0_0_36px_rgba(109,94,245,0.6)] active:scale-[0.98]"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Agentic%20AI%20Architecture`}
                id="hero-cta-email"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-white bg-[#151522] border border-[#222338] hover:border-[#6D5EF5] hover:bg-[#1A1A2B] transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#8B7EFF]" />
                <span>Let's Build Something</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-cta-github"
                aria-label="Hamid Raza GitHub Profile"
                className="p-3.5 rounded-xl bg-[#151522] border border-[#222338] text-[#A0A3B1] hover:text-white hover:border-[#6D5EF5] transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Verification Proof Statement */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#A0A3B1] font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Merged in openai/openai-agents-python</span>
              </span>
              <span className="text-[#323348]">•</span>
              <span>5.0 ★ Client Rated</span>
            </div>
          </div>

          {/* Right Column: Signature Interactive Agent Orchestrator Visualizer */}
          <div className="lg:col-span-6">
            <AgentOrchestratorVisualizer />
          </div>
        </div>

        {/* High-Impact Stat Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#12121C] border border-[#222338]">
          <div className="p-3 border-r border-[#222338]/80 last:border-none">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">15+</div>
            <div className="text-xs text-[#A0A3B1] font-mono mt-1">Specialized Agent E-Commerce System in Prod</div>
          </div>
          <div className="p-3 border-r border-[#222338]/80 last:border-none">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">17+</div>
            <div className="text-xs text-[#A0A3B1] font-mono mt-1">Shipped Full-Stack Client & Enterprise Apps</div>
          </div>
          <div className="p-3 border-r border-[#222338]/80 last:border-none">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Hours</div>
            <div className="text-xs text-[#A0A3B1] font-mono mt-1">Accepted PR to Official OpenAI Agents SDK</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#8B7EFF] tracking-tight">100%</div>
            <div className="text-xs text-[#A0A3B1] font-mono mt-1">Spec-First, Deterministic Execution Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
