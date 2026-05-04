import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { consultancyServices, supportServices } from "../../data/services";
import "./Services.css";

const Services = () => {
  // Combine all services for the grid overview
  const allServices = [
    {
      ...consultancyServices[0],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      category: "Individual Transition",
    },
    {
      ...consultancyServices[1],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      category: "Individual Transition",
    },
    {
      ...consultancyServices[2],
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      category: "Individual Transition",
    },
    {
      ...supportServices.find((s) => s.id === "for-parents"),
      image:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop",
      category: "Stakeholder Services",
    },
    {
      ...supportServices.find((s) => s.id === "for-schools"),
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
      category: "Stakeholder Services",
    },
    {
      ...supportServices.find((s) => s.id === "career-assessments"),
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Readiness Tools",
    },
    {
      ...supportServices.find((s) => s.id === "bootcamps"),
      image:
        "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop",
      category: "Readiness Tools",
    },
    {
      ...supportServices.find((s) => s.id === "school-programs"),
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
      category: "Readiness Tools",
    },
  ];

  return (
    <div className="services-page fade-in">
      {/* Global Banner */}
      <section className="services-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="text-black">Our Services</span>
          </nav>
          <h1>
            Our <span className="text-black">Services</span>
          </h1>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-intro-center">
            <span className="mini-title">What We Offer</span>
            <h2 className="main-section-title">
              Comprehensive support for your global journey
            </h2>
          </div>

          <div className="services-main-grid">
            {allServices.map((service, index) => (
              <div key={service.id} className="service-card-premium">
                <div className="service-card-image-wrap">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="card-icon-float">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                  {service.category}
                </span>
                <h3>{service.name}</h3>
                <p>
                  {service.shortDescription ||
                    service.description.substring(0, 100) + "..."}
                </p>
                <Link
                  to={service.link || "/services"}
                  className="read-more-btn"
                >
                  Read More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="split-layout">
            <div className="why-content">
              <span className="mini-title text-gray-400">Why NPathways?</span>
              <h2 className="text-4xl mb-8 text-white">
                Why Choose Our Expert Guidance?
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                We don't just provide admissions support. We provide a
                scientific, role-aware strategy that aligns student ambitions
                with family security and institutional excellence.
              </p>
              <div className="why-features">
                <div className="feature-box-bw">
                  <h4>Scientific Approach</h4>
                  <p>Data-driven assessments for path clarity.</p>
                </div>
                <div className="feature-box-bw">
                  <h4>Global Network</h4>
                  <p>Direct access to top 1% global institutions.</p>
                </div>
                <div className="feature-box-bw">
                  <h4>End-to-End</h4>
                  <p>From 8th Grade prep to arrival support.</p>
                </div>
                <div className="feature-box-bw">
                  <h4>Trust First</h4>
                  <p>Verified destinations and student safety.</p>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div className="relative border-4 border-white rounded-[2px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section text-center py-24">
        <div className="container">
          <h2 className="text-3xl mb-6">Need a Personalized Strategy?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Book a discovery session with our expert counselors to find the
            right path for your unique profile.
          </p>
          <div className="cta-buttons">
            <Button
              variant="primary"
              size="large"
              onClick={() => (window.location.href = "/contact")}
            >
              Talk to an Advisor
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => (window.location.href = "/services/assessments")}
            >
              Explore Tools
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
