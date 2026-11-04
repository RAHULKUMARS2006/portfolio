import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink,
  Code2,
  Brain,
  Layers,
  GraduationCap
} from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/IMG-RK.jpg.jpeg';

export default function Hero() {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-20 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-700/40 text-indigo-300 text-xs font-medium tracking-wide backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles & Opportunities</span>
              <span className="text-slate-500">|</span>
              <span className="text-indigo-400 font-semibold">2027 Grad</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient">Rahul Kumar S</span> <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gradient-accent">
                {personalInfo.subheading}
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Contact quick actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-mono">
              {/* Email quick copy */}
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all group"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">{personalInfo.email}</span>
                <span className="sm:hidden">Email</span>
                {copiedItem === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              {/* Phone quick copy */}
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all group"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.phone}</span>
                {copiedItem === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-indigo-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-indigo-500/50 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo with Glowing Accent Border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Outer Pulsing Glow Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-600 via-violet-500 to-cyan-400 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 group-hover:duration-300 animate-pulse-slow"></div>

              {/* Frame Card */}
              <div className="relative p-2 rounded-3xl bg-[#0F172A] border border-indigo-500/30 shadow-2xl backdrop-blur-xl">
                
                {/* Photo container with fixed ratio and rounded corners */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={profilePhoto}
                    alt="Rahul Kumar S - Portrait"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle inner gradient shadow at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Top-Right Badge: AI & Data Science */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white flex items-center gap-1.5 shadow-lg">
                    <Brain className="w-3 h-3 text-cyan-400" />
                    <span>AI & DS</span>
                  </div>

                  {/* Bottom Float Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/70 shadow-lg text-left">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Full-Stack & Systems</p>
                        <p className="text-[11px] text-slate-400">Python • React • Node • Three.js</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Accent Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md text-xs font-medium text-slate-200">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>B.Tech CCET '27</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Highlights / Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-2xl text-center space-y-1 hover:border-indigo-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-indigo-400">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
