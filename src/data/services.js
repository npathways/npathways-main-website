// Services data for NPathways Global

export const serviceCategories = [
  {
    id: 'consultancy',
    name: 'Study Abroad Services',
    services: [
      'academic-university-consulting',
      'career-guidance',
      'competitive-exam-strategy',
      'visa-assistance'
    ]
  },
  {
    id: 'readiness',
    name: 'Readiness & Partnerships',
    services: [
      'bootcamps',
      'for-parents',
      'for-schools',
      'for-colleges-universities'
    ]
  }
];

export const consultancyServices = [
  {
    id: 'academic-university-consulting',
    name: 'Academic & University Consulting',
    icon: null,
    shortDescription: 'Course, college, and university shortlisting and admission support — in India or abroad',
    description: 'Academic & University Consulting is a premium, end-to-end service for students building toward the right institution.',
    longDescription: 'Academic & University Consulting is a premium, end-to-end service for students building toward the right institution — whether that\'s a top-tier international university or a competitive Indian one. We go beyond simple applications by building a strategic profile that highlights your unique strengths and aligns with what admissions committees, in any country, are actually evaluating. From Ivy League and Russell Group institutions to India\'s top entrance-based colleges and deemed universities, we help you navigate the admissions landscape without guesswork.',
    features: [
      'College and university shortlisting based on profile — India and abroad',
      'Application strategy and planning',
      'SOP, LOR, and portfolio preparation',
      'Scholarship guidance',
      'Visa application support (for international applications)'
    ],
    benefits: [
      { title: 'Strategic Advantage', description: 'Expert insight into what admissions committees are actually looking for, wherever the target sits.' },
      { title: 'Minimized Stress', description: 'We manage the timelines, documentation, and deadlines for you.' },
      { title: 'Higher Admit Rates', description: 'Optimized profiles consistently secure seats in the institutions students are actually aiming for.' }
    ],
    faq: [
      { question: 'When should I start the consulting process?', answer: 'Ideally, you should start 12-18 months before your intended intake to build a strong profile.' },
      { question: 'Do you help with Indian universities too?', answer: 'Yes, we now support admissions and mapping to top-tier universities and competitive tracks within India as well.' }
    ],
    pricing: 'Custom',
    link: '/services/education-consulting'
  },
  {
    id: 'career-guidance',
    name: 'Career Guidance',
    icon: null,
    shortDescription: '1-on-1 personalized strategy sessions',
    description: 'Personalized career counseling to help you discover your strengths, clarify your goals, and create an actionable roadmap.',
    longDescription: 'Career Guidance at nPathways is a reflective, analytical process — not a form to fill out. We help students and professionals identify their core interests and map them against real industry trends, so the choice of stream, major, or master\'s program isn\'t based on what\'s popular this year, but on long-term fit and genuine fulfillment. This is also where we start when a student has no idea yet — that\'s not a gap to fix before the session, it\'s the actual starting point of it.',
    features: [
      'One-on-one counseling sessions',
      'Career and interest mapping (including for students who feel completely undecided)',
      'Goal setting and planning',
      'Profile evaluation',
      'Course and university recommendations'
    ],
    benefits: [
      { title: 'Path Clarity', description: 'Remove the confusion of endless options with a data-backed roadmap.' },
      { title: 'Market Awareness', description: 'Align your education with where the job market is actually headed, not where it used to be.' },
      { title: 'Personalized Strategy', description: 'A plan that respects your unique strengths, interests, and family\'s financial constraints.' }
    ],
    faq: [
      { question: 'Is this only for students who are undecided?', answer: 'No, it\'s also for students who have general directions but want to stress-test their decisions with real-world industry data.' }
    ],
    pricing: 'Custom',
    link: '/services/career-guidance'
  },
  {
    id: 'competitive-exam-strategy',
    name: 'Competitive Exam Strategy',
    icon: null,
    shortDescription: '1-on-1 exam strategy layered on top of your existing coaching',
    description: 'Strategic counseling for exams like JEE, NEET, CAT, CLAT, CUET, and standardized tests.',
    longDescription: 'Most students preparing for JEE, NEET, CAT, CLAT, CUET, or international tests like IELTS, SAT, GMAT, and GRE already have coaching. What they don\'t have is someone checking whether the exam itself is the right target, and whether the prep is actually converting into readiness — not just more hours. Competitive Exam Strategy sits above your existing coaching: we diagnose fit, build the attempt-cycle timeline, and read your mock-test data the way a strategist would, not a tutor.',
    features: [
      'Exam-fit diagnostic — aptitude vs. target exam, before more time is committed',
      'Attempt-cycle and timeline planning, mapped to your school or college calendar',
      'Mock-test and score-trend analysis with concrete correction points',
      'Coordination with your existing coaching institute — we complement, not replace',
      'Interview and personal-interaction prep (for CAT, CLAT, and similar exams)',
      'Scenario planning across likely score bands, so no outcome is a total surprise'
    ],
    benefits: [
      { title: 'Clarity Under Pressure', description: 'Know exactly what the target score requires and where you actually stand against it.' },
      { title: 'Coordinated Prep', description: 'Strategy that works with your coaching, not more material competing for the same hours.' },
      { title: 'Score-Band Readiness', description: 'A real plan for every likely outcome, not just the best-case one.' }
    ],
    faq: [
      { question: 'Do you provide tutoring or subject classes?', answer: 'No, we do not tutor. We act as exam strategists to ensure your existing coaching and hours are converting into actual test readiness.' }
    ],
    pricing: 'Custom',
    link: '/services/competitive-exam-strategy'
  },
  {
    id: 'visa-assistance',
    name: 'Visa & Study Abroad Assistance',
    icon: null,
    shortDescription: 'End-to-end documentation and filing support — for the pathways that lead abroad',
    description: 'Complete study visa support including documentation review, application filing, and interview prep.',
    longDescription: 'When a student\'s roadmap points beyond India, the visa process is often the most stressful part of getting there. Our team stays current on immigration policy and documentation requirements for major destinations — the US, UK, Canada, Australia, and Europe — and makes sure every file is meticulous, because a single technical error is often the difference between an approval and a delay.',
    features: [
      'Visa eligibility assessment',
      'Document preparation and review',
      'Application filing assistance',
      'Interview preparation',
      'Follow-up and tracking'
    ],
    benefits: [
      { title: '98% Success Rate', description: 'A meticulous filing process that consistently holds up under scrutiny.' },
      { title: 'Expert Documentation', description: 'Avoiding the common pitfalls and technical errors that cause delays.' },
      { title: 'Mock Interviews', description: 'Simulated visa interviews specific to the destination country, so the real one isn\'t the first time you\'ve faced the questions.' }
    ],
    faq: [
      { question: 'Which countries do you support?', answer: 'We support student visas for the United States, United Kingdom, Canada, Australia, and European destinations.' }
    ],
    pricing: 'Custom',
    link: '/services/visa-assistance'
  }
];

