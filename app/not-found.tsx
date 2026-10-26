import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function NotFound(){return <main id="main" className="error"><div><div className="errorCode">404</div><h1>Wrong turn.</h1><p>This page has moved, but your next session does not have to. Head back home or explore our training options.</p><Link className="button" href="/">Back to home <ArrowRight weight="bold"/></Link></div></main>}
