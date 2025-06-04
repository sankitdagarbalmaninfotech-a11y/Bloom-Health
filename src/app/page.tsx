"use client";
import type { SVGProps } from 'react';
import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Globe, Phone as PhoneIcon, Mail, MapPin, ArrowRight, Check } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    id: 1,
    pillText: "EXCELLENCE IN HEALTHCARE",
    headingLine1: "Advanced Medical",
    headingLine2: "Care & Treatment",
    subheading: "Experience world-class healthcare with cutting-edge technology and compassionate care from our expert medical professionals.",
    ctaText: "OUR SERVICES +",
    ctaLink: "#services",
    imageUrl: "/slide1.webp",
    imageHint: "modern hospital facility"
  },
  {
    id: 2,
    pillText: "24/7 EMERGENCY CARE",
    headingLine1: "Immediate Medical",
    headingLine2: "Attention When You Need",
    subheading: "Our emergency department is staffed with experienced specialists, ready to provide immediate care around the clock.",
    ctaText: "EMERGENCY CONTACT +",
    ctaLink: "#contact",
    imageUrl: "/slide2.jpg",
    imageHint: "emergency medical team"
  },
  {
    id: 3,
    pillText: "SPECIALIZED CARE",
    headingLine1: "Expert Medical",
    headingLine2: "Specialists at Your Service",
    subheading: "From routine check-ups to complex procedures, our team of specialists provides comprehensive care across all medical disciplines.",
    ctaText: "MEET OUR TEAM +",
    ctaLink: "#about-us",
    imageUrl: "/slide3.jpg",
    imageHint: "medical consultation"
  },
];

const infoCardsData = [
  {
    title: "Need Immediate Care?",
    description: "Bloom Health clinic is equipped with best world class machinery & reagents for urgent needs.",
    buttonText: "Emergency Call",
    buttonLink: "tel:+1-555-EMERGENCY",
    bgColor: "bg-rose-50/50",
    borderColor: "border-rose-200",
    hoverBgColor: "hover:bg-rose-50",
    textColor: "text-rose-600",
  },
  {
    title: "Quality & Patient Safety",
    description: "Our commitment to the highest standards in medical care and patient safety is unwavering.",
    buttonText: "More About Us",
    buttonLink: "#about-us",
    bgColor: "bg-emerald-50/50",
    borderColor: "border-emerald-200",
    hoverBgColor: "hover:bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    title: "Unlock Your Wellness Journey",
    description: "Take the first step towards a healthier you. We're here to guide and support you.",
    buttonText: "Make Appointment",
    buttonLink: "#contact",
    bgColor: "bg-amber-50/50",
    borderColor: "border-amber-200",
    hoverBgColor: "hover:bg-amber-50",
    textColor: "text-amber-600",
  },
];

const servicesData = [
  {
    title: "Cardiac Care",
    description: "Comprehensive heart care services including diagnostics, treatment, and rehabilitation for cardiovascular conditions.",
    icon: (props: SVGProps<SVGSVGElement>) => (
      <Image
        src="/cardiac.svg"
        alt="Cardiac Care Icon"
        width={40}
        height={40}
        className="text-primary"
      />
    ),
    ctaLink: "#",
  },
  {
    title: "Gynecology",
    description: "Specialized women's health services including preventive care, diagnostics, and treatment for various conditions.",
    icon: (props: SVGProps<SVGSVGElement>) => (
      <Image
        src="/gyne.svg"
        alt="Gynecology Icon"
        width={40}
        height={40}
        className="text-primary"
      />
    ),
    ctaLink: "#",
  },
  {
    title: "Neurology",
    description: "Specialized treatment for neurological disorders, including stroke and epilepsy.",
    icon: (props: SVGProps<SVGSVGElement>) => (
      <Image
        src="/neurology.svg"
        alt="Neurology Icon"
        width={40}
        height={40}
        className="text-primary"
      />
    ),
    ctaLink: "#",
  },
  {
    title: "Respiratory Care",
    description: "Expert diagnosis and treatment for respiratory conditions, including asthma, COPD, and sleep disorders.",
    icon: (props: SVGProps<SVGSVGElement>) => (
      <Image
        src="/respiratory.svg"
        alt="Respiratory Care Icon"
        width={40}
        height={40}
        className="text-primary"
      />
    ),
    ctaLink: "#",
  }
];

const missionListItems = [
  "Patient-Centered Care",
  "Clinical Excellence",
  "Community Health Focus",
  "Innovative Practices",
];

const visionListItems = [
  "Global Health Impact",
  "Medical Advancement",
  "Trusted Healthcare Partner",
  "Sustainable Wellbeing",
];


