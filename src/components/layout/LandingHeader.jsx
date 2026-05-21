import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const LandingHeader = () => {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("lead-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header" style={{ position: "fixed", backgroundColor: "#fff", borderBottom: "1px solid #edf2f7", padding: "15px 0", right: 0, left: 0, top: 0, zIndex: 1000, transition: "none" }}>
      <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <div className="logo" style={{ cursor: "pointer", margin: 0 }}>
            <img src={logo} alt="NPathways Logo" style={{ height: "60px" }} />
          </div>

          {/* Actions */}
          <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <button 
              onClick={scrollToForm}
              style={{
                backgroundColor: "var(--color-brand-tertiary)",
                color: "var(--color-black)",
                padding: "10px 24px",
                borderRadius: "2px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "var(--color-brand-tertiary-dark)")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "var(--color-brand-tertiary)")}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
