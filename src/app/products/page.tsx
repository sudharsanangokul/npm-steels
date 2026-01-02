'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEnquiry } from '@/context/enquiry-context';
import type { Product } from '@/lib/types';
import { PlusCircle } from 'lucide-react';

const getProductImageUrl = (product: Product) => {
  const placeholder = PlaceHolderImages.find(p => p.id === product.id);
  return placeholder?.imageUrl || "https://picsum.photos/seed/default/600/400";
};

export default function ProductsPage() {
  const { addToEnquiry } = useEnquiry();

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Product Catalog</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Explore our comprehensive range of high-quality steel sheets. Add products to your list for a customized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-12" style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative h-56 w-full">
                <Image
                  src={getProductImageUrl(product)}
                  alt={product.name}
                  fill
                  className="object-cover"
                  data-ai-hint="steel sheet"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm font-semibold">View Specifications</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <li key={key}>
                            <span className="font-semibold text-foreground">{key}:</span> {value}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter>
                <Button className="w-full font-semibold" onClick={() => addToEnquiry(product)}>
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Add to Enquiry
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
