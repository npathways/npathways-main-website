import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { consultancyServices, supportServices } from "../../../data/services";
import Button from "../../../components/common/Button";
import ServiceSidebar from "../../../components/common/ServiceSidebar";
import "./ServiceDetails.css";

const CareerGuidance = () => {
  const service = consultancyServices.find((s) => s.id === "career-guidance");
  const location = useLocation();

  if (!service) return null;


  // Combine services for sidebar
  const allServices = [...consultancyServices, ...supportServices];

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
            <span className="text-black font-medium">{service.name}</span>
          </nav>
          <h1>{service.name}</h1>
        </div>
      </section>

      <div className="container">
        <div className="service-layout-grid">
          {/* Sidebar */}
          <ServiceSidebar />

          {/* Fixed Image Panel */}
          <div className="service-image-panel">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
              alt="Career Guidance"
              className="grayscale"
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
              >
                Talk to an Advisor
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <main className="service-main-content">
            <section className="service-intro mb-12">
              <h2>{service.shortDescription}</h2>
              <p className="text-xl text-gray-700 mb-8">
                {service.longDescription}
              </p>

              <h3>Guidance Highlights</h3>
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
              <h3>Direct Benefits</h3>
              <div className="benefits-grid">
                {service.benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
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

export default CareerGuidance;
