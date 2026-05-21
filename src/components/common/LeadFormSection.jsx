import React, { useState } from "react";
import "./LeadFormSection.css";
import Button from "./Button";
import LeadForm from "./LeadForm";

const LeadFormSection = ({ onSubmitSuccess }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to save lead data
    // In actual implementation, data goes to backend or Formspree
    localStorage.setItem("npathways_unlocked", "true");
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  return (
    <section id="lead-form" className="lead-form-section">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-content-left">
            <h2>Take the First Step Toward Your Global Future</h2>
            <p>
              Join thousands of students who have successfully navigated their
              study abroad journey with NPathways Global. Fill out this quick
              form to unlock full access to our platform, resources, and to book
              your free consultation.
            </p>
            <div className="form-benefits">
              <div className="benefit-item">
                <div className="benefit-check">✓</div>
                <span>Free personalized consultation</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-check">✓</div>
                <span>Access to exclusive pathway programs</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-check">✓</div>
                <span>Discover top university matches</span>
              </div>
            </div>
            {/* Visual element or image could go here */}
          </div>

          <div className="form-card">
            <h3>Start Your Journey</h3>
            <LeadForm 
              source="Section Unlock" 
              variant="light"
              onSuccess={() => {
                localStorage.setItem("npathways_unlocked", "true");
                if (onSubmitSuccess) onSubmitSuccess();
              }} 
            />
            <p className="privacy-note">
              By submitting this form, you agree to our Terms of Use and Privacy
              Policy. We will never share your personal information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
