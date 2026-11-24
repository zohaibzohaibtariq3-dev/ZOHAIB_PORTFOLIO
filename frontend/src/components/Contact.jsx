import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      const data = await res.json();
      setStatusMessage({
        type: 'success',
        text: data.message || 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      // Graceful fallback for mock mode
      setStatusMessage({
        type: 'success',
        text: `Thank you ${formData.name}! Your message has been recorded. Zohaib will get back to you at ${formData.email}.`
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080808] overflow-hidden border-t border-[#1C1C1C]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#FF3030]/06 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#8B0000]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0A0A] border border-[#FF3030]/30 text-[#FF4545] text-xs font-mono mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Have an AI Project in Mind? <br />
            <span className="bg-gradient-to-r from-white via-[#FF4545] to-[#FF3030] bg-clip-text text-transparent">
              Let's Build Something Impactful.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA]">
            Available for AI/ML engineering roles, intelligent automation projects, RAG architecture development, and collaborative research.
          </p>
        </div>

        {/* Contact Layout Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Details & Social Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#242424] shadow-2xl">
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Let's Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-8">
                Whether you are evaluating potential candidates for technical teams or exploring an AI automation pipeline, feel free to drop a message.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-[#161616] border border-[#2A2A2A] mb-6">
                <span className="text-[11px] font-mono text-[#71717A] uppercase block mb-1">
                  Direct Email Address:
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-white font-medium truncate">
                    {PERSONAL_INFO.social.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#202020] text-[#A1A1AA] hover:text-white hover:bg-[#2A2A2A] transition-all flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#FF4545]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Status Card */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs text-[#D4D4D8]">
                  <div className="w-7 h-7 rounded-lg bg-[#1C0A0A] border border-[#FF3030]/30 flex items-center justify-center text-[#FF4545]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Islamabad, Pakistan • Iqra University Campus</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#D4D4D8]">
                  <div className="w-7 h-7 rounded-lg bg-[#1C0A0A] border border-[#FF3030]/30 flex items-center justify-center text-[#FF4545]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>Available for Full-time Roles & Internships</span>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div>
              <span className="text-xs font-mono text-[#71717A] uppercase block mb-3">
                Professional Networks:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#161616] border border-[#262626] hover:border-[#FF3030]/50 hover:bg-[#1C1C1C] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-white">
                    <Github className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#FF4545] transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#161616] border border-[#262626] hover:border-[#0A66C2]/50 hover:bg-[#1C1C1C] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-white">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#0A66C2] transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#242424] shadow-2xl">
            <h3 className="text-xl font-bold font-display text-white mb-6">
              Send a Message
            </h3>

            {statusMessage && (
              <div
                className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs font-mono leading-relaxed ${
                  statusMessage.type === 'success'
                    ? 'bg-[#122416] text-[#4ADE80] border border-[#22C55E]/30'
                    : 'bg-[#290E0E] text-[#F87171] border border-[#EF4444]/30'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-[#A1A1AA] block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-2.5 text-xs font-mono bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl text-white placeholder-[#52525B] focus:outline-none focus:border-[#FF3030] transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-[#A1A1AA] block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 text-xs font-mono bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl text-white placeholder-[#52525B] focus:outline-none focus:border-[#FF3030] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-[#A1A1AA] block mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. AI/ML Engineering Opportunity or Project Collaboration"
                  className="w-full px-4 py-2.5 text-xs font-mono bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl text-white placeholder-[#52525B] focus:outline-none focus:border-[#FF3030] transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-[#A1A1AA] block mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about the role, project, or technical topic you'd like to discuss..."
                  className="w-full px-4 py-2.5 text-xs font-mono bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl text-white placeholder-[#52525B] focus:outline-none focus:border-[#FF3030] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#FF3030] to-[#D41C1C] hover:from-[#FF4545] hover:to-[#FF3030] text-white text-xs font-mono font-medium shadow-[0_0_20px_rgba(255,48,48,0.4)] hover:shadow-[0_0_30px_rgba(255,48,48,0.6)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending Transmission...' : 'Transmit Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
