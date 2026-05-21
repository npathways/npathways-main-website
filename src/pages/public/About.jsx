import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./about/AboutGeneral.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leadership = [
    {
      name: "Deepak",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      link: "/about/founder",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Counseling",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      link: "#",
    },
    {
      name: "Vikram Mehta",
      role: "Visa Strategist",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      link: "#",
    },
    {
      name: "Elena Rossi",
      role: "Global Partnerships",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <div className="about-shared-page">
      {/* Hero Section */}
      <section className="about-hero-minimal">
        <div className="about-container">
          <div className="breadcrumbs">Home / About Us</div>
          <h1>
            The Institute of <br /> <span>Global Pathways</span>
          </h1>
          <p>
            A premium educational consultancy dedicated to transforming
            ambitious dreams into international realities.
          </p>
        </div>
      </section>

      {/* Intro Section - Split Layout */}
      <section style={{ padding: "8rem 0" }}>
        <div className="about-container">
          <div className="about-grid-2">
            <div>
              <span className="badge">Our Identity</span>
              <h2 style={{ fontSize: "3rem", margin: "1.5rem 0" }}>
                Committed to Your Success
              </h2>
            </div>
            <div>
              <p
                style={{
                  color: "#555",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                NPathways is a premium study abroad consultancy operated by
                Skillinum Falcon LLP. We provide end-to-end support for students
                aiming for world-class universities, blending scientific
                assessments with human-centric mentorship.
              </p>
              <Link to="/about/how-it-works" className="about-btn-premium">
                Explore our 10-Step Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Grid */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "8rem 0" }}>
        <div className="about-container">
          <div className="about-grid-3" style={{ textAlign: "center" }}>
            <div>
              <span
                style={{
                  fontSize: "4rem",
                  fontWeight: "800",
                  display: "block",
                  color: "var(--color-brand-tertiary)"
                }}
              >
                30K
              </span>
              <span
                style={{
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Students Guided
              </span>
            </div>
            <div>
              <span
                style={{
                  fontSize: "4rem",
                  fontWeight: "800",
                  display: "block",
                  color: "var(--color-brand-tertiary)"
                }}
              >
                100%
              </span>
              <span
                style={{
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Personal Advice
              </span>
            </div>
            <div>
              <span
                style={{
                  fontSize: "4rem",
                  fontWeight: "800",
                  display: "block",
                  color: "var(--color-brand-tertiary)"
                }}
              >
                18
              </span>
              <span
                style={{
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Years Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section style={{ padding: "8rem 0" }}>
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Leadership Team</span>
            <h2>Guided by Experts</h2>
            <p>
              Our team consists of industry veterans who have walked the path
              themselves.
            </p>
          </div>

          <div className="about-grid-4">
            {leadership.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card-content">
                  <div
                    style={{
                      aspectRatio: "1/1",
                      borderRadius: "2px",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                      border: "1px solid #eee",
                    }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="grayscale-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="team-card-info">
                    <h4 style={{ margin: "0.5rem 0", color: "var(--color-brand-tertiary)" }}>{member.name}</h4>
                    <p
                      style={{
                        color: "#888",
                        fontSize: "0.9rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                  {member.link !== "#" && (
                    <div style={{ marginTop: "auto" }}>
                      <Link
                        to={member.link}
                        style={{
                          color: "var(--color-brand-tertiary)",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                          textDecoration: "none",
                          borderBottom: "1px solid var(--color-brand-tertiary)",
                        }}
                      >
                        View Bio
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <section
        style={{
          padding: "6rem 0",
          borderTop: "1px solid #f0f0f0",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div className="about-container">
          <div className="partners-banner-grid">
            {/* Logo placeholders with improved grid distribution */}
            <div className="partner-logo-item">UNIVERSITY PARTNER</div>
            <div className="partner-logo-item">GLOBAL ACCREDITED</div>
            <div className="partner-logo-item">EDUCATION FIRST</div>
            <div className="partner-logo-item">CAREER HUB</div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: "8rem 0" }}>
        <div className="about-container">
          <div className="about-grid-2">
            <div
              style={{
                backgroundColor: "#000",
                borderRadius: "2px",
                overflow: "hidden",
                color: "#fff",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="Philosophy"
                className="grayscale-image brightness-low"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "3rem" }}>
                <h3 style={{ color: "#fff" }}>Mission First</h3>
                <p style={{ color: "#888", marginTop: "1rem" }}>
                  We measure our success by the success of our students, not by
                  university commissions.
                </p>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #f0f0f0",
                borderRadius: "2px",
                padding: "3rem",
              }}
            >
              <span
                className="badge"
                style={{ backgroundColor: "#f0f0f0", color: "#000" }}
              >
                Transparency
              </span>
              <h3 style={{ marginTop: "2rem" }}>No Hidden Agendas</h3>
              <p
                style={{ color: "#555", marginTop: "1rem", lineHeight: "1.8" }}
              >
                Our counseling is data-driven and objective. We use our Clarity
                Compass™ to ensure your chosen course aligns with reality, not
                just dreams.
              </p>
              <ul style={{ padding: 0, listStyle: "none", marginTop: "2rem" }}>
                <li style={{ marginBottom: "1rem" }}>✓ Neutral Advisory</li>
                <li style={{ marginBottom: "1rem" }}>
                  ✓ Ethics-Led Documentation
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  ✓ Post-Arrival Integrity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
