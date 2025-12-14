import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';
import { SectionHeader } from '@/components/section-header';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-ntm');
  
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="space-y-6 text-lg text-foreground/90">
              <SectionHeader
                title="About NTM Metals"
                subtitle="Your Partner in Precision Steel Supply"
                className="items-start text-left"
              />
              <p>
                At NTM Metals, we are dedicated to supplying the highest quality steel sheets to meet the diverse needs of manufacturers, builders, and industrial buyers. Our commitment to excellence is rooted in three core principles: uncompromising quality, steadfast reliability, and precision engineering.
              </p>
              <p>
                We maintain a comprehensive stock of HR, CR, GI, and SS sheets to ensure prompt availability for your projects. Coupled with our state-of-the-art precision cutting services, we provide tailored solutions that minimize waste and maximize efficiency, making us the trusted, one-stop source for all your steel requirements.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            {aboutImage && (
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
