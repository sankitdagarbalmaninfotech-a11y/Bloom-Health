export const services = [
  {
    slug: 'urgent-care',
    title: 'Urgent Care',
    servicesHeader: 'Urgent Care At Bloom Health',
    shortDescription: 'Rapid, walk-in urgent care for medical needs that can’t wait.',
    description:
      'Walk-in and same-day appointments for minor injuries, sudden illnesses, and urgent health concerns.',
    longDescription: (
      <span>
        At Bloom Health, we provide fast, expert care for adults and children, 24 hours a day with
        no appointment needed and minimal waiting time.
        <br />
        <br />
        Our urgent care service is designed to manage a wide range of minor to moderate illnesses
        and everyday health concerns, offering immediate access to clinical assessment, diagnosis,
        and treatment. Whether you’re feeling unwell, need prompt medical advice, or require
        treatment for minor conditions, our experienced clinical team is here to help you feel
        better, faster.
      </span>
    ),
    footer:
      'At Bloom Health, we are committed to providing seamless, efficient, and high-quality care, all under one roof. Simply walk in, and we will ensure you are seen promptly and treated with care, expertise, and professionalism.',
    diseases: [
      <>
        <strong>Immediate assessment and treatment&nbsp;</strong>for common illnesses and minor
        conditions
      </>,
      <>
        <strong>Point-of-care testing&nbsp;</strong> for rapid results, so you can get answers
        quickly
      </>,
      <>
        <strong>On-site imaging and investigations</strong>, including X-ray and ultrasound (where
        clinically appropriate)
      </>,
      <>
        <span>
          <strong>In-house pharmacy</strong> providing standard medications and outpatient
          prescriptions, with a code system for items not available locally
        </span>
      </>,
      <>
        <strong>Access to outpatient referrals and follow-up&nbsp;</strong> if specialist care is
        required
      </>,
    ],
    subServices: null,
  },
  {
    slug: 'outpatient-services',
    title: 'Outpatient Specialist',
    servicesHeader: 'Outpatient Specialist Services at Bloom Health',
    shortDescription: 'Comprehensive consultant-led care for adults and children',
    longDescription: (
      <span>
        At Bloom Health, we offer a wide range of outpatient specialist services for both adults and
        paediatric patients. Our consultant-led clinics provide personalised care across medical and
        surgical specialties, all delivered in a welcoming, discreet, and well-coordinated
        environment.
        <br />
        <br />
        We support patients at every stage of their care journey, with access to on-site
        investigations, imaging, and pharmacy services, making it easier to complete assessments and
        treatment plans, all in one place. Whether you're seeking expert advice for a new health
        concern or ongoing support for an existing condition, our team is here to ensure a smooth,
        responsive experience with continuity of care throughout.
      </span>
    ),
    description:
      'Specialist consultations, follow-up care, chronic disease management, and health screenings.',
    diseases: [
      <>
        Consultant-led outpatient clinics across a wide range of specialties
      </>,
      <>
        Services for adults and children, including complex and long-term conditions
      </>,
      <>
        Access to on-site diagnostics, investigations, pharmacy, and treatment planning
      </>,
      <>
        Referrals from GPs, other specialists, or direct self-referral where appropriate
      </>
    ],
    footer: "For more detailed information about each of our specialty services, please explore the relevant pages below.",
    subServices: [
      {
        slug: 'adults',
        title: 'Adult Specialties',
        shortDescription: 'Comprehensive care for adult patients.',
        description: "Our adult specialties cover a wide range of medical and surgical services tailored to the needs of adult patients.",
        servicesChild: [
          {
            slug: 'cardiology',
            title: 'Cardiology',
            shortDescription: 'Heart health assessments',
            longDescription:
              'Our cardiology team provides full evaluation and management for heart conditions.',
          },
          {
            slug: 'neurology',
            title: 'Neurology',
            shortDescription: 'Brain and nervous system disorders',
            longDescription:
              'Our neurology team provides comprehensive evaluation and management for brain and nervous system conditions.',
          },
          {
            slug: 'womens-health',
            title: "Women's Health",
            shortDescription: 'Comprehensive care for women’s health issues',
            longDescription:
              'Our women’s health team provides specialized care for a wide range of health concerns affecting women.',
          },
          {
            slug: 'travel-medicine-and-vaccinations',
            title: 'Travel Medicine & Vaccinations',
            shortDescription: 'Health advice and vaccinations for travelers',
            longDescription:
              'Our travel medicine team provides specialized care for travelers, including health advice, vaccinations, and risk assessments.',
          },
          {
            slug: 'gp-services',
            title: 'GP Services',
            shortDescription: 'General practice services for all ages',
            longDescription:
              'Our GP services team provides comprehensive primary care for patients of all ages, including health assessments, vaccinations, and management of chronic conditions.',
          },
          {
            slug: 'ENT',
            title: 'ENT Services',
            shortDescription: 'Ear, nose, and throat care',
            longDescription:
              'Our ENT services team provides specialized care for conditions affecting the ear, nose, and throat, including hearing assessments, allergy testing, and sinus treatments.',
          },
          {
            slug: 'physiotherapy',
            title: 'Physiotherapy',
            shortDescription: 'Physical rehabilitation and therapy',
            longDescription:
              'Our physiotherapy team provides specialized care for patients with physical impairments or disabilities, including rehabilitation programs, manual therapy, and exercise prescriptions.',
          },
          {
            slug: 'urology',
            title: 'Urology',
            shortDescription: 'Urinary tract and male reproductive health',
            longDescription:
              'Our urology team provides specialized care for conditions affecting the urinary tract and male reproductive system, including prostate health, urinary incontinence, and erectile dysfunction.',
          },
          {
            slug: 'rheumatology',
            title: 'Rheumatology',
            shortDescription: 'Joint and autoimmune disorders',
            longDescription:
              'Our rheumatology team provides comprehensive care for patients with joint and autoimmune conditions.',
          },
          {
            slug: 'orthopaedics',
            title: 'Orthopaedics',
            shortDescription: 'Bone and joint care',
            longDescription:
              'Our orthopaedics team provides comprehensive care for patients with musculoskeletal conditions, including fractures, arthritis, and sports injuries.',
          },
          {
            slug: 'general-surgery',
            title: 'General Surgery',
            shortDescription: 'Surgical care for a variety of conditions',
            longDescription:
              'Our general surgery team provides comprehensive surgical care for a wide range of conditions, including gastrointestinal disorders, hernias, and soft tissue tumors.',
          },
          {
            slug: 'respiratory-medicine',
            title: 'Respiratory Medicine',
            shortDescription: 'Lung and breathing disorders',
            longDescription: 'Diagnosis and management of respiratory conditions, including asthma and COPD.',
          },
          {
            slug: 'dermatology',
            title: 'Dermatology',
            shortDescription: 'Skin, hair, and nails',
            longDescription: 'Treatment for various skin conditions and cosmetic concerns.',
          },
          {
            slug: 'gastroenterology',
            title: 'Gastroenterology',
            shortDescription: 'Digestive system care',
            longDescription: 'Management of gastrointestinal disorders and liver disease.',
          },
          {
            slug: 'endocrinology-diabetes',
            title: 'Endocrinology & Diabetes',
            shortDescription: 'Hormonal and metabolic disorders',
            longDescription: 'Diagnosis and management of endocrine disorders, including diabetes and thyroid conditions.',
          },
          {
            slug: 'obesity',
            title: 'Obesity',
            shortDescription: 'Weight management and metabolic health',
            longDescription: 'Comprehensive evaluation and treatment for obesity and related metabolic disorders.',
          },
          {
            slug: 'general-medicine',
            title: 'General Medicine',
            shortDescription: 'Comprehensive primary care',
            longDescription: 'Our general medicine team provides a wide range of services, including preventive care, chronic disease management, and health education.',
          },
          {
            slug: 'allied-health-services',
            title: 'Allied Health Services',
            shortDescription: 'Supportive health services',
            longDescription: 'Our allied health services team provides a range of supportive care, including physiotherapy, occupational therapy, and dietetics.',
          },
          {
            slug: 'minor-procedures',
            title: 'Minor Procedures',
            shortDescription: 'On-site minor surgical procedures',
            longDescription: 'Including cyst removal, wound care, suturing, and joint injections.',
            subServices: [
              {
                slug: 'wound-care',
                title: 'Wound Care',
                description: 'Assessment and treatment for acute and chronic wounds.',
              },
              {
                slug: 'joint-injections',
                title: 'Joint Injections',
                description: 'Steroid and hyaluronic acid injections for pain relief.',
              },
            ],
          },
          {
            slug: 'occupational-health',
            title: 'Occupational Health',
            shortDescription: 'Workplace wellness and pre-employment screenings',
            longDescription:
              'Services include pre-employment medicals, injury management, and corporate wellness programs.',
          },
        ].sort((a, b) => a.title.localeCompare(b.title)), // Alphabetical
      },
      {
        slug: 'pediatrics',
        title: 'Pediatric Specialties',
        shortDescription: 'Comprehensive care for children from newborns to adolescents.',
        description: "Our pediatric specialties cover a wide range of medical and surgical services tailored to the needs of pediatric patients.",
        servicesChild: [
          {
            slug: 'endocrinology-diabetes',
            title: 'Endocrinology & Diabetes',
            shortDescription: 'Hormonal and metabolic disorders in children',
            longDescription:
              'Diagnosis and management of congenital and acquired endocrine disorders in children.',
          },
          {
            slug: 'neurology-and-epilepsy',
            title: 'Neurology & Epilepsy',
            shortDescription: 'Neurological disorders in children',
            longDescription: 'Diagnosis and management of neurological conditions, including epilepsy, in children.',
          },
          {
            slug: 'allergy',
            title: 'Allergy',
            shortDescription: 'Allergic conditions in children',
            longDescription: 'Diagnosis and management of allergic conditions, including asthma and eczema, in children.',
          },
          {
            slug: 'gastroenterology',
            title: 'Gastroenterology',
            shortDescription: 'Digestive system care for children',
            longDescription: 'Diagnosis and management of gastrointestinal disorders in children.',
          },
          {
            slug: 'general-pediatrics',
            title: 'General Pediatrics',
            shortDescription: 'Comprehensive care for children',
            longDescription: 'Diagnosis and management of a wide range of pediatric conditions.',
          },
          {
            slug: 'neonatology-development',
            title: 'Neonatology & Development',
            shortDescription: 'Care for newborns and developmental issues',
            longDescription: 'Diagnosis and management of conditions affecting newborns and children\'s development.',
          },
          {
            slug: 'ENT',
            title: 'ENT',
            shortDescription: 'Ear, Nose, and Throat care',
            longDescription: 'Diagnosis and management of conditions affecting the ear, nose, and throat in children.',
          },
          {
            slug: 'cardiology',
            title: 'Cardiology',
            shortDescription: 'Heart care for children',
            longDescription: 'Diagnosis and management of congenital and acquired heart conditions in children.',
          },
          {
            slug: 'respiratory-medicine',
            title: 'Respiratory Medicine',
            shortDescription: 'Lung and airway care for children',
            longDescription: 'Diagnosis and management of respiratory conditions, including asthma and bronchitis, in children.',
          },
          {
            slug: 'dermatology',
            title: 'Dermatology',
            shortDescription: 'Skin care for children',
            longDescription: 'Diagnosis and management of skin conditions, including eczema and psoriasis, in children.',
          },
        ].sort((a, b) => a.title.localeCompare(b.title)), // Alphabetical
      },
    ],
  },
  {
    slug: 'diagnostics',
    title: 'Diagnostics',
    description:
      'On-site laboratory tests, ultrasound, X-ray, CT scans, and rapid-result services.',
    longDescription:
      'Our state-of-the-art diagnostic facilities provide rapid and accurate results. With a comprehensive suite of imaging and laboratory services all under one roof, we can expedite your diagnosis and treatment plan.',
    subServices: [
      {
        slug: 'laboratory-tests',
        title: 'Laboratory Tests',
        description: 'A full range of blood tests, urine analysis, and other lab services.',
      },
      {
        slug: 'ultrasound',
        title: 'Ultrasound',
        description: 'Non-invasive imaging for various medical conditions.',
      },
      {
        slug: 'x-ray',
        title: 'X-ray',
        description: 'Digital X-ray services for bone and soft tissue evaluation.',
      },
      {
        slug: 'ct-scans',
        title: 'CT Scans',
        description: 'Advanced computerized tomography for detailed internal imaging.',
      },
    ],
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);
export const getSubService = (serviceSlug, subServiceSlug) => {
  const service = getService(serviceSlug);
  return service?.subServices.find((sub) => sub.slug === subServiceSlug);
};
