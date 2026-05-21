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
          <div className="about-grid-2" style={{ alignItems: "flex-start" }}>
            <div className="founder-image-wrapper" style={{ position: "sticky", top: "120px" }}>
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
                  className="grayscale-image contrast-high"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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
                  Deepak Rajaa
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
                <p style={{ marginBottom: "1.5rem", fontWeight: "bold", color: "#000" }}>
                  To Everyone Who Has Ever Felt Lost Between Potential and Direction,
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  There comes a point in life where marks, degrees, and expectations stop answering the deeper question: "Who am I becoming?"
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  For years, education systems have taught people how to pass examinations, but very few have taught them how to understand themselves, build resilience, communicate with confidence, or navigate a rapidly changing world with clarity and purpose.
                </p>
                <p style={{ marginBottom: "1.5rem", fontWeight: "600", color: "#000" }}>
                  That realization became the foundation of NPathways Global.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  This journey did not begin with the ambition to build another study abroad company. It began with a simple but powerful belief: every individual deserves access to quality guidance, meaningful opportunities, and the confidence to pursue a life larger than their circumstances.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  NPathways Global was built for students standing at crossroads. For parents searching for clarity. For young people with ambition but no roadmap. For dreamers who needed structure. And for capable individuals who simply needed someone to help them see what they were truly capable of becoming.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  The mission has always been larger than admissions or visas. It is about building global citizens. It is about helping individuals discover their strengths, develop real-world skills, strengthen emotional resilience, and prepare themselves not just for universities — but for life itself.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  At NPathways, every pathway begins with self-discovery. Before countries, courses, or careers, there must first be clarity. Clarity about strengths. Clarity about goals. Clarity about identity. Because sustainable success is never built on pressure alone — it is built on alignment.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  This is why the vision continues to evolve beyond traditional counseling. From psychometric assessments and career mapping systems to communication training, emotional intelligence development, and AI-powered guidance tools, the goal is to create an ecosystem where education becomes transformational, not transactional.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  The world is changing rapidly. Careers are evolving. Technology is reshaping industries. And young people today require more than information — they require direction, adaptability, confidence, and purpose.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  That is the future NPathways Global hopes to contribute toward. Not by creating dependency, but by creating capable individuals who can stand on their own, think critically, adapt globally, and lead meaningfully.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  To every student, parent, educator, and supporter who believes in growth, possibility, and human potential: thank you for becoming part of this journey.
                </p>
                <p style={{ marginBottom: "1.5rem", fontWeight: "600", fontStyle: "italic", color: "#000" }}>
                  The road ahead is long, but the mission remains clear.<br /><br />
                  Beyond borders.<br />
                  Into purpose.
                </p>

                <div
                  style={{
                    padding: "2rem 0",
                    borderTop: "1px solid #eee",
                    marginTop: "2rem",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "bold", color: "#000" }}>
                    Deepak Rajaa
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
