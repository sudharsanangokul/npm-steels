import { products as allProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find(p => p.id === params.slug);

  if (!product) {
    notFound();
  }

  const productImage = PlaceHolderImages.find(img => img.id === product.id) || PlaceHolderImages.find(img => img.id === 'hr-steel-sheet');

  return (
    <div>
      <section className="relative h-64 md:h-80 flex items-center justify-center text-white">
        {productImage && (
            <Image
            src={productImage.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={productImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center p-4 animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">{product.name}</h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div>
                    <h2 className="font-headline text-2xl md:text-3xl font-bold">
                        {product.category}
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">{product.description}</p>

                    <div className="mt-12">
                        <h3 className="font-headline text-xl md:text-2xl font-bold text-red-600">
                           Specifications
                        </h3>
                        <div className="mt-4 border rounded-lg overflow-hidden">
                            <div className="w-full">
                                {Object.entries(product.specs).map(([key, value], index) => (
                                    <div key={key} className={cn("flex flex-col sm:flex-row", index % 2 === 0 ? 'bg-muted/50' : 'bg-background')}>
                                        <div className="p-4 font-semibold sm:w-1/3">{key}</div>
                                        <div className="p-4 pt-0 sm:pt-4">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
