import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const ROLES = ['AI Engineer', 'Full Stack Developer', 'Problem Solver', 'LLM Builder'];

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % ROLES.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="aurora aurora-1 w-[480px] h-[480px] -top-24 -left-24 animate-float" />
      <div className="aurora aurora-2 w-[520px] h-[520px] top-40 -right-40 animate-float-2" />
      <div className="aurora aurora-3 w-[380px] h-[380px] bottom-0 left-1/3 opacity-30 animate-float" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="animate-fade-up">
            <div className="chip mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-neon-mint opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-mint" />
              </span>
              Available for opportunities
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Building <span className="gradient-text">AI-Powered Products</span> That Solve Real Problems
            </h1>

            <div className="mt-6 text-lg sm:text-xl text-white/70 font-mono">
              <span className="text-neon-mint">&gt;</span> {text}
              <span className="inline-block w-[2px] h-5 bg-neon-mint ml-1 align-middle cursor-blink" />
            </div>

            <p className="mt-6 max-w-xl text-white/60 leading-relaxed">
              I'm <span className="text-white">Saketh Mothe</span> — a CS undergrad shipping agentic AI systems, LLM pipelines and production full-stack apps. Currently focused on autonomous research agents and AI-assisted security tooling.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="/Saketh_Mothe_Resume.pdf" download className="btn-ghost">
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a href="https://github.com/saki1205" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/60 hover:text-neon-mint transition"><Github size={20} /></a>
              <a href="https://linkedin.com/in/saketh-mothe" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-neon-mint transition"><Linkedin size={20} /></a>
              <a href="mailto:saketh2005mothe@gmail.com" aria-label="Email" className="text-white/60 hover:text-neon-mint transition"><Mail size={20} /></a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: '10+', l: 'Projects Built' },
                { v: '2+', l: 'Years Coding' },
                { v: '5+', l: 'AI Systems' },
              ].map((s, i) => (
                <div key={i} className="gradient-border p-4">
                  <div className="text-2xl font-display font-bold gradient-text">{s.v}</div>
                  <div className="text-xs text-white/55 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile visual */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up delay-200">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-neon-mint/40 via-neon-blue/30 to-neon-violet/40 blur-2xl opacity-70" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-to-tr from-neon-mint via-neon-blue to-neon-violet animate-spin-slow">
                <div className="w-full h-full rounded-full bg-ink-900 p-2">
                  <img
                    src="/images/ppl.jpg"
                    alt="Saketh Mothe portrait"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating chips */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl px-3 py-2 text-xs flex items-center gap-2 animate-float">
                <Sparkles size={14} className="text-neon-mint" /> LLMs · RAG
              </div>
              <div className="absolute -bottom-4 -right-2 glass rounded-2xl px-3 py-2 text-xs flex items-center gap-2 animate-float-2">
                <span className="text-neon-blue font-mono">{"{ }"}</span> Next.js · Python
              </div>
              <div className="absolute top-1/2 -right-8 glass rounded-2xl px-3 py-2 text-xs animate-float">
                FAISS · MongoDB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
