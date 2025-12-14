import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './logo';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';
import { products } from '@/lib/data';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="h-10 w-36 inline-block">
                <Logo className="text-primary-foreground" />
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Your trusted partner for premium steel sheets and precision metal fabrication services.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#"><Facebook className="h-5 w-5" /></SocialLink>
              <SocialLink href="#"><Twitter className="h-5 w-5" /></SocialLink>
              <SocialLink href="#"><Linkedin className="h-5 w-5" /></SocialLink>
              <SocialLink href="#"><Instagram className="h-5 w-5" /></SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Our Products</h3>
            <ul className="mt-4 space-y-2">
              {products.slice(0, 5).map(product => (
                <li key={product.id}>
                  <Link href={`/products#${product.slug}`} className="text-sm text-primary-foreground/80 hover:text-accent">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="text-primary-foreground/80">{COMPANY_INFO.address}</li>
              <li className="text-primary-foreground/80 hover:text-accent"><a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a></li>
              <li className="text-primary-foreground/80 hover:text-accent"><a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto text-center text-sm text-primary-foreground/60">
          &copy; {new Date().getFullYear()} NTM Metals. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Button asChild variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-white/10 hover:text-accent">
      <Link href={href}>{children}</Link>
    </Button>
  );
}
