import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'features' | 'simulation'
  const [simState, setSimState] = useState({ running: false, result: null });

  if (!isOpen || !project) return null;

  const runSimulation = () => {
    setSimState({ running: true, result: null });
    setTimeout(() => {
      if (project.id === 'resume-screener') {
        setSimState({
          running: false,
          result: {
            score: '92% Match',
            metrics: 'Core Skills: 95% | Experience Fit: 90% | Education Fit: 90%',
            extracted: ['Python', 'FastAPI', 'Machine Learning', 'Docker', 'NLP'],
            recommendation: 'Highly Recommended for Technical Interview'
          }
        });
      } else if (project.id === 'voice-assistant') {
        setSimState({
          running: false,
          result: {
            latency: '240ms Total Loop',
            stt: 'Faster-Whisper: 85ms',
            llm: 'Groq LPU Inference: 110ms',
            tts: 'Audio Buffer: 45ms',
            transcript: 'User: "Explain gradient descent in one sentence."'
          }
        });
      } else if (project.id === 'pdf-rag-chatbot') {
        setSimState({
          running: false,
          result: {
            chunksRetrieved: '4 passages from Page 12 & 14',
            vectorSimilarity: 'Cosine Score: 0.884',
            hallucinationCheck: 'PASSED (Strict Grounding Verified)',
            citedAnswer: 'Document explicitly states: system throughput scales linearly with distributed vector partitions.'
          }
        });
      } else if (project.id === 'ai-support-agent') {
        setSimState({
          running: false,
          result: {
            confidence: '0.94 High Confidence',
            action: 'Automated Knowledge Resolution Dispatched',
            ticketEscalation: 'Not Required (Threshold > 0.85)',
            loggedToDB: 'SQLite session record committed'
          }
        });
      } else {
        setSimState({
          running: false,
          result: {
            forecastTarget: 'Peak Load: 4,280 kWh (+4.2%)',
            anomalyFlag: 'Normal operating curve (Z-score: 0.41)',
            recommendation: 'Shift non-essential industrial load between 18:00 - 20:00',
            confidenceInterval: '95% Standard Margin'
          }
        });
      }
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E0E0E] border border-[#292929] rounded-2xl shadow-[0_0_60px_rgba(255,48,48,0.25)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-[#292929]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#1F0808] text-[#FF4545] border border-[#FF3030]/40 font-semibold uppercase">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-display font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1C1C1C] text-[#A1A1AA] hover:text-white hover:bg-[#262626] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#0A0A0A] border-b border-[#222222]">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'architecture'
                ? 'bg-[#FF3030] text-white shadow-[0_0_12px_rgba(255,48,48,0.4)]'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'features'
                ? 'bg-[#FF3030] text-white shadow-[0_0_12px_rgba(255,48,48,0.4)]'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            Key Features & Tech Stack
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'simulation'
                ? 'bg-[#FF3030] text-white shadow-[0_0_12px_rgba(255,48,48,0.4)]'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-[#FF4545]" />
            <span>Interactive Simulator</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Tagline & Summary */}
          <div>
            <h4 className="text-xl font-bold font-display text-white mb-2">
              {project.tagline}
            </h4>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h5 className="text-xs font-mono text-[#FF3030] uppercase tracking-wider font-semibold">
                End-to-End System Pipeline Flow:
              </h5>
              <div className="space-y-3">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#141414] border border-[#252525] flex items-start gap-3.5 group hover:border-[#FF3030]/40 transition-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#1F0808] border border-[#FF3030]/30 flex items-center justify-center text-xs font-mono text-[#FF4545] font-bold flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-white block">
                        {item.step}
                      </span>
                      <p className="text-xs text-[#A1A1AA] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-mono text-[#FF3030] uppercase tracking-wider font-semibold mb-3">
                  Technologies Applied:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-[#181818] border border-[#2E2E2E] text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-xs font-mono text-[#FF3030] uppercase tracking-wider font-semibold mb-3">
                  Key Capabilities & Engineering Features:
                </h5>
                <div className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF4545] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Simulation Tab */}
          {activeTab === 'simulation' && (
            <div className="p-5 rounded-xl bg-[#141414] border border-[#292929] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF4545]" />
                    Interactive Architectural Pipeline Sandbox
                  </h5>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Trigger simulated workflow execution to inspect telemetry and response payloads.
                  </p>
                </div>
                <button
                  onClick={runSimulation}
                  disabled={simState.running}
                  className="px-4 py-2 rounded-lg bg-[#FF3030] hover:bg-[#FF4545] text-white text-xs font-mono font-medium flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,48,48,0.4)] disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{simState.running ? 'Executing...' : 'Run Pipeline'}</span>
                </button>
              </div>

              {simState.running && (
                <div className="py-6 flex flex-col items-center justify-center gap-2 text-xs font-mono text-[#FF4545]">
                  <div className="w-5 h-5 border-2 border-[#FF3030] border-t-transparent rounded-full animate-spin" />
                  <span>Processing vector embeddings & model inference...</span>
                </div>
              )}

              {simState.result && (
                <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#FF3030]/30 font-mono text-xs space-y-2 text-[#E4E4E7]">
                  <div className="text-[#FF4545] font-bold">PIPELINE EXECUTION LOG:</div>
                  {Object.entries(simState.result).map(([k, v]) => (
                    <div key={k} className="flex flex-col sm:flex-row gap-1">
                      <span className="text-[#A1A1AA] uppercase w-40">{k}:</span>
                      <span className="text-white">{Array.isArray(v) ? v.join(', ') : v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-[#141414] border-t border-[#292929] flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1C1C1C] border border-[#2E2E2E] text-xs font-mono text-white hover:border-[#FF3030]/50 hover:shadow-[0_0_12px_rgba(255,48,48,0.2)] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FF3030]/15 border border-[#FF3030]/40 text-xs font-mono text-[#FF4545] hover:bg-[#FF3030]/25 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demonstration</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#222222] text-xs font-medium text-white hover:bg-[#2A2A2A] transition-all"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
