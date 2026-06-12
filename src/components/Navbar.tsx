import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex items-center justify-between rounded-full px-4 sm:px-6 h-14 transition-all ${scrolled ? 'glass-strong' : 'bg-transparent'}`}>
          <a href="#home" className="font-display font-bold text-lg tracking-tight">
            <span className="gradient-text">saketh</span><span className="text-white/60">.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="/Saketh_Mothe_Resume.pdf" download className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-white/15 hover:border-neon-mint/50 text-white/90 transition">
              <Download size={14} /> Resume
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/80" aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-in">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
