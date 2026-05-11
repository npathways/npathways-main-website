// Services data for NPathways Global

export const serviceCategories = [
  {
    id: 'consultancy',
    name: 'Consultancy Services',
    services: ['global-education-consulting', 'career-guidance', 'visa-assistance']
  },
  {
    id: 'readiness',
    name: 'Readiness & Accelerators',
    services: ['for-parents', 'for-schools', 'bootcamps', 'school-programs']
  }
];

export const consultancyServices = [
  {
    id: 'global-education-consulting',
    name: 'Global Education Consulting',
    icon: null,
    shortDescription: 'University shortlisting and admission support',
    description: 'We guide students at every stage of their study abroad journey — from selecting the right universities to preparing standout SOPs and LORs, coaching for exams like IELTS, SAT, GRE, and TOEFL, helping secure scholarships, and managing visa applications.',
    longDescription: 'Our Global Education Consulting is a premium, end-to-end service designed for students aiming for top-tier international universities. We go beyond simple applications by building a strategic profile that highlights your unique strengths and aligns with institutional expectations. From the Ivy League to Russell Group institutions, we help you navigate the complex global admissions landscape with ease.',
    features: [
      'University shortlisting based on profile',
      'Application strategy and planning',
      'SOP and LOR preparation',
      'Exam coaching (IELTS, SAT, GRE, TOEFL)',
      'Scholarship guidance',
      'Visa application support'
    ],
    benefits: [
      { title: 'Strategic Advantage', description: 'Expert insights into what top-tier admissions committees are looking for.' },
      { title: 'Minimized Stress', description: 'We manage the timelines, documentation, and deadlines for you.' },
      { title: 'Higher Admit Rates', description: 'Optimized profiles consistently secure seats in prestigious institutions.' }
    ],
    faq: [
      { question: 'When should I start the consulting process?', answer: 'Ideally, you should start 12-18 months before your intended intake to build a strong profile.' },
      { question: 'Do you guarantee admission?', answer: 'While no one can guarantee admission, our strategic approach significantly improves your chances at target universities.' }
    ],
    pricing: 'Custom',
    link: '/services/education-consulting'
  },
  {
    id: 'career-guidance',
    name: 'Career Guidance',
    icon: null,
    shortDescription: '1-on-1 personalized strategy sessions',
    description: 'Personalized career counseling to help you discover your strengths, clarify your goals, and create an actionable roadmap for studying abroad.',
    longDescription: 'Career Guidance at NPathways is a reflective and analytical process. We help students and professionals identify their core interests and map them to global industry trends. This ensures that your choice of major or master\'s program isn\'t just based on popularity, but on long-term career viability and personal fulfillment.',
    features: [
      'One-on-one counseling sessions',
      'Career pathway analysis',
      'Goal setting and planning',
      'Profile evaluation',
      'Course and university recommendations'
    ],
    benefits: [
      { title: 'Path Clarity', description: 'Remove the confusion of multiple options with a data-backed roadmap.' },
      { title: 'Market Awareness', description: 'Align your education with future job market demands.' },
      { title: 'Personalized Strategy', description: 'A plan that respects your unique strengths and financial constraints.' }
    ],
    faq: [
      { question: 'Is this only for study abroad?', answer: 'While we specialize in global pathways, our guidance helps with any long-term career planning.' },
      { question: 'How many sessions will I need?', answer: 'Most students find clarity within 2-3 deep-dive sessions.' }
    ],
    pricing: 'Custom',
    link: '/services/career-guidance'
  },
  {
    id: 'visa-assistance',
    name: 'Visa Assistance',
    icon: null,
    shortDescription: 'End-to-end documentation and filing support',
    description: 'Complete visa support including documentation review, application filing, interview preparation, and follow-up assistance.',
    longDescription: 'The visa process is often the most stressful part of the global transition. Our team of experts stays updated on the latest immigration policies and documentation requirements for major destinations including the US, UK, Canada, Australia, and Europe. We ensure your file is meticulous, increasing the probability of a successful outcome.',
    features: [
      'Visa eligibility assessment',
      'Document preparation and review',
      'Application filing assistance',
      'Interview preparation',
      'Follow-up and tracking'
    ],
    benefits: [
      { title: '98% Success Rate', description: 'Our meticulous filing process ensures high approval rates.' },
      { title: 'Expert Documentation', description: 'Avoiding common pitfalls and technical errors in filing.' },
      { title: 'Mock Interviews', description: 'Build confidence with simulated visa interviews for relevant countries.' }
    ],
    faq: [
      { question: 'Do you help with financial documentation?', answer: 'Yes, we guide you on how to correctly present your financial records as per embassy requirements.' },
      { question: 'What if my visa is rejected?', answer: 'We analyze the rejection reason and assist with re-filing or appeals where possible.' }
    ],
    pricing: 'Custom',
    link: '/services/visa-assistance'
  }
];

