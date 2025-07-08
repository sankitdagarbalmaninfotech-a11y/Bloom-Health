export interface SubService {
  slug: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  subServices: SubService[];
}

export const services: Service[] = [
  {
    slug: "urgent-care",
    title: "Urgent Care",
    description: "Walk-in and same-day appointments for minor injuries, sudden illnesses, and urgent health concerns.",
    longDescription: "Our Urgent Care Centre provides immediate medical attention for a wide range of non-life-threatening conditions. With experienced clinicians and on-site diagnostics, we offer a fast and efficient alternative to A&E for unexpected health issues. No appointment is necessary.",
    subServices: [
      { slug: "minor-injuries", title: "Minor Injuries", description: "Treatment for cuts, sprains, minor fractures, and burns." },
      { slug: "sudden-illnesses", title: "Sudden Illnesses", description: "Care for infections, fevers, abdominal pain, and other acute conditions." },
      { slug: "urgent-health-concerns", title: "Urgent Health Concerns", description: "Management of asthma attacks, allergic reactions, and other urgent issues." },
    ]
  },
  {
    slug: "outpatient-services",
    title: "Outpatient Services",
    description: "Specialist consultations, follow-up care, chronic disease management, and health screenings.",
    longDescription: "We offer a wide array of outpatient services, providing access to leading specialists and comprehensive care without hospital admission. From initial diagnosis to ongoing management, our team is here to support your health journey.",
    subServices: [
      { slug: "specialist-consultations", title: "Specialist Consultations", description: "Access to experts in Cardiology, Gastroenterology, Pediatrics, and more." },
      { slug: "follow-up-care", title: "Follow-up Care", description: "Post-treatment and post-operative follow-up appointments." },
      { slug: "chronic-disease-management", title: "Chronic Disease Management", description: "Ongoing support for conditions like diabetes, hypertension, and asthma." },
      { slug: "health-screenings", title: "Health Screenings", description: "Preventive health checks and wellness assessments." },
    ]
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    description: "On-site laboratory tests, ultrasound, X-ray, CT scans, and rapid-result services.",
    longDescription: "Our state-of-the-art diagnostic facilities provide rapid and accurate results. With a comprehensive suite of imaging and laboratory services all under one roof, we can expedite your diagnosis and treatment plan.",
    subServices: [
      { slug: "laboratory-tests", title: "Laboratory Tests", description: "A full range of blood tests, urine analysis, and other lab services." },
      { slug: "ultrasound", title: "Ultrasound", description: "Non-invasive imaging for various medical conditions." },
      { slug: "x-ray", title: "X-ray", description: "Digital X-ray services for bone and soft tissue evaluation." },
      { slug: "ct-scans", title: "CT Scans", description: "Advanced computerized tomography for detailed internal imaging." },
    ]
  },
  {
    slug: "minor-procedures",
    title: "Minor Procedures",
    description: "Wound care, minor surgical procedures, joint injections, and more.",
    longDescription: "We perform a variety of minor procedures on-site, providing a convenient and comfortable setting for treatments that do not require a full hospital stay. Our experienced team ensures your safety and comfort throughout the process.",
    subServices: [
      { slug: "wound-care", title: "Wound Care", description: "Professional assessment and treatment for acute and chronic wounds." },
      { slug: "minor-surgical-procedures", title: "Minor Surgical Procedures", description: "Including cyst removal, skin biopsies, and suturing." },
      { slug: "joint-injections", title: "Joint Injections", description: "Steroid and hyaluronic acid injections for pain relief." },
    ]
  },
  {
    slug: "occupational-health",
    title: "Occupational Health",
    description: "Pre-employment medicals, workplace injury management, and corporate health services.",
    longDescription: "Our occupational health services are designed to support businesses in maintaining a healthy and safe workforce. We partner with companies to provide a range of services from pre-employment screenings to ongoing employee wellness programs.",
    subServices: [
      { slug: "pre-employment-medicals", title: "Pre-employment Medicals", description: "Comprehensive health assessments for new hires." },
      { slug: "workplace-injury-management", title: "Workplace Injury Management", description: "Prompt treatment and rehabilitation for work-related injuries." },
      { slug: "corporate-health-services", title: "Corporate Health Services", description: "Custom wellness programs, health talks, and on-site clinics." },
    ]
  }
];

export const getService = (slug: string) => services.find(service => service.slug === slug);

export const getSubService = (serviceSlug: string, subServiceSlug: string) => {
    const service = getService(serviceSlug);
    return service?.subServices.find(sub => sub.slug === subServiceSlug);
}; 