export default function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  // Memoize the carousel content to prevent unnecessary re-renders
  const carouselContent = React.useMemo(() => (
    <CarouselContent className="-ml-0">
      {heroSlides.map((slide) => (
        <CarouselItem key={slide.id} className="pl-0 min-h-[70vh] md:min-h-[80vh]">
          <div
            className="relative h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
            data-ai-hint={slide.imageHint}
          >
            <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-0">
              <div className="relative z-10 mx-auto md:mx-0 md:ml-12 lg:ml-0 max-w-md md:max-w-lg lg:max-w-xl text-left p-8 sm:p-10 lg:p-12">
                {slide.pillText && (
                  <div className="mb-3 md:mb-4">
                    <span className="rounded-md bg-primary/20 px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider">
                      {slide.pillText}
                    </span>
                  </div>
                )}
                <h1 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {slide.headingLine1}
                </h1>
                <h1 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl mt-0 sm:mt-1 md:mt-2">
                  {slide.headingLine2}
                </h1>
                <p className="mt-4 md:mt-6 text-md leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
                  {slide.subheading}
                </p>
                <div className="mt-8 md:mt-10">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors px-6 py-3 text-base font-semibold">
                    <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  ), []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            {carouselContent}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 flex space-x-2 md:space-x-3">
              <CarouselPrevious className="static translate-y-0 bg-white hover:bg-gray-200 text-primary h-10 w-10 rounded-full shadow-md" />
              <CarouselNext className="static translate-y-0 bg-white hover:bg-gray-200 text-primary h-10 w-10 rounded-full shadow-md" />
            </div>
          </Carousel>
        </section>

        {/* Info Cards Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {infoCardsData.map((card, index) => (
                <div key={index} className={`${card.bgColor} p-6 rounded-xl shadow-lg flex flex-col`}>
                  <h3 className="text-3xl font-semibold text-black mb-4">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {card.description}
                  </p>
                  <Button
                    asChild={card.buttonLink.startsWith("#") || card.buttonLink.startsWith("/")}
                    variant="outline"
                    className={`mt-auto self-start font-medium text-primary ${card.borderColor} ${card.hoverBgColor} hover:text-primary border-2 inline-flex items-center`}
                  >
                    {card.buttonLink.startsWith("tel:") ? (
                      <a href={card.buttonLink} className="inline-flex items-center">
                        {card.buttonText} <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                      </a>
                    ) : (
                      <Link href={card.buttonLink} className="inline-flex items-center">
                        {card.buttonText} <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                      </Link>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission and Vision Section (About Us) */}
        <section id="about-us" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Mission Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <Image
                  src="/mission.jpg"
                  alt="Our Mission"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                  data-ai-hint="teamwork healthcare"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="text-left">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                  OUR COMMITMENT
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mt-4">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  To provide excellent, compassionate, and accessible healthcare services to our community, fostering a healthier future for all through dedication and innovation.
                </p>
                <ul className="mt-6 space-y-3">
                  {missionListItems.map((item) => (
                    <li key={item} className="flex items-center text-foreground">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
                  <Link href="#services">
                    LEARN MORE +
                  </Link>
                </Button>
              </div>
            </div>

            {/* Vision Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              
              <div className="text-left">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                  OUR ASPIRATION
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mt-4">
                  Our Vision
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  To be a leading healthcare institution recognized for clinical excellence, innovative medical care, and a patient-centered approach that improves lives globally.
                </p>
                <ul className="mt-6 space-y-3">
                  {visionListItems.map((item) => (
                    <li key={item} className="flex items-center text-foreground">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
                  <Link href="#contact">
                    DISCOVER MORE +
                  </Link>
                </Button>
              </div>
              <div>
                <Image
                  src="/vision.jpg"
                  alt="Our Vision"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                  data-ai-hint="innovation medical"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services/Clinics Section */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-3">
                Our Services
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
                We Provide Various Directions
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesData.map((service) => (
                <div key={service.title} className="border rounded-lg p-6 shadow-sm flex flex-col text-left hover:shadow-lg transition-shadow duration-300 h-[280px]">
                  <div className="mb-5 text-primary h-12 flex items-center">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 h-8">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link href={service.ctaLink} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    READ MORE +
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-headline text-3xl font-bold text-center text-primary mb-16">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <form className="space-y-6 p-8 border rounded-lg shadow-lg">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                            <Input type="text" id="name" name="name" placeholder="Your Name" className="w-full rounded-md"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                            <Input type="email" id="email" name="email" placeholder="your@email.com" className="w-full rounded-md"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                            <Input type="tel" id="phone" name="phone" placeholder="+1-555-123-4567" className="w-full rounded-md"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                            <Textarea id="message" name="message" rows={4} placeholder="How can we help you?" className="w-full rounded-md"/>
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors">
                           Submit Message
                        </Button>
                    </form>

                    {/* Contact Information */}
                    <div className="space-y-6 p-8 bg-muted/30 rounded-lg shadow-lg">
                        <div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Get in Touch</h3>
                            <p className="text-muted-foreground mb-6">
                                We're here to help and answer any question you might have. We look forward to hearing from you.
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <PhoneIcon className="h-6 w-6 text-primary"/>
                            <a href="tel:+15551234567" className="text-foreground hover:text-primary transition-colors">+1-555-123-4567</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="h-6 w-6 text-primary"/>
                            <a href="mailto:info@bloomhealth.com" className="text-foreground hover:text-primary transition-colors">info@bloomhealth.com</a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MapPin className="h-6 w-6 text-primary mt-1"/>
                            <p className="text-foreground">
                                123 Health St, Wellness City, ST 54321<br/>United States
                            </p>
                        </div>
                         <div className="mt-6">
                            <Image
                                src="/contact.jpg"
                                alt="Map placeholder"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md object-cover w-full"
                                data-ai-hint="map location"
                                loading="lazy"
                                quality={85}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}


    