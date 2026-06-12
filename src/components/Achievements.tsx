import React from 'react';
import { Trophy, Code2, Award, Zap, Github, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { icon: Code2, value: '300+', label: 'LeetCode Problems', color: 'text-neon-mint' },
  { icon: Trophy, value: '5+', label: 'Hackathons', color: 'text-neon-blue' },
  { icon: Award, value: '4+', label: 'Certifications', color: 'text-neon-violet' },
  { icon: Zap, value: '10+', label: 'Coding Profiles', color: 'text-neon-mint' },
];

const items = [
  { title: 'LeetCode Problem Solver', detail: 'Active on LeetCode — daily DSA practice across arrays, graphs, DP and system design problems.' },
  { title: 'Competitive Coding', detail: 'Profiles on HackerRank, CodeChef and Codeforces; consistent participation in contests.' },
  { title: 'Hackathon Participant', detail: 'Built rapid prototypes spanning AI agents, full-stack apps and IoT during college hackathons.' },
  { title: 'Certifications', detail: 'Coursework and certificates in Python, Machine Learning, Web Development and Cloud fundamentals.' },
];

const Achievements = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section id="achievements" ref={ref as React.RefObject<HTMLElement>} className="relative py-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 section-transition ${isVisible ? 'visible' : ''}`}>
        <div className="mb-12 max-w-2xl">
          <div className="chip mb-4">Achievements</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Numbers that <span className="gradient-text">tell the story</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="gradient-border p-6 text-center glow-hover">
              <s.icon className={`mx-auto mb-3 ${s.color}`} size={24} />
              <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-white/55 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <div key={i} className="glass rounded-2xl p-6 glow-hover">
              <h3 className="font-display font-semibold text-white mb-2">{it.title}</h3>
              <p className="text-sm text-white/65">{it.detail}</p>
            </div>
          ))}
        </div>

        {/* GitHub dashboard */}
        <div id="github" className="mt-16 gradient-border p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"><Github size={20} /></div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">GitHub Activity</h3>
                <p className="text-xs text-white/55">@saki1205 · open source & personal projects</p>
              </div>
            </div>
            <a href="https://github.com/saki1205" target="_blank" rel="noreferrer" className="btn-ghost !py-2 !px-4 text-sm">
              <ExternalLink size={14} /> View Profile
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-2">
              <img
                src="https://github-readme-stats.vercel.app/api?username=saki1205&show_icons=true&theme=transparent&hide_border=true&title_color=00F5D4&icon_color=7B61FF&text_color=ffffff80&bg_color=00000000"
                alt="GitHub stats"
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-2">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=saki1205&layout=compact&theme=transparent&hide_border=true&title_color=00F5D4&text_color=ffffff80&bg_color=00000000"
                alt="Top languages"
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="md:col-span-2 rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-2">
              <img
                src="https://ghchart.rshah.org/00F5D4/saki1205"
                alt="GitHub contribution graph"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
