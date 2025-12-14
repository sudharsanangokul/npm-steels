import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { PageHeader } from '@/components/page-header';
import { FadeIn } from '@/components/fade-in';

export const metadata = {
  title: 'Gallery | NTM Metals',
  description: 'View our gallery of high-quality steel products, advanced cutting machinery, finished components, and on-site fabrication work.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Our Gallery"
        subtitle="A glimpse into our products, processes, and precision work."
      />
      <section id="gallery-grid">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <FadeIn key={image.id} delay={index * 50}>
                <div className="group relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    data-ai-hint={image.hint}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
