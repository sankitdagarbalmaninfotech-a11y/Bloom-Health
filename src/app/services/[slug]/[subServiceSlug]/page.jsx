// Client app fallback instead of Next notFound
import { getSubService, getService } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
// Static params removed in React app
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function SubServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug = '', subServiceSlug = '' } = useParams();
  const service = getService(slug);
  const subService = getSubService(slug, subServiceSlug);
  if (!service || !subService) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p>Sub-service not found.</p>
      </div>
    );
  }
  const location = useLocation();
  return (
    <>
      <main className='flex-grow'>
        <section className='bg-gray-50 py-4 border-b'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center text-sm text-muted-foreground'>
              <Link to='/' className='hover:text-primary'>
                Home
              </Link>
              <ChevronRight className='h-4 w-4 mx-1' />
              <a href='/#services' className='hover:text-primary'>
                Services
              </a>
              <ChevronRight className='h-4 w-4 mx-1' />
              <Link to={`/services/${service.slug}`} className='hover:text-primary'>
                {service.title}
              </Link>
              <ChevronRight className='h-4 w-4 mx-1' />
              <span className='font-medium text-foreground'>{subService.title}</span>
            </div>
          </div>
        </section>
        <section className='bg-primary/5 py-10'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='font-headline text-4xl font-bold text-primary'>{subService.title}</h1>
            <p className='mt-2 text-lg text-muted-foreground'>A sub-service of {service.title}</p>
          </div>
        </section>
        <section className='py-20'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
              <div className='md:col-span-2'>
                <h2 className='text-3xl font-bold text-foreground'>About {subService.title}</h2>
                <p className='mt-4 text-lg text-muted-foreground'>{subService.shortDescription}</p>
                <p className='mt-4 text-lg text-muted-foreground'>
                  Further details about the {subService.title}service will be provided here. This
                  section can include information about the procedures, what to expect, the
                  technology used, and the specialists involved.
                </p>
                <Button asChild size='lg' className='mt-8'>
                  <a href='/#contact'>Contact us for more information</a>
                </Button>
              </div>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-xl font-semibold text-foreground mb-4'>Related Services</h3>
                <ul className='space-y-2'>
                  {service?.subServices
                    .filter((sub) => {
                      if (location?.pathname === '/services/outpatient-services/adults')
                        return sub.slug === 'adults';
                      if (location?.pathname === '/services/outpatient-services/pediatrics')
                        return sub.slug === 'pediatrics';
                      return false;
                    })
                    .flatMap((sub) =>
                      sub.servicesChild.map((child) => {
                        const path = child?.title
                          .split(' ')
                          .map((word, i) =>
                            i === 0
                              ? word.toLowerCase()
                              : word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join('');
                        return (
                          <li key={child.slug}>
                            <Link
                              to={`/${path}`}
                              className={`hover:text-primary ${
                                child.slug === subService?.slug ? 'text-primary font-bold' : ''
                              }`}
                            >
                              {child.title}
                            </Link>
                          </li>
                        );
                      }),
                    )}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
