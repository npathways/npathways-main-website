import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supportServices } from "../../../data/services";
import Button from "../../../components/common/Button";
import ServiceSidebar from "../../../components/common/ServiceSidebar";
import "./ServiceDetails.css";

const SchoolPrograms = () => {
  const service = supportServices.find((s) => s.id === "school-programs");
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
            <span className="text-black font-medium">Programs</span>
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
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              alt="Structured school programs"
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

              <h3>Program Modules</h3>
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
              <h3>Core Advantages</h3>
              <div className="benefits-grid">
                {service.benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
                  </div>
                ))}
              </div>
            </section>


            {/* Program Catalog Section - Moved from Sidebar */}

            {/* Start Your Program CTA - Moved from Sidebar */}
            <section className="help-cta-section">
              <div className="help-cta-box">
                <h3>Start Your Program</h3>
                <p>Programs designed to fit into your academic calendar.</p>
                <Button
                  variant="premium"
                  size="large"
                  onClick={() => (window.location.href = "/products/programs")}
                >
                  View Active Programs
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SchoolPrograms;
