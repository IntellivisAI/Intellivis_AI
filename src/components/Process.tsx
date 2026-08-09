import { ArrowRight, Bot, Footprints, ShieldCheck } from 'lucide-react';

const phases = [
  {
    number: '01', label: 'Crawl', icon: Footprints,
    headline: 'Learn the work before changing it.',
    description: 'We map one workflow, connect the minimum context, and let the agent observe or assist without acting on its own.',
    points: ['One defined use case', 'Recommendations and drafts', 'Every output reviewed'],
    state: 'Assist',
  },
  {
    number: '02', label: 'Walk', icon: Bot,
    headline: 'Give the agent bounded responsibility.',
    description: 'Once the workflow is understood, the agent completes repeatable steps while people approve sensitive or important actions.',
    points: ['Approved tools and actions', 'Human checkpoints', 'Measured quality and reliability'],
    state: 'Collaborate',
  },
  {
    number: '03', label: 'Autonomous', icon: ShieldCheck,
    headline: 'Expand autonomy only after proof.',
    description: 'A proven agent can act independently inside clear limits, with monitoring, audit history, and an immediate path back to human control.',
    points: ['Explicit guardrails', 'Continuous monitoring', 'Pause and override controls'],
    state: 'Operate',
  },
];

const Process = () => (
  <section id="process" className="relative overflow-hidden py-24 sm:py-32">
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[.025] blur-[120px]" />
    <div className="container relative mx-auto px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow">Our operating philosophy</p>
        <h2 className="section-title">Crawl. Walk. <span className="font-display text-cyan-200">Then autonomous.</span></h2>
        <p className="section-copy mx-auto">We do not begin by handing an AI agent the keys. Responsibility grows only when the system demonstrates that it is useful, reliable, and safe.</p>
        <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[.04] px-4 py-2 text-sm font-medium text-cyan-200">Autonomy is earned, not assumed.</div>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent lg:block" />
        {phases.map((phase, index) => <article key={phase.label} className="method-card group">
          <div className="relative z-10 flex items-center justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[.05] text-cyan-300"><phase.icon size={22}/></span><span className="font-mono text-[10px] uppercase tracking-[.17em] text-slate-600">Phase {phase.number}</span></div>
          <div className="mt-9 flex items-center gap-3"><span className="text-sm font-semibold uppercase tracking-[.16em] text-cyan-300">{phase.label}</span>{index < 2 && <ArrowRight size={15} className="ml-auto hidden text-slate-700 lg:block"/>}</div>
          <h3 className="mt-4 text-2xl font-medium leading-8 text-white">{phase.headline}</h3>
          <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">{phase.description}</p>
          <div className="mt-7 space-y-3 border-t border-white/[.07] pt-6">{phase.points.map(point=><div key={point} className="flex items-center gap-2.5 text-xs text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70"/>{point}</div>)}</div>
          <div className="mt-7 flex items-center justify-between rounded-xl bg-white/[.025] px-3.5 py-3"><span className="text-[10px] uppercase tracking-[.13em] text-slate-600">Agent mode</span><strong className="text-xs font-medium text-white">{phase.state}</strong></div>
        </article>)}
      </div>
    </div>
  </section>
);

export default Process;
