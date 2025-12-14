import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden p-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
        <FadeIn>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Premium Steel Sheets & Precision Cutting
            </h1>
        </FadeIn>
        <FadeIn delay={200}>
            <p className="mt-6 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
            Your trusted supplier for HR sheets, CR sheets, GI sheets, SS sheets, checker plates, and custom metal cutting solutions.
            </p>
        </FadeIn>
        <FadeIn delay={400}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="font-bold">
                <Link href="/products">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link href="/request-quote">Request Quote</Link>
            </Button>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}
