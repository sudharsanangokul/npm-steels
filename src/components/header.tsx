'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Mail, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import EnquiryCartIcon from './enquiry-cart-icon';
import { cn } from '@/lib/utils';
import { ProductsMegaMenu } from './products-mega-menu';

const navLinks = [
  { href: '/', label: 'Home' },
  // { href: "/products", label: "Products" }, // Replaced by MegaMenu
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

const TopBar = () => (
    <div className="bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto flex items-center justify-between py-2">
            <Link href="/" className="flex items-center">
                <Image src="/logo.jpg" alt="SRK International Logo" width={200} height={60} className="object-contain" />
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
                        <p className="font-bold">FOR ACCOUNTS</p>
                        <a href="mailto:accounts@srkinternational.co.in" className="hover:underline">accounts@srkinternational.co.in</a>
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
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 h-auto">
                    <Link href="/contact">CONTACT</Link>
                </Button>
            </div>
            <div className="lg:hidden">
                <EnquiryCartIcon />
            </div>
        </div>
    </div>
);

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <div className="border-b bg-background">
            <div className="container flex h-16 items-center justify-between">
                 <div className="flex-1 md:flex-none"></div>

                <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center gap-6">
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
                    {navLinks.slice(1).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-red-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex flex-1 items-center justify-end gap-2">
                    <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold">
                        <Link href="/enquiry">Enquiry Form</Link>
                    </Button>
                    <EnquiryCartIcon />
                </div>

                <div className="md:hidden flex items-center ml-auto">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full max-w-xs bg-card">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between border-b pb-4">
                                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                        <Image src="/logo.jpg" alt="SRK International Logo" width={150} height={45} />
                                    </Link>
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                        <X className="h-6 w-6" />
                                        <span className="sr-only">Close Menu</span>
                                    </Button>
                                </div>
                                <nav className="mt-8 flex flex-col gap-6">
                                    {[{ href: '/', label: 'Home' }, { href: '/products', label: 'Products' }, ...navLinks.slice(1)].map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-auto border-t pt-6">
                                    <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                                        <Link href="/enquiry" onClick={() => setIsOpen(false)}>
                                            Enquiry Form
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    const [mainNavVisible, setMainNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                // If scrolling down and past the top bar height
                if (window.scrollY > lastScrollY && window.scrollY > 92) {
                    setMainNavVisible(false);
                } else {
                    setMainNavVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar, { passive: true });
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            <header className="fixed top-0 z-50 w-full">
                <TopBar />
            </header>
            <div
                className={cn(
                    'fixed top-[92px] w-full z-40 transition-transform duration-300',
                    mainNavVisible ? 'transform-none' : '-translate-y-full'
                )}
            >
                <MainNav />
            </div>
        </>
    );
};

export default Header;
