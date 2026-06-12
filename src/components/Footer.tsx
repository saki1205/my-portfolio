import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const top = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <a href="#home" className="font-display font-bold text-lg">
              <span className="gradient-text">saketh</span><span className="text-white/60">.dev</span>
            </a>
            <p className="text-sm text-white/50 mt-2 max-w-md">AI Engineer & Full Stack Developer — building products that solve real problems.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/saki1205" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-neon-mint hover:border-neon-mint/40 transition"><Github size={16} /></a>
            <a href="https://linkedin.com/in/saketh-mothe" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-neon-blue hover:border-neon-blue/40 transition"><Linkedin size={16} /></a>
            <a href="mailto:saketh2005mothe@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-neon-violet hover:border-neon-violet/40 transition"><Mail size={16} /></a>
            <button onClick={top} aria-label="Back to top" className="ml-2 w-10 h-10 rounded-full bg-gradient-to-br from-neon-mint to-neon-blue text-black flex items-center justify-center hover:scale-105 transition"><ArrowUp size={16} /></button>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Saketh Mothe. Crafted with care.</p>
          <p className="font-mono">Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
