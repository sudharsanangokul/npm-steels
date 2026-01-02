import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Layers, Scissors, Wrench } from "lucide-react";
import { services, products } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Product } from "@/lib/types";

const getImageUrl = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
}

const getProductImageUrl = (product: Product) => {
  const placeholder = PlaceHolderImages.find(p => p.id === product.id);
  return placeholder?.imageUrl || "https://picsum.photos/seed/default/600/400";
};


export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Steel fabrication"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 animate-in fade-in slide-in-from-bottom-12 duration-700">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            NTM METALS
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Your Trusted Partner for High-Quality Steel Sheets and Precision Cutting Services
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/products">View Products <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold bg-transparent text-white border-white hover:bg-white hover:text-black">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Precision, quality, and reliability in every cut and fabrication.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Card key={service.id} className="text-center bg-card border-card hover:border-primary transition-all duration-300 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary font-semibold text-lg">
              <Link href="/services">Explore All Services <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="products" className="w-full py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Products</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">A selection of our top-quality steel sheets.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
               <Card key={product.id} className="overflow-hidden group animate-in fade-in slide-in-from-bottom-12" style={{animationDelay: `${index * 150}ms`}}>
                <div className="relative h-48 w-full">
                  <Image
                    src={getProductImageUrl(product)}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="steel sheet"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-headline text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link href="/products">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/products">Browse Full Catalog</Link>
            </Button>
          </div>
        </div>
      </section>

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
