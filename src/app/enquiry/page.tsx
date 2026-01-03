'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEnquiry } from '@/context/enquiry-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, ShoppingBag } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Product } from '@/lib/types';
import { EnquiryForm } from '@/components/enquiry-form';

const getProductImageUrl = (product: Product) => {
  const placeholder = PlaceHolderImages.find(p => p.id === product.id);
  return placeholder?.imageUrl || "https://picsum.photos/seed/default/600/400";
};

export default function EnquiryPage() {
  const { enquiryItems, updateQuantity, removeFromEnquiry, itemCount } = useEnquiry();

  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Your Enquiry List</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Review your selected products below and fill out your details to request a quote.
          </p>
        </div>

        {itemCount === 0 ? (
          <div className="text-center bg-background p-12 rounded-lg animate-in fade-in duration-500">
            <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your enquiry list is empty.</h2>
            <p className="text-muted-foreground mb-6">Browse our products to add items for a quote.</p>
            <Button asChild>
              <Link href="/">Explore Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-4 animate-in fade-in slide-in-from-left-12 duration-500">
              {enquiryItems.map(item => (
                <Card key={item.id} className="flex items-center p-4">
                  <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={getProductImageUrl(item)}
                      alt={item.name}
                      fill
                      className="object-cover"
                      data-ai-hint="steel sheet"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4 ml-4">
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10) || 1)}
                      className="w-16 h-10 text-center"
                    />
                    <Button variant="ghost" size="icon" onClick={() => removeFromEnquiry(item.id)}>
                      <Trash2 className="h-5 w-5 text-destructive" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="lg:col-span-1 animate-in fade-in slide-in-from-right-12 duration-500">
                <EnquiryForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
