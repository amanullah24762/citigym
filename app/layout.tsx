import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

const display = Barlow_Condensed({ subsets: ['latin'], variable: '--font-display', weight: ['400','500','600'] });
const body = Manrope({ subsets: ['latin'], variable: '--font-body', weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://citigym.pk'),
  title: { default: 'Citi Gym | Built for More', template: '%s | Citi Gym' },
  description: 'A premium training club in Citi Housing, Jhelum for strength, performance and everyday confidence.',
  openGraph: { title: 'Citi Gym', description: 'Train with intent. Live with strength.', images: ['/images/citi-gym-hero.png'], type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}><SiteShell>{children}</SiteShell></body></html>;
}
