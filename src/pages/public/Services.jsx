import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import BootcampCalendar from "../../components/bootcamp/BootcampCalendar";
import {
  FaCompass,
  FaGraduationCap,
  FaChartLine,
  FaFileInvoiceDollar,
  FaPlaneDeparture
} from "react-icons/fa";
import { FiBookOpen, FiAward } from "react-icons/fi";
import "./Services.css";

const pathwaysData = [
  {
    id: "academic-pathway",
    name: "Academic Pathways",
    shortDescription: "For the student who has the destination — but not yet the route. Course, college, and university shortlisting and admissions.",
    icon: <FaGraduationCap />,
    link: "/services/education-consulting",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "career-pathway",
    name: "Career Pathways",
    shortDescription: "For the student who doesn't know yet — which is exactly where we start. Strengths counseling and Ikigai mapping.",
    icon: <FaCompass />,
    link: "/services/career-guidance",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "curricular-pathway",
    name: "Curricular-Based Pathways",
    shortDescription: "Every Board. One Strategy. Stream, board, and subject choices (CBSE, ICSE, IB, IGCSE) aligned with long-term admissions.",
    icon: <FiBookOpen />,
    link: "/services/curricular-based-pathways",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "bridge-programs",
    name: "Pathway Programs (Bridge Courses)",
    shortDescription: "Close the specific academic or transition gaps. Specialized bridge programs to ensure preparation meets targets.",
    icon: <FaChartLine />,
    link: "/services/pathway-programs",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "competitive-exams",
    name: "Competitive Exam Pathways",
    shortDescription: "Layered exam prep strategy for JEE, NEET, CAT, CLAT, CUET, SAT, GRE, IELTS, etc., built on top of your existing coaching.",
    icon: <FiAward />,
    link: "/services/competitive-exam-strategy",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "bootcamp-pathway",
    name: "Skill & Bootcamp Pathways",
    shortDescription: "Outcome-specific bootcamps for job, career, and life readiness. Specialized upskilling modules for profile building.",
    icon: <FaFileInvoiceDollar />,
    link: "/bootcamps-webinars",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "study-abroad-pathway",
    name: "Study Abroad Pathway",
    shortDescription: "When the plan points beyond India, we take you the whole way. Dedicated parent support, travel logistics, and student transition checklists.",
    icon: <FaPlaneDeparture />,
    link: "/services/study-abroad-pathway",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
  }
];

const Services = () => {
  return (
    <div className="services-page fade-in">
      {/* Global Banner */}
      <section className="services-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="text-black">Our Pathways</span>
          </nav>
          <h1>
            Our <span className="accent-text">Pathways</span>
          </h1>
        </div>
      </section>

      {/* Main Pathways Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-intro-center">
            <span className="mini-title">Personalized Guidance</span>
            <h2 className="main-section-title">
              Personalized Routes Built for Your Purpose
            </h2>
          </div>

          <div className="services-main-grid">
            {pathwaysData.map((pw, index) => (
              <div key={pw.id} className="service-card-premium">
                <div className="service-card-image-wrap">
                  <img src={pw.image} alt={pw.name} />
                </div>
                <div className="card-icon-float">
                  {pw.icon}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                  Pathway {index + 1}
                </span>
                <h3>{pw.name}</h3>
                <p>{pw.shortDescription}</p>
                <Link
                  to={pw.link}
                  className="read-more-btn"
                >
                  Explore Pathway <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual CTA Section */}
      <section className="services-cta-section" style={{ padding: "8rem 0", background: "#fbfbfb" }}>
        <div className="container" style={{ maxWidth: "80%", width: "80%", margin: "0 auto" }}>
          <div className="services-creative-cta-card">
            <div className="cta-pulse-ring ring-1"></div>
            <div className="cta-pulse-ring ring-2"></div>
            <div className="cta-pulse-ring ring-3"></div>

            <div className="cta-content-wrapper">
              <span className="cta-tagline">Map Your Purpose</span>
              <h2 className="cta-title">Ready to Design Your Pathway?</h2>
              <p className="cta-desc">
                Skip the guesswork. Connect with our expert mentors to engineer a custom pathway tailored precisely to your goals, syllabus, profile, and ambitions.
              </p>
              
              <div className="cta-button-wrap">
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
                  className="cta-launch-button"
                >
                  <span className="btn-text">Begin Pathway Design</span>
                  <span className="btn-arrow">✈</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
