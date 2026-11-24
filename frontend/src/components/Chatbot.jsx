import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  CornerDownLeft, 
  User, 
  RefreshCw, 
  Minimize2,
  Maximize2,
  Cpu,
  MessageSquare,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { CHATBOT_SUGGESTED_QUESTIONS, PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I am **Ask Zohaib AI**, an intelligent assistant powered by Zohaib Tariq's verified knowledge base and Groq LPU inference.\n\nI can answer questions regarding his AI/ML projects, skills, education at Iqra University, or software engineering background. How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      source: 'system'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isMinimized]);

  // Frontend instant fallback if backend API is not running or takes too long
  const getLocalFallback = (query) => {
    const q = query.toLowerCase();
    if (q.includes('who is') || q.includes('about zohaib') || q.includes('who are you') || q.includes('introduce')) {
      return `**Zohaib Tariq** is an aspiring **AI/ML Engineer** in his 6th semester studying BS Computer Science at **Iqra University, Islamabad**.\n\nHe specializes in Machine Learning, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and intelligent automation.`;
    }
    if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('semester')) {
      return `**Educational Background:**\n• **Degree:** BS Computer Science\n• **University:** Iqra University, Islamabad\n• **Current Semester:** 6th Semester (In Progress)\n\nCoursework includes AI, Machine Learning, Data Structures & Algorithms, and Relational Databases.`;
    }
    if (q.includes('technolog') || q.includes('skill') || q.includes('stack') || q.includes('python')) {
      return `**Zohaib's Core Technical Skills:**\n• **Languages:** Python, JavaScript, C++, SQL\n• **AI/ML:** Machine Learning, Deep Learning, NLP, Generative AI, LLMs, RAG, Prompt Engineering\n• **Libraries:** NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow\n• **Tools:** FAISS, Pinecone, Groq API, Faster-Whisper, FastAPI, Flask, React, Docker`;
    }
    if (q.includes('voice assistant') || q.includes('whisper')) {
      return `**Project: AI Voice Assistant**\n\nEngineered using **Flask**, **Faster-Whisper**, and **Groq API**:\n1. Transcribes voice input via optimized Whisper speech recognition.\n2. Dispatches prompt to Groq API for sub-second LLM reasoning.\n3. Converts generated response to speech via streaming TTS.\n\nProvides sub-second latency conversational responses.`;
    }
    if (q.includes('resume') || q.includes('screener')) {
      return `**Project: AI Resume Screener**\n\nBuilt with **Python**, **FastAPI**, **Streamlit**, and **NLP**.\nParses PDF/DOCX resumes, extracts key skills, and calculates semantic matching scores against job descriptions to assist technical recruiters.`;
    }
    if (q.includes('pdf') || q.includes('rag')) {
      return `**Project: PDF RAG Chatbot**\n\nImplements **Retrieval-Augmented Generation** using Python, LLMs, FAISS, and Pinecone.\nChunks multi-page documents, indexes dense vector embeddings, and performs top-k semantic search to generate cited, grounded answers without hallucinations.`;
    }
    if (q.includes('support') || q.includes('agent')) {
      return `**Project: AI Support Agent**\n\nBuilt with **FastAPI**, **React**, **SQLite**, and **FAISS**.\nFeatures vector-indexed technical knowledge retrieval, stateful conversation persistence, and automated confidence thresholding for human escalation.`;
    }
    if (q.includes('smart grid') || q.includes('energy')) {
      return `**Project: Enterprise Smart Grid Intelligence Platform**\n\nUtilizes **Python**, **FastAPI**, **PostgreSQL**, and **Scikit-learn** to perform machine learning regression for 24-hour energy load demand forecasting and consumption anomaly detection.`;
    }
    if (q.includes('projects') || q.includes('built')) {
      return `**Key Projects Built by Zohaib Tariq:**\n1. **AI Resume Screener** (FastAPI, Streamlit, NLP)\n2. **AI Voice Assistant** (Flask, Faster-Whisper, Groq API)\n3. **PDF RAG Chatbot** (Python, FAISS, Pinecone, LLMs)\n4. **AI Support Agent** (FastAPI, React, SQLite, FAISS)\n5. **Enterprise Smart Grid Platform** (Python, PostgreSQL, ML)`;
    }
    if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('hire')) {
      return `**Get in Touch with Zohaib Tariq:**\n• **Email:** [zohaibtariq.ai@gmail.com](mailto:zohaibtariq.ai@gmail.com)\n• **LinkedIn:** [linkedin.com/in/zohaibtariq](https://linkedin.com/in/zohaibtariq)\n• **GitHub:** [github.com/zohaibtariq](https://github.com/zohaibtariq)\n\nOr submit your inquiry through the Contact section below!`;
    }
    if (q.includes('career') || q.includes('goal')) {
      return `**Career Goals:**\nZohaib is looking for an **AI/ML Engineer** role or internship where he can design production RAG pipelines, LLM-powered autonomous agents, and intelligent backend automation systems.`;
    }
    return `Thank you for asking! I can answer questions about Zohaib Tariq's projects (Voice Assistant, Resume Screener, PDF RAG, Support Agent, Smart Grid), technical skills (FastAPI, Python, RAG, LLMs), or education at Iqra University.`;
  };

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for API
      const historyPayload = messages.slice(-5).map(m => ({
        role: m.role,
        content: m.content
      }));

      // Call FastAPI backend
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      const aiReply = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply,
        source: data.source,
        model: data.model,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      // Graceful instant fallback if API endpoint is not yet mounted or offline
      const fallbackText = getLocalFallback(query);
      const aiReply = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: fallbackText,
        source: 'knowledge_base_local',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Chat session refreshed. Ask me anything about Zohaib Tariq's AI/ML projects, skills, or education.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'system'
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FF3030] to-[#C91A1A] hover:from-[#FF4545] hover:to-[#FF3030] text-white shadow-[0_0_30px_rgba(255,48,48,0.5)] hover:shadow-[0_0_40px_rgba(255,48,48,0.7)] transition-all duration-300 active:scale-95"
          aria-label="Open Ask Zohaib AI Chat"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-5 h-5 text-white animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span className="hidden sm:inline font-display font-semibold text-xs tracking-wider uppercase">
            Ask Zohaib AI
          </span>
        </button>
      )}

      {/* Expandable Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-4 sm:right-6 z-50 w-[94vw] sm:w-[440px] ${
            isMinimized ? 'h-14' : 'h-[580px] max-h-[85vh]'
          } rounded-2xl bg-[#0D0D0D] border border-[#292929] shadow-[0_0_50px_rgba(255,48,48,0.3)] flex flex-col overflow-hidden transition-all duration-300 backdrop-blur-xl animate-fadeIn`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-[#242424]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#1F0808] border border-[#FF3030]/40 flex items-center justify-center text-[#FF4545]">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-display font-bold text-white flex items-center gap-1.5">
                  Ask Zohaib AI
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3030] animate-pulse" />
                </span>
                <span className="text-[10px] font-mono text-[#A1A1AA]">
                  Powered by Verified Profile Knowledge
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#1E1E1E] transition-all"
                title="Reset conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#1E1E1E] transition-all"
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-[#FF4545] hover:bg-[#1E1E1E] transition-all"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#080808]/70">
                {messages.map((msg) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div className="flex items-center gap-1.5 mb-1 px-1">
                        <span className="text-[10px] font-mono text-[#71717A]">
                          {isUser ? 'You' : 'Ask Zohaib AI'}
                        </span>
                        <span className="text-[9px] font-mono text-[#52525B]">
                          {msg.timestamp}
                        </span>
                      </div>

                      <div
                        className={`group relative max-w-[88%] p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                          isUser
                            ? 'bg-gradient-to-r from-[#FF3030] to-[#D41C1C] text-white rounded-tr-none shadow-[0_0_15px_rgba(255,48,48,0.3)]'
                            : 'bg-[#151515] text-[#E4E4E7] border border-[#262626] rounded-tl-none'
                        }`}
                      >
                        {msg.content}

                        {!isUser && (
                          <button
                            onClick={() => handleCopy(msg.content, msg.id)}
                            className="absolute bottom-1.5 right-1.5 opacity-0 group-hover:opacity-100 p-1 rounded bg-[#202020] text-[#A1A1AA] hover:text-white transition-opacity"
                            title="Copy reply"
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-3 h-3 text-[#FF4545]" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#141414] border border-[#242424] max-w-[200px]">
                    <div className="w-2 h-2 rounded-full bg-[#FF3030] animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-[#FF4545] animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-[#FF3030] animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] font-mono text-[#A1A1AA]">Thinking...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions Pills */}
              <div className="px-3 py-2 bg-[#0E0E0E] border-t border-[#1F1F1F] overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-[#71717A] flex items-center gap-1 flex-shrink-0">
                  <HelpCircle className="w-3 h-3 text-[#FF3030]" />
                  <span>Try:</span>
                </span>
                {CHATBOT_SUGGESTED_QUESTIONS.slice(0, 5).map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="px-2.5 py-1 rounded-full bg-[#161616] border border-[#282828] text-[10px] font-mono text-[#A1A1AA] hover:text-white hover:border-[#FF3030]/50 hover:bg-[#202020] transition-all flex-shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="p-3 bg-[#121212] border-t border-[#222222]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about projects, skills, RAG, education..."
                    className="flex-1 px-3.5 py-2.5 text-xs font-mono bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl text-white placeholder-[#71717A] focus:outline-none focus:border-[#FF3030] transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-[#FF3030] to-[#D41C1C] text-white hover:from-[#FF4545] hover:to-[#FF3030] transition-all shadow-[0_0_15px_rgba(255,48,48,0.4)] disabled:opacity-40 active:scale-95"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