export const supportServices = [
  {
    id: 'bootcamps',
    name: 'Skill & Bootcamp Programs',
    icon: null,
    shortDescription: 'Hands-on upskilling for the gaps a syllabus doesn\'t cover',
    description: 'Intensive short-term workshops and bootcamps to close specific academic, technical, or soft-skill gaps.',
    longDescription: 'A strong transcript gets a student considered. It doesn\'t automatically make them ready — for an interview, an internship, an application, or a first year in a new environment. Skill & Bootcamp Programs are short, focused sessions built to close the exact gap a student\'s roadmap has already flagged, rather than offering the same generic curriculum to everyone in the room.',
    features: [
      'Technical skill bootcamps, matched to the student\'s target field',
      'Communication and interview-readiness workshops',
      'Portfolio, resume, and personal-narrative building',
      'Industry webinars and direct sessions with working professionals',
      'Gap-specific modules tied to the student\'s individual pathway plan, not a fixed syllabus'
    ],
    benefits: [
      { title: 'Real-World Ready', description: 'Skills that show up in interviews and applications, not just certificates in a drawer.' },
      { title: 'Compounding Value', description: 'Every module ties back to the student\'s actual pathway goal, so it adds up instead of sitting apart from it.' },
      { title: 'Direct Industry Exposure', description: 'Real conversations with professionals in the field, not just secondhand descriptions of it.' }
    ],
    faq: [
      { question: 'Can students select individual bootcamps?', answer: 'Yes, bootcamps are selected based on the specific gaps identified in the student\'s Step 4 Skill Gap Analysis.' }
    ],
    pricing: 'Custom',
    link: '/bootcamps-webinars'
  },
  {
    id: 'for-parents',
    name: 'For Parents',
    icon: null,
    shortDescription: 'Safety and clarity for families, whatever the pathway',
    description: 'Financial planning, destination audits, and progress tracking designed for peace of mind.',
    longDescription: 'Every major academic decision is a family decision — not just the ones that involve a passport. Whether the plan is a competitive exam, a college in another city, or a university abroad, we give parents the tools, information, and support to feel confident in it: financial clarity, safety where relevant, and a clear view of what their child is actually walking toward.',
    features: [
      'Safety and destination audits (for pathways that involve relocation, in India or abroad)',
      'Financial planning and cost transparency, including forex guidance where relevant',
      'Regular student progress reports',
      'Emergency support protocols',
      'Parental community access'
    ],
    benefits: [
      { title: 'Peace of Mind', description: 'Know your child is on a vetted, well-supported pathway, wherever it leads.' },
      { title: 'Financial Roadmap', description: 'Clear visibility into the total cost of the plan, start to finish.' },
      { title: 'Better Alignment', description: 'Bridging the gap between a student\'s ambitions and a family\'s expectations, honestly, before it becomes conflict.' }
    ],
    faq: [
      { question: 'How do you keep parents updated?', answer: 'We share regular progress reports and hold scheduled alignment calls with families.' }
    ],
    pricing: 'Custom',
    link: '/services/parents'
  },
  {
    id: 'for-schools',
    name: 'For Schools',
    icon: null,
    shortDescription: 'Institutional success — academic outcomes, exam results, and global exposure',
    description: 'Curriculum alignment, counselor training, and on-campus university fairs for K-12 partners.',
    longDescription: 'We partner with K-12 institutions to build genuine readiness into their curriculum — not just international exposure, but stronger outcomes across the board: competitive exam performance, career clarity, and academic pathway planning, alongside global readiness for the students who want it. From setting up dedicated academic and international wings to counselor training and university fairs, we help schools raise outcomes across every kind of pathway their students actually choose.',
    features: [
      'Academic and international wing setup consulting',
      'Professional development for teachers and in-house counselors',
      'On-campus university fairs and competitive-exam workshops',
      'Curriculum alignment for both domestic and global readiness',
      'Student profile-building and interest-mapping workshops'
    ],
    benefits: [
      { title: 'Institutional Prestige', description: 'Strengthen your school\'s academic and global-education reputation in one move, not two separate ones.' },
      { title: 'Student Success', description: 'Better outcomes across competitive exams, domestic admissions, and global placements alike.' },
      { title: 'Teacher Growth', description: 'Equip educators with modern career-guidance and global-readiness standards, not just exam-prep methods.' }
    ],
    faq: [
      { question: 'Is there a minimum size school you partner with?', answer: 'We customize partnerships based on the school\'s curriculum and specific student needs.' }
    ],
    pricing: 'Custom',
    link: '/services/schools'
  },
  {
    id: 'for-colleges-universities',
    name: 'For Colleges & Universities',
    icon: null,
    shortDescription: 'Stronger student outcomes, and a trusted pipeline of ready applicants',
    description: 'Employability bootcamps, counseling cells, and recruitment partnerships for higher-ed.',
    longDescription: 'Colleges and universities don\'t need the same support schools do — the students have already arrived. What they need is help on both ends: getting current students genuinely placement-ready before they graduate, and, for institutions actively recruiting, a pipeline of applicants who are a real fit rather than just a filled seat. We partner with institutions on both fronts — running employability and skill-readiness programs for final-year students, and, where relevant, connecting our own students to the right college or university partners as part of their pathway.',
    features: [
      'Employability and placement-readiness bootcamps for final-year students',
      'Structured career-guidance support for the institution\'s own counseling cell',
      'Skill-gap workshops aligned to current industry and admissions expectations',
      'Recruitment and pipeline partnerships for institutions seeking well-matched applicants',
      'Outcome tracking and reporting — placement rates, admit rates, and student readiness over time'
    ],
    benefits: [
      { title: 'Better Placement Outcomes', description: 'Students graduate genuinely job-ready, not just credentialed.' },
      { title: 'A Stronger Applicant Pipeline', description: 'For partner institutions, a steady stream of students who are a real fit, not just a filled quota.' },
      { title: 'Lighter Counseling Load', description: 'We extend your institution\'s own guidance capacity instead of duplicating it.' }
    ],
    faq: [
      { question: 'What programs do you run for universities?', answer: 'We run core placement readiness bootcamps, technical workshops, and coordinate student recruitment drives.' }
    ],
    pricing: 'Custom',
    link: '/services/colleges-universities'
  }
];

export const getServiceById = (id) => {
  return consultancyServices.find(service => service.id === id) || 
         supportServices.find(service => service.id === id);
};

export const getAllServices = () => {
  return [...consultancyServices, ...supportServices];
};
