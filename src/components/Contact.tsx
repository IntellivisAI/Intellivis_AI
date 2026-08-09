import { ArrowUpRight, Check, Clock3, Instagram, Mail, MessageSquareText } from 'lucide-react';

const emailSubject = encodeURIComponent('AI agent project enquiry — Intellivis.AI');
const emailBody = encodeURIComponent(`Hi Intellivis,

I would like to discuss an AI agent or workflow automation project.

Business / team:

Workflow I want to improve:

How it works today:

Main problem or bottleneck:

Tools or data involved:

What a successful outcome would look like:

Timeline (if any):

Additional context:

Thank you.`);

const mailto = `mailto:intellivisailabs@gmail.com?subject=${emailSubject}&body=${emailBody}`;

const requirements = [
  'The workflow or repetitive task you want to improve',
  'Who currently handles it and how often it happens',
  'The tools, documents, or data involved',
  'What a useful outcome would look like for your team',
];

const Contact = () => (
  <section id="contact" className="py-24 sm:py-32">
    <div className="container mx-auto px-6">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[.09] via-[#0b1828] to-indigo-500/[.08] p-7 sm:p-12 lg:p-16">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-300/[.07] blur-[90px]"/>
        <div className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="section-title">Bring us the workflow that keeps getting in the way.</h2>
            <p className="section-copy">A short, honest description is enough. We’ll review the problem and tell you whether an AI agent is a sensible fit.</p>
            <div className="mt-9 flex flex-col items-start gap-3">
              <a href={mailto} className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-cyan-200 px-7 font-semibold text-slate-950 transition hover:bg-white">
                <Mail size={18}/> Email your requirements <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
              </a>
              <a
                href="https://www.instagram.com/tech_mutant/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Intellivis AI on Instagram at tech_mutant"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] py-2 pl-2 pr-4 text-sm text-slate-300 transition hover:border-pink-400/25 hover:bg-white/[0.06] hover:text-white"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500/20 to-orange-400/20 text-pink-300">
                  <Instagram size={15}/>
                </span>
                <span className="text-slate-400 transition group-hover:text-slate-300">Instagram</span>
                <span className="font-medium text-white">@tech_mutant</span>
                <ArrowUpRight size={15} className="text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink-300"/>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/[.09] bg-[#07101e]/65 p-6 backdrop-blur sm:p-8">
            <div className="flex items-start justify-between gap-5 border-b border-white/[.07] pb-6">
              <div><p className="text-xs font-medium uppercase tracking-[.16em] text-cyan-300">What to include</p><h3 className="mt-2 text-xl font-medium text-white">Help us understand the work.</h3></div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-300/[.08] text-cyan-300"><MessageSquareText size={19}/></span>
            </div>
            <div className="mt-6 space-y-4">{requirements.map(item => <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-cyan-300/20 text-cyan-300"><Check size={11}/></span>{item}</div>)}</div>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/[.07] bg-white/[.025] p-4"><Clock3 size={17} className="mt-0.5 shrink-0 text-slate-500"/><p className="text-xs leading-5 text-slate-500">You do not need a technical specification. Please avoid sending passwords, API keys, private customer data, or other sensitive information by email.</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
