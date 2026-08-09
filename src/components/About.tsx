import { ArrowUpRight } from 'lucide-react';
import profileImage from '../img/founder-portrait.jpg';

const About = () => (
  <section id="about" className="py-24 sm:py-32">
    <div className="container mx-auto px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 lg:mx-0">
          <img src={profileImage} alt="Founder of Intellivis.AI, an applied AI agent studio" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[1.4rem] object-cover grayscale transition duration-500 hover:grayscale-0" />
          <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur"><p className="font-medium text-white">Founder-led AI studio</p><p className="mt-1 text-sm text-slate-400">Learning in public. Building with purpose.</p></div>
        </div>
        <div><p className="eyebrow">Why Intellivis</p><h2 className="section-title">A focused studio with a disciplined path to autonomy.</h2><p className="section-copy">Intellivis builds human-guided AI agents for real workflows. We start small enough to understand the work, validate every important assumption, and give an agent more responsibility only after it earns trust.</p><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">That is what Crawl, Walk, Autonomous means in practice: practical progress, visible controls, and technology that remains accountable to the people using it.</p><a href="https://github.com/IntellivisAI" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200">Follow the work on GitHub <ArrowUpRight size={17}/></a></div>
      </div>
    </div>
  </section>
);

export default About;
