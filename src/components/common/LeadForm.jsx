import React, { useState } from "react";
import Button from "./Button";
import "./LeadForm.css";

const LeadForm = ({ source = "General", variant = "dark", onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    selectedProgram: "",
    category: "",
    grade: "",
    passoutYear: "",
    examType: "",
    examStatus: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const programs = [
    "Study Abroad",
    "Skills & Bootcamps",
    "Internships & Research",
    "Career Guidance",
    "Visa Assistance",
    "School Programs",
  ];

  const exams = ["CAT", "GMAT", "GRE", "XAT", "NMAT", "SNAP", "Other"];
  const statuses = ["Applied", "Yet to Apply", "Planning to Apply"];
  const categories = ["Parent", "Student", "Working Professional"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset grade if category changes and is not student/parent
      ...(name === "category" && value === "Working Professional" ? { grade: "" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

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
        setMessage({ type: "success", text: "Thank you! Our team will contact you shortly." });
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          selectedProgram: "",
          category: "",
          grade: "",
          passoutYear: "",
          examType: "",
          examStatus: "",
        });
        if (onSuccess) onSuccess();
      } else {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit lead");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`lead-form-container ${variant}`}>
      {message.text && (
        <div className={`form-message ${message.type}`}>
          {message.text}
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

          {/* I am a... (Category) */}
          <div className="form-field">
            <label>I am a...</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Category</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Conditional: Current Grade / College Year */}
          {(formData.category === "Student" || formData.category === "Parent") && (
            <div className="form-field">
              <label>Current Grade / College Year</label>
              <input
                type="text"
                name="grade"
                placeholder="e.g. 12th Grade, 3rd Year"
                value={formData.grade}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Year of Passout */}
          <div className="form-field">
            <label>Year of Passout</label>
            <input
              type="text"
              name="passoutYear"
              placeholder="e.g. 2025"
              value={formData.passoutYear}
              onChange={handleChange}
              required
            />
          </div>

          {/* Target Entrance Exam */}
          <div className="form-field">
            <label>Target Entrance Exam</label>
            <select
              name="examType"
              value={formData.examType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Exam</option>
              {exams.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>

          {/* Application Status */}
          <div className="form-field">
            <label>Application Status</label>
            <select
              name="examStatus"
              value={formData.examStatus}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Status</option>
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
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
