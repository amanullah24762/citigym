'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { ArrowRight, List, Phone, WhatsappLogo, X } from '@phosphor-icons/react';
import { Logo } from './logo';

const primary = [
  ['Home','/'],['About','/about'],['Training','/services'],['Gallery','/gallery'],['Memberships','/pricing'],['Stories','/testimonials'],['Journal','/blog'],['FAQ','/faq'],['Contact','/contact']
];

const allPages = [
  ...primary.slice(1),
  ['Strength training','/strength-training'],['Personal coaching','/personal-coaching'],['Group classes','/group-classes'],
  ['Train smarter','/blog/train-smarter'],['Recovery guide','/blog/recovery-guide'],['Build consistency','/blog/build-consistency'],
  ['Privacy policy','/privacy'],['Terms & conditions','/terms']
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen,setMenuOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [quickSent,setQuickSent] = useState(false);
  useEffect(()=>{ const onScroll=()=>setScrolled(window.scrollY>20); onScroll(); window.addEventListener('scroll',onScroll,{passive:true}); return()=>window.removeEventListener('scroll',onScroll); },[]);
  useEffect(()=>{ setMenuOpen(false); document.body.classList.remove('menuOpen'); },[pathname]);
  const toggle=()=>setMenuOpen(value=>{ document.body.classList.toggle('menuOpen',!value); return !value; });
  return <>
    <a className="skipLink" href="#main">Skip to content</a>
    <header className={`header ${scrolled?'scrolled':''}`}>
      <div className="container nav">
        <Link href="/" aria-label="Citi Gym home"><Logo compact /></Link>
        <nav className={`navLinks ${menuOpen?'open':''}`} aria-label="Primary navigation">
          {primary.map(([label,href])=><Link key={href} className={pathname===href?'active':''} href={href}>{label}</Link>)}
          <Link className="button navCta" href="/contact">Free trial <ArrowRight weight="bold" /></Link>
        </nav>
        <Link className="button desktopCta" href="/contact">Free trial <ArrowRight weight="bold" /></Link>
        <button className="menuButton" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={toggle}>{menuOpen?<X size={27}/>:<List size={29}/>}</button>
      </div>
    </header>
    {children}
    <section className="bigCta"><div className="container ctaInner"><div><span className="kicker dark">Ready when you are</span><h2>Your strongest chapter starts here.</h2></div><form className="quickForm" onSubmit={event=>{event.preventDefault();setQuickSent(true);event.currentTarget.reset()}}><label><span>Name</span><input aria-label="Name" name="name" required placeholder="Your name"/></label><label><span>Phone</span><input aria-label="Phone" name="phone" type="tel" required placeholder="03xx xxx xxxx"/></label><button className="button buttonDark" type="submit">{quickSent?'Request sent':'Book a free tour'} <ArrowRight weight="bold" /></button></form></div></section>
    <footer className="footer"><div className="container">
      <div className="footerTop"><div className="footerBrand"><Logo/><p>Elevated training, expert coaching and a community built to move forward.</p><a href="mailto:hello@citigym.pk">hello@citigym.pk</a></div><div className="footerLinks">{allPages.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div></div>
      <div className="footerBottom"><span>© {new Date().getFullYear()} Citi Gym. Demo website.</span><span>XMV6+G36, Satellite Town, Jhelum · +92 300 111 2484</span></div>
    </div></footer>
    <a className="whatsapp" href="https://wa.me/923001112484" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsappLogo size={27} weight="fill" /></a>
    <a className="mobileCall" href="tel:+923001112484"><Phone size={20} weight="fill"/> Call now · +92 300 111 2484</a>
  </>;
}

export function DemoForm({ type='trial' }: { type?: string }) {
  const [sent,setSent]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setSent(true);event.currentTarget.reset()}
  return <form className="formCard" onSubmit={submit}><span className="kicker">{type==='contact'?'Send a message':'Claim your pass'}</span><h3>{type==='contact'?'Let’s talk':'Your first session is on us.'}</h3><div className="formGrid"><label>Full name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" required type="tel" placeholder="03xx xxx xxxx" /></label></div><label>Email<input name="email" required type="email" placeholder="you@email.com" /></label><label>What are you training for?<select name="goal"><option>Build strength</option><option>Lose body fat</option><option>Improve fitness</option><option>Train with a coach</option></select></label><label>Message<textarea name="message" placeholder="Tell us a little about your goals" /></label><button className="button buttonDark" type="submit">Send request <ArrowRight weight="bold"/></button>{sent&&<p className="success" role="status">Thanks — the Citi Gym team will contact you shortly.</p>}</form>
}

export function Accordion({ items }: { items: [string,string][] }) {
  const [active,setActive]=useState(0);
  return <div className="accordion">{items.map(([question,answer],index)=><div className="accordionItem" key={question}><button aria-expanded={active===index} onClick={()=>setActive(active===index?-1:index)}><span>{question}</span><span>{active===index?'−':'+'}</span></button><div className={`answer ${active===index?'open':''}`}><p>{answer}</p></div></div>)}</div>
}
