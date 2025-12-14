import Image from 'next/image';
import { services } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { FadeIn } from '@/components/fade-in';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Our Services | NTM Metals',
  description: 'Discover our expert steel fabrication services, including laser cutting, plasma cutting, CNC bending, welding, and custom sheet metal fabrication.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Fabrication Services"
        subtitle="State-of-the-art technology for unparalleled precision and quality."
      />
      <section id="services-list">
        <div className="container mx-auto">
          <div className="space-y-12">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 150}>
                <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint="metal fabrication"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-4">
                        <div className="rounded-md bg-accent/10 p-3 text-accent">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-primary">{service.title}</h3>
                      </div>
                      <p className="mt-4 text-muted-foreground">{service.description}</p>
                      <div className="mt-6">
                        <h4 className="font-semibold text-foreground">Industries Served:</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {service.industries.map((industry) => (
                            <Badge key={industry} variant="secondary">{industry}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
