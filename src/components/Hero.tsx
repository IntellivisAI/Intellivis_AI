import { ArrowDownRight, ArrowRight, Bot, BrainCircuit, Check, Database, Mail, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 lg:flex lg:items-center lg:pt-24">
    <div className="hero-grid absolute inset-0" />
    <div className="absolute -right-48 top-8 h-[700px] w-[700px] rounded-full bg-cyan-300/[.1] blur-[170px]" />
    <div className="absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/[.07] blur-[150px]" />

    <div className="container relative mx-auto px-6 py-14 lg:py-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
        <div className="reveal text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-4 py-2 text-xs font-medium text-cyan-200">
            <Sparkles size={14} /> Crawl · Walk · Autonomous
          </div>
          <h1 className="text-balance text-[clamp(3.6rem,7vw,7.3rem)] font-semibold leading-[.9] tracking-[-0.067em] text-white">
            AI agents built to
            <span className="font-display block bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text pb-3 pr-3 text-transparent">move work forward.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl lg:mx-0">
            Intellivis designs focused agents that start by assisting, grow through real-world proof, and earn greater autonomy with your team in control.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#contact" className="button-primary group">Build an AI agent <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>
            <a href="#services" className="button-secondary">See our capabilities <ArrowDownRight size={17}/></a>
          </div>
          <p className="mt-5 text-sm text-slate-500">Our motto: autonomy is earned, not assumed.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-500 lg:justify-start">
            {['Start focused', 'Prove value', 'Earn autonomy'].map(item => <span key={item} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/[.05] text-cyan-300"><Check size={11}/></span>{item}</span>)}
          </div>
        </div>

        <div className="reveal reveal-delay mx-auto w-full max-w-[610px]">
          <div className="agent-visual" aria-label="AI agent system connected to business tools">
            <div className="agent-grid" />
            <div className="agent-glow" />
            <svg className="agent-lines" viewBox="0 0 600 560" aria-hidden="true">
              <path d="M300 280 C210 280 190 145 110 145"/><path d="M300 280 C390 280 410 145 490 145"/><path d="M300 280 C210 280 190 415 110 415"/><path d="M300 280 C390 280 410 415 490 415"/>
            </svg>

            <div className="agent-core">
              <div className="agent-core-ring"><div className="agent-core-icon"><BrainCircuit size={32}/></div></div>
              <p>Intellivis Agent</p><span>Reason · decide · assist</span>
            </div>

            <div className="agent-tool tool-one"><span><Mail size={17}/></span><div><small>Understands</small><strong>Messages</strong></div><i className="status-dot"/></div>
            <div className="agent-tool tool-two"><span><Database size={17}/></span><div><small>Connects to</small><strong>Your data</strong></div><i className="status-dot"/></div>
            <div className="agent-tool tool-three"><span><Zap size={17}/></span><div><small>Completes</small><strong>Next actions</strong></div><i className="status-dot"/></div>
            <div className="agent-tool tool-four"><span><ShieldCheck size={17}/></span><div><small>Waits for</small><strong>Your approval</strong></div><i className="status-dot"/></div>

            <div className="agent-caption"><Bot size={14}/><span>One focused agent. Connected to the work that matters.</span></div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[.07] bg-white/[.07] sm:grid-cols-3 lg:mt-20">
        <div className="hero-proof"><strong>01 · Crawl</strong><span>Observe, learn, and assist the team</span></div>
        <div className="hero-proof"><strong>02 · Walk</strong><span>Handle bounded tasks with approval</span></div>
        <div className="hero-proof"><strong>03 · Autonomous</strong><span>Act within proven rules and guardrails</span></div>
      </div>
    </div>
  </section>
);

export default Hero;
