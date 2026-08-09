import { Github, Instagram } from 'lucide-react';
import BrandMark from './BrandMark';

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="container mx-auto flex flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
      <div><div className="flex items-center gap-3"><BrandMark className="h-9 w-9"/><p className="text-lg font-semibold text-white">Intellivis<span className="text-cyan-300">.AI</span></p></div><p className="mt-2 text-sm text-slate-500">Human-guided agents. Autonomy earned.</p></div>
      <div className="flex items-center gap-6 text-sm text-slate-400"><a href="#services" className="hover:text-white">Capabilities</a><a href="#projects" className="hover:text-white">Lab</a><a href="https://github.com/IntellivisAI" target="_blank" rel="noreferrer" aria-label="Intellivis on GitHub" className="hover:text-white"><Github size={19}/></a><a href="https://www.instagram.com/tech_mutant/" target="_blank" rel="noreferrer" aria-label="Tech Mutant on Instagram" className="hover:text-white"><Instagram size={19}/></a></div>
      <p className="text-sm text-slate-600">© {new Date().getFullYear()} Intellivis.AI</p>
    </div>
  </footer>
);

export default Footer;
