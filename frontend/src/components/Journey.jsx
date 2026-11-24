import React from 'react';
import { Milestone, Calendar, GraduationCap, CheckCircle2, ChevronRight } from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-[#090909] overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#FF3030]/05 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0A0A] border border-[#FF3030]/30 text-[#FF4545] text-xs font-mono mb-4">
            <Milestone className="w-3.5 h-3.5" />
            <span>PROGRESSION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Engineering & Academic <br />
            <span className="bg-gradient-to-r from-white via-[#FF4545] to-[#FF3030] bg-clip-text text-transparent">
              Growth Journey
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA]">
            Chronological milestones tracing computer science fundamentals, deep learning exploration, and production AI system implementations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#222222] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {LEARNING_JOURNEY.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#141414] border-2 border-[#FF3030] group-hover:bg-[#FF3030] group-hover:shadow-[0_0_12px_#FF3030] transition-all duration-300" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-[#121212] border border-[#222222] group-hover:border-[#FF3030]/40 group-hover:shadow-[0_0_25px_rgba(255,48,48,0.15)] transition-all duration-300">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF4545] font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
                    <GraduationCap className="w-3.5 h-3.5 text-[#FF3030]" />
                    <span>{item.institution}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-white transition-colors">
                  {item.phase}
                </h3>

                <p className="text-sm text-[#A1A1AA] mb-4 leading-relaxed">
                  {item.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-3 border-t border-[#1C1C1C]">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF3030] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
