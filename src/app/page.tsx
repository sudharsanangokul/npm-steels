'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BrandLogos } from "@/components/brand-logos";

const getImageUrl = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
}

export default function Home() {
  const carouselImages = [
    PlaceHolderImages.find(img => img.id === 'hr-steel-sheet'),
    PlaceHolderImages.find(img => img.id === 'gallery-5'),
    PlaceHolderImages.find(img => img.id === 'service-laser'),
    PlaceHolderImages.find(img => img.id === 'gallery-1'),
    PlaceHolderImages.find(img => img.id === 'service-plasma'),
  ].filter(Boolean);


  return (
    <div className="flex flex-col">
      <section className="relative w-full flex items-center justify-center text-center bg-gray-200/50 dark:bg-gray-800/20 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative z-10 p-4 animate-in fade-in slide-in-from-bottom-12 duration-700 container">
          <h1 className="font-headline text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-red-600 uppercase">
            India's Only Steel Wholesalers to Maintain Stocks of CR Sheets from 0.35mm & HR Plates from 1.6mm Above & HR Slabs Upto 600mm Thickness with UT & TC Pass
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-foreground/80">
            Importers, Indenting Agents, Super Stockists & Wholesale Dealers of All Kinds of Iron & Steel Raw Materials
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full overflow-hidden rounded-lg"
            >
              <CarouselContent>
                {carouselImages.map((image) => (
                  image &&
                  <CarouselItem key={image.id}>
                    <div className="relative h-[30vh] md:h-[50vh] w-full">
                       <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
        </div>
      </section>
      
      <BrandLogos />

      <section className="w-full py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-12 duration-500">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose NTM Metals?</h2>
              <p className="mt-4 text-muted-foreground text-lg">We are committed to delivering excellence from start to finish.</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Superior Quality Materials</h4>
                    <p className="text-muted-foreground">Sourced from trusted mills to ensure durability and performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Advanced Technology</h4>
                    <p className="text-muted-foreground">Utilizing state-of-the-art machinery for precision results.</p>
                  </div>
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Customer-Centric Approach</h4>
                    <p className="text-muted-foreground">Dedicated support and custom solutions to meet your needs.</p>
                  </div>
                </li>
              </ul>
               <Button asChild className="mt-8">
                  <Link href="/contact">Learn More <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden animate-in fade-in slide-in-from-right-12 duration-500">
               <Image
                src={getImageUrl("gallery-5")}
                alt="Factory interior"
                fill
                className="object-cover"
                data-ai-hint="factory interior"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
