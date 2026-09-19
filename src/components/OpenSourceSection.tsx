import { useState } from 'react';
import { OPEN_SOURCE_TOOLS } from '../data/portfolioData';
import { Terminal, Copy, Check, ExternalLink, Github, Package, Code } from 'lucide-react';

export default function OpenSourceSection() {
  const [copiedCmd, setCopiedCmd] = useState<string>('');

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(''), 2500);
  };

  return (
    <section
      id="opensource"
      aria-label="Open Source Contributions and Packages"
      className="py-20 sm:py-28 relative bg-[#0C0C14] border-t border-[#222338]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151522] border border-[#222338] text-xs font-mono text-[#8B7EFF]">
            <span>OPEN SOURCE & DEVELOPER TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Building in public for the AI developer ecosystem.
          </h2>
          <p className="text-base text-[#A0A3B1]">
            Published Python and Node.js specification tools, Claude Code skills, and open-source agent runtimes.
          </p>
        </div>

        {/* Developer Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OPEN_SOURCE_TOOLS.map((tool, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#11111D] border border-[#222338] hover:border-[#6D5EF5]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Header with Ecosystem Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#181828] text-[#8B7EFF] border border-[#2C2D44]">
                    {tool.ecosystem}
                  </span>
                  <a
                    href={tool.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#A0A3B1] hover:text-white transition-colors"
                    aria-label={`GitHub repo for ${tool.name}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white">{tool.name}</h3>
                  <p className="text-xs font-mono text-[#A0A3B1] mt-0.5">{tool.tagline}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  {tool.description}
                </p>

                {/* Included Specs Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tool.specsIncluded.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#0A0A10] border border-[#1E1F30] text-[10px] font-mono text-[#A0A3B1]"
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Install Command Terminal Bar */}
              {tool.installCommand && (
                <div className="mt-6 pt-5 border-t border-[#1E1F30]">
                  <div className="flex items-center justify-between bg-[#08080E] border border-[#222338] rounded-xl px-4 py-2.5 font-mono text-xs text-white">
                    <div className="flex items-center gap-2 overflow-x-auto">
                      <Terminal className="w-3.5 h-3.5 text-[#6D5EF5] shrink-0" />
                      <span className="text-[#E0E2EC] select-all">{tool.installCommand}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(tool.installCommand!)}
                      className="ml-3 p-1.5 rounded-lg bg-[#161626] hover:bg-[#202036] text-[#A0A3B1] hover:text-white transition-colors shrink-0"
                      title="Copy install command"
                    >
                      {copiedCmd === tool.installCommand ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
