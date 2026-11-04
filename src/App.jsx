import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Ambient background grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Ambient static glow points */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <AboutEducation />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
