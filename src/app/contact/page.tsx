import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    action: "Call Us",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@ntmmetals.com",
    href: "mailto:support@ntmmetals.com",
    action: "Email Us",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/1234567890",
    action: "Start Chat",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Steel St, Industrial Park, Metal-Town, 45678",
    href: "https://www.google.com/maps/search/?api=1&query=123+Steel+St,+Industrial+Park,+Metal-Town,+45678",
    action: "Get Directions",
  },
];

export default function ContactPage() {
    const mapImage = PlaceHolderImages.find(img => img.id === 'map-placeholder');

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
                        We're here to help with your steel needs. Reach out for quotes, questions, or support.
                    </p>
                </div>

                <Card className="mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500" style={{animationDelay: '150ms'}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {contactMethods.map((method, index) => (
                            <div key={method.title} className={`p-6 flex flex-col items-center text-center ${index < 3 ? 'md:border-r' : ''} ${index < 2 ? 'lg:border-r' : ''} border-border`}>
                                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
                                    <method.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-headline text-xl font-semibold">{method.title}</h3>
                                <p className="text-muted-foreground mt-1 flex-grow">{method.value}</p>
                                <Button asChild variant="link" className="mt-4 text-primary">
                                    <a href={method.href} target="_blank" rel="noopener noreferrer">{method.action}</a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </Card>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden animate-in fade-in slide-in-from-left-12 duration-500" style={{animationDelay: '300ms'}}>
                        {mapImage &&
                            <Image
                                src={mapImage.imageUrl}
                                alt="Location map"
                                fill
                                className="object-cover"
                                data-ai-hint={mapImage.imageHint}
                            />
                        }
                    </div>
                    <div className="animate-in fade-in slide-in-from-right-12 duration-500" style={{animationDelay: '450ms'}}>
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Clock className="w-6 h-6 mr-3 text-primary" />
                                    <span className="font-headline text-2xl">Business Hours</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-medium text-foreground">9:00 AM - 2:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-medium text-destructive-foreground/50">Closed</span>
                                    </li>
                                </ul>
                                <p className="mt-6 text-sm text-muted-foreground border-t pt-4">
                                    Our support team is available during business hours to assist you with any enquiries.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
