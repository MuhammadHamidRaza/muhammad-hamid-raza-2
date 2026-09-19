import { ACHIEVEMENTS } from '../data/portfolioData';
import {
  GitPullRequest,
  Package,
  BookOpen,
  Star,
  Youtube,
  Users,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

export default function AchievementsSection() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'open-source':
        return GitPullRequest;
      case 'published-packages':
        return Package;
      case 'books':
        return BookOpen;
      case 'client-review':
        return Star;
      case 'media':
        return Youtube;
      case 'community':
        return Users;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section
      id="achievements"
      aria-label="Achievements and Credibility"
      className="py-20 sm:py-28 relative bg-[#09090F] border-t border-[#222338]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151522] border border-[#222338] text-xs font-mono text-[#8B7EFF]">
            <span>CREDIBILITY & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Verified proof of engineering excellence.
          </h2>
          <p className="text-base text-[#A0A3B1]">
            Upstream contributions merged by OpenAI maintainers, published developer packages, authored technical books, and community impact.
          </p>
        </div>

        {/* Full-Bleed Dark Engineered Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => {
            const Icon = getIcon(item.category);

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-[#11111C] border border-[#222338] hover:border-[#6D5EF5] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#6D5EF5]/10"
              >
                <div className="space-y-4">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#181829] border border-[#2B2C44] flex items-center justify-center text-[#8B7EFF] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#1A1A2B] text-[#D0CCFF] border border-[#2C2D46]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <div>
                    <span className="text-xs font-mono text-[#6D5EF5] block mb-1">
                      {item.highlightText}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A0A3B1] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Link or Action if present */}
                {item.url && (
                  <div className="pt-5 mt-4 border-t border-[#1F2032]">
                    <a
                      href={item.url}
                      target={item.url.startsWith('http') ? '_blank' : '_self'}
                      rel={item.url.startsWith('http') ? 'noreferrer' : ''}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#8B7EFF] group-hover:text-white transition-colors"
                    >
                      <span>{item.urlLabel || 'Learn More'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Featured YouTube & Community Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#141424] via-[#10101C] to-[#141424] border border-[#2B2C44] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#CC0000]/15 border border-[#CC0000]/30 flex items-center justify-center text-[#FF4E4E] shrink-0">
              <Youtube className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                "Build With AI – Hamid" Creator Footprint
              </h4>
              <p className="text-xs text-[#A0A3B1] mt-0.5">
                Weekly deep-dives on multi-agent systems, Model Context Protocol (MCP), and spec-driven engineering.
              </p>
            </div>
          </div>

          <a
            href="https://youtube.com/@buildwithaihamid"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#CC0000] hover:bg-[#B30000] text-white text-xs font-mono font-medium tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(204,0,0,0.3)] shrink-0 flex items-center gap-2"
          >
            <span>Subscribe @buildwithaihamid</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
