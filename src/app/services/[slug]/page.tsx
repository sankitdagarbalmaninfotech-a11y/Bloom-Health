import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params: { slug } }: { params: { slug: string } }) {
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-primary/5 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-headline text-4xl font-bold text-primary">{service.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Comprehensive care and specialized treatments
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-foreground">
                  About Our {service.title} Services
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {service.longDescription || service.description}
                </p>
                <Button asChild size="lg" className="mt-8">
                  <Link href="/#contact">Book an Appointment</Link>
                </Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li><Link href="/#services" className="text-primary hover:underline">All Services</Link></li>
                    <li><Link href="/#contact" className="text-primary hover:underline">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Services Section */}
        {service.subServices && service.subServices.length > 0 && (
          <section id="sub-services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold text-foreground">
                  Our {service.title} Offerings
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Explore the specific services we provide in this area.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.subServices.map((sub) => (
                  <div key={sub.slug} className="border rounded-lg p-6 shadow-sm bg-background flex flex-col text-left hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{sub.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">
                      {sub.description}
                    </p>
                    <Link href={`/services/${service.slug}/${sub.slug}`} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center">
                      LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
} 