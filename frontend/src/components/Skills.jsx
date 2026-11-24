import React, { useState } from 'react';
import { 
  Code, 
  Cpu, 
  Library, 
  Layers, 
  Server, 
  Wrench, 
  Search, 
  CheckCircle,
  Sparkles,
  Terminal
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const TAB_ICONS = {
  ai_ml: Cpu,
  programming: Terminal,
  libraries: Library,
  ai_tools: Sparkles,
  backend_db: Server,
  frontend_devops: Wrench,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all skills for 'all' tab or search
  const allSkills = SKILL_CATEGORIES.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      categoryName: category.name,
      categoryId: category.id
    }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesTab = activeTab === 'all' || skill.categoryId === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#0B0B0B] overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF3030]/06 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0A0A] border border-[#FF3030]/30 text-[#FF4545] text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Specialized Tooling & <br />
            <span className="bg-gradient-to-r from-white via-[#FF4545] to-[#FF3030] bg-clip-text text-transparent">
              Engineered Technologies
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA]">
            Honest, verified technical competencies applied across machine learning modeling, vector systems, and backend development.
          </p>
        </div>

        {/* Filter Controls: Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#141414] border border-[#292929] w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-[#FF3030] text-white shadow-[0_0_15px_rgba(255,48,48,0.5)]'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-[#1C1C1C]'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => {
              const IconComp = TAB_ICONS[cat.id] || Layers;
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    isSelected
                      ? 'bg-[#FF3030] text-white shadow-[0_0_15px_rgba(255,48,48,0.5)]'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-[#1C1C1C]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-[#141414] border border-[#292929] rounded-xl text-white placeholder-[#71717A] focus:outline-none focus:border-[#FF3030] focus:shadow-[0_0_15px_rgba(255,48,48,0.25)] transition-all"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#FF3030]/50 hover:bg-[#171717] hover:shadow-[0_0_20px_rgba(255,48,48,0.18)] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#1C0A0A] text-[#FF4545] border border-[#FF3030]/20">
                    {skill.level}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF3030] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                  {skill.name}
                </h4>
              </div>
              <p className="text-[11px] font-mono text-[#71717A] mt-2 group-hover:text-[#A1A1AA] transition-colors">
                {skill.categoryName}
              </p>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-[#71717A] font-mono text-sm">
            No matching skills found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
