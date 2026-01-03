'use client';

import { Button } from '@/components/ui/button';
import { EnquiryForm } from '@/components/enquiry-form';
import Link from 'next/link';

export default function EnquiryPage() {
  
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Request a Quote</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Fill out your details below and tell us about your project requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <EnquiryForm />
        </div>

        <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Or browse our products to learn more.</p>
             <Button asChild>
              <Link href="/">Explore Products</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
