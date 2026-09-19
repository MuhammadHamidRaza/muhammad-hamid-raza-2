import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Bot, Network, FileCode, Layout, Server, Database, Cog, Check, Code, ArrowRight } from 'lucide-react';

export default function SkillsSection() {
  const [selectedId, setSelectedId] = useState<string>('agentic-ai');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'agentic-ai':
        return Bot;
      case 'mcp':
        return Network;
      case 'prompt-spec':
        return FileCode;
      case 'frontend':
        return Layout;
      case 'backend':
        return Server;
      case 'database':
        return Database;
      case 'automation':
        return Cog;
      default:
        return Bot;
    }
  };

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === selectedId) || SKILL_CATEGORIES[0];

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Architectural Expertise"
      className="py-20 sm:py-28 relative bg-[#0C0C14] border-t border-[#222338]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151522] border border-[#222338] text-xs font-mono text-[#8B7EFF]">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Comprehensive skill matrix across the AI and full-stack spectrum.
          </h2>
          <p className="text-base text-[#A0A3B1]">
            From formal agent handoff specifications to low-latency backend execution and responsive user interfaces.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 pb-8">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#6D5EF5] text-white shadow-[0_0_18px_rgba(109,94,245,0.4)]'
                    : 'bg-[#141422] text-[#A0A3B1] border border-[#222338] hover:border-[#434568] hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="rounded-2xl bg-[#12121E] border border-[#2B2C44] p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Headline & Skill Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8B7EFF]">
                  {currentCategory.title}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  {currentCategory.headline}
                </h3>
              </div>

              {/* Skills Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#A0A3B1] tracking-wider">
                  Core Competencies & Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentCategory.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0E0E18] border border-[#1E1F30]"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#6D5EF5]/20 text-[#8B7EFF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs font-medium text-[#E5E7EB]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Tools Badges */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase text-[#A0A3B1] tracking-wider mb-2.5">
                  Toolchain & Libraries:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.frameworksOrTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#181828] border border-[#2B2C44] text-xs font-mono text-[#D0CCFF]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Code / Spec Snippet or Architectural Context */}
            <div className="lg:col-span-5">
              {currentCategory.specSample ? (
                <div className="rounded-xl bg-[#090910] border border-[#222338] overflow-hidden font-mono text-xs shadow-inner">
                  <div className="px-4 py-2.5 bg-[#12121E] border-b border-[#222338] flex items-center justify-between text-[11px] text-[#A0A3B1]">
                    <div className="flex items-center gap-2">
                      <Code className="w-3.5 h-3.5 text-[#6D5EF5]" />
                      <span>{currentCategory.specSample.filename}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#6D5EF5]/15 text-[#8B7EFF]">
                      SPEC-FIRST
                    </span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-[#E0E2EC] text-[11px] leading-relaxed">
                    <code>{currentCategory.specSample.code}</code>
                  </pre>
                  <div className="p-3 bg-[#0E0E18] border-t border-[#1E1F30] text-[11px] text-[#A0A3B1]">
                    Rigorous type-safety and contract guarantees validate all payload transfers before runtime execution.
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-[#0B0B13] border border-[#1E1F30] p-6 space-y-4">
                  <div className="text-xs font-mono text-[#8B7EFF] uppercase tracking-wider">
                    Architectural Standard
                  </div>
                  <h4 className="text-base font-display font-semibold text-white">
                    Production Rigor Over Quick Prototypes
                  </h4>
                  <p className="text-xs text-[#A0A3B1] leading-relaxed">
                    Every system deployed follows clean separation of concerns, defensive error boundaries, comprehensive rate-limiting, and auditable logging to guarantee enterprise stability.
                  </p>
                  <div className="pt-2 border-t border-[#1E1F30] flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Check className="w-4 h-4" />
                    <span>Lighthouse 95+ Performance Target</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* All 7 Categories Overview Matrix */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className="p-4 rounded-xl bg-[#10101C] border border-[#1E1F30] hover:border-[#6D5EF5]/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#181829] flex items-center justify-center text-[#8B7EFF] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#A0A3B1]">
                    {cat.skills.length} skills
                  </span>
                </div>
                <h4 className="text-sm font-display font-semibold text-white group-hover:text-[#D0CCFF] transition-colors">
                  {cat.title}
                </h4>
                <p className="text-[11px] text-[#A0A3B1] mt-1 line-clamp-2">
                  {cat.headline}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
