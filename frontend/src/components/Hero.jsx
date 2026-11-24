import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Bot, 
  Database,
  ArrowDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import NeuralSphere from './NeuralSphere';
import { PERSONAL_INFO } from '../data/portfolioData';

const SPECIALTIES = [
  "Generative AI & LLMs",
  "Retrieval-Augmented Generation (RAG)",
  "Low-Latency AI Voice Systems",
  "Production Machine Learning",
  "FastAPI Intelligent Backends"
];

const MARQUEE_ITEMS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Large Language Models",
  "Intelligent Automation",
  "Neural Architectures",
  "Retrieval-Augmented Generation",
  "Vector Databases",
  "FastAPI Microservices",
  "Production AI Systems"
];

export default function Hero({ onOpenResume }) {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % SPECIALTIES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleExploreWork = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF3030', '#FF4545', '#FFFFFF', '#8B0000']
    });
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnect = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#080808]">
      {/* Cinematic Ambient Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#FF3030]/15 via-[#8B0000]/05 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[#FF3030]/08 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-[#8B0000]/10 blur-[150px] pointer-events-none -z-10" />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Cinematic Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#160606] border border-[#FF3030]/30 shadow-[0_0_15px_rgba(255,48,48,0.2)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4545] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3030]" />
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wider text-white uppercase">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Name Subheading */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-mono text-[#A1A1AA] tracking-widest uppercase">
                PORTFOLIO OF
              </span>
              <span className="h-[1px] w-8 bg-[#FF3030]" />
              <span className="text-sm font-mono font-bold tracking-widest text-white uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>

            {/* Main Cinematic Heading */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              ENGINEERING <br />
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FF5555] to-[#FF3030] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,48,48,0.4)]">
                INTELLIGENCE.
              </span> <br />
              BUILDING <span className="text-white">THE</span>{' '}
              <span className="bg-gradient-to-r from-[#FF4545] to-[#FF1E1E] bg-clip-text text-transparent underline decoration-[#FF3030]/40 underline-offset-8">
                FUTURE.
              </span>
            </h1>

            {/* Professional Identity & Rotating Specialty */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-mono mb-4 text-[#A1A1AA]">
              <span className="text-[#FF4545] font-semibold">AI/ML ENGINEER</span>
              <span>•</span>
              <span className="text-white">GENERATIVE AI</span>
              <span>•</span>
              <span className="text-white">LLMs</span>
            </div>

            {/* Rotating Specialty Bar */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#111111] border border-[#292929] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FF3030]" />
              <span className="text-xs font-mono text-[#A1A1AA]">Specializing in:</span>
              <span className="text-xs font-mono font-medium text-white transition-all duration-300">
                {SPECIALTIES[specialtyIndex]}
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed mb-8">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={handleExploreWork}
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-[#FF3030] to-[#D41C1C] hover:from-[#FF4545] hover:to-[#FF3030] shadow-[0_0_25px_rgba(255,48,48,0.4)] hover:shadow-[0_0_35px_rgba(255,48,48,0.6)] transition-all duration-300 active:scale-95"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleConnect}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white rounded-xl bg-[#121212] border border-[#292929] hover:border-[#FF3030]/60 hover:bg-[#1A1A1A] hover:shadow-[0_0_20px_rgba(255,48,48,0.2)] transition-all duration-300 active:scale-95"
              >
                <span>LET'S CONNECT</span>
                <Mail className="w-4 h-4 text-[#FF4545]" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#A1A1AA] hover:text-white rounded-xl bg-transparent border border-dashed border-[#333333] hover:border-[#FF3030]/50 hover:bg-[#111111] transition-all duration-300 active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#A1A1AA]" />
                <span>RESUME</span>
              </button>
            </div>

            {/* Social & Configurable Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#1C1C1C]">
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
                Direct Channels:
              </span>
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111111] border border-[#292929] text-[#A1A1AA] hover:text-white hover:border-[#FF3030]/50 hover:shadow-[0_0_15px_rgba(255,48,48,0.3)] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111111] border border-[#292929] text-[#A1A1AA] hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.social.email}`}
                className="p-2 rounded-lg bg-[#111111] border border-[#292929] text-[#A1A1AA] hover:text-[#FF4545] hover:border-[#FF3030]/50 hover:shadow-[0_0_15px_rgba(255,48,48,0.3)] transition-all"
                aria-label="Email Zohaib Tariq"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D AI Intelligence Sphere & Floating Elements (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glow backing */}
            <div className="absolute inset-0 bg-radial-red-center filter blur-3xl opacity-60 pointer-events-none" />

            {/* 3D Interactive Canvas Sphere */}
            <div className="relative w-full z-10">
              <NeuralSphere />

              {/* Floating Tech Badges */}
              <div className="absolute top-4 left-0 sm:left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F0F0F]/80 border border-[#292929] backdrop-blur-md shadow-lg animate-float-slow">
                <Terminal className="w-3.5 h-3.5 text-[#FF3030]" />
                <span className="text-xs font-mono text-white font-medium">Python 3.12</span>
              </div>

              <div 
                className="absolute top-16 right-0 sm:right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F0F0F]/80 border border-[#292929] backdrop-blur-md shadow-lg animate-float-slow" 
                style={{ animationDelay: '1.5s' }}
              >
                <Cpu className="w-3.5 h-3.5 text-[#FF4545]" />
                <span className="text-xs font-mono text-white font-medium">Groq LPU API</span>
              </div>

              <div 
                className="absolute bottom-16 left-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F0F0F]/80 border border-[#292929] backdrop-blur-md shadow-lg animate-float-slow"
                style={{ animationDelay: '2.5s' }}
              >
                <Database className="w-3.5 h-3.5 text-[#FF3030]" />
                <span className="text-xs font-mono text-white font-medium">RAG & FAISS</span>
              </div>

              <div 
                className="absolute bottom-4 right-2 sm:right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F0F0F]/80 border border-[#292929] backdrop-blur-md shadow-lg animate-float-slow"
                style={{ animationDelay: '3.5s' }}
              >
                <Bot className="w-3.5 h-3.5 text-[#FF4545]" />
                <span className="text-xs font-mono text-white font-medium">FastAPI Backend</span>
              </div>

              {/* Status Card Bottom Right */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#111111]/90 border border-[#292929] backdrop-blur-md flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF3030] animate-ping" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono font-medium text-white">
                      BS Computer Science (6th Sem)
                    </span>
                    <span className="text-[10px] text-[#A1A1AA]">
                      Iqra University, Islamabad
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1C0808] text-[#FF4545] border border-[#FF3030]/30 font-semibold">
                  ACTIVE
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Marquee Strip */}
      <div className="w-full mt-12 py-3 bg-[#0A0A0A] border-y border-[#1E1E1E] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3030]" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
