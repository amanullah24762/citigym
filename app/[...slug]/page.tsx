import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AboutPage, ArticlePage, BlogPage, ContactPage, FaqPage, GalleryPage, LegalPage, PricingPage, ServiceDetail, ServicesPage, TestimonialsPage } from '@/components/page-content';

const routes = [
  'about','services','strength-training','personal-coaching','group-classes','gallery','pricing','testimonials','blog','faq','contact','privacy','terms',
  'blog/train-smarter','blog/recovery-guide','blog/build-consistency'
] as const;

const meta: Record<string,{title:string;description:string}> = {
  about:{title:'About Us',description:'Meet the idea, values and coaching team behind Citi Gym in Citi Housing, Jhelum.'},
  services:{title:'Training & Services',description:'Explore strength training, personal coaching and group classes at Citi Gym.'},
  'strength-training':{title:'Strength Training',description:'Purpose-built strength equipment and progressive programming for every level.'},
  'personal-coaching':{title:'Personal Coaching',description:'One-to-one fitness coaching designed around your goals, body and schedule.'},
  'group-classes':{title:'Group Classes',description:'Coach-led strength, conditioning and mobility classes in Jhelum.'},
  gallery:{title:'Gallery',description:'Explore the premium strength floors and training spaces at Citi Gym.'},
  pricing:{title:'Memberships & Pricing',description:'Simple, flexible Citi Gym membership plans for every training goal.'},
  testimonials:{title:'Member Stories',description:'Read illustrative member stories from the Citi Gym community.'},
  blog:{title:'Fitness Journal',description:'Clear, practical guidance for smarter training, recovery and consistency.'},
  faq:{title:'Frequently Asked Questions',description:'Answers about Citi Gym trials, memberships, coaching and your first visit.'},
  contact:{title:'Contact & Free Trial',description:'Visit Citi Gym at XMV6+G36, Satellite Town, Jhelum or book your complimentary trial.'},
  privacy:{title:'Privacy Policy',description:'How Citi Gym handles information submitted through this demonstration website.'},
  terms:{title:'Terms & Conditions',description:'Terms and conditions for the Citi Gym demonstration website.'},
  'blog/train-smarter':{title:'Train Smarter: 4 Pillars of Progress',description:'A practical framework for building strength without burning out.'},
  'blog/recovery-guide':{title:'A Practical Recovery Guide',description:'Simple sleep, movement and nutrition habits that support training.'},
  'blog/build-consistency':{title:'How to Build Training Consistency',description:'Create a fitness routine that works even when motivation fades.'}
};

export function generateStaticParams(){return routes.map(route=>({slug:route.split('/')}))}
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{const {slug}=await params;const key=slug.join('/');return meta[key]??{title:'Page not found'};}

export default async function Page({params}:{params:Promise<{slug:string[]}>}){
  const {slug}=await params; const key=slug.join('/');
  switch(key){
    case 'about':return <AboutPage/>;
    case 'services':return <ServicesPage/>;
    case 'strength-training':return <ServiceDetail kind="strength"/>;
    case 'personal-coaching':return <ServiceDetail kind="coaching"/>;
    case 'group-classes':return <ServiceDetail kind="classes"/>;
    case 'gallery':return <GalleryPage/>;
    case 'pricing':return <PricingPage/>;
    case 'testimonials':return <TestimonialsPage/>;
    case 'blog':return <BlogPage/>;
    case 'blog/train-smarter':return <ArticlePage article="train-smarter"/>;
    case 'blog/recovery-guide':return <ArticlePage article="recovery-guide"/>;
    case 'blog/build-consistency':return <ArticlePage article="build-consistency"/>;
    case 'faq':return <FaqPage/>;
    case 'contact':return <ContactPage/>;
    case 'privacy':return <LegalPage type="privacy"/>;
    case 'terms':return <LegalPage type="terms"/>;
    default:notFound();
  }
}
