// No router links needed here, we use hash anchors
import {
  Menu,
  Phone as PhoneIconLucide,
  Mail,
  Search,
  ChevronDown,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { useEffect, useRef, useState } from 'react';
import { featureOptions, medicalServicesMenu, navItems, socialLinks } from './MenuUtils';
import { HashLink } from 'react-router-hash-link';

export function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full shadow-md'>
      {/* Top Bar */}
      <div className='bg-primary text-primary-foreground'>
        <div className='container mx-auto flex h-12 items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-2'>
              <PhoneIconLucide className='h-4 w-4' />
              <a href='tel:(001)88451234' className='text-xs hover:underline'>
                (001) 88451234
              </a>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4' />
              <a href='mailto:info@bloomhealth.com' className='text-xs hover:underline'>
                info@bloomhealth.com
              </a>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <nav className='hidden lg:flex items-center space-x-2'>
              {navItems.map((item) => (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.href}
                  className='px-3 py-1 text-sm font-medium text-primary-foreground hover:bg-primary/90 rounded-md transition-colors'
                >
                  {item.name}
                </HashLink>
              ))}
            </nav>
            <div>
              <Link to='/bookAppointment' className='book-btn'>
                Book an Appointment
              </Link>
            </div>
            <div className='hidden lg:flex items-center space-x-3'>
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  aria-label={social.name}
                  className='hover:opacity-80 transition-opacity'
                  key={social.name}
                >
                  <social.icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className='bg-white text-foreground'>
        <div className='container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0'>
            <Logo />
          </div>
          <div className='p-2'>
            <nav
              className='hidden lg:flex flex-1 flex-wrap items-center justify-center gap-x-1 gap-y-2 pb-2 relative'
              ref={menuRef}
            >
              {featureOptions?.map((item) => (
                <div key={item.name} className='relative'>
                  <Button
                    variant='ghost'
                    className='text-foreground hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary'
                    onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                  >
                    {item.name}
                    <ChevronDown className='w-4 h-4 ml-1' />
                  </Button>

                  {/* Regular dropdown for items with submenu */}
                  {openMenu === item.name && item.submenu?.length > 0 && (
                    <div className='absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
                      {item.submenu.map((sub) =>
                        sub.href.startsWith('/') ? (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            onClick={() => setOpenMenu(null)}
                          >
                            {sub.name}
                          </Link>
                        ) : (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          >
                            {sub.name}
                          </a>
                        ),
                      )}
                    </div>
                  )}

                  {/* Mega Menu for Medical Services */}
                  {openMenu === item.name && item.name === 'Medical Services' && (
                    <div className='absolute left-[-200px] bg-white shadow-lg border border-gray-200 rounded-lg mt-2 w-[900px] h-[500px] p-6 z-50'>
                      <div className='grid grid-cols-4 gap-8'>
                        {medicalServicesMenu.map((section) => (
                          <div key={section.title}>
                            <h3 className='font-semibold text-primary mb-2'>{section.title}</h3>
                            <ul className='space-y-1'>
                              {section.items.map((service) => (
                                <li key={service}>
                                  <a href='#' className='text-sm text-gray-700 hover:text-primary'>
                                    {service}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className='flex-1' />
          <div className='hidden lg:flex items-center space-x-3'>
            <Button
              variant='ghost'
              size='icon'
              className='text-foreground hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary'
            >
              <Search className='h-5 w-5' />
              <span className='sr-only'>Search</span>
            </Button>
          </div>
          {/* Mobile Feature Options Menu */}
          <div className='lg:hidden mr-3'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='text-foreground border-neutral-300 hover:bg-accent focus:bg-accent'
                >
                  <Layers className='h-6 w-6' />
                  <span className='sr-only'>Toggle mobile menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left' className='w-full max-w-sm bg-white text-foreground p-0'>
                <div className='flex h-full flex-col'>
                  {/* Logo */}
                  <div className='p-4 border-b border-neutral-200'>
                    <Logo />
                  </div>

                  {/* Feature Options */}
                  <nav className='flex flex-col divide-y divide-gray-200'>
                    {featureOptions.map((item) => (
                      <div key={item.name} className='p-4'>
                        {/* Item with submenu */}
                        {item.submenu?.length > 0 && item.name !== 'Medical Services' && (
                          <details>
                            <summary className='cursor-pointer text-base font-medium text-foreground'>
                              {item.name}
                            </summary>
                            <div className='mt-2 pl-4 space-y-2'>
                              {item.submenu.map((sub) =>
                                sub.href.startsWith('/') ? (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    className='block text-sm text-gray-700 hover:text-primary'
                                  >
                                    {sub.name}
                                  </Link>
                                ) : (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    className='block text-sm text-gray-700 hover:text-primary'
                                  >
                                    {sub.name}
                                  </a>
                                ),
                              )}
                            </div>
                          </details>
                        )}

                        {/* Medical Services Mega Menu */}
                        {item.name === 'Medical Services' && (
                          <details>
                            <summary className='cursor-pointer text-base font-medium text-foreground'>
                              {item.name}
                            </summary>
                            <div className='mt-3 grid grid-cols-2 gap-4 pl-2'>
                              {medicalServicesMenu.map((section) => (
                                <div key={section.title}>
                                  <h3 className='font-semibold text-primary mb-1 text-sm'>
                                    {section.title}
                                  </h3>
                                  <ul className='space-y-1'>
                                    {section.items.map((service) => (
                                      <li key={service}>
                                        <a
                                          href='#'
                                          className='text-xs text-gray-700 hover:text-primary'
                                        >
                                          {service}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </details>
                        )}

                        {/* Items without submenu */}
                        {!item.submenu?.length && item.name !== 'Medical Services' && (
                          <Link
                            to={item.href}
                            className='text-base font-medium text-foreground hover:text-primary'
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Bottom Section */}
                  <div className='mt-auto border-t border-neutral-200 p-4 space-y-4'>
                    <Button
                      asChild
                      className='w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md'
                    >
                      <a href='/#contact'>TALK TO US +</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Mobile Menu */}
          <div className='lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='text-foreground border-neutral-300 hover:bg-accent focus:bg-accent'
                >
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-full max-w-sm bg-white text-foreground p-0'>
                <div className='flex h-full flex-col'>
                  <div className='p-4 border-b border-neutral-200'>
                    <Logo />
                  </div>
                  <nav className='flex flex-col space-y-1 p-4'>
                    {navItems.map((item) => (
                      <Link
                        href={item.href}
                        className='block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary transition-colors'
                        key={item.name}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className='mt-auto space-y-4 p-4 border-t border-neutral-200'>
                    <div className='flex items-center space-x-2'>
                      <PhoneIconLucide className='h-5 w-5 text-primary' />
                      <a
                        href='tel:(001)88451234'
                        className='text-sm hover:underline text-foreground'
                      >
                        (001) 88451234
                      </a>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Mail className='h-5 w-5 text-primary' />
                      <a
                        href='mailto:info@bloomhealth.com'
                        className='text-sm hover:underline text-foreground'
                      >
                        info@bloomhealth.com
                      </a>
                    </div>
                    <div className='flex items-center space-x-2 pt-2'>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='text-foreground hover:bg-accent hover:text-primary'
                      >
                        <Search className='h-5 w-5' />
                        <span className='sr-only'>Search</span>
                      </Button>
                    </div>
                    <Button
                      asChild
                      className='w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md'
                    >
                      <a href='/#contact'>TALK TO US +</a>
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
