import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, Youtube, Copy, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Hamid Raza"
      className="py-24 sm:py-32 relative bg-[#09090F] overflow-hidden"
    >
      {/* Background ambient electric glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#6D5EF5]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The Big Closing Banner Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#151524] to-[#0D0D16] border border-[#2F3048] p-8 sm:p-14 lg:p-16 text-center shadow-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6D5EF5]/15 border border-[#6D5EF5]/30 text-xs font-mono text-[#8B7EFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPEN TO HIGH-IMPACT ARCHITECTURE ROLES & CONSULTING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to ship real multi-agent intelligence?
          </h2>

          <p className="text-base sm:text-lg text-[#A0A3B1] max-w-2xl mx-auto leading-relaxed">
            Whether you need a production multi-agent orchestration mesh, standardized MCP tool connectivity, or a resilient full-stack MERN platform — let's build it with specs, not guesswork.
          </p>

          {/* Primary Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Let's%20Build%20Something%20-%20Agentic%20AI%20Project`}
              id="contact-cta-primary"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold tracking-wide text-white bg-[#6D5EF5] hover:bg-[#5B4BE3] transition-all duration-300 shadow-[0_0_30px_rgba(109,94,245,0.4)] hover:shadow-[0_0_45px_rgba(109,94,245,0.7)] active:scale-95"
            >
              <span>Let's Build Something</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-mono text-white bg-[#161626] border border-[#2B2C44] hover:border-[#6D5EF5] transition-all active:scale-95"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8B7EFF]" />
                  <span>Copy: {PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Channels Grid */}
          <div className="mt-12 pt-10 border-t border-[#222338] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-[#0D0D16] border border-[#1E1F30] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#A0A3B1] uppercase tracking-wider">Direct Email</span>
                <div className="text-xs font-mono font-medium text-white truncate mt-1">
                  {PERSONAL_INFO.email}
                </div>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs font-mono text-[#8B7EFF] hover:text-white mt-3 flex items-center gap-1"
              >
                <span>Compose Message</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* WhatsApp / Phone Card */}
            <div className="p-4 rounded-xl bg-[#0D0D16] border border-[#1E1F30] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#A0A3B1] uppercase tracking-wider">WhatsApp / Direct</span>
                <div className="text-xs font-mono font-medium text-white mt-1">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
              <a
                href={`https://wa.me/923160010801`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-emerald-400 hover:text-white mt-3 flex items-center gap-1"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 rounded-xl bg-[#0D0D16] border border-[#1E1F30] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#A0A3B1] uppercase tracking-wider">Professional Profile</span>
                <div className="text-xs font-medium text-white mt-1">LinkedIn Network</div>
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#8B7EFF] hover:text-white mt-3 flex items-center gap-1"
              >
                <span>View LinkedIn</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* GitHub Profile Card */}
            <div className="p-4 rounded-xl bg-[#0D0D16] border border-[#1E1F30] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#A0A3B1] uppercase tracking-wider">Open Source Repos</span>
                <div className="text-xs font-medium text-white mt-1">MuhammadHamidRaza</div>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#8B7EFF] hover:text-white mt-3 flex items-center gap-1"
              >
                <span>Explore Repositories</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
