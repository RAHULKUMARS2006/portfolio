import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Target, 
  Cpu, 
  Globe2, 
  Sparkles 
} from 'lucide-react';
import { education, personalInfo } from '../data/portfolioData';

export default function AboutEducation() {
  const pillars = [
    {
      icon: Cpu,
      title: "AI & Data Science",
      desc: "Developing machine learning environments, RL agents, graph analytics, and predictive models."
    },
    {
      icon: Globe2,
      title: "Full-Stack Web Engineering",
      desc: "Building performant web applications using React, Node.js, Express, FastAPI, and Three.js."
    },
    {
      icon: Target,
      title: "Software & Desktop Systems",
      desc: "Architecting modular desktop GUI applications with Python, Tkinter, and SQLite persistence."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging artificial intelligence, modern web technologies, and software engineering to engineer end-to-end solutions.
          </p>
        </div>

        {/* 2-Column Grid: Left About narrative, Right Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* About Narrative Card */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Career Objective</h3>
                  <p className="text-xs text-slate-400">Continuous Growth & Innovation</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a final-year B.Tech Artificial Intelligence and Data Science student seeking an opportunity to apply my skills in software development, machine learning, and full-stack engineering, while contributing to real-world impactful projects and continuing to evolve as a modern software engineer.
              </p>

              <p className="text-slate-300/90 leading-relaxed text-sm sm:text-base">
                My work spans cutting-edge domains: from architecting Reinforcement Learning environments with 3D graph visualizers to creating enterprise RESTful backends and modular biometric desktop tools. I thrive at the intersection of data-driven intelligence and robust software architecture.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                    <IconComponent className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-xs font-bold text-white">{pillar.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-snug">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between border-indigo-500/20 relative overflow-hidden">
            {/* Background glowing corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Higher Education</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Academic Journey</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  {education.status}
                </span>
              </div>

              {/* Institution & Degree */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white text-gradient">
                    {education.degree}
                  </h4>
                  <p className="text-sm font-medium text-slate-200">
                    {education.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-1 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{education.timeline}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              {/* Course Highlights */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Key Competencies</span>
                </p>
                <div className="space-y-2">
                  {education.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer indicator */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Department of AI & Data Science</span>
              <span className="text-indigo-400 font-mono font-medium">B.Tech 2023 - 2027</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
