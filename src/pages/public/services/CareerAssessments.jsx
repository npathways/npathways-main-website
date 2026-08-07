import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supportServices } from "../../../data/services";
import Button from "../../../components/common/Button";
import "./ServiceDetails.css";

const CareerAssessments = () => {
  const service = supportServices.find((s) => s.id === "career-assessments");
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="service-detail-page fade-in">
      {/* Hero / Breadcrumb */}
      <section className="service-hero bg-gray">
        <div className="container text-center">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span className="text-black font-medium">Assessments</span>
          </nav>
          <h1>{service.name}</h1>
        </div>
      </section>

      <div className="container">
        <div className="service-layout-grid">
          {/* Sidebar */}
          <aside className="service-sidebar">
            <div className="sidebar-widget">
              <h3 className="widget-title">All Services</h3>
              <ul className="sidebar-nav">
                {supportServices.map((s) => (
                  <li key={s.id} className="sidebar-nav-item">
                    <Link
                      to={s.link}
                      className={`sidebar-nav-link ${
                        location.pathname === s.link ? "active" : ""
                      }`}
                    >
                      {s.name}
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Fixed Image Panel */}
          <div className="service-image-panel">
            <img
              src="https://picsum.photos/seed/career/800/500"
              alt="Career assessments"
            />
          </div>

          {/* Main Content */}
          <main className="service-main-content">
            <section className="service-intro mb-12">
              <h2>{service.shortDescription}</h2>
              <p className="text-xl text-gray-700 mb-8">
                {service.longDescription}
              </p>

              <h3>Assessment Features</h3>
              <ul className="check-list space-y-4 mb-10">
                {service.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0" style={{ display: "inline-flex", alignItems: "center", marginTop: "4px" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "2px" }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="benefits-section mb-12">
              <h3>The Value Proposition</h3>
              <div className="benefits-grid">
                {service.benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="faq-section">
              <h3>Assessment FAQ</h3>
              <div className="faq-accordion">
                {service.faq.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{item.question}</span>
                      <span>{openFaq === index ? "−" : "+"}</span>
                    </div>
                    {openFaq === index && (
                      <div className="faq-answer fade-in">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Sample Reports Section - Moved from Sidebar */}
            <section className="resources-section mb-12">
              <h3>Sample Reports</h3>
              <div className="resources-grid">
                <a
                  href="#"
                  className="download-item"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="download-icon">PDF</div>
                  <div className="download-info">
                    <span className="download-name">
                      Sample Strength Report
                    </span>
                    <span className="download-size">PDF (3.2 MB)</span>
                  </div>
                </a>
              </div>
            </section>

            {/* Ready to Begin CTA - Moved from Sidebar */}
            <section className="help-cta-section">
              <div className="help-cta-box">
                <h3>Ready to Begin?</h3>
                <p>Get scientific clarity on your career path today.</p>
                <Button
                  variant="premium"
                  size="large"
                  onClick={() =>
                    (window.location.href = "/products/assessments")
                  }
                >
                  View All Assessments
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CareerAssessments;
