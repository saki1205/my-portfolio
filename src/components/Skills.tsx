import React from 'react';
import { Code2, Layout, Server, Database, Brain, Wrench } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const groups = [
  { icon: Code2, title: 'Programming', color: 'from-neon-mint to-neon-blue', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'] },
  { icon: Layout, title: 'Frontend', color: 'from-neon-blue to-neon-violet', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
  { icon: Server, title: 'Backend', color: 'from-neon-violet to-neon-mint', items: ['Node.js', 'Express', 'REST APIs', 'Flask'] },
  { icon: Database, title: 'Databases', color: 'from-neon-mint to-neon-violet', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { icon: Brain, title: 'AI & ML', color: 'from-neon-blue to-neon-mint', items: ['OpenAI APIs', 'LLMs', 'RAG', 'FAISS', 'Vector DBs', 'NLP', 'Prompt Engineering', 'Embeddings', 'Agentic AI'] },
  { icon: Wrench, title: 'Tools', color: 'from-neon-violet to-neon-blue', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'GCP', 'VS Code'] },
];

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>} className="relative py-28">
      <div className="absolute inset-0 bg-dotted opacity-40" />
      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 section-transition ${isVisible ? 'visible' : ''}`}>
        <div className="mb-14 max-w-2xl">
          <div className="chip mb-4">Tech Stack</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">The tools I <span className="gradient-text">build with</span></h2>
          <p className="mt-4 text-white/60">A focused toolkit for shipping AI-powered, production-grade software.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <div key={i} className="gradient-border p-6 glow-hover">
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${g.color} mb-4`}>
                <g.icon size={20} className="text-black" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">{g.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {g.items.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/80 hover:border-neon-mint/40 hover:text-neon-mint transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
