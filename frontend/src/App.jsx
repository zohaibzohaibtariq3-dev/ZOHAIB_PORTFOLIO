import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Knowledge from './components/Knowledge';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-[#FF3030] selection:text-white">
      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Top Red Gradient Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Cinematic Hero Landing Page */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* AI/ML Technologies I Work With (26 Concepts) */}
        <Knowledge />

        {/* Experience & Learning Journey Timeline */}
        <Journey />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive "Ask Zohaib AI" Chatbot */}
      <Chatbot />

      {/* Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
