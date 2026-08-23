import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import PathwayTopNav from "../../../components/services/PathwayTopNav";
import "./ServiceDetails.css";

const StudyAbroadCompleteSupport = () => {
  const [activeTab, setActiveTab] = useState("student"); // "student" or "parent"

  const studentFeatures = [
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

  const parentFeatures = [
    {
      title: "Travel & Stay Sourcing",
      desc: "For parents who choose to accompany their child during the initial transition, we guide you on visas, nearby campus accommodation, and custom travel itineraries."
    },
    {
      title: "Full-Picture Financial Clarity",
      desc: "Early budgeting of living costs, currency shifts, loan structures, scholarships, and forex risk audits to avoid unexpected mid-course cost inflation."
    },
    {
      title: "The Parent Circle",
      desc: "A warm community of NPathways parents, past and current, hosting regular meet-ups (online and in person) to share real experiences and peer advice."
    },
    {
      title: "Global Family Network",
      desc: "Building connections with international student communities, ensuring parents stay connected and reassured throughout their child's studies."
    }
  ];

  const studentBenefits = [
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

  const parentBenefits = [
    {
      title: "Peace of Mind",
      desc: "Rest easy knowing your child's pathway is vetted, structured, and monitored by experienced mentors."
    },
    {
      title: "Transparent Budgeting",
      desc: "A detailed total cost plan rather than per-year guesswork, protecting your family's financial stability."
    },
    {
      title: "Peer Community Support",
      desc: "Never feel alone in this transition. Leverage wisdom from families who have successfully navigated this journey before you."
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
            <span className="text-black font-medium">360° Support</span>
          </nav>
          <h1>360° Complete Support</h1>
          <p className="hero-desc" style={{ maxWidth: '700px', margin: '1rem auto 0 auto', color: '#666' }}>
            A unified guidance system designed for both students and parents. We ensure academic clarity, smooth application transitions, and complete financial peace of mind.
          </p>
        </div>
      </section>

      <PathwayTopNav />

      <div className="container">
        {/* Toggle Switcher */}
        <div className="tab-navigation-wrapper" style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0 2rem 0' }}>
          <div className="premium-tabs-container" style={{ display: 'inline-flex', background: '#F3F4F6', padding: '6px', borderRadius: '50px' }}>
            <button
              onClick={() => setActiveTab("student")}
              className="tab-btn"
              style={{
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                padding: '12px 32px',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                backgroundColor: activeTab === "student" ? '#000000' : 'transparent',
                color: activeTab === "student" ? '#ffffff' : '#4B5563'
              }}
            >
              Complete Student Support
            </button>
            <button
              onClick={() => setActiveTab("parent")}
              className="tab-btn"
              style={{
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                padding: '12px 32px',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                backgroundColor: activeTab === "parent" ? '#000000' : 'transparent',
                color: activeTab === "parent" ? '#ffffff' : '#4B5563'
              }}
            >
              Complete Parents Support
            </button>
          </div>
        </div>

        <div className="service-layout-grid">
          {/* Fixed Image Panel */}
          <div className="service-image-panel">
            <img
              src={
                activeTab === "student"
                  ? "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  : "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
              }
              alt={activeTab === "student" ? "Global Student Support" : "Parents Support"}
              className="grayscale"
              style={{ transition: 'all 0.5s ease' }}
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
              >
                {activeTab === "student" ? "Plan Your Journey Abroad" : "Connect with our Team"}
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <main className="service-main-content">
            {activeTab === "student" ? (
              <section className="service-intro mb-12">
                <h2>How we guide college and school students from clarity to transition.</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Most students pick a country or college before they've chosen a direction. We start with who you are and where you fit, then design the strategy, applications, visa documentation, and transition support to get you there safely.
                </p>

                <h3>Guidance Framework Pillars</h3>
                <ul className="check-list space-y-6 mb-10">
                  {studentFeatures.map((f, i) => (
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

                <section className="benefits-section mb-12">
                  <h3>Strategic Advantages</h3>
                  <div className="benefits-grid">
                    {studentBenefits.map((b, i) => (
                      <div key={i} className="benefit-card">
                        <h4>{b.title}</h4>
                        <p>{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </section>
            ) : (
              <section className="service-intro mb-12">
                <h2>Total financial clarity, travel logistics, and community networks built for families.</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Every academic decision is a family decision. Whether your child is moving to another state or across the ocean, we provide parents with the tools, clear financial audits, safety verification, and networks to navigate this milestone with confidence.
                </p>

                <h3>Support Services for Parents</h3>
                <ul className="check-list space-y-6 mb-10">
                  {parentFeatures.map((f, i) => (
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

                <section className="benefits-section mb-12">
                  <h3>Strategic Family Benefits</h3>
                  <div className="benefits-grid">
                    {parentBenefits.map((b, i) => (
                      <div key={i} className="benefit-card">
                        <h4>{b.title}</h4>
                        <p>{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadCompleteSupport;
