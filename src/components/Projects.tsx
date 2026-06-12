import React, { useMemo, useState } from 'react';
import { Github, ExternalLink, Search, Sparkles, Brain, Shield, Bot, Heart, Cpu, Wifi, Database, ScanLine, type LucideIcon } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type Project = {
  title: string;
  description: string;
  date?: string;
  tags: string[];
  icon: LucideIcon;
  github?: string;
  live?: string;
  featured?: boolean;
  category: 'AI' | 'Web' | 'Systems' | 'ML';
};

const projects: Project[] = [
  {
    title: 'OUTREACH-AI',
    description: 'AI-powered hyper-personalization engine for outbound outreach — detects latent intent from digital signals, generates personalized cadences, and recommends smart send-times.',
    tags: ['Python', 'OpenAI', 'FAISS', 'MongoDB', 'NLP', 'AI Agents'],
    icon: Bot, category: 'AI',
  },
  {
    title: 'Hybrid Analysis Platform',
    description: 'AI-assisted security platform that aggregates threat intel, analyzes malware behavior, scores risk, and auto-generates security reports.',
    tags: ['Python', 'LLMs', 'Security', 'APIs'],
    icon: Shield, featured: true, category: 'AI',
  },
  {
    title: 'AI Personal Assistant',
    description: 'Multi-functional AI agent that handles real-world tasks — travel, bookings, calendar, shopping, reminders, and communication workflows.',
    tags: ['LLMs', 'Automation', 'AI Agents', 'APIs'],
    icon: Sparkles, category: 'AI',
  },
  {
    title: 'Apollo 24/7 Clone',
    description: 'Full-stack healthcare platform with doctor discovery, filtering, REST APIs, dynamic routing, and an SEO-optimized responsive UI.',
    tags: ['Next.js', 'React', 'Node.js'],
    icon: Heart, category: 'Web',
  },
  {
    title: 'Agentic AI for Autonomous Research',
    description: 'Multi-step reasoning agents that collect, analyze, and synthesize knowledge from web + documents using embeddings and semantic search.',
    date: 'Sep 2025 – Jan 2026',
    tags: ['Python', 'LLMs', 'Vector DBs', 'Web Scraping'],
    icon: Brain, featured: true, category: 'AI',
  },
  {
    title: 'AI-Enhanced Static Analysis',
    description: 'Security vulnerability detection pipeline combining AST parsing with LLM reasoning to catch insecure patterns beyond rule-based scanners.',
    date: 'Jan 2025 – Ongoing',
    tags: ['Python', 'AST', 'LLMs', 'Security'],
    icon: ScanLine, featured: true, category: 'AI',
  },
  {
    title: 'House Pricing Predictor',
    description: 'Streamlit web app predicting house prices using Linear Regression and Random Forest based on area, locality, and amenities.',
    date: 'Jan – Mar 2024',
    tags: ['Python', 'Streamlit', 'Scikit-learn'],
    icon: Database, github: 'https://github.com/saki1205/House-pricing', category: 'ML',
  },
  {
    title: 'Fake Currency Detection',
    description: 'Image-processing pipeline that detects counterfeit currency to safeguard financial transactions and reduce manual inspection error.',
    date: 'Jun – Oct 2024',
    tags: ['Python', 'OpenCV', 'Image Processing'],
    icon: Shield, featured: true, github: 'https://github.com/saki1205/Fake-Currency-Detection-System', category: 'ML',
  },
  {
    title: 'Task Management System',
    description: 'Full-stack task tracker with auth, task creation, and progress workflows for organized project execution.',
    date: 'Sept 2023',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: Cpu, github: 'https://github.com/saki1205/task-management-system', category: 'Web',
  },
  {
    title: 'WiFi Controlled Car (ESP8266)',
    description: 'IoT control system using ESP8266 + DC motors with a web interface for wireless remote operation.',
    date: 'Aug 2023',
    tags: ['ESP8266', 'Arduino', 'IoT'],
    icon: Wifi, category: 'Systems',
  },
];

const FILTERS = ['All', 'AI', 'Web', 'ML', 'Systems'] as const;

const ProjectCard = ({ p, featured = false }: { p: Project; featured?: boolean }) => {
  const Icon = p.icon;
  return (
    <article className={`relative gradient-border p-6 glow-hover h-full flex flex-col ${featured ? 'min-h-[280px]' : ''}`}>
      {featured && (
        <span className="absolute top-4 right-4 chip !text-[10px] !py-0.5 border-neon-mint/40 text-neon-mint">
          <Sparkles size={10} /> Featured
        </span>
      )}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-mint/20 to-neon-violet/20 border border-white/10 flex items-center justify-center text-neon-mint">
          <Icon size={22} />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-white leading-tight">{p.title}</h3>
          {p.date && <p className="text-xs text-white/45 font-mono mt-0.5">{p.date}</p>}
        </div>
      </div>
      <p className="text-sm text-white/65 leading-relaxed flex-grow">{p.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {p.tags.map(t => (
          <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70">{t}</span>
        ))}
      </div>
      {(p.github || p.live) && (
        <div className="flex gap-3 mt-5 pt-4 border-t border-white/5">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-neon-mint transition">
              <Github size={14} /> Code
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-neon-mint transition">
              <ExternalLink size={14} /> Live
            </a>
          )}
        </div>
      )}
    </article>
  );
};

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });
  const [filter, setFilter] = useState<typeof FILTERS[number]>('All');
  const [query, setQuery] = useState('');

  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  const filteredOthers = useMemo(() => {
    return others.filter(p => {
      const matchesFilter = filter === 'All' || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query, others]);

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} className="relative py-28">
      <div className="aurora aurora-1 w-[420px] h-[420px] right-0 top-20 opacity-20" />
      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 section-transition ${isVisible ? 'visible' : ''}`}>
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="chip mb-4">Selected Work</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              Featured <span className="gradient-text">AI Projects</span>
            </h2>
            <p className="mt-4 text-white/60">Production-minded systems where AI does the heavy lifting.</p>
          </div>
          <a href="https://github.com/saki1205" target="_blank" rel="noreferrer" className="btn-ghost self-start md:self-end">
            <Github size={16} /> All on GitHub
          </a>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((p, i) => <ProjectCard key={i} p={p} featured />)}
        </div>

        {/* Other projects */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h3 className="font-display text-2xl font-bold">Other Projects</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search projects…"
                  className="pl-8 pr-3 py-1.5 text-sm rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-neon-mint/50 w-44"
                />
              </div>
              <div className="flex gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10">
                {FILTERS.map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1 text-xs rounded-full transition ${filter === f ? 'bg-neon-mint text-black font-medium' : 'text-white/70 hover:text-white'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredOthers.map((p, i) => <ProjectCard key={i} p={p} />)}
          </div>
          {filteredOthers.length === 0 && (
            <p className="text-center text-white/50 py-12">No projects match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
