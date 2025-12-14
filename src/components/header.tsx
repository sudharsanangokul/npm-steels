'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useEnquiry } from '@/contexts/enquiry-context';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useEnquiry();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="h-10 w-36">
          <Logo className={isScrolled ? 'text-primary' : 'text-primary-foreground dark:text-primary'} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors hover:text-accent',
                isScrolled ? 'text-foreground' : 'text-primary-foreground/90'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "relative hover:bg-white/20",
              isScrolled ? 'text-foreground hover:bg-accent/20' : 'text-primary-foreground'
            )}
            onClick={() => setIsCartOpen(true)}
            aria-label="Open enquiry cart"
          >
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {itemCount}
              </span>
            )}
          </Button>

          <div className="hidden lg:block">
            <Button asChild className="font-bold">
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "lg:hidden",
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full bg-background p-0 sm:max-w-xs">
              <div className="flex h-full flex-col">
                <div className="flex h-20 items-center justify-between border-b px-4">
                  <Link href="/" className="h-10 w-36" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo className="text-primary" />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-md px-3 py-2 text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4">
                  <Button asChild className="w-full font-bold" size="lg">
                    <Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
