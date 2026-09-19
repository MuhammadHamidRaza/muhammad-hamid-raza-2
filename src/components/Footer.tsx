import { ArrowUp, Terminal, ShieldCheck, Github, Linkedin, Youtube } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      className="bg-[#07070B] border-t border-[#1E1F30] py-14 text-xs font-mono text-[#A0A3B1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Tier: Brand, Technical Specs & Jump to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1E1F30]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-display font-bold text-base">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-[#6D5EF5] font-mono text-xs font-normal">// ARCHITECT</span>
            </div>
            <p className="text-[#A0A3B1] max-w-md text-xs font-sans">
              Agentic AI Developer & Full-Stack Systems Engineer based in Karachi. Multi-agent orchestration, MCP standard toolkits, and production MERN architectures.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#12121E] border border-[#222338] hover:text-white hover:border-[#6D5EF5] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#12121E] border border-[#222338] hover:text-white hover:border-[#6D5EF5] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube Channel"
              className="p-2 rounded-lg bg-[#12121E] border border-[#222338] hover:text-white hover:border-[#6D5EF5] transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#151522] border border-[#222338] hover:text-white hover:border-[#6D5EF5] transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Technical SEO & Google Search Console Verification Notice */}
        <div className="p-4 rounded-xl bg-[#0E0E17] border border-[#222338] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px]">
          <div className="flex items-center gap-2 text-[#D0CCFF]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Deployment Status: Vercel Ready • Google Search Console sitemap indexed at{' '}
              <a href="/sitemap.xml" target="_blank" className="text-[#8B7EFF] underline underline-offset-2">
                /sitemap.xml
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#A0A3B1]">
            <a href="/robots.txt" target="_blank" className="hover:text-white">
              robots.txt
            </a>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" className="hover:text-white">
              sitemap.xml
            </a>
            <span>•</span>
            <span>Schema.org JSON-LD (Person & SoftwareApp)</span>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Engineering Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#A0A3B1] text-[11px]">
          <div>
            © {new Date().getFullYear()} Hamid Raza. Spec-driven engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            <span>Core Web Vitals Target: 98-100 • Zero Fluff</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
