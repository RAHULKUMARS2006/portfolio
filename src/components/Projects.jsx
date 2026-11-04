import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Boxes, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Workflow,
  Cpu
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';

const categories = ['All', 'AI & Full-Stack', 'Desktop & Systems', 'Backend & Cloud', 'ITSM & Cloud'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <Boxes className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Architected across AI & Reinforcement Learning, Desktop GUI systems, scalable REST backends, and enterprise governance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-1 ring-indigo-400'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800/90 hover:border-indigo-500/50 relative overflow-hidden group transition-all duration-300"
            >
              {/* Glowing accent highlight on top-right */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/20 transition-all duration-300" />

              <div className="space-y-5">
                {/* Header: Badge & Category */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-indigo-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Architectural highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Highlights:</p>
                  <div className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-300 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors group/link"
                >
                  <Github className="w-4 h-4 text-indigo-400" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/link:text-white transition-colors" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub repository callout banner */}
        <div className="mt-12 glass-panel p-6 rounded-3xl border border-indigo-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Interested in exploring more source code?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Browse commits, repositories, and active builds on my GitHub profile.</p>
          </div>
          <a
            href="https://github.com/RAHULKUMARS2006"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>@RAHULKUMARS2006</span>
          </a>
        </div>

      </div>
    </section>
  );
}
