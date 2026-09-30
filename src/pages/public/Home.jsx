import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/common/Button";
import heroVideo from "../../assets/video/hero.mp4";
import toast from "react-hot-toast";

// Import Data
import destinationsData from "../../data/destinations.json";

// Import Icons
import {
  FaCompass,
  FaMapMarkedAlt,
  FaGraduationCap,
  FaChartLine,
  FaPenNib,
  FaFileInvoiceDollar,
  FaPassport,
  FaPlaneDeparture,
  FaHome,
  FaHandsHelping
} from "react-icons/fa";
import {
  FiArrowRight,
  FiArrowLeft,
  FiCheckCircle,
  FiBookOpen,
  FiUserCheck,
  FiAward,
  FiPhoneCall,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

import "./Home.css";

const stepsData = [
  {
    num: "01",
    icon: <FaCompass />,
    title: "Clarity Compass™ Assessment",
    bgImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    desc: "We start with a deep dive into your strengths, interests, and EQ. This isn't just a test  it's the foundation every decision after this one gets built on."
  },
  {
    num: "02",
    icon: <FaMapMarkedAlt />,
    title: "Pathway Goal Mapping",
    bgImg: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
    desc: "Identifying the right destination for you  a competitive exam, a top Indian university, a course abroad, or a career direction you haven't considered yet  aligned to your long-term goals, not the default everyone else picked."
  },
  {
    num: "03",
    icon: <FaGraduationCap />,
    title: "Best-Fit Matchmaking",
    bgImg: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    desc: "Comparing curricula, boards, institutions, and career tracks  in India or abroad  to find the fit that actually matches how you think and where you want to end up."
  },
  {
    num: "04",
    icon: <FaChartLine />,
    title: "Skill Gap Analysis",
    bgImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    desc: "If your profile is missing something  technical, academic, or soft skills  we close the gap through our bootcamps and bridge programs before it becomes a bottleneck."
  },
  {
    num: "05",
    icon: <FaPenNib />,
    title: "Story-Driven Applications",
    bgImg: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    desc: "Whether it's an SOP, a college application, or an exam-prep portfolio, we help you build a narrative that's genuinely yours  not a template everyone else is also submitting."
  },
  {
    num: "06",
    icon: <FaFileInvoiceDollar />,
    title: "Financial Architecture",
    bgImg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    desc: "Navigating scholarships, education loans, and budgeting  for a course in India or a degree abroad  so the plan is stress-free, not just ambitious."
  },
  {
    num: "07",
    icon: <FaPassport />,
    title: "The Gauntlet",
    bgImg: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    desc: "Meticulous prep and mock interviews for whatever gate stands between you and your goal  a board exam, a competitive entrance test, a college interview, or a visa. We drill for the one that's actually yours."
  },
  {
    num: "08",
    icon: <FaPlaneDeparture />,
    title: "Pre-Launch Orientation",
    bgImg: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    desc: "The practical playbook for your next transition  new city, new campus, new country  banking, logistics, and the survival skills for your first 30 days wherever that is."
  },
  {
    num: "09",
    icon: <FaHome />,
    title: "Settling In",
    bgImg: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    desc: "Support through accommodation, orientation, and the first week of administrative hurdles  whether that's a hostel in another state or an apartment in another country."
  },
  {
    num: "10",
    icon: <FaHandsHelping />,
    title: "On-Going Mentorship",
    bgImg: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    desc: "We stay your partner through the degree, the first job search, or the next fork in the road  because a pathway isn't done the day you get in. It's done when you're actually living it."
  }
];

const popularPathwaysData = [
  {
    title: "Academic Pathways",
    desc: "For the student who has the destination  but not yet the route.",
    link: "/services/education-consulting",
    icon: <FaGraduationCap />
  },
  {
    title: "Career Pathways",
    desc: "For the student who doesn't know yet  which is exactly where we start.",
    link: "/services/career-guidance",
    icon: <FaCompass />
  },
  {
    title: "Curricular-Based Pathways",
    desc: "Every Board. One Strategy. Board and subject choices.",
    link: "/services/curricular-based-pathways",
    icon: <FiBookOpen />
  },
  {
    title: "Pathway Programs (Bridge Courses)",
    desc: "Close the specific academic or transition gaps.",
    link: "/services/pathway-programs",
    icon: <FaChartLine />
  },
  {
    title: "Competitive Exam Pathways",
    desc: "Layered exam prep strategy for JEE, NEET, CAT, CLAT, etc.",
    link: "/services/competitive-exam-strategy",
    icon: <FiAward />
  },
  {
    title: "Skill & Bootcamp Pathways",
    desc: "Outcome-specific bootcamps for job and life readiness.",
    link: "/bootcamps-webinars",
    icon: <FaFileInvoiceDollar />
  },
  {
    title: "Study Abroad Pathway",
    desc: "When the plan points beyond India, we take you the whole way.",
    link: "/services/study-abroad-pathway",
    icon: <FaPlaneDeparture />
  }
];

const studentSupportData = [
  {
    num: "01",
    title: "Career Discovery",
    subtitle: "Psychometric & Ikigai mapping",
    bgImg: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1200&q=80",
    desc: "Most students choose a country before they've chosen a direction. We start the other way around. Every NPathways journey begins with the Clarity Compass  a psychometric and aptitude diagnostic built around the idea of Ikigai: the place where what you're good at, what you enjoy, what the world needs, and what's actually viable for you all meet. In a single guided session, we map your natural strengths, genuine interests, and real-world readiness  not just your grades. The result isn't a generic report; it's a working answer to the question underneath every application: what am I actually building toward? For some students that means research. For others, industry, entrepreneurship, or a creative path nobody suggested before. Once that's clear, every decision after  which country, which course, which university  has something solid to stand on. This is the one step other consultancies skip. We think it's the one that matters most."
  },
  {
    num: "02",
    title: "Admissions",
    subtitle: "Expert university shortlisting",
    bgImg: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    desc: "A university list built on rankings alone is a list built for someone else. Once your direction is clear, our admissions team builds a shortlist around what actually fits you  your academic profile, your budget, your career goals, and the kind of environment you'll genuinely thrive in, not just the one that looks best on paper. We look past headline rankings to the things that decide your actual experience: department strength in your specific field, faculty and research opportunities, curriculum fit, industry connections, and realistic admission chances given your profile. From there, we work with you end-to-end  refining personal statements, coordinating recommendation letters, tracking every deadline  so your application reflects your strongest, most honest case for admission. The goal isn't the most prestigious name you can get in front of. It's the university where your specific goals actually have room to grow."
  },
  {
    num: "03",
    title: "Visa Success",
    subtitle: "98% success rate in filing",
    bgImg: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    desc: "A strong admission means nothing without a strong visa file  and this is where most delays and rejections quietly happen, often over paperwork that could have been caught early. Our visa team has built a 98% success rate by treating every filing like it's the only one that matters: document-by-document review, country-specific requirement checks, financial proof structured the way that specific embassy expects it, and mock interviews before the real one. We track policy shifts as they happen  visa rules change more often than students expect  so your file is built against the current requirement, not last year's. And we stay with you past the approval stamp: guidance on arrival formalities, work-rights rules on your visa, and what to do if anything needs renewing later. Getting in is the milestone everyone celebrates. We think getting there safely and correctly is the part that actually deserves the effort."
  },
  {
    num: "04",
    title: "Your Journey",
    subtitle: "Guided by us, decided by you",
    bgImg: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    desc: "Studying abroad isn't one decision  it's a sequence of them, and every student's sequence looks different. For college students, we work directly with you, in person, taking the time to actually understand you before we map anything out. For school students and minors, we work through your parents at every step, so the family stays informed and involved throughout. Either way, the decisions are always yours to make  ours is to guide, explain, and stand beside you while you make them. From your first clarity conversation through direction-setting, university and country selection, applications, visas, pre-departure preparation, arrival, and settling in  every stage has a defined, supported step, built around who you actually are, not a template everyone gets. No two journeys here look the same, because no two students do. This is what \"beyond borders into purpose\" actually looks like in practice  a journey that speaks for itself."
  }
];

const parentSupportData = [
  {
    num: "01",
    title: "Travel & Stay",
    subtitle: "with them, every step of the way",
    bgImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    desc: "For many parents, the hardest part isn't the paperwork  it's not being there when your child takes their first steps into a new country. If you choose to travel with them for the first move, we handle it as carefully as we handle the student's own visa: accompanying-parent visa guidance, help sourcing accommodation near campus, and a clear day-by-day itinerary for the visit  what to set up first, which offices to visit, what can wait. If a follow-up visit is on your mind later  orientation day, a graduation, just checking in  we can help plan that too, from paperwork to logistics. You shouldn't have to choose between being present for your child's biggest moment and knowing how to actually navigate a country you've never seen. We'd rather you spend that time being a parent, not a logistics manager."
  },
  {
    num: "02",
    title: "Financial Clarity",
    subtitle: "plan the full cost, not just the fees",
    bgImg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    desc: "Tuition is only ever part of the number. Living costs, currency shifts, one-time visa and travel costs, part-time work rules that affect what your child can actually earn there  these are the details that quietly break budgets built only around a university's advertised fee. We sit down with families early and build a realistic, full-picture cost plan: total program cost (not per-year guesses), city-specific living expenses, scholarship and loan options you actually qualify for, and a currency-risk conversation most consultancies skip entirely. You'll know what this really costs, and what happens to your budget if the exchange rate moves against you mid-program  before you're already committed. No pressure, no upsell. Just the numbers a parent actually needs to say yes with confidence, not just hope."
  },
  {
    num: "03",
    title: "The Parent Circle",
    subtitle: "you're not doing this alone",
    bgImg: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    desc: "Somewhere between the acceptance letter and the actual goodbye, most parents realize they know exactly one other family going through this  if that. The Parent Circle is a community of NPathways parents, past and current, who've stood exactly where you're standing. Ask the questions that feel too small for a formal consultation  what to pack, how the first phone call home usually goes, what nobody tells you about the first month. We host regular meet-ups, both online and in person, where experienced parents and new ones simply talk  no agenda, no pitch, just people who understand. Some of the most useful advice a parent will get isn't from us. It's from another parent who did this eighteen months ago and remembers exactly what they wish someone had told them."
  },
  {
    num: "04",
    title: "Our Global Family Network",
    subtitle: "easing the distance",
    bgImg: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    desc: "We built this around the idea that distance shouldn't mean disconnection. Beyond regular updates on how your child is settling in, we're building partnerships with international student communities and other consultancies abroad, so families here can host visiting international students for a day or two  a genuine, warm, cultural exchange that gives you a small version of the connection you're missing, and gives a student far from home a taste of it too. We also run seasonal meet-and-greets and community events for parents locally, so the people who understand this exact transition aren't strangers on a screen but people you actually know. Your child moved abroad for their purpose. That doesn't mean your role in their life got smaller  just further away. We're here to shorten that distance wherever we can."
  }
];

const categoriesList = [
  { label: 'Student', desc: 'Currently studying in school or college', icon: <FiBookOpen size={20} /> },
  { label: 'Parent', desc: 'Inquiring for a son or daughter', icon: <FiUserCheck size={20} /> },
  { label: 'Working Professional', desc: 'Currently working and seeking growth', icon: <FiAward size={20} /> },
  { label: 'Just Looking Around', desc: 'Exploring programs and resources', icon: <FiPhoneCall size={20} /> }
];

const programsList = [
  { label: 'Academic & University Consulting', desc: 'Course, college, and university shortlisting', icon: <FiBookOpen size={20} /> },
  { label: 'Career Guidance', desc: '1-on-1 personalized Ikigai mapping & career strategy', icon: <FiPhoneCall size={20} /> },
  { label: 'Curricular-Based Strategy', desc: 'Board selection & subject combination planning', icon: <FiBookOpen size={20} /> },
  { label: 'Pathway Programs (Bridge Courses)', desc: 'Transition support & targeted bridge courses', icon: <FiAward size={20} /> },
  { label: 'Competitive Exam Strategy', desc: 'JEE, NEET, CAT, GMAT, GRE coaching & prep strategy', icon: <FiAward size={20} /> },
  { label: 'Skills & Bootcamp Programs', desc: 'Intensive technology, business & upskilling bootcamps', icon: <FiBookOpen size={20} /> },
  { label: 'Study Abroad & Visa Assistance', desc: 'End-to-end global admissions, visa & student support', icon: <FiAward size={20} /> }
];

const landmassPoints = [
  // North America
  { lat: 70, lon: -160 }, { lat: 70, lon: -140 }, { lat: 70, lon: -120 }, { lat: 70, lon: -100 },
  { lat: 70, lon: -80 }, { lat: 70, lon: -60 }, { lat: 65, lon: -150 }, { lat: 60, lon: -140 },
  { lat: 58, lon: -135 }, { lat: 55, lon: -125 }, { lat: 50, lon: -125 }, { lat: 45, lon: -125 },
  { lat: 40, lon: -122 }, { lat: 35, lon: -120 }, { lat: 30, lon: -115 }, { lat: 50, lon: -110 },
  { lat: 45, lon: -110 }, { lat: 40, lon: -105 }, { lat: 35, lon: -105 }, { lat: 30, lon: -100 },
  { lat: 25, lon: -98 }, { lat: 48, lon: -100 }, { lat: 43, lon: -95 }, { lat: 38, lon: -90 },
  { lat: 33, lon: -85 }, { lat: 28, lon: -82 }, { lat: 48, lon: -70 }, { lat: 45, lon: -70 },
  { lat: 43, lon: -75 }, { lat: 40, lon: -75 }, { lat: 35, lon: -80 }, { lat: 30, lon: -80 },
  { lat: 25, lon: -80 }, { lat: 25, lon: -105 }, { lat: 22, lon: -105 }, { lat: 20, lon: -100 },
  { lat: 18, lon: -95 }, { lat: 15, lon: -95 }, { lat: 12, lon: -85 }, { lat: 9, lon: -80 },
  // Greenland
  { lat: 80, lon: -40 }, { lat: 75, lon: -50 }, { lat: 75, lon: -30 }, { lat: 70, lon: -45 },
  { lat: 70, lon: -35 }, { lat: 65, lon: -45 }, { lat: 65, lon: -40 },
  // South America
  { lat: 10, lon: -75 }, { lat: 10, lon: -70 }, { lat: 8, lon: -65 }, { lat: 5, lon: -60 },
  { lat: 2, lon: -55 }, { lat: -2, lon: -50 }, { lat: -5, lon: -45 }, { lat: -5, lon: -40 },
  { lat: -8, lon: -35 }, { lat: -12, lon: -38 }, { lat: -16, lon: -39 }, { lat: -20, lon: -42 },
  { lat: -23, lon: -45 }, { lat: -26, lon: -48 }, { lat: -30, lon: -50 }, { lat: -35, lon: -55 },
  { lat: -40, lon: -60 }, { lat: -45, lon: -65 }, { lat: -50, lon: -70 }, { lat: -5, lon: -80 },
  { lat: -10, lon: -78 }, { lat: -15, lon: -75 }, { lat: -20, lon: -70 }, { lat: -25, lon: -70 },
  { lat: -30, lon: -72 }, { lat: -35, lon: -73 }, { lat: -40, lon: -75 }, { lat: -45, lon: -75 },
  { lat: -50, lon: -75 }, { lat: -53, lon: -72 },
  // Africa
  { lat: 35, lon: -5 }, { lat: 35, lon: 0 }, { lat: 35, lon: 5 }, { lat: 35, lon: 10 },
  { lat: 35, lon: 15 }, { lat: 35, lon: 20 }, { lat: 32, lon: 25 }, { lat: 31, lon: 30 },
  { lat: 28, lon: -5 }, { lat: 28, lon: 5 }, { lat: 28, lon: 15 }, { lat: 28, lon: 25 },
  { lat: 20, lon: -10 }, { lat: 20, lon: 0 }, { lat: 20, lon: 10 }, { lat: 20, lon: 20 },
  { lat: 20, lon: 30 }, { lat: 15, lon: -15 }, { lat: 12, lon: -15 }, { lat: 8, lon: -10 },
  { lat: 5, lon: -5 }, { lat: 5, lon: 0 }, { lat: 5, lon: 5 }, { lat: 5, lon: 10 },
  { lat: 0, lon: 10 }, { lat: 0, lon: 15 }, { lat: 0, lon: 20 }, { lat: 0, lon: 25 },
  { lat: -5, lon: 15 }, { lat: -5, lon: 20 }, { lat: -5, lon: 25 }, { lat: -10, lon: 15 },
  { lat: -10, lon: 25 }, { lat: -15, lon: 15 }, { lat: -15, lon: 25 }, { lat: -20, lon: 18 },
  { lat: -20, lon: 25 }, { lat: -25, lon: 20 }, { lat: -25, lon: 28 }, { lat: -30, lon: 22 },
  { lat: -30, lon: 28 }, { lat: -34, lon: 25 }, { lat: -15, lon: 47 }, { lat: -20, lon: 48 },
  { lat: -25, lon: 46 }, { lat: 10, lon: 40 }, { lat: 5, lon: 42 }, { lat: 0, lon: 40 },
  { lat: -5, lon: 38 }, { lat: -10, lon: 39 }, { lat: 15, lon: 38 }, { lat: 12, lon: 43 },
  { lat: 10, lon: 47 }, { lat: 8, lon: 48 }, { lat: 22, lon: 36 }, { lat: 25, lon: 34 },
  // Europe
  { lat: 38, lon: -9 }, { lat: 40, lon: -8 }, { lat: 42, lon: -5 }, { lat: 48, lon: 0 },
  { lat: 50, lon: 5 }, { lat: 52, lon: 10 }, { lat: 52, lon: 15 }, { lat: 50, lon: 20 },
  { lat: 55, lon: -2 }, { lat: 57, lon: -4 }, { lat: 42, lon: 13 }, { lat: 40, lon: 16 },
  { lat: 38, lon: 22 }, { lat: 38, lon: 24 }, { lat: 60, lon: 10 }, { lat: 62, lon: 12 },
  { lat: 65, lon: 15 }, { lat: 68, lon: 20 }, { lat: 70, lon: 25 }, { lat: 60, lon: 20 },
  { lat: 62, lon: 22 }, { lat: 65, lon: 22 }, { lat: 45, lon: 25 }, { lat: 48, lon: 30 },
  { lat: 50, lon: 35 }, { lat: 52, lon: 40 }, { lat: 55, lon: 35 }, { lat: 55, lon: 45 },
  // Russia / Siberia
  { lat: 70, lon: 40 }, { lat: 70, lon: 60 }, { lat: 70, lon: 80 }, { lat: 70, lon: 100 },
  { lat: 70, lon: 120 }, { lat: 70, lon: 140 }, { lat: 70, lon: 160 }, { lat: 60, lon: 40 },
  { lat: 60, lon: 50 }, { lat: 60, lon: 60 }, { lat: 60, lon: 70 }, { lat: 60, lon: 80 },
  { lat: 60, lon: 90 }, { lat: 60, lon: 100 }, { lat: 60, lon: 110 }, { lat: 60, lon: 120 },
  { lat: 60, lon: 130 }, { lat: 60, lon: 140 }, { lat: 60, lon: 150 }, { lat: 60, lon: 160 },
  { lat: 50, lon: 50 }, { lat: 50, lon: 60 }, { lat: 50, lon: 70 }, { lat: 50, lon: 80 },
  { lat: 50, lon: 90 }, { lat: 50, lon: 100 }, { lat: 50, lon: 110 }, { lat: 50, lon: 120 },
  { lat: 50, lon: 130 }, { lat: 50, lon: 140 }, { lat: 50, lon: 150 },
  // Middle East & Central Asia
  { lat: 30, lon: 40 }, { lat: 30, lon: 45 }, { lat: 25, lon: 45 }, { lat: 20, lon: 45 },
  { lat: 15, lon: 48 }, { lat: 15, lon: 52 }, { lat: 20, lon: 55 }, { lat: 25, lon: 55 },
  { lat: 40, lon: 50 }, { lat: 40, lon: 60 }, { lat: 45, lon: 70 }, { lat: 40, lon: 70 },
  { lat: 40, lon: 80 }, { lat: 45, lon: 80 }, { lat: 35, lon: 65 }, { lat: 35, lon: 75 },
  // India / South Asia
  { lat: 32, lon: 75 }, { lat: 28, lon: 77 }, { lat: 26, lon: 80 }, { lat: 22, lon: 70 },
  { lat: 20, lon: 73 }, { lat: 16, lon: 74 }, { lat: 12, lon: 76 }, { lat: 9, lon: 77 },
  { lat: 10, lon: 79 }, { lat: 13, lon: 80 }, { lat: 17, lon: 82 }, { lat: 22, lon: 85 },
  { lat: 22, lon: 89 },
  // China / East Asia
  { lat: 35, lon: 90 }, { lat: 35, lon: 100 }, { lat: 35, lon: 110 }, { lat: 30, lon: 100 },
  { lat: 30, lon: 110 }, { lat: 30, lon: 115 }, { lat: 25, lon: 105 }, { lat: 25, lon: 112 },
  { lat: 22, lon: 110 }, { lat: 22, lon: 115 }, { lat: 38, lon: 116 }, { lat: 40, lon: 120 },
  { lat: 43, lon: 125 },
  // SE Asia & Indonesia
  { lat: 18, lon: 102 }, { lat: 14, lon: 105 }, { lat: 10, lon: 105 }, { lat: 5, lon: 102 },
  { lat: 3, lon: 101 }, { lat: 0, lon: 102 }, { lat: -3, lon: 104 }, { lat: -6, lon: 107 },
  { lat: -7, lon: 112 }, { lat: 0, lon: 113 }, { lat: 2, lon: 114 }, { lat: -3, lon: 114 },
  { lat: 15, lon: 120 }, { lat: 10, lon: 122 }, { lat: 6, lon: 125 }, { lat: 1, lon: 122 },
  { lat: -2, lon: 120 }, { lat: -3, lon: 135 }, { lat: -4, lon: 140 },
  // Japan
  { lat: 32, lon: 130 }, { lat: 35, lon: 135 }, { lat: 38, lon: 139 }, { lat: 43, lon: 142 },
  // Australia / NZ
  { lat: -22, lon: 115 }, { lat: -25, lon: 113 }, { lat: -30, lon: 115 }, { lat: -34, lon: 116 },
  { lat: -12, lon: 125 }, { lat: -12, lon: 131 }, { lat: -12, lon: 136 }, { lat: -15, lon: 141 },
  { lat: -20, lon: 147 }, { lat: -25, lon: 151 }, { lat: -30, lon: 152 }, { lat: -35, lon: 150 },
  { lat: -38, lon: 145 }, { lat: -34, lon: 125 }, { lat: -34, lon: 135 }, { lat: -37, lon: 140 },
  { lat: -42, lon: 146 }, { lat: -37, lon: 175 }, { lat: -41, lon: 175 }, { lat: -45, lon: 170 },
  { lat: -46, lon: 167 }
];

const GlobeWidget = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [zoomFactor, setZoomFactor] = useState(1);
  const [rotationSpeed, setRotationSpeed] = useState(0.003);
  const rotationRef = useRef(0);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const autocompleteList = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany",
    "Ireland", "France", "Netherlands", "New Zealand", "Singapore",
    "Sweden", "Switzerland", "Italy", "Spain", "Austria"
  ];

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length > 0) {
      const filtered = autocompleteList.filter(country =>
        country.toLowerCase().includes(val.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (country) => {
    setSearchQuery(country);
    setSuggestions([]);
    setShowSuggestions(false);
    // Directly submit for a smoother experience!
    setTimeout(() => {
      triggerSubmit(country);
    }, 50);
  };

  const matchCountry = (query) => {
    const q = query.toLowerCase().trim();

    // 1. Exact abbreviation matches
    const exactMatches = {
      "usa": "usa",
      "us": "usa",
      "uk": "uk",
      "aus": "australia",
      "can": "canada",
      "ger": "germany",
    };
    if (exactMatches[q]) return exactMatches[q];

    // 2. Exact match check
    if (q === "united states" || q === "united states of america" || q === "america") return "usa";
    if (q === "united kingdom" || q === "england" || q === "britain" || q === "great britain") return "uk";
    if (q === "canada") return "canada";
    if (q === "australia" || q === "austrilia") return "australia";
    if (q === "germany" || q === "germani" || q === "deutschland") return "germany";

    // 3. Word token boundary check (prevents matching internal substrings like "aus" in "austria")
    const tokens = q.split(/\s+/);
    if (tokens.includes("usa") || tokens.includes("america") || tokens.includes("states")) return "usa";
    if (tokens.includes("uk") || tokens.includes("kingdom") || tokens.includes("england") || tokens.includes("britain")) return "uk";
    if (tokens.includes("canada")) return "canada";
    if (tokens.includes("australia") || tokens.includes("austrilia")) return "australia";
    if (tokens.includes("germany") || tokens.includes("germani")) return "germany";

    return null;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = (canvas.width / 2.6) * zoomFactor;

      rotationRef.current += rotationSpeed;

      // Draw Earth outer circular boundary
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw Latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        const r = radius * Math.cos((lat * Math.PI) / 180);
        const y = cy + radius * Math.sin((lat * Math.PI) / 180);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.beginPath();
        ctx.ellipse(cx, y, Math.abs(r), Math.abs(r * 0.2 * Math.sin(rotationRef.current)), 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // Draw Longitude lines
      for (let lon = 0; lon < 360; lon += 45) {
        const angle = (lon * Math.PI) / 180 + rotationRef.current;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(radius * Math.cos(angle)), radius, 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // Draw landmass points (World Map Continent Dots)
      landmassPoints.forEach(pt => {
        const radLat = (pt.lat * Math.PI) / 180;
        const radLon = (pt.lon * Math.PI) / 180 + rotationRef.current;

        const x = cx + radius * Math.cos(radLat) * Math.sin(radLon);
        const y = cy - radius * Math.sin(radLat);
        const z = Math.cos(radLat) * Math.cos(radLon);

        if (z > 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.15 * z})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.8 * z, 0, 2 * Math.PI);
          ctx.fill();
        }
      });

      // Draw stylized country dots
      const dots = [
        { lat: 38, lon: -97, label: "USA" },
        { lat: 55, lon: -3, label: "UK" },
        { lat: 56, lon: -106, label: "Canada" },
        { lat: -25, lon: 133, label: "Australia" },
        { lat: 51, lon: 10, label: "Germany" }
      ];

      dots.forEach(dot => {
        const radLat = (dot.lat * Math.PI) / 180;
        const radLon = (dot.lon * Math.PI) / 180 + rotationRef.current;

        const x = cx + radius * Math.cos(radLat) * Math.sin(radLon);
        const y = cy - radius * Math.sin(radLat);
        const z = Math.cos(radLat) * Math.cos(radLon);

        if (z > 0) {
          ctx.fillStyle = "#e0a52b";
          ctx.beginPath();
          ctx.arc(x, y, 5 * z, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.font = "bold 9px monospace";
          ctx.fillText(dot.label, x + 7, y + 3);
        } else {
          // Draw translucent indicator for countries rotating on the back side of the Earth
          ctx.fillStyle = "rgba(253, 186, 49, 0.2)";
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
          ctx.font = "italic 8px monospace";
          ctx.fillText(dot.label, x + 5, y + 2);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [zoomFactor, rotationSpeed]);

  const triggerSubmit = (query) => {
    if (!query.trim()) return;

    setIsAnimating(true);
    setRotationSpeed(0.08);

    let currentZoom = 1;
    const interval = setInterval(() => {
      currentZoom += 0.06;
      setZoomFactor(currentZoom);
      if (currentZoom >= 1.8) {
        clearInterval(interval);

        const matchedId = matchCountry(query);
        if (matchedId) {
          toast.success(`Zooming to Study in ${matchedId.toUpperCase()}!`);
          setTimeout(() => {
            navigate(`/destinations/${matchedId}`);
            setIsAnimating(false);
            setZoomFactor(1);
            setRotationSpeed(0.003);
            setSearchQuery("");
          }, 500);
        } else {
          toast(`Opening Enquiry for "${query}"`, { icon: '✈️' });
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent('open-quick-enquiry', { detail: { country: query } }));
            setIsAnimating(false);
            setZoomFactor(1);
            setRotationSpeed(0.003);
            setSearchQuery("");
          }, 500);
        }
      }
    }, 25);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerSubmit(searchQuery);
  };

  return (
    <div className="globe-widget-card">
      <div className="globe-circle-wrap">
        <canvas ref={canvasRef} width="180" height="180" className="globe-canvas" />
      </div>
      <div className="globe-widget-details">
        <h4>Explore Other Pathways</h4>
        <p>Search any country to start your journey.</p>
        <form onSubmit={handleSubmit} className="globe-search-form" style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Where do you want to fly? (e.g. Germany)"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => { if (searchQuery.trim()) setShowSuggestions(true); }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            disabled={isAnimating}
            className="globe-search-input"
          />
          <button type="submit" className="globe-search-submit" disabled={isAnimating}>
            ✈
          </button>
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <div className="globe-suggestions-pills">
            {suggestions.map((country, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSuggestion(country)}
                className="globe-suggestion-pill"
              >
                {country}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // CTA Wizard state
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    name: '', category: '', selectedProgram: '',
    email: '', countryCode: '+91', phone: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // tear + plane animation

  const handleWizardNext = () => {
    if (wizardStep === 1 && !wizardData.name.trim()) { toast.error('Please enter your name'); return; }
    if (wizardStep === 2 && !wizardData.category) { toast.error('Please select who you are'); return; }
    if (wizardStep === 3 && !wizardData.selectedProgram) { toast.error('Please select a service'); return; }
    if (wizardStep === 4 && (!wizardData.email.trim() || !wizardData.phone.trim())) { toast.error('Please provide email and phone number'); return; }
    setWizardStep(prev => prev + 1);
  };

  const handleWizardBack = () => setWizardStep(prev => prev - 1);

  const handleWizardChange = (e) => {
    const { name, value } = e.target;
    setWizardData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryPick = (category) => {
    setWizardData(prev => ({ ...prev, category }));
    setTimeout(() => setWizardStep(3), 350);
  };

  const handleProgramPick = (selectedProgram) => {
    setWizardData(prev => ({ ...prev, selectedProgram }));
    setTimeout(() => setWizardStep(4), 350);
  };

  const resetWizard = () => {
    setWizardData({ name: '', category: '', selectedProgram: '', email: '', countryCode: '+91', phone: '', message: '' });
    setWizardStep(1);
    setIsSuccess(false);
    setIsAnimating(false);
  };

  const handleWizardSubmit = async (e) => {
    e.preventDefault();
    if (!wizardData.email.trim() || !wizardData.phone.trim()) { toast.error('Please provide email and phone number'); return; }
    setIsSubmitting(true);
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787/api';
      const payload = {
        name: wizardData.name, email: wizardData.email, phone: wizardData.phone,
        countryCode: wizardData.countryCode, category: wizardData.category || null,
        selectedProgram: wizardData.selectedProgram || null, message: wizardData.message || null,
        source: 'Home Page CTA Wizard'
      };
      const response = await fetch(`${baseUrl}/leads`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error('Submission failed');
      // Trigger boarding pass tear + plane animation before success
      setIsSubmitting(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsSuccess(true);
      }, 2600);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);



  return (
    <div className="home-redesign">
      <section className="home-hero-premium">
        <video
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="container hero-split">
          <div className="hero-content-left">
            <span className="hero-badge-minimal">
              YOUR FUTURE. MAPPED WITH PURPOSE.
            </span>
            <h1 className="hero-title-premium">
              NPathways Global <br /> <span>Beyond Boundaries. Into Purpose.</span>
            </h1>
            <p className="hero-desc-premium">
              Welcome to <strong>nPathways</strong>  where students and parents turn "what should I do next" into a real plan. Competitive exams, top universities in India or abroad, the right course, or just clarity when nothing feels obvious yet  we map it, match it, and help you go get it.
            </p>
            <div className="hero-actions-premium">
              <Button variant="premium" onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}>
                Map My Path
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ marginLeft: "10px" }}
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                variant="premium-outline"
                onClick={() => {
                  document.querySelector('.home-process-stack-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – Built on Three Ideas Older Than Us */}
      <section className="home-philosophy-section">
        <div className="container">
          <div className="section-header-premium text-center">
            <span className="badge">Our Philosophy</span>
            <h2>Built on Three Ideas Older Than Us</h2>
            <p className="section-subtitle">
              The principles that govern how we listen, how we map, and how we mentor.
            </p>
          </div>

          <div className="philosophy-zen-layout">
            {/* Column 1: Ikigai */}
            <div className="philosophy-zen-item animate-on-scroll">
              <span className="zen-number">01</span>
              <div className="concept-header">
                <h3>Ikigai</h3>
                <span className="concept-japanese-inline">生き甲斐</span>
                <span className="concept-definition">your reason for being</span>
              </div>
              <p className="concept-desc">
                The point where what you love, what you're good at, what the world needs, and what sustains you overlap.
              </p>
              <div className="concept-how-we-use">
                <h5>How we use it:</h5>
                <p>
                  Most career advice optimizes for one corner of that overlap  usually "what pays." We map all four, every time, for every student. It's the actual method behind Clarity Compass™: not "what should you do," but "where do these four things meet for you specifically." A pathway that only satisfies one corner isn't a pathway.
                </p>
              </div>
            </div>

            {/* Column 2: Kiku */}
            <div className="philosophy-zen-item animate-on-scroll">
              <span className="zen-number">02</span>
              <div className="concept-header">
                <h3>Kiku</h3>
                <span className="concept-japanese-inline">聴く</span>
                <span className="concept-definition">to truly listen</span>
              </div>
              <p className="concept-desc">
                Not just hearing what's said, but listening for what a student hasn't figured out how to say yet.
              </p>
              <div className="concept-how-we-use">
                <h5>How we use it:</h5>
                <p>
                  Most consultations start with a form. Ours start with a conversation  because the real answer rarely arrives in the first sentence. Kiku is the principle behind Step 1, the Clarity Compass™ assessment  we don't map a pathway until we've actually heard the whole thing, including the parts said quietly, or not said at all.
                </p>
              </div>
            </div>

            {/* Column 3: Kaizen */}
            <div className="philosophy-zen-item animate-on-scroll">
              <span className="zen-number">03</span>
              <div className="concept-header">
                <h3>Kaizen</h3>
                <span className="concept-japanese-inline">改善</span>
                <span className="concept-definition">continuous improvement</span>
              </div>
              <p className="concept-desc">
                Progress made in small, honest steps  not one big leap, and never standing still.
              </p>
              <div className="concept-how-we-use">
                <h5>How we use it:</h5>
                <p>
                  This is why the journey is ten steps and not one decision. A roadmap isn't a document you hand over and walk away from  it's something we keep recalibrating as the student, the syllabus, the exam landscape, or the goal itself shifts. Step 10 exists because of this principle: mentorship ends when the plan stops needing adjustment  which is never.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your 10-Step Journey - 3D Overlapping Card Slider */}
      <section className="home-process-stack-section">
        <div className="container">
          <div className="section-header-premium text-center">
            <span className="badge">How it works</span>
            <h2>Your 10-Step Journey</h2>
            <h3 className="section-header-highlight">To a Life You Actually Chose</h3>
            <p className="section-subtitle">
              From the first spark of an idea to the day you're living the plan you built, we're with you every single step of the way  whether that plan ends in Delhi, Bangalore, Boston, or Berlin.
            </p>
          </div>
        </div>

        <div
          className="stack-slider-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Huge background text watermark */}
          <div className="stack-bg-text">NPATHWAYS</div>

          <div
            className="stack-deck-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="stack-cards-deck">
              {stepsData.map((step, index) => {
                // Calculate circular offset
                let offset = index - activeStep;
                if (offset < -5) offset += 10;
                if (offset > 4) offset -= 10;

                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 2;

                // Determine transform style (Expanded side-to-side translates)
                let style = {};
                if (offset === 0) {
                  style = {
                    transform: "translate3d(0%, 0, 0) scale(1)",
                    zIndex: 10,
                    opacity: 1,
                    pointerEvents: "auto"
                  };
                } else if (offset === -1) {
                  style = {
                    transform: "translate3d(-60%, 0, -120px) scale(0.85) rotateY(15deg)",
                    zIndex: 8,
                    opacity: 1,
                    pointerEvents: "auto"
                  };
                } else if (offset === -2) {
                  style = {
                    transform: "translate3d(-110%, 0, -240px) scale(0.7) rotateY(25deg)",
                    zIndex: 6,
                    opacity: 1,
                    pointerEvents: "auto"
                  };
                } else if (offset === 1) {
                  style = {
                    transform: "translate3d(60%, 0, -120px) scale(0.85) rotateY(-15deg)",
                    zIndex: 8,
                    opacity: 1,
                    pointerEvents: "auto"
                  };
                } else if (offset === 2) {
                  style = {
                    transform: "translate3d(110%, 0, -240px) scale(0.7) rotateY(-25deg)",
                    zIndex: 6,
                    opacity: 1,
                    pointerEvents: "auto"
                  };
                } else {
                  style = {
                    transform: "translate3d(0%, 0, -500px) scale(0)",
                    zIndex: 0,
                    opacity: 0,
                    pointerEvents: "none"
                  };
                }

                return (
                  <div
                    key={index}
                    className={`stack-card ${isCenter ? "active" : ""} ${isVisible ? "visible" : "hidden"}`}
                    style={{ ...style, "--card-bg": `url(${step.bgImg})` }}
                    onClick={() => {
                      navigate("/about/how-it-works", { state: { activeStep: index } });
                    }}
                  >
                    <div className="stack-card-overlay"></div>
                    <div className="stack-card-glass">
                      <div className="card-number-bg">{step.num}</div>
                      <div className="card-header-row">
                        <span className="card-num-label">{step.num}</span>
                        <div className="card-icon">{step.icon}</div>
                      </div>
                      <h3 className="card-title">{step.title}</h3>
                      <p className="card-desc">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slider controls (Arrows & Dots) */}
          <div className="slider-controls">
            <button
              className="control-btn prev-btn"
              onClick={() => setActiveStep((prev) => (prev - 1 + 10) % 10)}
              aria-label="Previous step"
            >
              <FiChevronLeft size={22} />
            </button>
            <div className="slider-dots">
              {stepsData.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === activeStep ? "active" : ""}`}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="control-btn next-btn"
              onClick={() => setActiveStep((prev) => (prev + 1) % 10)}
              aria-label="Next step"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* Explore Our Pathways Section */}
      <section className="home-pathways-section">
        <div className="container">
          <div className="section-header-premium text-center">
            <span className="badge">Pathways</span>
            <h2>Explore Our Pathways</h2>
            <p className="section-subtitle">
              We design personalized routes for academic excellence, career discovery, stream decisions, and study abroad transitions.
            </p>
          </div>

          <div className="pathways-grid-new">
            {popularPathwaysData.map((pw, index) => (
              <div key={index} className={`pathways-grid-card ${index === 6 ? "full-width-card" : ""}`}>
                <div className="pathways-card-header">
                  <div className="pathways-card-icon">{pw.icon}</div>
                  <h3>{pw.title}</h3>
                </div>
                <p className="pathways-card-desc">{pw.desc}</p>
                <div className="pathways-card-action">
                  <Link to={pw.link} className="btn-read-pathway">
                    Explore Pathway <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA: Step-by-Step Wizard Section */}
      <section className="home-cta-section">
        <div className="home-cta-bg-layer"></div>
        <div className="container">

          {/* Centered CTA Header */}
          <div className="home-cta-header-center">
            <h2 className="home-cta-heading">
              {wizardData.name ? `Welcome, ${wizardData.name.split(' ')[0]}!` : "Ready to start your journey?"}
            </h2>
            <p className="home-cta-sub">
              {wizardData.name
                ? "Answer these quick steps to build your custom NPathways mentorship blueprint."
                : "Answer a few quick questions and our expert mentors will personalise a plan just for you."}
            </p>
          </div>

          <div className="home-cta-inner">

            {/* Left Side: Wizard Form */}
            <div className="home-cta-left" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="home-cta-wizard" style={{ width: '100%' }}>
                {!isSuccess ? (
                  <div className="home-wizard-box">
                    <div className="home-wizard-step-tag">Step {wizardStep} of 5</div>

                    {/* Step 1: Name */}
                    {wizardStep === 1 && (
                      <div className="home-wizard-step fade-in-up">
                        <label className="home-wizard-label">What should we call you?</label>
                        <input type="text" name="name" placeholder="Enter your full name" value={wizardData.name}
                          onChange={handleWizardChange} className="home-wizard-input" autoFocus
                          onKeyDown={e => e.key === 'Enter' && handleWizardNext()} />
                        <div className="home-wizard-actions">
                          <button className="home-wizard-btn-next" onClick={handleWizardNext} disabled={!wizardData.name.trim()}>
                            Continue <FiArrowRight style={{ marginLeft: '8px' }} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Category */}
                    {wizardStep === 2 && (
                      <div className="home-wizard-step fade-in-up">
                        <label className="home-wizard-label">Who are you representing?</label>
                        <div className="home-wizard-cards-grid">
                          {categoriesList.map((cat, idx) => (
                            <div key={cat.label}
                              className={`home-wizard-card ${wizardData.category === cat.label ? 'selected' : ''}`}
                              onClick={() => handleCategoryPick(cat.label)}
                              style={{ animationDelay: `${idx * 0.06}s` }}
                            >
                              <div className="home-wizard-card-icon">{cat.icon}</div>
                              <div><h4>{cat.label}</h4><p>{cat.desc}</p></div>
                            </div>
                          ))}
                        </div>
                        <div className="home-wizard-actions home-wizard-row">
                          <button className="home-wizard-btn-back" onClick={handleWizardBack}><FiArrowLeft /> Back</button>
                          <button className="home-wizard-btn-next" onClick={handleWizardNext} disabled={!wizardData.category}>Next <FiArrowRight /></button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Service */}
                    {wizardStep === 3 && (
                      <div className="home-wizard-step fade-in-up">
                        <label className="home-wizard-label">What service are you interested in?</label>
                        <div className="home-wizard-cards-grid home-wizard-cards-2col" style={{ gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          {programsList.map((srv, idx) => (
                            <div key={srv.label}
                              className={`home-wizard-card ${wizardData.selectedProgram === srv.label ? 'selected' : ''}`}
                              onClick={() => handleProgramPick(srv.label)}
                              style={{ animationDelay: `${idx * 0.05}s` }}
                            >
                              <div className="home-wizard-card-icon">{srv.icon}</div>
                              <div><h4>{srv.label}</h4><p>{srv.desc}</p></div>
                            </div>
                          ))}
                        </div>
                        <div className="home-wizard-actions home-wizard-row">
                          <button className="home-wizard-btn-back" onClick={handleWizardBack}><FiArrowLeft /> Back</button>
                          <button className="home-wizard-btn-next" onClick={handleWizardNext} disabled={!wizardData.selectedProgram}>Next <FiArrowRight /></button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Contact Info */}
                    {wizardStep === 4 && (
                      <div className="home-wizard-step fade-in-up">
                        <label className="home-wizard-label">How can we reach you?</label>
                        <div className="home-wizard-field">
                          <label>Email Address</label>
                          <input type="email" name="email" placeholder="name@example.com" value={wizardData.email}
                            onChange={handleWizardChange} className="home-wizard-input" required />
                        </div>
                        <div className="home-wizard-field" style={{ marginTop: '1rem' }}>
                          <label>Phone Number</label>
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <select name="countryCode" value={wizardData.countryCode} onChange={handleWizardChange}
                              className="home-wizard-select" style={{ width: '150px' }}>
                              <option value="+91">+91 (IN)</option>
                              <option value="+1">+1 (US)</option>
                              <option value="+44">+44 (UK)</option>
                              <option value="+61">+61 (AU)</option>
                              <option value="+65">+65 (SG)</option>
                            </select>
                            <input type="tel" name="phone" placeholder="00000 00000" value={wizardData.phone}
                              onChange={handleWizardChange} className="home-wizard-input" style={{ flex: 1 }} required />
                          </div>
                        </div>
                        <div className="home-wizard-actions home-wizard-row">
                          <button type="button" className="home-wizard-btn-back" onClick={handleWizardBack}><FiArrowLeft /> Back</button>
                          <button type="button" className="home-wizard-btn-next" onClick={handleWizardNext}
                            disabled={!wizardData.email.trim() || !wizardData.phone.trim()}>
                            Next <FiArrowRight />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Custom Message / Query */}
                    {wizardStep === 5 && (
                      <form onSubmit={handleWizardSubmit} className="home-wizard-step fade-in-up">
                        <label className="home-wizard-label">Do you have any specific query or message? (Optional)</label>
                        <div className="home-wizard-field">
                          <textarea name="message" placeholder="Type your message or queries here..." value={wizardData.message}
                            onChange={handleWizardChange} className="home-wizard-input" style={{ height: '120px', resize: 'vertical', padding: '12px' }} />
                        </div>
                        <div className="home-wizard-actions home-wizard-row">
                          <button type="button" className="home-wizard-btn-back" onClick={handleWizardBack} disabled={isSubmitting}><FiArrowLeft /> Back</button>
                          <button type="submit" className="home-wizard-btn-submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending…' : 'Submit Inquiry'}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                ) : (
                  <div className="home-wizard-success fade-in">
                    <FiCheckCircle size={60} className="home-wizard-success-icon" />
                    <h3>Inquiry Submitted!</h3>
                    <p>Thank you, <strong>{wizardData.name.split(' ')[0]}</strong>. Our counselors will reach out to you shortly.</p>
                    <button className="home-wizard-btn-next" onClick={resetWizard} style={{ marginTop: '20px' }}>Submit Another</button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Dynamic Mentorship Passport / Boarding Pass */}
            <div className="home-cta-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div className={`cta-boarding-pass${isAnimating ? ' pass-tearing' : ''}`}>
                {/* Main Ticket Area */}
                <div className="pass-main">
                  <div className="pass-header-row">
                    <div className="pass-airline">NPATHWAYS AIRLINES</div>
                    <div className="pass-class-badge">FIRST CLASS</div>
                  </div>

                  <div className="pass-route-row">
                    <div className="route-airport">
                      <span className="airport-code">BOM</span>
                      <span className="airport-city">MUMBAI</span>
                    </div>
                    <div className="route-flight-symbol">
                      <span className="plane-icon">✈</span>
                      <span className="flight-number">NP-2026</span>
                    </div>
                    <div className="route-airport dest">
                      <span className="airport-code">
                        {wizardData.selectedProgram
                          ? (wizardData.selectedProgram.includes("USA") ? "USA"
                            : wizardData.selectedProgram.includes("UK") ? "LHR"
                              : wizardData.selectedProgram.includes("Canada") ? "YYZ"
                                : wizardData.selectedProgram.includes("Australia") ? "SYD"
                                  : "ABR")
                          : "ABR"}
                      </span>
                      <span className="airport-city">
                        {wizardData.selectedProgram
                          ? (wizardData.selectedProgram.includes("USA") ? "UNITED STATES"
                            : wizardData.selectedProgram.includes("UK") ? "LONDON"
                              : wizardData.selectedProgram.includes("Canada") ? "TORONTO"
                                : wizardData.selectedProgram.includes("Australia") ? "SYDNEY"
                                  : "ABROAD")
                          : "ABROAD"}
                      </span>
                    </div>
                  </div>

                  <div className="pass-details-grid">
                    <div className="pass-detail-item span-two">
                      <span className="detail-label">PASSENGER NAME</span>
                      <span className="detail-value highlight">{wizardData.name || "Awaiting Name..."}</span>
                    </div>
                    <div className="pass-detail-item">
                      <span className="detail-label">OCCUPATION</span>
                      <span className="detail-value">{wizardData.category || "---"}</span>
                    </div>
                    <div className="pass-detail-item">
                      <span className="detail-label">PHONE NO</span>
                      <span className="detail-value">{wizardData.phone ? `${wizardData.countryCode} ${wizardData.phone}` : "---"}</span>
                    </div>
                    <div className="pass-detail-item span-two">
                      <span className="detail-label">EMAIL ADDRESS</span>
                      <span className="detail-value">{wizardData.email || "---"}</span>
                    </div>
                    <div className="pass-detail-item span-two">
                      <span className="detail-label">INTEREST / PROGRAM</span>
                      <span className="detail-value highlight-gold">{wizardData.selectedProgram || "---"}</span>
                    </div>
                    <div className="pass-detail-item span-two">
                      <span className="detail-label">CUSTOM QUERY / MESSAGE</span>
                      <span className="detail-value" style={{ fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {wizardData.message || "No query added."}
                      </span>
                    </div>
                    <div className="pass-detail-item">
                      <span className="detail-label">FLIGHT / SEAT</span>
                      <span className="detail-value">NP-2026 / 1A</span>
                    </div>
                    <div className="pass-detail-item">
                      <span className="detail-label">GATE / BOARDING</span>
                      <span className="detail-value gold">IKIGAI / NOW</span>
                    </div>
                  </div>
                </div>

                {/* Perforation Line and Notches */}
                <div className="pass-perforation">
                  <div className="notch-top"></div>
                  <div className="perforation-dashed"></div>
                  <div className="notch-bottom"></div>
                </div>

                {/* Stub Area (Receipt) */}
                <div className="pass-stub">
                  <div className="stub-header">
                    <span className="stub-title">STUB RECEIPT</span>
                  </div>
                  <div className="stub-body">
                    <div className="stub-field">
                      <span className="stub-label">PASSENGER</span>
                      <span className="stub-value highlight-stub">{wizardData.name ? wizardData.name.split(' ')[0] : "EXPLORER"}</span>
                    </div>
                    <div className="stub-field">
                      <span className="stub-label">ROUTE</span>
                      <span className="stub-value">
                        BOM ➔ {wizardData.selectedProgram
                          ? (wizardData.selectedProgram.includes("USA") ? "USA"
                            : wizardData.selectedProgram.includes("UK") ? "LHR"
                              : wizardData.selectedProgram.includes("Canada") ? "YYZ"
                                : wizardData.selectedProgram.includes("Australia") ? "SYD"
                                  : "ABR")
                          : "ABR"}
                      </span>
                    </div>
                    <div className="stub-field">
                      <span className="stub-label">CLASS</span>
                      <span className="stub-value gold">PREMIUM</span>
                    </div>
                  </div>
                  <div className="stub-footer">
                    <div className="passport-barcode">
                      <div className="barcode-line select-1"></div>
                      <div className="barcode-line select-2"></div>
                      <div className="barcode-line select-3"></div>
                      <div className="barcode-line select-4"></div>
                      <div className="barcode-line select-1"></div>
                      <div className="barcode-line select-5"></div>
                      <div className="barcode-line select-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Plane animation overlay – lives inside the boarding pass column */}
              {isAnimating && (
                <div className="pass-plane-overlay">
                  <div className="anim-plane-wrapper">
                    <span className="anim-plane">✈</span>
                    <div className="anim-exhaust"></div>
                  </div>
                  <p className="anim-text">Boarding your inquiry...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
