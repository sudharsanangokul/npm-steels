'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Clock, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ProductsMegaMenu } from './products-mega-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { megaMenuProducts } from '@/lib/data';

function slugify(text: string) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

const TopBar = () => (
    <div className="bg-background/95 backdrop-blur-sm border-b z-20 relative">
        <div className="container mx-auto flex items-center justify-between py-2 h-24">
            <Link href="/" className="flex items-center">
                <Image src="/logo.jpg" alt="SRK International Logo" width={150} height={45} className="object-contain" />
            </Link>
            <div className="hidden lg:flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm">
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-red-500" />
                    <div>
                        <p className="font-bold">FOR SALES</p>
                        <a href="mailto:sales@srkinternational.co.in" className="hover:underline">sales@srkinternational.co.in</a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-red-500" />
                    <div>
                        <p className="font-bold">FOR ACCOUNTS</p>                        <a href="mailto:accounts@srkinternational.co.in" className="hover:underline">accounts@srkinternational.co.in</a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-red-500" />
                    <div>
                        <p className="font-bold">OTHER QUERIES</p>
                        <a href="mailto:info@srkinternational.co.in" className="hover:underline">info@srkinternational.co.in</a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-red-500" />
                    <div>
                        <p className="font-bold">Business Hours</p>
                        <p>9:00 am - 8:00 pm</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-red-500" />
                    <a href="tel:+919444000533" className="font-bold hover:underline">+91 94440 00533</a>
                </div>
            </div>
            <div className="lg:hidden">
              <Sheet>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Toggle Menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full max-w-sm bg-card overflow-y-auto">
                    <MobileNav />
                  </SheetContent>
              </Sheet>
            </div>
        </div>
    </div>
);

const MobileNav = () => {
    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.jpg" alt="SRK International Logo" width={150} height={45} />
                </Link>
            </div>
            <nav className="mt-4 flex flex-col">
                 {navLinks.map((link) => (
                    link.label === 'Products' ? (
                        <Accordion type="single" collapsible className="w-full" key={link.label}>
                            <AccordionItem value="products" className="border-b">
                                <AccordionTrigger className="py-4 text-lg font-medium text-foreground transition-colors hover:text-primary hover:no-underline">
                                    {link.label}
                                </AccordionTrigger>
                                <AccordionContent className="pl-4">
                                    <Accordion type="multiple" className="w-full">
                                        {megaMenuProducts.map((category) => (
                                            <AccordionItem value={category.title} key={category.title}>
                                                <AccordionTrigger className="py-3 text-base text-muted-foreground hover:no-underline">{category.title}</AccordionTrigger>
                                                <AccordionContent className="pl-4">
                                                    <div className="flex flex-col gap-3 pt-2">
                                                        {category.subCategories.map((sub) => (
                                                            <Link
                                                                href={`/products/${slugify(sub)}`}
                                                                key={sub}
                                                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                                            >
                                                                {sub}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ) : (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="py-4 text-lg font-medium text-foreground transition-colors hover:text-primary border-b"
                        >
                            {link.label}
                        </Link>
                    )
                ))}
            </nav>
        </div>
    );
};


const MainNav = ({ isVisible }: { isVisible: boolean }) => {
    return (
        <div className={cn(
            "border-b bg-background transition-transform duration-300 ease-in-out relative z-10",
            isVisible ? 'translate-y-0' : '-translate-y-full'
        )}>
            <div className="container relative flex h-16 items-center justify-center">
                <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
                    {navLinks.slice(0, 1).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-red-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ProductsMegaMenu />
                    {navLinks.slice(2).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-red-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

const Header = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 10);
        };

        const setPadding = () => {
            if (headerRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
            }
        };

        setPadding();
        handleScroll();
        window.addEventListener('resize', setPadding);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', setPadding);
        };
    }, []);

    return (
        <header 
            ref={headerRef} 
            className='fixed top-0 left-0 right-0 z-50 bg-background'
        >
             <TopBar />
             <MainNav isVisible={isAtTop} />
        </header>
    );
};

export default Header;
