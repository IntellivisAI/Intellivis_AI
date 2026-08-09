import { Bot, Braces, Database, Workflow } from 'lucide-react';

const services = [
  { icon: Bot, number: '01', title: 'Focused AI agents', description: 'Purpose-built agents for one defined job, introduced through our Crawl, Walk, Autonomous approach.' },
  { icon: Workflow, number: '02', title: 'Workflow automation', description: 'Connect repeatable steps across inboxes, documents, spreadsheets, and business tools.' },
  { icon: Database, number: '03', title: 'Business data assistants', description: 'Ask questions across company data and receive traceable answers, summaries, and reports.' },
  { icon: Braces, number: '04', title: 'Rapid prototypes', description: 'Turn an early idea into a testable web product before committing time and money to a large build.' },
];

const Services = () => (
  <section id="services" className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div><p className="eyebrow">AI agent capabilities</p><h2 className="section-title">Useful agents, built around the way work actually happens.</h2><p className="section-copy">We begin with one bottleneck, build the smallest agent that can help, and expand its responsibility only after it proves useful and reliable.</p></div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {services.map(service => <article key={service.title} className="group bg-[#081321] p-7 transition hover:bg-[#0b1929] sm:p-8"><div className="mb-10 flex items-center justify-between"><service.icon size={24} className="text-cyan-300"/><span className="text-sm text-slate-600">{service.number}</span></div><h3 className="text-xl font-medium text-white">{service.title}</h3><p className="mt-3 leading-7 text-slate-400">{service.description}</p></article>)}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
