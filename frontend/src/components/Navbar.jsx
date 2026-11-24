import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI/ML Knowledge', href: '#knowledge' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/85 backdrop-blur-md border-b border-[#292929] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 text-white transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C0505] to-[#121212] border border-[#FF3030]/40 flex items-center justify-center group-hover:border-[#FF3030] group-hover:shadow-[0_0_15px_rgba(255,48,48,0.5)] transition-all duration-300">
            <span className="font-display font-bold text-lg text-white group-hover:text-[#FF4545] transition-colors">
              ZT
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-sm text-white group-hover:text-white transition-colors flex items-center gap-1.5">
              Zohaib Tariq
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF3030] animate-pulse" />
            </span>
            <span className="text-[11px] font-mono text-[#A1A1AA] tracking-wider uppercase">
              AI/ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111111]/70 border border-[#292929] rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[#FF3030]/15 border border-[#FF3030]/40 -z-10 shadow-[0_0_10px_rgba(255,48,48,0.25)]" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white rounded-lg bg-gradient-to-r from-[#FF3030] to-[#E02424] hover:from-[#FF4545] hover:to-[#FF3030] transition-all duration-200 shadow-[0_0_15px_rgba(255,48,48,0.3)] hover:shadow-[0_0_25px_rgba(255,48,48,0.5)] active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#141414] border border-[#292929] text-[#A1A1AA] hover:text-white hover:border-[#FF3030]/50 transition-all"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF4545]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#292929] px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#FF3030]/15 text-white border border-[#FF3030]/40'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-[#141414]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-[#222222]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#FF3030] to-[#E02424] shadow-[0_0_20px_rgba(255,48,48,0.4)]"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
