import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/fade-in';
import { COMPANY_INFO } from '@/lib/constants';

export function CtaBanner() {
  const whatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20NTM%20Metals!`;

  return (
    <section className="bg-primary">
      <FadeIn>
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-accent/10 p-8 text-center md:p-12 lg:flex-row lg:text-left">
            <h2 className="font-headline text-3xl font-bold text-primary-foreground lg:text-4xl">
              Need High-Quality Steel Sheets? <br />
              <span className="text-accent">Contact NTM Metals Today!</span>
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="font-bold bg-green-500 hover:bg-green-600">
                <Link href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link href={`tel:${COMPANY_INFO.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
