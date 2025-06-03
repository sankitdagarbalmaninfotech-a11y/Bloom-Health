import Link from 'next/link';
import {
  Menu,
  Phone as PhoneIconLucide,
  Mail,
  Search,
  ShoppingCart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/#about-us' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact Us', href: '/#contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <PhoneIconLucide className="h-4 w-4" />
              <a href="tel:(001)88451234" className="text-xs hover:underline">
                (001) 88451234
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@bloomhealth.com" className="text-xs hover:underline">
                info@bloomhealth.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} aria-label={social.name} className="hover:opacity-80 transition-opacity">
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Logo, Navigation, Actions */}
      <div className="bg-white text-foreground">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center space-x-2">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild className="text-foreground hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
              <Link href="/#contact">TALK TO US +</Link>
            </Button>
          </div>

          {/* Mobile: Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-foreground border-neutral-300 hover:bg-accent focus:bg-accent">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-white text-foreground p-0">
                <div className="flex h-full flex-col">
                  <div className="p-4 border-b border-neutral-200">
                    <Logo />
                  </div>
                  
                  <nav className="flex flex-col space-y-1 p-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto space-y-4 p-4 border-t border-neutral-200">
                    <div className="flex items-center space-x-2">
                      <PhoneIconLucide className="h-5 w-5 text-primary" />
                      <a href="tel:(001)88451234" className="text-sm hover:underline text-foreground">
                        (001) 88451234
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:info@bloomhealth.com" className="text-sm hover:underline text-foreground">
                        info@bloomhealth.com
                      </a>
                    </div>
                     <div className="flex items-center space-x-2 pt-2">
                        <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent hover:text-primary">
                            <Search className="h-5 w-5"/>
                            <span className="sr-only">Search</span>
                        </Button>
                     </div>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
                      <Link href="/#contact">TALK TO US +</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
