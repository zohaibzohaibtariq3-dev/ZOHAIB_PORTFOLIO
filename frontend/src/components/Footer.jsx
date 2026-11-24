import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#050505] border-t border-[#1A1A1A] text-xs font-mono text-[#71717A] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#141414]">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#140505] border border-[#FF3030]/40 flex items-center justify-center text-white font-display font-bold">
              ZT
            </div>
            <div>
              <span className="text-white font-semibold block text-sm">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-[#A1A1AA]">
                AI/ML Engineer • Iqra University, Islamabad
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={`mailto:${PERSONAL_INFO.social.email}`}
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 rounded-lg bg-[#111111] border border-[#242424] text-[#A1A1AA] hover:text-white hover:border-[#FF3030]/40 transition-all"
            title="Return to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF4545]" />
          </button>
        </div>

        {/* Bottom Credits & Integrity Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-[#52525B]">
            © {new Date().getFullYear()} Zohaib Tariq. Built with React, Tailwind CSS, Framer Motion & FastAPI.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-[#52525B]">
            <Sparkles className="w-3 h-3 text-[#FF3030]" />
            <span>Honest, production-quality AI engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
