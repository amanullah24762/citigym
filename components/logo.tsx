import Image from 'next/image';

export function Logo({ compact = false }: { compact?: boolean }) {
  return <span className={`logo ${compact ? 'logoCompact' : ''}`}><Image src="/citi-gym-logo.svg" alt="Citi Gym" width={220} height={110} priority /></span>;
}
