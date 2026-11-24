import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Layers, 
  Sparkles,
  Cpu,
  ChevronRight,
  Eye
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Generative AI / NLP', 'Speech AI / LLMs', 'RAG / Vector Search', 'Intelligent Automation', 'Machine Learning / Analytics'];

  const filteredProjects = filterCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#080808] overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#FF3030]/06 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-[#8B0000]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0A0A] border border-[#FF3030]/30 text-[#FF4545] text-xs font-mono mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRODUCTION SYSTEMS & RESEARCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Featured AI & Machine Learning <br />
              <span className="bg-gradient-to-r from-white via-[#FF4545] to-[#FF3030] bg-clip-text text-transparent">
                Engineering Projects
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md">
            Architected and implemented with real asynchronous backends, vector search, foundation models, and disciplined code structure.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                filterCategory === cat
                  ? 'bg-[#FF3030] text-white shadow-[0_0_15px_rgba(255,48,48,0.4)]'
                  : 'bg-[#141414] text-[#A1A1AA] border border-[#292929] hover:text-white hover:border-[#FF3030]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: 2-3 Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-[#262626] hover:border-[#FF3030]/50 hover:shadow-[0_0_30px_rgba(255,48,48,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Image Area */}
              <div className="relative h-48 w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />
                
                {/* Category Pill Over Image */}
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#080808]/85 text-[#FF4545] border border-[#FF3030]/30 backdrop-blur-md">
                  {project.category}
                </span>

                {/* Inspect Overlay Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#080808]/85 border border-[#2E2E2E] text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md hover:border-[#FF3030] hover:text-[#FF4545]"
                  title="Inspect Architecture"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#FF4545] mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-[#A1A1AA] line-clamp-3 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#2A2A2A] text-[#D4D4D8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono font-medium text-white hover:text-[#FF4545] flex items-center gap-1 transition-colors"
                    >
                      <span>Architecture Details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF3030]" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#1A1A1A] border border-[#292929] text-[#A1A1AA] hover:text-white hover:border-[#FF3030]/50 transition-all"
                        aria-label={`${project.title} GitHub Repository`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#1A1A1A] border border-[#292929] text-[#A1A1AA] hover:text-[#FF4545] hover:border-[#FF3030]/50 transition-all"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
