import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import PathwayTopNav from "../../../components/services/PathwayTopNav";
import "./ServiceDetails.css";

const StudyAbroadParentSupport = () => {
  const features = [
    {
      title: "Travel & Stay Sourcing",
      desc: "For parents who choose to accompany their child during the initial transition, we guide you on visas,近く campus accommodation, and custom travel itineraries."
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

  const benefits = [
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
            <span className="text-black font-medium">Parents Support</span>
          </nav>
          <h1>Complete Parents Support</h1>
        </div>
      </section>

      <PathwayTopNav />

      <div className="container">
        <div className="service-layout-grid">
          {/* Fixed Image Panel */}
          <div className="service-image-panel">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
              alt="Parents Support"
              className="grayscale"
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
              >
                Connect with our Team
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <main className="service-main-content">
            <section className="service-intro mb-12">
              <h2>Total financial clarity, travel logistics, and community networks built for families.</h2>
              <p className="text-xl text-gray-700 mb-8">
                Every academic decision is a family decision. Whether your child is moving to another state or across the ocean, we provide parents with the tools, clear financial audits, safety verification, and networks to navigate this milestone with confidence.
              </p>

              <h3>Support Services for Parents</h3>
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
              <h3>Strategic Family Benefits</h3>
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

export default StudyAbroadParentSupport;
