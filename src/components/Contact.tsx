import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); setSending(true);
    try {
      const response = await fetch('https://formspree.io/f/xanjywno', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(formData) });
      if (!response.ok) throw new Error('Submission failed');
      setFormData({ name: '', email: '', message: '' });
      toast({ title: 'Message sent', description: 'Thanks—Intellivis will get back to you soon.' });
    } catch { toast({ title: 'Message not sent', description: 'Please email intellivisailabs@gmail.com instead.', variant: 'destructive' }); }
    finally { setSending(false); }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-indigo-500/10 p-7 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><div><p className="eyebrow">Start small</p><h2 className="section-title">Tell us what keeps slowing you down.</h2><p className="section-copy">You do not need a polished brief. Describe the repetitive task, who handles it, and what a better outcome would look like.</p><a href="mailto:intellivisailabs@gmail.com" className="mt-8 inline-flex items-center gap-3 text-white hover:text-cyan-200"><Mail size={19}/><span>intellivisailabs@gmail.com</span></a></div>
            <form onSubmit={submit} className="space-y-4" aria-label="Contact form"><div className="grid gap-4 sm:grid-cols-2"><label className="sr-only" htmlFor="name">Name</label><input id="name" name="name" required placeholder="Your name" value={formData.name} onChange={e => setFormData({...formData, name:e.target.value})} className="field"/><label className="sr-only" htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="Work email" value={formData.email} onChange={e => setFormData({...formData, email:e.target.value})} className="field"/></div><label className="sr-only" htmlFor="message">Project details</label><textarea id="message" name="message" required rows={6} placeholder="What process would you like to improve?" value={formData.message} onChange={e => setFormData({...formData, message:e.target.value})} className="field resize-none"/><button disabled={sending} className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:opacity-60">{sending ? 'Sending…' : 'Send your idea'} {!sending && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/>}</button><p className="text-center text-xs text-slate-500">No sales pitch. Just an honest conversation about whether AI can help.</p></form></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
