import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ProductHighlights() {
  const highlightedProducts = products.slice(0, 6);

  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <SectionHeader 
          title="Our Core Products"
          subtitle="A Wide Range of Quality Steel"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
          {highlightedProducts.map((product, index) => (
            <FadeIn key={product.id} delay={index * 100}>
              <Link href={`/products#${product.slug}`} className="group block">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="flex flex-col items-center p-4 text-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint="steel product"
                      />
                    </div>
                    <h3 className="mt-4 font-headline text-base font-semibold text-primary">
                      {product.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="font-bold border-2">
            <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
