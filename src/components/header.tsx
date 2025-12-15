// force new build
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu, 
  ShoppingCart, 
  X, 
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useEnquiry } from '@/contexts/enquiry-context';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import type { NavItem } from '@/lib/types';

const ListItem = (({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

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

  const NavLink = ({ link }: { link: NavItem }) => {
    if (link.sublinks) {
      return (
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={cn(
              'flex items-center gap-1 font-medium transition-colors hover:text-accent',
              isScrolled ? 'text-foreground hover:bg-transparent' : 'text-primary-foreground/90 hover:bg-white/10',
              'px-3 py-2 bg-transparent focus:bg-transparent'
            )}
          >
            {link.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {link.sublinks.map((sublink) => (
                <ListItem
                  key={sublink.href}
                  href={sublink.href}
                  title={sublink.label}
                >
                  {sublink.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem>
        <Link href={link.href} legacyBehavior passHref>
          <NavigationMenuLink className={cn(
            'font-medium transition-colors hover:text-accent px-3 py-2 rounded-md',
            isScrolled ? 'text-foreground' : 'text-primary-foreground/90'
          )}>
            {link.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  };

  const MobileNavLink = ({ link }: { link: NavItem }) => {
    const closeMenu = () => setIsMobileMenuOpen(false);
    if (link.sublinks) {
      return (
        <Collapsible className="w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground">
            {link.label}
            <ChevronDown className="h-5 w-5" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4">
            {link.sublinks.map((sublink) => (
              <Link
                key={sublink.href}
                href={sublink.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                onClick={closeMenu}
              >
                {sublink.label}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
    }
    return (
      <Link
        href={link.href}
        className="block rounded-md px-3 py-2 text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
        onClick={closeMenu}
      >
        {link.label}
      </Link>
    );
  };

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

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {NAV_LINKS.map((link, index) => (
              <NavLink key={index} link={link} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

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
                <nav className="flex flex-col gap-1 p-4">
                  {NAV_LINKS.map((link) => (
                    <MobileNavLink key={link.href} link={link} />
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
