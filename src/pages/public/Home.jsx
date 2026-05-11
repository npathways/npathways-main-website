import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/common/Button";
import heroVideo from "../../assets/video/hero.mp4";

// Import Data
import destinationsData from "../../data/destinations.json";
import ecosystemData from "../../data/ecosystem.json";
import testimonialsData from "../../data/testimonials.json";
import trustBadgesData from "../../data/trustBadges.json";

import "./Home.css";

import LeadForm from "../../components/common/LeadForm";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-redesign">
      {/* Hero Section - Split Layout */}
      <section className="home-hero-premium">
        <video
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        
        <div className="container hero-split">
          <div className="hero-content-left">
            <span className="hero-badge-minimal">
              Global Education Reimagined
            </span>
            <h1 className="hero-title-premium">
              Find Your <br /> <span>Global Pathway</span>
            </h1>
            <p className="hero-desc-premium">
              Premium study abroad guidance from career discovery to
              post-arrival support. We don't just find you a university; we find
              you a future.
            </p>
            <div className="hero-actions-premium">
              <Button variant="premium" onClick={() => navigate("/contact")}>
                Book Free Consultation
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ marginLeft: "10px" }}
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                variant="premium-outline"
                onClick={() => navigate("/about/how-it-works")}
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight - Ecosystem */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header-premium">
            <span className="badge">Our Ecosystem</span>
            <h2>Complete Student Support</h2>
          </div>
          <div className="highlights-grid">
            {ecosystemData.map((item, i) => (
              <div key={i} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-premium">
            <span className="badge">Success Stories</span>
            <h2>What Our Global Community Says</h2>
          </div>

          <div className="trust-badges-wrapper testimonials-trust">
            {trustBadgesData.map((badge, i) => (
              <React.Fragment key={i}>
                <div className="trust-badge">
                  <div className="trust-platform">
                    <span className={`${badge.type}-logo`}>{badge.logo}</span> {badge.platform}
                  </div>
                  <div className="trust-rating">
                    {badge.stars && (
                      <span className="stars">{"★".repeat(badge.stars)}</span>
                    )}
                    <span className={badge.stars ? "rating-score" : "rating-text"}>
                      {badge.rating}
                    </span>
                  </div>
                </div>
                {i < trustBadgesData.length - 1 && <div className="trust-divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="testimonials-track-container">
            <div className="testimonials-track">
              {[...testimonialsData, ...testimonialsData].map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.initial}</div>
                    <div className="author-info">
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations - Masonry Style */}
      <section className="destinations-section">
        <div className="container">
          <div className="section-header-premium">
            <span className="badge">Destinations</span>
            <h2>Popular Pathways</h2>
          </div>
          <div className="destinations-masonry">
            {destinationsData.map((dest, i) => (
              <div key={i} className={`dest-card ${dest.size}`}>
                <img src={dest.img} alt={dest.name} />
                <div className="dest-overlay">
                  <h3>{dest.name}</h3>
                  <Link to="/services">Explore Services →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Slider - Brand Alliances */}
      <section className="partners-slider-section">
        <div className="container">
          <h3 className="partners-title">Our University Partners</h3>
          <div className="partners-track">
            <div className="partner-logo">IVY LEAGUE HUB</div>
            <div className="partner-logo">RUSSELL GROUP</div>
            <div className="partner-logo">GLOBAL TECH U</div>
            <div className="partner-logo">EUROPEAN INSTITUTE</div>
            <div className="partner-logo">PACIFIC ACADEMY</div>
          </div>
        </div>
      </section>

      {/* CTA: Contact Form Section */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-form-wrapper">
            <div className="cta-content-info">
              <span className="badge">Get Started</span>
              <h2 style={{color: "white"}}>Ready to start your journey?</h2>
              <p>
                Fill out the form and our expert mentors will reach out to help
                you find your perfect global pathway.
              </p>
              <div className="cta-contact-minimal">
                <span>info@npathways.global</span>
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="cta-form-box">
              <LeadForm source="Home Page CTA" variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
