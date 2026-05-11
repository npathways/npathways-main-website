import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutGeneral.css";

const Founder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-shared-page">
      {/* Hero Section */}
      <section className="about-hero-minimal">
        <div className="about-container">
          <div className="breadcrumbs">Home / About / Founder</div>
          <h1>
            The visionary behind <br /> <span>Our Mission</span>
          </h1>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section style={{ padding: "6rem 0" }}>
        <div className="about-container">
          <div className="about-grid-2">
            <div className="founder-image-wrapper">
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "20px 20px 60px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Founder"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%) contrast(1.1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    right: "-20px",
                    padding: "1.5rem 3rem",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    transform: "rotate(-2deg)",
                  }}
                >
                  Deepak
                </div>
              </div>
            </div>

            <div className="founder-bio">
              <div
                className="about-section-header"
                style={{ textAlign: "left", marginBottom: "2rem" }}
              >
                <span className="badge">Founder & CEO</span>
                <h2 style={{ fontSize: "3rem" }}>
                  Building Pathways to Excellence
                </h2>
              </div>

              <div
                style={{ color: "#555", lineHeight: "1.8", fontSize: "1.1rem" }}
              >
                <p style={{ marginBottom: "1.5rem" }}>
                  With over 15 years of experience in international education
                  and career counseling,
                  <strong> Deepak</strong> founded NPathways with a single
                  mission: to provide honest, transparent, and student-first
                  guidance in an industry often fueled by numbers.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  His journey began while helping students in smaller towns who
                  had immense talent but lacked access to quality global
                  opportunities. He realized that "Study Abroad" shouldn't just
                  be for the elite, but accessible to every dreamer who has the
                  grit to work for it.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  Under his leadership, NPathways has evolved from a small
                  counseling center into a complete ecosystem that handles
                  everything from psychometric testing to post-arrival support
                  across 15+ countries.
                </p>

                <div
                  style={{
                    padding: "2rem 0",
                    borderTop: "1px solid #eee",
                    marginTop: "2rem",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Signature_of_A._P._J._Abdul_Kalam.png"
                    alt="Signature"
                    style={{
                      height: "60px",
                      filter: "grayscale(100%) brightness(0)",
                      marginBottom: "1rem",
                    }}
                  />
                  <p style={{ margin: 0, fontWeight: "bold", color: "#000" }}>
                    Deepak
                  </p>
                  <p style={{ margin: 0, fontSize: "0.9rem" }}>
                    Founder, NPathways Global
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        style={{
          backgroundColor: "#000",
          padding: "8rem 0",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="about-container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "300",
                fontStyle: "italic",
                marginBottom: "2rem",
                color: "#ffffffff",
              }}
            >
              "Education is not just about getting a degree; it's about finding
              your path in the global village and leaving a mark that matters."
            </h2>
            <div
              style={{
                width: "50px",
                height: "2px",
                backgroundColor: "#ffffffff",
                margin: "0 auto",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Experience Area */}
      <section style={{ padding: "8rem 0" }}>
        <div className="about-container">
          <div className="about-grid-3">
            {[
              {
                year: "2008",
                title: "The Genesis",
                desc: "Started as a volunteer counselor helping local students with applications.",
              },
              {
                year: "2015",
                title: "Skillinum Launch",
                desc: "Established Skillinum Falcon LLP to professionalize skill-based education.",
              },
              {
                year: "2020",
                title: "NPathways Era",
                desc: "Unified all services under the NPathways brand for a holistic student journey.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem",
                  border: "1px solid #f0f0f0",
                  borderRadius: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    color: "#919191",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {item.year}
                </span>
                <h3 style={{ marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ color: "#666" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: "6rem 0", borderTop: "1px solid #eee" }}>
        <div className="about-container" style={{ textAlign: "center" }}>
          <h3>Want to discuss your career with Deepak?</h3>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            Book a specialized premium consultation session for deep career
            mapping.
          </p>
          <Link to="/contact" className="about-btn-premium">
            Connect with Founder
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Founder;
