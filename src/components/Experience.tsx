import React from 'react';
import { Briefcase, GitBranch, Trophy, Code } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const items = [
  {
    icon: Briefcase,
    title: 'Full Stack Developer Intern',
    org: 'Wise Mango Inc · Remote',
    period: 'May 2025 – June 2025',
    points: [
      'Designed RESTful backend services using Node.js and Express, supporting scalable data workflows and integrations.',
      'Implemented MongoDB schema design and indexing strategies for efficient storage and retrieval.',
      'Collaborated with designers and developers to deliver production-ready features.',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    icon: Trophy,
    title: 'Force Equals Hiring Challenge',
    org: 'Technical Assessment',
    period: '2025',
    points: [
      'Solved end-to-end full-stack and algorithmic problems under timed conditions.',
      'Delivered production-ready solutions with clean architecture and tests.',
    ],
    tech: ['Algorithms', 'System Design'],
  },
  {
    icon: GitBranch,
    title: 'Open Source Contributions',
    org: 'GitHub · github.com/saki1205',
    period: 'Ongoing',
    points: [
      'Maintain personal AI/ML and full-stack repositories used as learning references.',
      'Contribute fixes, refactors and documentation to community projects.',
    ],
    tech: ['Git', 'GitHub', 'Open Source'],
  },
  {
    icon: Code,
    title: 'Major Technical Achievements',
    org: 'Selected Highlights',
    period: '2024 – 2026',
    points: [
      'Built agentic AI pipelines combining web scraping, embeddings and multi-step reasoning.',
      'Architected AI-assisted static analysis tooling for security vulnerability detection.',
    ],
    tech: ['LLMs', 'FAISS', 'Vector DBs'],
  },
];

const Experience = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="relative py-28">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 section-transition ${isVisible ? 'visible' : ''}`}>
        <div className="mb-14 max-w-2xl">
          <div className="chip mb-4">Experience</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Where I've <span className="gradient-text">shipped</span></h2>
        </div>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon-mint via-neon-blue to-neon-violet opacity-50" />
          {items.map((it, i) => (
            <div key={i} className="relative mb-8">
              <div className="absolute -left-[22px] md:-left-[30px] top-2 w-4 h-4 rounded-full bg-ink-900 border-2 border-neon-mint" />
              <div className="gradient-border p-6 glow-hover">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-mint/20 to-neon-violet/20 border border-white/10 flex items-center justify-center text-neon-mint">
                      <it.icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{it.title}</h3>
                      <p className="text-sm text-white/55">{it.org}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-white/50">{it.period}</span>
                </div>
                <ul className="space-y-2 mt-3">
                  {it.points.map((p, j) => (
                    <li key={j} className="text-sm text-white/70 flex gap-2">
                      <span className="text-neon-mint mt-1.5 w-1 h-1 rounded-full bg-neon-mint shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {it.tech.map(t => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
