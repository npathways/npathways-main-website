import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { destinationsData } from "../../data/destinationsData";
import Button from "../../components/common/Button";
import "./DestinationDetail.css";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  const destination = destinationsData[id?.toLowerCase()];

  // Redirect if destination has no guide or doesn't exist
  useEffect(() => {
    if (!destination) {
      navigate("/services");
    } else if (destination.sections && destination.sections.length > 0) {
      setActiveSection(destination.sections[0].id);
    }
  }, [destination, navigate]);

  if (!destination) return null;

  const handleScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="destination-detail-page fade-in">
      {/* Hero Section */}
      <section 
        className="destination-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${destination.heroImage})` 
        }}
      >
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">Study in {destination.name}</span>
          </nav>
          <h1>Study in <span className="accent-text">{destination.name}</span></h1>
          <p className="destination-hero-subtitle">Your comprehensive 2026 pathway design & transition guide</p>
        </div>
      </section>

      {/* Quick Facts Horizontal Bar */}
      <section className="quick-facts-bar-section">
        <div className="container">
          <div className="quick-facts-grid-horizontal">
            <div className="qf-card">
              <span className="qf-label">Currency</span>
              <span className="qf-value">{destination.quickStats.currency}</span>
            </div>
            <div className="qf-card">
              <span className="qf-label">Conversion Rate</span>
              <span className="qf-value">{destination.quickStats.conversion}</span>
            </div>
            <div className="qf-card">
              <span className="qf-label">Language</span>
              <span className="qf-value">{destination.quickStats.languages}</span>
            </div>
            <div className="qf-card">
              <span className="qf-label">Primary Intake</span>
              <span className="qf-value">{destination.quickStats.primaryIntake}</span>
            </div>
            <div className="qf-card">
              <span className="qf-label">Est. Tuition</span>
              <span className="qf-value">{destination.quickStats.costEstimation}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container">
        <div className="destination-layout-grid">
          
          {/* Sidebar */}
          <aside className="destination-sidebar">
            {/* Table of Contents Navigation */}
            <div className="sidebar-widget toc-widget hide-mobile">
              <h3 className="widget-title">On This Page</h3>
              <ul className="toc-nav">
                {destination.sections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => handleScrollToSection(sec.id)}
                      className={`toc-link ${activeSection === sec.id ? "active" : ""}`}
                    >
                      {sec.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pathway CTA Widget */}
            <div className="sidebar-widget path-cta-widget">
              <div className="sidebar-cta-box">
                <h4>Plan Your Transition</h4>
                <p>Skip the complexity. Let our expert mentors design a custom route for you.</p>
                <Button 
                  variant="premium" 
                  size="small" 
                  fullWidth
                  onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
                >
                  Start Pathway Design
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Document Content */}
          <main className="destination-main-content">
            {destination.sections.map((section) => (
              <section key={section.id} id={section.id} className="destination-doc-section">
                <h2>{section.title}</h2>
                <div className="section-divider"></div>
                
                {/* Section Content Paragraphs */}
                {section.content && section.content.map((para, pIdx) => (
                  <p 
                    key={pIdx} 
                    dangerouslySetInnerHTML={{ __html: para }}
                    className="destination-para"
                  />
                ))}

                {/* Subsections (if any) */}
                {section.subsections && section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="destination-subsection">
                    <h3>{sub.title}</h3>
                    
                    {sub.list && (
                      <ul className="destination-checklist">
                        {sub.list.map((item, iIdx) => (
                          <li key={iIdx} className="destination-check-item">
                            <span className="checkbox-icon">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "1.5px" }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </span>
                            <span className="item-text" dangerouslySetInnerHTML={{ __html: item }}></span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            ))}

            {/* Quick Contact Footer */}
            <div className="destination-footer-cta">
              <h3>Have questions about studying in {destination.name}?</h3>
              <p>Get reliable, ethics-first advisory from advisors who have guided hundreds of successful transitions.</p>
              <Button 
                variant="premium" 
                size="large"
                onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
              >
                Connect With An Advisor
              </Button>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
