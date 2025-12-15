import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] bg-cover bg-center bg-no-repeat md:h-[70vh] lg:h-screen"
             style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <div className="bg-red-600/90 p-4 md:p-6">
          <h1 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            India&apos;s Only Steel Wholesalers to Maintain Stocks of CR Sheets from 0.35mm & HR Plates from 1.6mm Above & HR Slabs Upto 600mm Thickness with UT & TC Pass
          </h1>
        </div>
        <div className="mt-4 bg-gray-800/80 p-2 md:p-4">
          <p className="max-w-xl text-sm font-light text-white sm:text-base md:text-lg lg:max-w-3xl lg:text-xl">
            Importers, Indenting Agents, Super Stockists & Wholesale Dealers of All Kinds of Iron & Steel Raw Materials
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="font-bold">
            <Link href="/products">Our Products</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold text-white">
            <Link href="/request-quote">Request Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
