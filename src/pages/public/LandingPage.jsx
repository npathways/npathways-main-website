import React, { useEffect } from "react";
import LandingHeader from "../../components/layout/LandingHeader";
import UniversitiesGrid from "../../components/common/UniversitiesGrid";
import Testimonials from "../../components/common/Testimonials";
import LeadFormSection from "../../components/common/LeadFormSection";
import LandingFooter from "../../components/layout/LandingFooter";
import landingVideo from "../../assets/video/landing.mp4";
import "./Home.css";

const LandingPage = ({ onUnlock }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("lead-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-redesign main-landing-page">
      <LandingHeader />

      <main style={{ paddingTop: "80px" }}>
        {/* Landing Hero (Fullscreen) */}
        <section 
          className="home-hero-premium landing-hero-video-wrap"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: "-80px", /* pull up behind nav */
            paddingTop: "80px",
            overflow: "hidden"
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-bg"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: 1
            }}
          >
            <source src={landingVideo} type="video/mp4" />
          </video>
          <div 
            className="hero-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))",
              zIndex: 2
            }}
          ></div>
          <div className="container" style={{ textAlign: "center", color: "#fff", maxWidth: "1000px", position: "relative", zIndex: 3 }}>
            <span className="hero-badge-minimal" style={{ color: "#ddd", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
              Your Global Future Awaits
            </span>
            <h1 className="hero-title-premium" style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
              Beyond Borders. <span style={{ background: "none", color: "var(--color-brand-tertiary)" }}>Into Purpose</span>
            </h1>
            <p className="hero-desc-premium" style={{ color: "#eee", margin: "0 auto 3rem auto", maxWidth: "800px", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
              Discover your potential with NPathways Global. We provide
              premium test prep, expert admissions consulting, and an
              end-to-end framework to get you into the world's most
              prestigious universities.
            </p>
            <div className="hero-actions-premium" style={{ justifyContent: "center" }}>
              <button
                onClick={scrollToForm}
                style={{
                  backgroundColor: "var(--color-brand-tertiary)",
                  color: "var(--color-black)",
                  padding: "16px 32px",
                  borderRadius: "2px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.backgroundColor = "#f0f0f0";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.backgroundColor = "#fff";
                }}
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us (Same theme as Highlights) */}
        <section className="highlights-section">
          <div className="container">
            <div
              className="section-header-premium"
              style={{ textAlign: "center" }}
            >
              <span className="badge">Why Choose Us</span>
              <h2>An Unmatched Pedigree</h2>
            </div>
            <div className="highlights-grid" style={{ marginTop: "3rem" }}>
              {[
                {
                  title: "Strategic Admissions",
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
                  desc: "Comprehensive profile building and essay crafting tailored for admit success.",
                },
                {
                  title: "Test Readiness",
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><line x1="2" y1="20" x2="22" y2="20"></line></svg>,
                  desc: "Meticulous SAT/ACT & IELTS/TOEFL coaching frameworks.",
                },
                {
                  title: "Extensive Network",
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
                  desc: "Access to mentors who have walked the halls of top Ivy League schools.",
                },
                {
                  title: "Career Alignment",
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>,
                  desc: "Aligning your major with post-graduation global career prospects.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="highlight-card"
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="highlight-icon"
                    style={{
                      fontSize: "2rem",
                      color: "var(--color-brand-tertiary)",
                      background: "none",
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    {React.cloneElement(item.icon, { stroke: "var(--color-brand-tertiary)" })}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UniversitiesGrid />
        <Testimonials />
        <LeadFormSection onSubmitSuccess={onUnlock} />
      </main>

      <LandingFooter />
    </div>
  );
};

export default LandingPage;
