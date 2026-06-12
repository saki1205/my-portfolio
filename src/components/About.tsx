import React from 'react';
import { GraduationCap, Code2, Brain, Rocket, Users, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const journey = [
  { year: '2022', title: 'Started B.Tech in IT', detail: 'Keshav Memorial Institute of Technology — Hyderabad.', icon: GraduationCap },
  { year: '2023', title: 'First Full-Stack Projects', detail: 'Built MERN apps, learned DSA & OOP.', icon: Code2 },
  { year: '2024', title: 'Dived into AI/ML', detail: 'Image processing, LLM tinkering, fake currency detection.', icon: Brain },
  { year: '2025', title: 'Full Stack Intern @ Wise Mango', detail: 'Shipped REST services in Node + MongoDB.', icon: Rocket },
  { year: '2025–26', title: 'Agentic AI Research', detail: 'Building autonomous research agents & AI-assisted security tooling.', icon: Brain },
];

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="relative py-28">
      <div className="aurora aurora-2 w-[400px] h-[400px] -left-20 top-1/3 opacity-20" />
      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 section-transition ${isVisible ? 'visible' : ''}`}>
        <div className="mb-14 max-w-2xl">
          <div className="chip mb-4">About</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            CS student. <span className="gradient-text">AI builder.</span> Shipper of things that work.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <div className="gradient-border p-8">
            <p className="text-white/75 text-lg leading-relaxed">
              I'm a Computer Science student who loves turning messy problems into clean, usable software. My focus sits at the intersection of <span className="text-neon-mint">Generative AI</span>, <span className="text-neon-blue">Full-Stack Engineering</span>, and <span className="text-neon-violet">Automation</span>.
            </p>
            <p className="text-white/60 mt-4 leading-relaxed">
              I've built production-ready REST services, designed MongoDB schemas, and shipped agentic AI systems that scrape, reason, and synthesize knowledge. I care about clean architecture, fast iteration, and tools that genuinely help people.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Brain, t: 'AI Engineering', d: 'LLMs, RAG, agents' },
                { icon: Code2, t: 'Full Stack', d: 'Next.js · Node · Mongo' },
                { icon: Rocket, t: 'Production Mindset', d: 'Ship, measure, iterate' },
                { icon: GraduationCap, t: 'Always Learning', d: 'Curious by default' },
              ].map((b, i) => (
                <div key={i} className="glass rounded-2xl p-4 glow-hover">
                  <b.icon className="text-neon-mint mb-2" size={20} />
                  <div className="font-medium text-white">{b.t}</div>
                  <div className="text-xs text-white/55 mt-0.5">{b.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-6">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-neon-mint via-neon-blue to-neon-violet opacity-50" />
            {journey.map((j, i) => (
              <div key={i} className="relative mb-8">
                <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-ink-900 border-2 border-neon-mint pulse-ring" />
                <div className="glass rounded-2xl p-5 glow-hover">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <j.icon size={16} className="text-neon-mint" /> {j.title}
                    </div>
                    <span className="text-xs font-mono text-white/50">{j.year}</span>
                  </div>
                  <p className="text-sm text-white/60">{j.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-14 gradient-border p-8">
          <h3 className="font-display text-2xl font-bold mb-6">Leadership & Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-neon-mint/10 text-neon-mint flex items-center justify-center"><Users size={20} /></div>
              <div>
                <h4 className="font-semibold text-white">Street Cause — Hyderabad Youth Assembly</h4>
                <p className="text-xs text-neon-mint font-mono mt-0.5">Senior Director</p>
                <p className="text-sm text-white/65 mt-2">Led strategic operations across HR, Finance & Recruitment — mentoring youth and driving leadership development.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-neon-violet/10 text-neon-violet flex items-center justify-center"><Heart size={20} /></div>
              <div>
                <h4 className="font-semibold text-white">Street Cause — KMIT</h4>
                <p className="text-xs text-neon-violet font-mono mt-0.5">Treasurer & Alumni Relations Lead</p>
                <p className="text-sm text-white/65 mt-2">Owned budgeting, donations & expense tracking; built alumni engagement programs to amplify our social impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
