import React, { useState } from "react";
import Button from "./Button";
import "./LeadForm.css";

const LeadForm = ({ source = "General", variant = "dark", initialProgram = "", onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    selectedProgram: initialProgram,
    category: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formAlert, setFormAlert] = useState({ type: "", text: "" });

  const programs = [
    "Academic & University Consulting",
    "Career Guidance",
    "Curricular-Based Strategy",
    "Pathway Programs (Bridge Courses)",
    "Competitive Exam Strategy",
    "Skills & Bootcamp Programs",
    "Study Abroad & Visa Assistance"
  ];

  const categories = ["Parent", "Student", "Working Professional", "Just Looking Around"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormAlert({ type: "", text: "" });

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "/api";
      const response = await fetch(`${baseUrl}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, source }),
      });

      if (response.ok) {
        setFormAlert({ type: "success", text: "Thank you! Our team will contact you shortly." });
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          selectedProgram: "",
          category: "",
          message: "",
        });
        if (onSuccess) onSuccess();
        if (onClose) {
          setTimeout(() => onClose(), 2000); // Close after 2s so user sees success message
        }
      } else {
        let errorMessage = "Failed to submit lead";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (_) {}
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormAlert({ type: "error", text: error.message || "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`lead-form-container ${variant}`}>
      {formAlert.text && (
        <div className={`form-message ${formAlert.type}`}>
          {formAlert.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="modern-lead-form">
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-field full-width">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-field">
            <label>Phone Number</label>
            <div className="phone-input-group">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="country-code-select"
              >
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US/CA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (AU)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+65">+65 (SG)</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="00000 00000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Choose a Service */}
          <div className="form-field">
            <label>Choose a Service</label>
            <select
              name="selectedProgram"
              value={formData.selectedProgram}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a Program</option>
              {programs.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* I am a... (Category/Occupation) */}
          <div className="form-field">
            <label>I am a...</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Occupation</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Custom Query Message */}
          <div className="form-field full-width">
            <label>Any Query or Message? (Optional)</label>
            <textarea
              name="message"
              placeholder="Tell us what you're looking for or share any specific questions..."
              value={formData.message}
              onChange={handleChange}
              rows={3}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#fff",
                fontFamily: "inherit",
                fontSize: "0.95rem",
                resize: "vertical"
              }}
            />
          </div>
        </div>

        <Button
          variant="premium"
          type="submit"
          fullWidth
          size="large"
          disabled={isSubmitting}
          style={{ marginTop: "1.5rem" }}
        >
          {isSubmitting ? "Submitting..." : "Get Free Consultation"}
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;
