import { cn } from '@/lib/utils';
import { FadeIn } from './fade-in';

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <FadeIn className={cn("flex flex-col items-center text-center", className)}>
      <h2 className="font-headline text-sm font-semibold uppercase tracking-widest text-accent">
        {subtitle}
      </h2>
      <p className="mt-2 font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {title}
      </p>
    </FadeIn>
  );
}
