import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import "./BootcampsWebinars.css";

const BootcampsWebinars = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bootcamps-webinars-page fade-in" style={{ padding: "8rem 0", minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "0 2rem" }}>
        
        
        <span className="badge" style={{ backgroundColor: "var(--color-brand-tertiary, #e3a008)", color: "#000", fontSize: "0.9rem", padding: "0.5rem 1.5rem", borderRadius: "20px", fontWeight: "700" }}>
          Coming Soon
        </span>
        
        <h1 style={{ fontSize: "4rem", fontWeight: "900", marginTop: "2rem", marginBottom: "1.5rem", lineHeight: "1.1" }}>
          Bootcamps & <br />
          <span style={{ color: "var(--color-brand-tertiary, #e3a008)" }}>Webinars</span>
        </h1>
        
        <p style={{ fontSize: "1.25rem", color: "#666", lineHeight: "1.8", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
          We are building interactive, cohort-based learning accelerators and expert-led global admissions masterclasses. Stay tuned for the launch of our premium education programs.
        </p>

        {submitted ? (
          <div style={{ backgroundColor: "#f6ffed", border: "1px solid #b7eb8f", padding: "1.5rem", borderRadius: "8px", maxWidth: "500px", margin: "0 auto" }}>
            <h3 style={{ color: "#389e0d", margin: 0, fontWeight: "700" }}>✓ You're on the list!</h3>
            <p style={{ color: "#52c41a", margin: "0.5rem 0 0" }}>We'll notify you as soon as the first cohort registrations open.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem", maxWidth: "500px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
            <input
              type="email"
              placeholder="Enter your email to get notified"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: "1",
                minWidth: "250px",
                padding: "0.85rem 1.25rem",
                border: "1px solid #d9d9d9",
                borderRadius: "6px",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s"
              }}
            />
            <Button type="submit" variant="premium">
              Notify Me
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BootcampsWebinars;
