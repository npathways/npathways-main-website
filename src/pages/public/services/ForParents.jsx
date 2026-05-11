import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supportServices } from "../../../data/services";
import Button from "../../../components/common/Button";
import ServiceSidebar from "../../../components/common/ServiceSidebar";
import "./ServiceDetails.css";

const ForParents = () => {
  const service = supportServices.find((s) => s.id === "for-parents");
  const location = useLocation();

  if (!service) return null;


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
              src="https://picsum.photos/seed/parents/800/500"
              alt="Parents orientation"
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => (window.location.href = "/contact")}
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

              <h3>Key Features</h3>
              <ul className="check-list space-y-4 mb-10">
                {service.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-black font-bold">✓</span>
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


            {/* Download Resources Section - Moved from Sidebar */}

            {/* Help Widget - Moved from Sidebar */}
            <section className="help-cta-section">
              <div className="help-cta-box">
                <h3>Need Help?</h3>
                <p>
                  Speak with our advisors to find the right path for your child.
                </p>
                <Button
                  variant="premium"
                  size="large"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Us Now
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ForParents;
