import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Work in Pictures</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            A glimpse into our facilities, processes, and the quality products we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative h-64 overflow-hidden rounded-lg shadow-md animate-in fade-in zoom-in-95 duration-500"
              style={{animationDelay: `${index * 50}ms`}}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
