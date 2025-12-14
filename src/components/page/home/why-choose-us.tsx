import { whyChooseUsItems } from '@/lib/data';
import { FadeIn } from '@/components/fade-in';
import { SectionHeader } from '@/components/section-header';

export function WhyChooseUs() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <SectionHeader
          title="Why Choose NTM Metals?"
          subtitle="Our Commitment to Your Success"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100}>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 rounded-md bg-primary p-3 text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
