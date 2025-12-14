import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-full h-full', className)}>
      <Image
        src="/images/logo.jpg"
        alt="NTM Metals Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
