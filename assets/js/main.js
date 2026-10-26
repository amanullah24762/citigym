const pages = [
  ['Home','index.html'],['About','about.html'],['Services','services.html'],['Gallery','gallery.html'],['Pricing','pricing.html'],['Reviews','testimonials.html'],['Blog','blog.html'],['FAQ','faq.html'],['Contact','contact.html']
];

class SiteHeader extends HTMLElement {
  connectedCallback(){
    const current=(location.pathname.split('/').pop()||'index.html');
    this.innerHTML=`<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="container nav"><a class="brand" href="index.html" aria-label="Citi Gym home"><span class="brand-mark">CG</span><span>CITI GYM</span></a><nav class="nav-links" id="main-nav" aria-label="Primary navigation">${pages.map(([name,url])=>`<a href="${url}" class="${current===url?'active':''}">${name}</a>`).join('')}<a class="btn" href="contact.html">Start today <span class="arrow">→</span></a></nav><a class="btn" href="pricing.html">Join the club</a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Toggle menu"><span></span></button></div></header>`;
    const header=this.querySelector('.site-header'),button=this.querySelector('.menu-toggle'),nav=this.querySelector('.nav-links');
    const close=()=>{button.setAttribute('aria-expanded','false');nav.classList.remove('open');document.body.classList.remove('menu-open')};
    button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open)});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
    addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>24),{passive:true});
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback(){this.innerHTML=`<section class="cta"><div class="container cta-inner"><h2>YOUR STRONGEST CHAPTER STARTS HERE.</h2><a class="btn btn-dark" href="contact.html">Book a free tour <span class="arrow">→</span></a></div></section><footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark">CG</span><span>CITI GYM</span></a><p>Elevated training, expert coaching and a community built for people who are ready to move forward.</p></div><div class="footer-col"><h4>Explore</h4><a href="about.html">About us</a><a href="services.html">Services</a><a href="gallery.html">Gallery</a><a href="pricing.html">Memberships</a></div><div class="footer-col"><h4>Discover</h4><a href="testimonials.html">Member stories</a><a href="blog.html">Journal</a><a href="faq.html">FAQs</a><a href="contact.html">Contact</a></div><div class="footer-col"><h4>Visit</h4><a href="tel:+923001112484">+92 300 111 2484</a><a href="mailto:hello@citigym.pk">hello@citigym.pk</a><a href="contact.html">Gulberg III, Lahore</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Citi Gym. Demo website.</span><span>Train with intent. Live with strength.</span></div></div></footer><a class="whatsapp" href="https://wa.me/923001112484" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">WA</a><a class="mobile-call" href="tel:+923001112484">Call now · +92 300 111 2484</a>`}
}

customElements.define('site-header',SiteHeader);customElements.define('site-footer',SiteFooter);

document.addEventListener('DOMContentLoaded',()=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));
  document.querySelectorAll('.accordion-button').forEach(button=>button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';document.querySelectorAll('.accordion-button').forEach(item=>item.setAttribute('aria-expanded','false'));button.setAttribute('aria-expanded',String(!open))}));
  document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const status=form.querySelector('.form-status');status.classList.add('show');status.textContent='Thanks — your request is in. Our team will contact you shortly.';form.reset()}));
});
