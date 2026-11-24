import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  BookMarked,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { AI_KNOWLEDGE_TOPICS } from '../data/portfolioData';

const DOMAIN_CATEGORIES = [
  'All',
  'Classical ML',
  'Deep Learning',
  'NLP & Transformers',
  'Generative AI',
  'Vector & Retrieval',
  'Production & Engineering'
];

export default function Knowledge() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredTopics = AI_KNOWLEDGE_TOPICS.filter((topic) => {
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    const matchesSearch = topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.detail.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="knowledge" className="py-24 relative bg-[#090909] overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF3030]/05 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0A0A] border border-[#FF3030]/30 text-[#FF4545] text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE INDEX & FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            AI/ML Technologies <br />
            <span className="bg-gradient-to-r from-white via-[#FF4545] to-[#FF3030] bg-clip-text text-transparent">
              I Work With & Study
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA]">
            Structured breakdown of 26 core AI/ML domains, clearly delineating between practical project engineering and theoretical academic study.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Domain Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#141414] border border-[#292929] w-full md:w-auto">
            {DOMAIN_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FF3030] text-white shadow-[0_0_12px_rgba(255,48,48,0.4)]'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-[#1C1C1C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 26 AI concepts..."
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-[#141414] border border-[#292929] rounded-xl text-white placeholder-[#71717A] focus:outline-none focus:border-[#FF3030] transition-all"
            />
          </div>

        </div>

        {/* 26 Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTopics.map((topic, idx) => {
            const isExpanded = expandedIndex === idx;
            const isPractical = topic.status === 'Hands-on Project Work';

            return (
              <div
                key={topic.name}
                className="p-5 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#FF3030]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Status & Category Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#A1A1AA] border border-[#2A2A2A]">
                      {topic.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                        isPractical
                          ? 'bg-[#1C0808] text-[#FF4545] border border-[#FF3030]/30 font-medium'
                          : 'bg-[#161616] text-[#A1A1AA] border border-[#2A2A2A]'
                      }`}
                    >
                      {isPractical ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-[#FF4545]" />
                          <span>Hands-on Project</span>
                        </>
                      ) : (
                        <>
                          <BookMarked className="w-3 h-3 text-[#A1A1AA]" />
                          <span>Academic Study</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Concept Name */}
                  <h3 className="text-base font-bold font-display text-white mb-2">
                    {topic.name}
                  </h3>

                  {/* High-level summary */}
                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-3">
                    {topic.summary}
                  </p>

                  {/* Expanded Project / Study Context */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-[#1F1F1F] text-xs text-[#D4D4D8] leading-relaxed bg-[#0A0A0A] p-3 rounded-xl border border-[#262626] animate-fadeIn">
                      <span className="text-[10px] font-mono text-[#FF3030] font-semibold block mb-1 uppercase">
                        Application in Zohaib's Work:
                      </span>
                      {topic.detail}
                    </div>
                  )}
                </div>

                {/* Expand Toggle Button */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="mt-4 pt-3 border-t border-[#1A1A1A] text-xs font-mono text-[#FF4545] hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>{isExpanded ? 'Collapse Overview' : 'View Application Notes'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>

              </div>
            );
          })}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12 text-[#71717A] font-mono text-sm">
            No matching concepts found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
