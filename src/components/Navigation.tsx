import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';

const items = [{href:'#services',label:'Expertise'},{href:'#process',label:'Approach'},{href:'#projects',label:'Work'},{href:'#about',label:'Studio'}];

const Navigation = () => {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>24);fn();window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)},[]);
  return <nav aria-label="Main navigation" className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
    <div className={`mx-auto flex h-16 max-w-[1380px] items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5 ${scrolled?'border border-white/10 bg-[#07101e]/80 shadow-2xl shadow-black/20 backdrop-blur-xl':'border border-transparent'}`}>
      <a href="#home" aria-label="Intellivis home" className="flex items-center gap-2.5"><BrandMark className="h-9 w-9"/><span className="text-[17px] font-semibold tracking-[-.03em] text-white">Intellivis<span className="text-cyan-300">.AI</span></span></a>
      <div className="hidden items-center gap-1 rounded-full border border-white/[.07] bg-white/[.03] p-1 md:flex">{items.map(item=><a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/[.06] hover:text-white">{item.label}</a>)}</div>
      <a href="#contact" className="hidden items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-200 md:flex">Let's talk <ArrowUpRight size={16}/></a>
      <button aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)} className="text-white md:hidden">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="mx-auto mt-2 max-w-[1380px] rounded-2xl border border-white/10 bg-[#07101e]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">{items.map(item=><a key={item.href} href={item.href} onClick={()=>setOpen(false)} className="block border-b border-white/[.06] py-4 text-slate-200">{item.label}</a>)}<a href="#contact" onClick={()=>setOpen(false)} className="button-primary mt-5 w-full">Start a conversation <ArrowUpRight size={16}/></a></div>}
  </nav>
};
export default Navigation;
