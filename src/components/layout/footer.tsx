import Link from 'next/link';
import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const footerColumns = [
  {
    title: 'DISCOVER BLOOM',
    links: [
      { name: 'The Bloom Story', href: '#' },
    ],
    subsections: [
      {
        title: 'LEADERSHIP',
        links: [
          { name: 'Ravinder Punia', href: '#' },
          { name: 'Deepak Khanna', href: '#' },
          { name: 'Mony Chilam', href: '#' },
          { name: 'Srikant Chepe', href: '#' },
        ],
      },
      {
        title: 'CORPORATE GOVERNANCE',
        links: [
          { name: 'Corporate Actions', href: '#' },
          { name: 'Academics & Research', href: '#' },
          { name: 'Investor Relations', href: '#' },
          { name: 'Sustainability', href: '#' },
          { name: 'ARI', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'FOR PATIENTS',
    links: [
      { name: 'Find a Doctor', href: '#' },
      { name: 'Book Appointment', href: '#' },
      { name: 'Treatments', href: '#' },
      { name: 'Emergency 24×7', href: '#' },
      { name: 'Technology', href: '#' },
      { name: 'Patient Testimonials', href: '#' },
      { name: 'CPR', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  },
  {
    title: 'OUR SERVICES', // As per spec, "FOR PATIENTS (continued)"
    links: [
      { name: 'Cardiac Care', href: '#' },
      { name: 'Cancer Care', href: '#' },
      { name: 'Neurosciences', href: '#' },
      { name: 'Gastro Sciences', href: '#' },
      { name: 'Orthopaedics', href: '#' },
      { name: 'Renal Care', href: '#' },
      { name: 'Liver Transplant', href: '#' },
      { name: 'Bone Marrow Transplant', href: '#' },
      { name: 'Lung Transplant', href: '#' },
      { name: 'Chest Surgery', href: '#' },
      { name: 'More+', href: '#' },
    ],
  },
  {
    title: 'IMPORTANT INFO',
    links: [
      { name: 'Help Desk', href: '#' },
      { name: 'Blogs', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Feedback', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'News & Events', href: '#' },
      { name: 'Investor Relations', href: '#' },
      { name: 'Policies & Forms', href: '#' },
      { name: 'Sitemap', href: '#' },
      { name: 'Web Stories', href: '#' },
    ],
  },
  {
    title: 'DOWNLOAD APP',
    customContent: (
      <p className="text-sm text-muted-foreground">
        Download our Bloom Health App to book your appointments at your finger tips
      </p>
    ),
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  // Memoize the social links to prevent unnecessary re-renders
  const socialLinksContent = React.useMemo(() => (
    <div className="flex space-x-3">
      {socialLinks.map((social) => (
        <Link key={social.name} href={social.href} aria-label={social.name} className="transition-opacity hover:opacity-80">
          <Button variant="outline" size="icon" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <social.icon className="h-5 w-5" />
          </Button>
        </Link>
      ))}
    </div>
  ), []);

  // Memoize the footer columns to prevent unnecessary re-renders
  const footerColumnsContent = React.useMemo(() => (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
      {footerColumns.map((column) => (
        <div key={column.title}>
          <h3 className="mb-4 text-sm font-bold uppercase text-primary">
            {column.title}
            {column.title === "FOR PATIENTS" && footerColumns.filter(c => c.title === "FOR PATIENTS").indexOf(column) === 1 && " (CONTINUED)"}
          </h3>
          {column.links && (
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {column.subsections && column.subsections.map(sub => (
            <div key={sub.title} className="mt-4">
              <h4 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">{sub.title}</h4>
              <ul className="space-y-2">
                {sub.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {column.customContent}
        </div>
      ))}
    </div>
  ), []);

  return (
    <footer className="bg-card py-12 text-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          {socialLinksContent}
        </div>

        {footerColumnsContent}

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bloom Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
