import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, MapPin, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const { toast } = useToast();
  const [data, setData] = useState({ name: '', email: '', subject: '', message: '' });
  const [busy, setBusy] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(p => ({ ...p, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      toast({ title: 'Message sent', description: "Thanks for reaching out — I'll get back to you soon." });
      setData({ name: '', email: '', subject: '', message: '' });
      setBusy(false);
    }, 900);
  };

  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const Field = (id: string, label: string, type = 'text', placeholder = '') => (
    <div>
      <label htmlFor={id} className="block text-xs font-mono text-white/55 mb-1.5">{label}</label>
      <input
        id={id} name={id} type={type} required value={(data as any)[id]} onChange={onChange} placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-neon-mint/50 transition"
      />
    </div>
  );

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="relative py-28">
      <div className="aurora aurora-3 w-[400px] h-[400px] left-1/4 bottom-0 opacity-20" />
      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 section-transition ${isVisible ? 'visible' : ''}`}>
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="chip mb-4 mx-auto">Contact</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Let's <span className="gradient-text">build something</span></h2>
          <p className="mt-4 text-white/60">Have a role, idea, or collaboration in mind? My inbox is open.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="gradient-border p-8 flex flex-col gap-5">
            <h3 className="font-display text-xl font-semibold text-white">Reach out directly</h3>
            <a href="mailto:saketh2005mothe@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-neon-mint/40 transition group">
              <div className="w-10 h-10 rounded-lg bg-neon-mint/10 text-neon-mint flex items-center justify-center"><Mail size={18} /></div>
              <div className="text-sm"><div className="text-white">Email</div><div className="text-white/55 text-xs">saketh2005mothe@gmail.com</div></div>
            </a>
            <a href="https://linkedin.com/in/saketh-mothe" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-neon-blue/40 transition">
              <div className="w-10 h-10 rounded-lg bg-neon-blue/10 text-neon-blue flex items-center justify-center"><Linkedin size={18} /></div>
              <div className="text-sm"><div className="text-white">LinkedIn</div><div className="text-white/55 text-xs">linkedin.com/in/saketh-mothe</div></div>
            </a>
            <a href="https://github.com/saki1205" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-neon-violet/40 transition">
              <div className="w-10 h-10 rounded-lg bg-neon-violet/10 text-neon-violet flex items-center justify-center"><Github size={18} /></div>
              <div className="text-sm"><div className="text-white">GitHub</div><div className="text-white/55 text-xs">github.com/saki1205</div></div>
            </a>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-white/5 text-white/70 flex items-center justify-center"><MapPin size={18} /></div>
              <div className="text-sm"><div className="text-white">Based in</div><div className="text-white/55 text-xs">Hyderabad, India</div></div>
            </div>
            <a href="/Saketh_Mothe_Resume.pdf" download className="btn-primary mt-2 justify-center">
              <Download size={16} /> Download Resume
            </a>
          </div>

          <form onSubmit={onSubmit} className="gradient-border p-8 space-y-4">
            <h3 className="font-display text-xl font-semibold text-white mb-2">Send a message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {Field('name', 'Name', 'text', 'Jane Doe')}
              {Field('email', 'Email', 'email', 'jane@company.com')}
            </div>
            {Field('subject', 'Subject', 'text', 'Role · Collaboration · Idea')}
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-white/55 mb-1.5">Message</label>
              <textarea
                id="message" name="message" required rows={5} value={data.message} onChange={onChange}
                placeholder="Tell me a little about the project or role…"
                className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-neon-mint/50 transition resize-none"
              />
            </div>
            <button type="submit" disabled={busy} className="btn-primary w-full justify-center disabled:opacity-60">
              {busy ? 'Sending…' : <>Send message <Send size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
