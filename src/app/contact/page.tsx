import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { COMPANY_INFO } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | NTM Metals',
  description: 'Get in touch with NTM Metals. Find our address, phone number, email, and office hours. We are here to help with all your steel supply and fabrication needs.',
};

export default function ContactPage() {
  const whatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20NTM%20Metals!`;

  return (
    <>
      <PageHeader 
        title="Contact Us"
        subtitle="We're here to help with your steel and fabrication needs. Reach out to us today!"
      />
      <section id="contact-details">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ContactInfoItem icon={MapPin} label="Our Office">
                    <p>{COMPANY_INFO.address}</p>
                  </ContactInfoItem>
                  <Separator />
                  <ContactInfoItem icon={Phone} label="Phone">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-accent transition-colors">{COMPANY_INFO.phone}</a>
                  </ContactInfoItem>
                  <Separator />
                  <ContactInfoItem icon={Mail} label="Email">
                     <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-accent transition-colors">{COMPANY_INFO.email}</a>
                  </ContactInfoItem>
                   <Separator />
                  <ContactInfoItem icon={Clock} label="Support Hours">
                    <p>{COMPANY_INFO.supportHours}</p>
                  </ContactInfoItem>
                   <Separator />
                   <div className="flex flex-col gap-4 sm:flex-row pt-4">
                    <Button asChild size="lg" className='font-bold'>
                      <Link href="/request-quote">Request a Quote Online</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className='font-bold bg-green-500 text-white hover:bg-green-600 hover:text-white border-green-500'>
                      <Link href={whatsAppUrl} target='_blank' rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="h-[400px] lg:h-full w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2268697521723!2d144.9537353158412!3d-37.81739997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1620208851405!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Map of our location"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoItem({ icon: Icon, label, children }: { icon: React.ElementType, label: string, children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
                <Icon className="h-6 w-6 text-accent" />
            </div>
            <div>
                <h4 className="font-headline font-semibold text-primary">{label}</h4>
                <div className="text-muted-foreground">{children}</div>
            </div>
        </div>
    );
}
