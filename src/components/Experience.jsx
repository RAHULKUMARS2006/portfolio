import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  BarChart3, 
  Sparkles, 
  TrendingUp,
  Layers,
  Award
} from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/40 border-y border-slate-800/60">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & <span className="text-gradient">Internship Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Industry exposure in Enterprise Business Intelligence, Analytics Dashboards, and Data Visualization.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                    <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Business Intelligence & Analytics</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      {exp.company}
                    </span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span className="text-indigo-400 text-xs sm:text-sm font-medium">
                      {exp.partner}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements Checklist */}
              <div className="space-y-3 mb-6 bg-slate-900/50 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span>Key Project Highlights & Responsibilities</span>
                </h4>
                <div className="space-y-2.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-medium text-slate-400 mr-1">Skills Demonstrated:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-700/30 text-indigo-300 text-xs font-medium hover:border-indigo-500/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
