import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center font-headline", className)}>
      <svg width="100%" height="100%" viewBox="0 0 150 40" className="text-primary">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="30"
          fontFamily="var(--font-poppins), sans-serif"
          fontSize="30"
          fontWeight="800"
          fill="url(#logoGradient)"
          letterSpacing="-1"
        >
          NTM
        </text>
        <text
          x="80"
          y="30"
          fontFamily="var(--font-poppins), sans-serif"
          fontSize="30"
          fontWeight="300"
          fill="currentColor"
          letterSpacing="-0.5"
        >
          Metals
        </text>
      </svg>
    </div>
  );
}
