import React, { useState } from 'react';
import { 
  Code, 
  Layers, 
  Wrench, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Cpu, 
  Terminal,
  Zap
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = [Code, Layers, Wrench, Compass];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-slate-800/60">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Languages, frameworks, developer tools, and emerging technologies I work with daily.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Code;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-400'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/90 hover:border-indigo-500/40 space-y-4 group transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs border border-indigo-500/20 group-hover:scale-110 transition-transform">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-xs font-mono font-semibold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded-md border border-indigo-800/40">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Highlights: Languages, Frameworks, Platforms, Currently Learning summary */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Languages</span>
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'HTML5', 'CSS3', 'JavaScript'].map((item) => (
                <span key={item} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Frameworks & Libs</span>
            <div className="flex flex-wrap gap-1.5">
              {['CustomTkinter', 'SQLite', 'Node.js', 'Express', 'React', 'FastAPI'].map((item) => (
                <span key={item} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">Tools & Platforms</span>
            <div className="flex flex-wrap gap-1.5">
              {['VS Code', 'GitHub', 'Git', 'ServiceNow', 'IBM Cognos', 'Netlify', 'Supabase'].map((item) => (
                <span key={item} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900/80 border border-indigo-500/30 space-y-2 relative overflow-hidden">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Currently Learning</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['SQLite Mastery', 'JavaScript (ESNext)', 'System Design'].map((item) => (
                <span key={item} className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
