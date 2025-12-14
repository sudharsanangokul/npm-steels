'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Plus, Check } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEnquiry } from '@/contexts/enquiry-context';
import { cn } from '@/lib/utils';

function ProductCardActions({ product }: { product: Product }) {
  const { addToEnquiry } = useEnquiry();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToEnquiry(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="flex w-full gap-2">
      <Button 
        onClick={handleAddToCart} 
        className={cn("w-full font-bold", isAdded && "bg-green-600 hover:bg-green-700")}
        disabled={isAdded}
      >
        {isAdded ? (
          <>
            <Check className="mr-2 h-5 w-5" /> Added
          </>
        ) : (
          <>
            <Plus className="mr-2 h-5 w-5" /> Add to Enquiry
          </>
        )}
      </Button>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card id={product.slug} className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          data-ai-hint="steel product"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm">
        <p className="text-muted-foreground">{product.description}</p>
        <div>
            <Badge variant="secondary">Thickness: {product.availableThickness}</Badge>
        </div>
        <div>
            <Badge variant="secondary">Grade: {product.materialGrade}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <ProductCardActions product={product} />
      </CardFooter>
    </Card>
  );
}
