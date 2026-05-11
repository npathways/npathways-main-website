import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supportServices } from "../../../data/services";
import Button from "../../../components/common/Button";
import ServiceSidebar from "../../../components/common/ServiceSidebar";
import "./ServiceDetails.css";

const Bootcamps = () => {
  const service = supportServices.find((s) => s.id === "bootcamps");
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
            <span className="text-black font-medium">Bootcamps</span>
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
              src="https://picsum.photos/seed/bootcamp/800/500"
              alt="Accelerated bootcamps"
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => (window.location.href = "/services/bootcamp-calendar")}
              >
                View Bootcamp Calendar
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

              <h3>Bootcamp Highlights</h3>
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
              <h3>What You Gain</h3>
              <div className="benefits-grid">
                {service.benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
                  </div>
                ))}
              </div>
            </section>


            {/* Upcoming Calendars Section - Moved from Sidebar */}

            {/* Join a Batch CTA - Moved from Sidebar */}
            <section className="help-cta-section">
              <div className="help-cta-box">
                <h3>Join a Batch</h3>
                <p>Slots are limited per cohort. Register interest early.</p>
                <Button
                  variant="premium"
                  size="large"
                  onClick={() => (window.location.href = "/services/bootcamp-calendar")}
                >
                  View Calendar
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
