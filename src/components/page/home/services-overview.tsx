import Link from 'next/link';
import { services } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { SectionHeader } from '@/components/section-header';

export function ServicesOverview() {
  return (
    <section>
      <div className="container mx-auto">
        <SectionHeader
          title="Precision Fabrication Services"
          subtitle="From Cutting to Assembly"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0,3).map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
                <Card className="flex h-full flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-4 rounded-full bg-accent/10 p-4 text-accent">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary">{service.title}</h3>
                  <p className="mt-2 flex-grow text-muted-foreground">{service.description}</p>
                  <Button variant="link" asChild className="mt-4 font-bold text-accent">
                    <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
