import { motion } from 'framer-motion';
// Using native img in Vite app
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import herobg2 from '../../dist/herobg2.jpeg';
import {
  Stethoscope,
  Clock,
  Activity,
  Shield,
  Phone as PhoneIcon,
  Globe,
  MapPin,
  ArrowRight,
  Check,
  Plus,
} from 'lucide-react';
import { services } from '@/lib/services';
const heroData = {
  headingLine1: 'WORLD-CLASS CARE,',
  headingLine2: 'CLOSE TO HOME',
  subheading: `A new standard in private healthcare for Milton Keynes. Experience world-class medical treatment with a personal touch; expert treatment, kind support, and comfort you can count on, close to home. From urgent walk-in care to specialist clinics, Bloom Health Hospital is here to put your health first, with no long waits and no compromises on quality.`,
};
const featuresData = [
  {
    title: 'Expert Consultants & Advanced Care',
    desc: 'Our team includes leading consultants across Cardiology, Gastroenterology, Pediatrics, Ear Nose and Throat and more, offering specialist care backed by top-tier technology and proven techniques.',
    icon: Stethoscope,
  },
  {
    title: 'Urgent Care When You Need It',
    desc: 'Skip the A&E wait. Our Urgent Care Centre offers fast, walk-in treatment for a wide range of unexpected health concerns – no appointment needed.',
    icon: Clock,
  },
  {
    title: 'Comprehensive On-site Diagnostics',
    desc: 'From an onsite laboratory to state-of-the-art Ultrasound, CT and X-ray imaging, we deliver prompt answers and accurate results all under one roof.',
    icon: Activity,
  },
  {
    title: 'Self-funded & Insured Patients Welcome',
    desc: "Whether you're self-funding or using private insurance, our dedicated patient advisors make access to excellent care simple. We also offer GP consultations by appointment, virtual or Face to Face, making referrals seamless and accessible.",
    icon: Shield,
  },
];
const whyChooseUsItems = [
  'Minimal Wait Times — See a doctor when you need one, without long queues.',
  'Expert Clinicians — Care provided by senior doctors, consultants, and experienced nurses.',
  'Modern Facilities — State-of-the-art equipment in a welcoming, comfortable environment.',
  'Accessible Location — Conveniently located with easy parking and transport access.',
  'Personalised Care — We focus on your needs, offering tailored health solutions.',
  'Discreet & Confidential — High standards of privacy and patient confidentiality.',
];
const formFields = [
  { label: 'Name', type: 'text', placeholder: 'Your Name', name: 'name' },
  { label: 'Email', type: 'email', placeholder: 'your@email.com', name: 'email' },
  { label: 'Phone Number', type: 'tel', placeholder: '+44 1234 567890', name: 'phone' },
];
export default function HomePage() {
  return (
    <>
        <motion.section
          id='home'
          className='hide-card relative h-[80vh] bg-cover bg-center '
          style={{ backgroundImage: 'url(/herobg1.webp)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='absolute inset-0 ' />
          <motion.div
            className='container mx-auto h-full flex items-center px-4'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className='max-w-lg w-full p-6 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center text-center'>
              <h1 className='text-2xl sm:text-3xl font-headline font-extrabold text-gray-900 leading-tight drop-shadow mb-1'>
                {heroData.headingLine1}
              </h1>
              <h2 className='text-lg sm:text-xl font-headline font-bold text-primary mt-1 mb-2'>
                {heroData.headingLine2}
              </h2>
              <p className='mt-1 text-base sm:text-lg text-gray-700 leading-relaxed mb-4'>
                {heroData.subheading}
              </p>
              <Button
                asChild
                size='lg'
                className='mt-2 bg-gradient-to-r from-primary to-blue-500 hover:from-blue-600 hover:to-primary text-white rounded-full px-8 py-3 shadow-xl transition-all duration-200'
              >
                <a href='#services'>EXPLORE SERVICES</a>
              </Button>
            </div>
          </motion.div>
        </motion.section>
        <div className='m-6'>
          <div className='hide-above-1280 mt-5'>
            <img src={herobg2} alt='Bloom Health strengths wheel' className='rounded-3xl' width={1200} height={800} />
          </div>
          <div className="hide-above-1280  mt-6 rounded-3xl w-full p-6  bg-white/90 backdrop-blur-lg shadow-2xl border border-gray-200 flex flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl font-headline font-extrabold text-gray-900 leading-tight drop-shadow mb-1">
              {heroData.headingLine1}
            </h1>
            <h2 className="text-lg sm:text-xl font-headline font-bold text-primary mt-1 mb-2">
              {heroData.headingLine2}
            </h2>
            <p className="mt-1 text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              {heroData.subheading}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-2 bg-gradient-to-r from-primary to-blue-500 hover:from-blue-600 hover:to-primary text-white rounded-full px-8 py-3 shadow-xl transition-all duration-200"
            >
              <a href="#services">EXPLORE SERVICES</a>
            </Button>
          </div>
        </div>
        <section id='about-us' className='pt-32 py-16 bg-gradient-to-b from-gray-50 to-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-10'>
              <span className='inline-block bg-primary/10 text-primary px-4 py-1 rounded-full uppercase text-xs tracking-wider font-semibold mb-3'>
                Why Choose Us
              </span>
              <h2 className='text-3xl sm:text-4xl font-headline font-extrabold text-foreground mb-2'>
                Your Health, Our Priority
              </h2>
              <p className='max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground'>
                Discover the Bloom Health difference—expert care, advanced diagnostics, and a
                patient-first approach, all under one roof.
              </p>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
              {featuresData.map(({ title, desc, icon: Icon }) => (
                <div
                  className='flex flex-col items-start p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition'
                  key={title}
                >
                  <div className='flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4'>
                    <Icon className='h-7 w-7 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
                  <p className='text-sm text-gray-600'>{desc}</p>
                </div>
              ))}
            </div>
            <div className='mt-12 flex flex-col items-center'>
              <div className='bg-primary/10 rounded-2xl px-6 py-6 max-w-xl w-full flex flex-col sm:flex-row items-center justify-between gap-4 shadow'>
                <span className='text-lg font-semibold text-primary text-center sm:text-left'>
                  Get Started: Call{' '}
                  <a
                    href='tel:####'
                    className='underline underline-offset-2 decoration-primary font-bold hover:text-primary/80 transition'
                  >
                    ####
                  </a>{' '}
                  or{' '}
                  <a
                    href='#contact'
                    className='underline underline-offset-2 decoration-primary font-bold hover:text-primary/80 transition'
                  >
                    Enquire Now
                  </a>{' '}
                  to discover how Bloom Health Hospital can help you start your journey to better
                  health.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id='services' className='pt-32 py-16 bg-background'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-10'>
              <span className='inline-block bg-primary/10 text-primary px-4 py-1 rounded-full uppercase text-xs tracking-wider font-semibold mb-3'>
                Our Services
              </span>
              <h2 className='text-3xl sm:text-4xl font-headline font-extrabold text-foreground mb-2'>
                Comprehensive Medical Services
              </h2>
              <p className='max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground'>
                Explore our wide range of specialist and urgent care services, designed to meet your
                health needs with expertise and compassion.
              </p>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {services.map((svc) => (
                <div
                  className='p-6 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-start hover:shadow-xl transition'
                  key={svc.slug}
                >
                  <div className='flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-3'>
                    <Plus className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-1'>{svc.title}</h3>
                  <p className='text-sm text-gray-600 mb-4 flex-grow'>{svc.description}</p>
                  <Link
                    to={`/services/${svc.slug}`}
                    className='inline-flex items-center text-primary font-medium underline underline-offset-2 decoration-primary hover:text-primary/80 transition'
                  >
                    LEARN MORE <ArrowRight className='ml-1 h-4 w-4' />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className='pt-32 py-20 bg-gray-50'>
          <div className='container mx-auto px-4 grid gap-12 md:grid-cols-2 items-center'>
            <div>
              <span className='bg-primary/10 text-primary px-3 py-1 rounded-full uppercase text-xs font-semibold'>
                Why Choose Bloom Health?
              </span>
              <h2 className='mt-4 text-3xl sm:text-4xl font-headline font-bold text-foreground'>
                Your Health in Trusted Hands
              </h2>
              <p className='mt-4 text-lg text-muted-foreground'>
                At Bloom Health, we believe every patient deserves prompt, high-quality medical care
                delivered with compassion and expertise. Our team combines urgent care and
                specialist outpatient services, ensuring your health is in safe, capable hands.
              </p>
              <ul className='mt-6 space-y-3'>
                {whyChooseUsItems.map((item) => (
                  <li className='flex items-start' key={item}>
                    <Check className='h-5 w-5 text-primary mr-3 mt-1' />
                    <span className='text-gray-800'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src='/vision.jpg'
                alt='Comfortable and modern facility'
                width={600}
                height={450}
                className='rounded-xl shadow-xl object-cover w-full h-auto'
                loading='lazy'
              />
            </div>
          </div>
        </section>
        <section id='contact' className='pt-32 py-20 bg-background'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl sm:text-4xl font-headline font-bold text-foreground'>
                Book an Appointment
              </h2>
              <p className='mt-4 text-lg text-muted-foreground max-w-3xl mx-auto'>
                We offer flexible appointments, including same-day and walk-in urgent care
                availability. Reach out to us to get started.
              </p>
            </div>
            <div className='grid gap-12 md:grid-cols-2'>
              <form className='space-y-6 p-8 bg-white rounded-xl shadow-lg'>
                <h3 className='text-2xl font-semibold text-foreground mb-6'>
                  Request an Appointment Online
                </h3>
                {formFields.map(({ label, type, placeholder, name }) => (
                  <div key={name}>
                    <label
                      htmlFor={name}
                      className='block text-sm font-medium text-foreground mb-1'
                    >
                      {label}
                    </label>
                    {type === 'text' || type === 'email' || type === 'tel' ? (
                      <Input
                        type={type}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        className='w-full rounded-md'
                      />
                    ) : (
                      <Textarea
                        id={name}
                        name={name}
                        rows={4}
                        placeholder={placeholder}
                        className='w-full rounded-md'
                      />
                    )}
                  </div>
                ))}
                <div>
                  <label
                    htmlFor='appointmentType'
                    className='block text-sm font-medium text-foreground mb-1'
                  >
                    Type of Appointment
                  </label>
                  <select
                    id='appointmentType'
                    name='appointmentType'
                    className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary'
                  >
                    <option value=''>Select type</option>
                    <option value='general'>General Consultation</option>
                    <option value='specialist'>Specialist Consultation</option>
                    <option value='urgent'>Urgent Care</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <div className='flex-1'>
                    <label
                      htmlFor='preferredDate'
                      className='block text-sm font-medium text-foreground mb-1'
                    >
                      Preferred Date
                    </label>
                    <Input
                      type='date'
                      id='preferredDate'
                      name='preferredDate'
                      className='w-full rounded-md'
                    />
                  </div>
                  <div className='flex-1'>
                    <label
                      htmlFor='preferredTime'
                      className='block text-sm font-medium text-foreground mb-1'
                    >
                      Preferred Time
                    </label>
                    <Input
                      type='time'
                      id='preferredTime'
                      name='preferredTime'
                      className='w-full rounded-md'
                    />
                  </div>
                </div>
                <Button
                  type='submit'
                  size='lg'
                  className='w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-md py-3'
                >
                  Submit Request
                </Button>
              </form>
              <aside className='space-y-6 p-8 bg-white rounded-xl shadow-lg'>
                <div className='flex items-center space-x-4'>
                  <PhoneIcon className='h-8 w-8 text-primary' />
                  <div>
                    <h4 className='font-semibold text-foreground'>Call Us</h4>
                    <a href='tel:####' className='text-foreground hover:text-primary'>
                      ####
                    </a>
                  </div>
                </div>
                <div className='flex items-center space-x-4'>
                  <Globe className='h-8 w-8 text-primary' />
                  <div>
                    <h4 className='font-semibold text-foreground'>Book Online</h4>
                    <a href='#' className='text-foreground hover:text-primary'>
                      [booking link]
                    </a>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <MapPin className='h-8 w-8 text-primary mt-1' />
                  <div>
                    <h4 className='font-semibold text-foreground'>Visit Us</h4>
                    <p className='text-foreground'>[insert address]</p>
                  </div>
                </div>
                <img
                  src='/contact.jpg'
                  alt='Bloom Health location'
                  width={600}
                  height={400}
                  className='rounded-xl shadow-md w-full mt-4 object-cover'
                />
              </aside>
            </div>
          </div>
        </section>
    </>
  );
}
