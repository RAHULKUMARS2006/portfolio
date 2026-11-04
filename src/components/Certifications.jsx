import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Building, 
  Sparkles,
  Server
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional certifications and accredited technical learning tracks.
          </p>
        </div>

        {/* Certifications Display Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 relative overflow-hidden transition-all duration-300"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                
                {/* Left: Badge & Title */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 shadow-lg shadow-indigo-600/10">
                    <Server className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold flex items-center gap-1">
                        <Award className="w-3 h-3 text-indigo-400" />
                        {cert.badgeText}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-indigo-400" />
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {cert.title}
                    </h3>

                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-slate-200">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-indigo-400">
                        {cert.partner}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Verified Badge */}
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Credential</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Competencies Covered */}
              <div className="bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 mb-6">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Key Competencies Mastered</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Details */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <span>Accredited via IBM SkillsNetwork & Naan Muthalvan</span>
                <span className="font-mono text-indigo-400">Status: Active & Validated</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
