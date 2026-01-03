import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-2">
                <Image src="/logo.jpg" alt="SRK International Logo" width={200} height={60} className="object-contain" />
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              Your premier source for top-grade steel sheets and expert metal fabrication services. Quality and precision you can build on.
            </p>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold tracking-wider">Contact Us</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Steel St, Industrial Park, Metal-Town, 45678</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <a href="tel:+919444000533" className="text-muted-foreground hover:text-primary transition-colors">+91 94440 00533</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:info@srkinternational.co.in" className="text-muted-foreground hover:text-primary transition-colors">info@srkinternational.co.in</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-primary" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NTM Metals - Steel Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
