import { ArrowUpRight, Github } from 'lucide-react';
import insightqImage from '../img/insightq.jpg';
import chatwithdbImage from '../img/chat.jpg';
import chatbotImage from '../img/chatbot.jpg';

const projects = [
  { title: 'InsightIQ', label: 'Open-source experiment', description: 'A lightweight NLP tool that turns long text into concise summaries and extracts the keywords that matter.', tags: ['Summarization', 'NLP'], image: insightqImage, source: 'https://github.com/IntellivisAI/InsightIQ' },
  { title: 'Business Analysis Assistant', label: 'Prototype', description: 'An exploratory conversational interface for organizing business questions and turning raw context into structured observations.', tags: ['Conversational AI', 'Analysis'], image: chatbotImage },
  { title: 'Chat with Database', label: 'Product research', description: 'An early natural-language interface for exploring database information without writing every query by hand.', tags: ['Data', 'Natural language'], image: chatwithdbImage },
];

const Projects = () => (
  <section id="projects" className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
    <div className="container mx-auto px-6">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">The Intellivis lab</p><h2 className="section-title max-w-2xl">Experiments that help us find what is worth building.</h2></div><p className="max-w-md leading-7 text-slate-400">These are works in progress—not inflated case studies. Each one tests a practical way people might work with AI.</p></div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map(project => <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#081321] transition hover:-translate-y-1 hover:border-cyan-300/30"><div className="relative aspect-[16/10] overflow-hidden bg-slate-900"><img src={project.image} alt={`${project.title} AI project preview`} loading="lazy" decoding="async" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"/><div className="absolute inset-0 bg-gradient-to-t from-[#081321] to-transparent"/><span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">{project.label}</span></div><div className="p-7"><h3 className="text-2xl font-medium text-white">{project.title}</h3><p className="mt-3 min-h-20 leading-7 text-slate-400">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>)}</div>{project.source ? <a href={project.source} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-medium text-cyan-300 hover:text-cyan-200"><Github size={17}/> View source <ArrowUpRight size={15}/></a> : <p className="mt-7 text-sm text-slate-500">Private prototype · Demo coming later</p>}</div></article>)}
      </div>
    </div>
  </section>
);

export default Projects;
