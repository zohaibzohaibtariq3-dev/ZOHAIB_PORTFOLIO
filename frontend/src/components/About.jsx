import React from 'react';
import { 
  BrainCircuit, 
  Code2, 
  Terminal, 
  Sparkles, 
  GraduationCap, 
  Cpu, 
  Database, 
  Workflow, 
  Compass, 
  CheckCircle2,
  FileCode
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CORE_PILLARS = [
  {
    icon: BrainCircuit,
    title: "Applied Machine Learning",
    description: "Formulating predictive algorithms, regression systems, and feature pipelines that extract tangible value from structured data."
  },
  {
    icon: Sparkles,
    title: "Generative AI & LLMs",
    description: "Engineering prompt chains, grounding mechanisms, and conversational architectures with state-of-the-art foundation models."
  },
  {
    icon: Database,
    title: "Retrieval-Augmented Generation",
    description: "Designing semantic retrieval systems with FAISS, Pinecone, and vector embeddings to eliminate hallucinations in document Q&A."
  },
  {
    icon: Workflow,
    title: "Production Backend Systems",
    description: "Packaging machine learning inference into high-throughput asynchronous microservices with FastAPI and RESTful endpoints."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#080808] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#FF3030]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#8B0000]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0A0A] border border-[#FF3030]/30 text-[#FF4545] text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING MINDSET & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Bridging Theoretical AI with <br />
            <span className="bg-gradient-to-r from-white via-[#FF4545] to-[#FF3030] bg-clip-text text-transparent">
              Real-World Production Systems
            </span>
          </h2>
        </div>

        {/* Two-Column Grid: Developer Profile Card & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Developer Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-[#292929] hover:border-[#FF3030]/40 transition-all duration-300 shadow-2xl relative group">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3030]/10 rounded-full blur-2xl group-hover:bg-[#FF3030]/20 transition-all pointer-events-none" />

            <div>
              {/* Profile Card Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#222222]">
                <div className="relative w-16 h-16 rounded-2xl bg-[#1A0A0A] border-2 border-[#FF3030]/50 flex items-center justify-center shadow-[0_0_20px_rgba(255,48,48,0.3)]">
                  <span className="font-display font-extrabold text-2xl text-white">
                    ZT
                  </span>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#FF3030] border-2 border-[#080808] rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white">
                    Zohaib Tariq
                  </h3>
                  <p className="text-xs font-mono text-[#FF4545] font-semibold">
                    AI/ML Engineer
                  </p>
                  <p className="text-[11px] text-[#A1A1AA] flex items-center gap-1 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#FF3030]" />
                    Iqra University, Islamabad (6th Sem)
                  </p>
                </div>
              </div>

              {/* Verified Technical Indicators */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222]">
                  <span className="text-[#A1A1AA]">Current Degree</span>
                  <span className="font-mono text-white font-medium">BS Computer Science</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222]">
                  <span className="text-[#A1A1AA]">Current Standing</span>
                  <span className="font-mono text-[#FF4545] font-medium">6th Semester</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222]">
                  <span className="text-[#A1A1AA]">Primary Programming</span>
                  <span className="font-mono text-white font-medium">Python, C++, SQL</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#0A0A0A] border border-[#222222]">
                  <span className="text-[#A1A1AA]">Core AI Frameworks</span>
                  <span className="font-mono text-white font-medium">FastAPI, FAISS, Groq, Whisper</span>
                </div>
              </div>
            </div>

            {/* Verification Tag */}
            <div className="p-3.5 rounded-xl bg-[#1A0A0A] border border-[#FF3030]/30 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF4545] flex-shrink-0" />
              <p className="text-[11px] text-[#D4D4D8] leading-tight">
                Verified portfolio based on hands-on project architectures and formal CS coursework.
              </p>
            </div>

          </div>

          {/* Right Column: Narrative & 4 Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
              <p>
                My passion lies in <strong className="text-white">Artificial Intelligence and Machine Learning</strong> — not just as mathematical abstractions, but as powerful tools for engineering reliable, practical software. As a 6th-semester Computer Science undergraduate at <strong className="text-white">Iqra University, Islamabad</strong>, I have dedicated myself to mastering the complete lifecycle of intelligent applications.
              </p>
              <p>
                From foundational algorithms and Object-Oriented Programming in Python and C++ to modern <strong className="text-white">Generative AI, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG)</strong>, I focus on building systems that solve tangible problems.
              </p>
              <p>
                Whether it is reducing recruitment latency with an <strong className="text-white">AI Resume Screener</strong>, creating sub-second conversational speech interfaces with <strong className="text-white">Faster-Whisper and Groq API</strong>, or architecting context-grounded document search with <strong className="text-white">FAISS and Pinecone</strong>, I prioritize clean architecture, asynchronous backend integration, and honest engineering.
              </p>
            </div>

            {/* 4 Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#FF3030]/40 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1C0808] border border-[#FF3030]/30 flex items-center justify-center text-[#FF4545] mb-3 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold font-display text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#8E8E93] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