export const supportServices = [
  {
    id: 'for-parents',
    name: 'For Parents',
    icon: null,
    shortDescription: 'Safety and clarity for families.',
    description: 'Comprehensive orientation and support programs designed to help parents navigate the global education landscape with confidence.',
    longDescription: 'Studying abroad is a major family decision. We provide parents with the tools, information, and emotional support needed to ensure their child\'s safety, financial clarity, and academic success in a foreign land. Our sessions cover everything from choosing safe destinations to managing finances and cultural transitions.',
    features: [
      'Safety & destination audits',
      'Financial planning & forex guidance',
      'Regular student progress reports',
      'Emergency support protocols',
      'Parental community access'
    ],
    benefits: [
      { title: 'Peace of Mind', description: 'Know your child is in safe hands with vetted destinations and local support.' },
      { title: 'Financial Roadmap', description: 'Clear visibility into total cost of education and living expenses.' },
      { title: 'Better Alignment', description: 'Bridging the communication gap between student ambitions and family expectations.' }
    ],
    faq: [
      { question: 'How do you ensure student safety?', answer: 'We only partner with accredited universities in safe locations and provide 24/7 on-ground support.' },
      { question: 'Do you help with student housing?', answer: 'Yes, we assist in finding safe, university-approved or verified private accommodation.' }
    ],
    link: '/services/parents'
  },
  {
    id: 'for-schools',
    name: 'For Schools',
    icon: null,
    shortDescription: 'Institutional success and global exposure.',
    description: 'Strategic partnerships with schools to provide students with global career pathways and institutional growth opportunities.',
    longDescription: 'We partner with K-12 institutions to integrate global education readiness into their curriculum. From set-up of international wings to organizing global immersion programs and counselor training, we help schools become global hubs for student excellence.',
    features: [
      'International Wing setup consulting',
      'Professional development for teachers',
      'Global university fairs on campus',
      'Curriculum alignment for global prep',
      'Student profile building workshops'
    ],
    benefits: [
      { title: 'Institutional Prestige', description: 'Enhance your school brand with a strong global education department.' },
      { title: 'Student Success', description: 'Higher college placement rates in top-tier global universities.' },
      { title: 'Teacher Growth', description: 'Exposing educators to global standards and teaching methodologies.' }
    ],
    faq: [
      { question: 'How do we start a partnership?', answer: 'Contact our institutional relations team for a discovery session and audit.' },
      { question: 'Is there a cost for the school?', answer: 'We offer both subsidized and premium partnership models based on school requirements.' }
    ],
    link: '/services/schools'
  },
  {
    id: 'bootcamps',
    name: 'Bootcamps',
    icon: null,
    shortDescription: 'Intensive profile-building accelerators.',
    description: 'High-impact, short-term programs designed to build specific skills and professional profiles.',
    longDescription: 'Our bootcamps are intensive accelerators where students work on real-world projects, build portfolios, and interact with industry experts. Whether it\'s tech, business, or design, we provide the platform to go from concept to creation.',
    features: [
      'Industry-expert mentorship',
      'Real-world project publication',
      'Skill certification',
      'Peer-to-peer collaboration',
      'Portfolio submission support'
    ],
    benefits: [
      { title: 'Portfolio Punch', description: 'Gain unique achievements that stand out on college applications.' },
      { title: 'Domain Expertise', description: 'Deep dive into a specific field beyond textbook knowledge.' },
      { title: 'Social Proof', description: 'Work with recognized brands and experts in the field.' }
    ],
    faq: [
      { question: 'Are bootcamps online or offline?', answer: 'We offer both hybrid and fully online bootcamps to suit global schedules.' },
      { question: 'Will I get a certificate?', answer: 'Yes, all successful graduates receive a globally recognized NPathways certificate.' }
    ],
    link: '/services/bootcamps'
  },
  {
    id: 'school-programs',
    name: 'School Programs',
    icon: null,
    shortDescription: 'Structured institutional engagements.',
    description: 'Long-term programs integrated with the school calendar for holistic student development.',
    longDescription: 'NPathways school programs are designed to be part of the academic ecosystem. We provide year-long guidance and activities that transform students from passive learners to global leaders.',
    features: [
      'Quarterly readiness audits',
      'Guest lectures from global alumni',
      'University application workshops',
      'Leadership & soft-skills training',
      'Global immersion tours'
    ],
    benefits: [
      { title: 'Holistic Growth', description: 'Balance academic goals with global readiness and life skills.' },
      { title: 'Stress-free Planning', description: 'Spreading the career discovery process over 2-3 years.' },
      { title: 'Community Effect', description: 'Students grow together in a culture of global ambition.' }
    ],
    faq: [
      { question: 'How do these programs fit into the timetable?', answer: 'We work with the school administration to schedule sessions during non-academic or co-curricular hours.' }
    ],
    link: '/services/school-programs'
  }
];

// Get service by ID
export const getServiceById = (id) => {
  return consultancyServices.find(service => service.id === id) || 
         supportServices.find(service => service.id === id);
};

export const getAllServices = () => {
  return [...consultancyServices, ...supportServices];
};
