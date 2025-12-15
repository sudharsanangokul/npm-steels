'use client';

import { useEffect } from 'react';
import { services } from '@/lib/data';
import { PageHeader } from '@/components/page-header';
import { SectionHeader } from '@/components/section-header';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/fade-in';

export default function ServicesPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <>
      <PageHeader
        title="Our Services"
        description="From precision cutting to custom fabrication, we offer a comprehensive suite of services to transform raw materials into finished products."
      />
      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <div id={service.id} className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div
                    className={cn(
                      'grid grid-cols-1 items-center gap-8',
                      index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 md:grid-flow-row-dense'
                    )}
                  >
                    <div
                      className={cn(
                        'order-last',
                        index % 2 === 0 ? '' : 'md:order-first'
                      )}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-8">
                      <SectionHeader
                        title={service.title}
                        Icon={service.icon}
                        className="mb-4"
                      />
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <h4 className="font-semibold text-foreground mb-2">Industries Served:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map(industry => (
                          <span key={industry} className="rounded-full bg-accent/50 px-3 py-1 text-sm text-accent-foreground">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
