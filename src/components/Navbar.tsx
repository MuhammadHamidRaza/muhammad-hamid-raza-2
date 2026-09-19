import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="site-navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#222338] shadow-2xl shadow-black/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#"
          id="nav-brand"
          className="group flex items-center gap-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6D5EF5]/50 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-md bg-[#151521] border border-[#222338] group-hover:border-[#6D5EF5] flex items-center justify-center transition-colors">
            <Cpu className="w-5 h-5 text-[#6D5EF5] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              Hamid Raza
              <span className="text-[#6D5EF5] text-xs font-mono font-normal tracking-widest">// ARCHITECT</span>
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-[#A0A3B1]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <span>Available for high-impact AI roles</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#12121A]/80 border border-[#222338] rounded-full px-4 py-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-[#A0A3B1] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-[#6D5EF5] shadow-[0_0_8px_#6D5EF5]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            id="nav-cta-contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium tracking-wide uppercase text-white bg-[#6D5EF5] hover:bg-[#5B4BE3] transition-all shadow-[0_0_20px_rgba(109,94,245,0.3)] hover:shadow-[0_0_28px_rgba(109,94,245,0.5)] active:scale-95"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 rounded-lg bg-[#151521] border border-[#222338] text-white hover:text-[#6D5EF5] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden mt-2 mx-4 p-5 bg-[#12121A] border border-[#222338] rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-[#A0A3B1] hover:text-white hover:bg-[#1C1C2B] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#222338] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-[#6D5EF5] text-white text-xs font-mono font-medium tracking-wide uppercase shadow-[0_0_16px_rgba(109,94,245,0.4)]"
              >
                Let's Build Something
              </a>
              <div className="text-center text-xs text-[#A0A3B1] font-mono py-1">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
