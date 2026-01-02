import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const getServiceImageUrl = (serviceId: string) => {
    const placeholder = PlaceHolderImages.find(p => p.id === `service-${serviceId.split('-')[0]}`);
    return placeholder?.imageUrl || `https://picsum.photos/seed/${serviceId}/800/600`;
}

const getServiceImageHint = (serviceId: string) => {
    const placeholder = PlaceHolderImages.find(p => p.id === `service-${serviceId.split('-')[0]}`);
    return placeholder?.imageHint || `metal working`;
}


export default function ServicesPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Metalworking Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            From precision cutting to complex assembly, we provide a full spectrum of fabrication services to bring your projects to life.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-in fade-in slide-in-from-bottom-12 duration-500"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className={`relative h-80 rounded-lg overflow-hidden lg:order-${index % 2 === 0 ? 'last' : 'first'}`}>
                 <Image
                    src={getServiceImageUrl(service.id)}
                    alt={service.name}
                    fill
                    className="object-cover"
                    data-ai-hint={getServiceImageHint(service.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="flex flex-col items-start">
                 <div className="mb-4 bg-primary/10 text-primary p-3 rounded-full">
                    <service.icon className="w-8 h-8" />
                 </div>
                <h2 className="font-headline text-3xl font-bold">{service.name}</h2>
                <p className="mt-4 text-muted-foreground text-base leading-relaxed">{service.description}</p>
                 <Button asChild variant="link" className="mt-4 px-0 text-primary text-base font-semibold">
                    <Link href="/contact">Enquire about this service <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
