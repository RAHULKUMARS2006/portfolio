import { Terminal, Mail, Phone, ArrowUp, Heart } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080C14] border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-mono shadow-md shadow-indigo-600/30">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Rahul Kumar S</h3>
              <p className="text-xs text-slate-400">Final-Year B.Tech AI & Data Science | Software Developer</p>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Phone"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white text-xs font-semibold transition-all duration-200"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Rahul Kumar S. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted with React, Vite & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
