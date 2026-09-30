import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import PathwayTopNav from "../../../components/services/PathwayTopNav";
import "./ServiceDetails.css";

const StudyAbroadStudentSupport = () => {
  const features = [
    {
      title: "Career Discovery (Ikigai Mapping)",
      desc: "Every journey begins with the Clarity Compass — mapping your natural strengths, genuine interests, and real-world viability to identify what you are actually building toward."
    },
    {
      title: "University Admissions Consulting",
      desc: "Shortlisting universities based on department strength, faculty, budget, and culture, and helping you build a story-driven SOP, LOR, and application profile."
    },
    {
      title: "Visa Success Planning",
      desc: "A meticulous filing process with document checks, financial proof structuring, and mock interviews resulting in a 98% success rate."
    },
    {
      title: "Transition & Journey Playbook",
      desc: "From departure orientations to banking, logistics, and student community support, we guide you through the first 30 days in a new country."
    }
  ];

  const benefits = [
    {
      title: "Clarified Direction",
      desc: "Know exactly why you are going and what you want to achieve before you spend on university tuition."
    },
    {
      title: "Premium Applications",
      desc: "Profiles optimized to stand out to admissions committees, boosting your admit and scholarship rates."
    },
    {
      title: "Stress-Free Logistical Support",
      desc: "Meticulous documentation and deadlines managed by specialists, ensuring no technical errors delay your plans."
    }
  ];

  return (
    <div className="service-detail-page fade-in">
      {/* Hero / Breadcrumb */}
      <section className="service-hero bg-gray">
        <div className="container text-center">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services/study-abroad-pathway">Study Abroad</Link>
            <span>/</span>
            <span className="text-black font-medium">Student Support</span>
          </nav>
          <h1>Complete Student Support</h1>
        </div>
      </section>

      <PathwayTopNav />

      <div className="container">
        <div className="service-layout-grid">
          {/* Fixed Image Panel */}
          <div className="service-image-panel">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              alt="Global Student Support"
              className="grayscale"
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
              >
                Plan Your Journey Abroad
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <main className="service-main-content">
            <section className="service-intro mb-12">
              <h2>How we guide college and school students from clarity to transition.</h2>
              <p className="text-xl text-gray-700 mb-8">
                Most students pick a country or college before they've chosen a direction. We start with who you are and where you fit, then design the strategy, applications, visa documentation, and transition support to get you there safely.
              </p>

              <h3>Guidance Framework Pillars</h3>
              <ul className="check-list space-y-6 mb-10">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start" style={{ marginBottom: "1.5rem" }}>
                    <span className="flex-shrink-0" style={{ display: "inline-flex", alignItems: "center", marginTop: "4px" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "2px" }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div>
                      <h4 style={{ fontWeight: "700", marginBottom: "0.25rem" }}>{f.title}</h4>
                      <p style={{ margin: 0, fontSize: "0.95rem", color: "#666" }}>{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="benefits-section mb-12">
              <h3>Strategic Advantages</h3>
              <div className="benefits-grid">
                {benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadStudentSupport;
