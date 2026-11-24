import React from 'react';
import { X, Download, Printer, CheckCircle, FileText, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(PERSONAL_INFO, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "Zohaib_Tariq_Profile.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0E0E0E] border border-[#292929] rounded-2xl shadow-[0_0_50px_rgba(255,48,48,0.25)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-[#292929]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1F0808] border border-[#FF3030]/40 text-[#FF4545]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-white">
                Zohaib Tariq – Curriculum Vitae
              </h3>
              <p className="text-xs font-mono text-[#A1A1AA]">
                AI/ML Engineer • Verified Professional Profile
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#1A1A1A] border border-[#292929] text-[#A1A1AA] hover:text-white hover:border-[#FF3030]/50 transition-all text-xs flex items-center gap-1.5"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownloadJSON}
              className="p-2 rounded-lg bg-[#FF3030]/20 border border-[#FF3030]/40 text-white hover:bg-[#FF3030]/30 transition-all text-xs flex items-center gap-1.5"
              title="Download Profile Data"
            >
              <Download className="w-4 h-4 text-[#FF4545]" />
              <span className="hidden sm:inline">Export Data</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#1A1A1A] border border-[#292929] text-[#A1A1AA] hover:text-white hover:border-red-500/50 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#D4D4D8]">
          {/* Header block */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-[#222222]">
            <div>
              <h2 className="text-2xl font-bold font-display text-white">Zohaib Tariq</h2>
              <p className="text-sm font-mono text-[#FF4545] font-semibold mt-1">
                AI/ML Engineer | Generative AI | LLMs | Intelligent Automation
              </p>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Islamabad, Pakistan • zohaibtariq.ai@gmail.com
              </p>
            </div>
            <div className="text-right sm:text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#1E0808] border border-[#FF3030]/40 text-[#FF4545]">
                Available for Roles
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF3030] font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3030]" />
              Education
            </h4>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#252525]">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-semibold text-white">Bachelor of Science in Computer Science (BS CS)</h5>
                  <p className="text-xs text-[#A1A1AA]">Iqra University, Islamabad</p>
                </div>
                <span className="text-xs font-mono text-[#FF4545] font-medium">6th Semester (In Progress)</span>
              </div>
              <p className="text-xs text-[#8E8E93] mt-2">
                Core Focus: Machine Learning, Artificial Intelligence, Data Structures, Algorithms, Relational Databases, OOP.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF3030] font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3030]" />
              Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#141414] p-3 rounded-lg border border-[#252525]">
                <span className="text-xs font-mono text-white font-medium block mb-1">AI & Machine Learning</span>
                <p className="text-xs text-[#A1A1AA]">Machine Learning, Deep Learning, NLP, Generative AI, LLMs, RAG, Prompt Engineering</p>
              </div>
              <div className="bg-[#141414] p-3 rounded-lg border border-[#252525]">
                <span className="text-xs font-mono text-white font-medium block mb-1">Programming Languages</span>
                <p className="text-xs text-[#A1A1AA]">Python, JavaScript, C++, SQL</p>
              </div>
              <div className="bg-[#141414] p-3 rounded-lg border border-[#252525]">
                <span className="text-xs font-mono text-white font-medium block mb-1">Libraries & Frameworks</span>
                <p className="text-xs text-[#A1A1AA]">NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, FastAPI, Flask, Streamlit, React</p>
              </div>
              <div className="bg-[#141414] p-3 rounded-lg border border-[#252525]">
                <span className="text-xs font-mono text-white font-medium block mb-1">Vector DBs & Tools</span>
                <p className="text-xs text-[#A1A1AA]">FAISS, Pinecone, Groq API, Faster-Whisper, PostgreSQL, SQLite, Docker, Git, Vercel</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF3030] font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3030]" />
              Selected Engineering Projects
            </h4>
            <div className="space-y-3">
              <div className="bg-[#141414] p-4 rounded-xl border border-[#252525]">
                <div className="flex justify-between items-center mb-1">
                  <h5 className="font-semibold text-white">AI Resume Screener</h5>
                  <span className="text-[11px] font-mono text-[#A1A1AA]">Python • FastAPI • Streamlit • NLP</span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  End-to-end recruitment pipeline parsing resumes, extracting skill competencies, and calculating semantic distance scoring against target job descriptions.
                </p>
              </div>

              <div className="bg-[#141414] p-4 rounded-xl border border-[#252525]">
                <div className="flex justify-between items-center mb-1">
                  <h5 className="font-semibold text-white">AI Voice Assistant</h5>
                  <span className="text-[11px] font-mono text-[#A1A1AA]">Flask • Faster-Whisper • Groq API • TTS</span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Sub-second latency conversational voice agent coupling optimized local Whisper transcription with high-throughput Groq LPU inference and audio synthesis.
                </p>
              </div>

              <div className="bg-[#141414] p-4 rounded-xl border border-[#252525]">
                <div className="flex justify-between items-center mb-1">
                  <h5 className="font-semibold text-white">PDF RAG Chatbot</h5>
                  <span className="text-[11px] font-mono text-[#A1A1AA]">Python • FAISS • Pinecone • LLMs</span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Context-grounded document question answering system using recursive chunking, dense vector indexing, and anti-hallucination prompt strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#141414] border-t border-[#292929] flex justify-between items-center text-xs text-[#71717A]">
          <span>Verified portfolio document • Zohaib Tariq</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#222222] text-white hover:bg-[#2A2A2A] transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
