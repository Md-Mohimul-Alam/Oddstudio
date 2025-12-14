'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80" onClick={() => setIsOpen(false)}>
            <Image
              src="https://i.ibb.co/4nQtXqR0/Red-logo-4x.png"
              alt="Odd Studio Logo"
              width={160}
              height={48}
              className="h-10 w-auto md:h-12"
              data-ai-hint="logo design"
              priority
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'hover-underline-animation py-1 uppercase tracking-wide text-xs font-bold',
                pathname === href ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center justify-end space-x-2">
          <a href="tel:+8801984597890" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-bold text-sm group">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
            </div>
            <span className="hidden lg:inline">+88 01984-597890</span>
          </a>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l">
              <div className="flex flex-col h-full">
                <div className="flex justify-start items-center py-6 border-b">
                   <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                      <Image
                        src="https://i.ibb.co/4nQtXqR0/Red-logo-4x.png"
                        alt="Odd Studio Logo"
                        width={120}
                        height={32}
                        className="h-8 w-auto"
                        data-ai-hint="logo design"
                        priority
                      />
                   </Link>
                </div>
                <nav className="flex flex-col py-8 space-y-6">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-2xl font-headline font-bold transition-colors hover:text-primary',
                        pathname === href ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto py-6 border-t">
                    <a href="tel:+8801984597890" onClick={() => setIsOpen(false)} className="flex w-full items-center justify-center gap-3 text-primary font-bold text-lg p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                        <Phone className="h-5 w-5" />
                        <span>+88 01984-597890</span>
                    </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
