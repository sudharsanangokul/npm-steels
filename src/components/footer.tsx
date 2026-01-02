import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-headline text-2xl font-bold">NTM METALS</h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              Your premier source for top-grade steel sheets and expert metal fabrication services. Quality and precision you can build on.
            </p>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
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
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:support@ntmmetals.com" className="text-muted-foreground hover:text-primary transition-colors">support@ntmmetals.com</a>
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
