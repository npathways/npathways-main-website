import React, { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import faqsData from "../../data/faqs.json";
import { FiChevronDown, FiArrowRight, FiArrowLeft, FiCheckCircle, FiPhoneCall, FiUserCheck, FiAward, FiBookOpen, FiMapPin, FiMail } from "react-icons/fi";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    selectedProgram: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const categoriesList = [
    { label: 'Student', desc: 'Currently studying in school or college', icon: <FiBookOpen size={20} /> },
    { label: 'Parent', desc: 'Inquiring for a son or daughter', icon: <FiUserCheck size={20} /> },
    { label: 'Working Professional', desc: 'Currently working and seeking growth', icon: <FiAward size={20} /> },
    { label: 'Just Looking Around', desc: 'Exploring programs and resources', icon: <FiPhoneCall size={20} /> }
  ];

  const programsList = [
    { label: 'Study Abroad', desc: 'Global admissions guidance', icon: <FiBookOpen size={20} /> },
    { label: 'Test Preparation', desc: 'CAT, GMAT, GRE coaching & prep', icon: <FiAward size={20} /> },
    { label: 'Admissions Consulting', desc: 'Essays, resume & profiles', icon: <FiUserCheck size={20} /> },
    { label: 'Skills & Bootcamps', desc: 'Intensive tech & business courses', icon: <FiBookOpen size={20} /> },
    { label: 'Visa Assistance', desc: 'Step-by-step visa documentation', icon: <FiAward size={20} /> },
    { label: 'Career Counseling', desc: 'One-on-one professional guidance', icon: <FiPhoneCall size={20} /> }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleNext = () => {
    if (step === 1 && !formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (step === 2 && !formData.category) {
      toast.error('Please select who you are');
      return;
    }
    if (step === 3 && !formData.selectedProgram) {
      toast.error('Please select a service');
      return;
    }
    if (step === 4) {
      if (!formData.email.trim() || !formData.phone.trim()) {
        toast.error('Please provide email and phone number');
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategorySelect = (category) => {
    setFormData(prev => ({
      ...prev,
      category
    }));
    setTimeout(() => setStep(3), 400);
  };

  const handleProgramSelect = (selectedProgram) => {
    setFormData(prev => ({ ...prev, selectedProgram }));
    setTimeout(() => setStep(4), 400); // Jump to contact info after program select
  };

  const resetWizard = () => {
    setFormData({
      name: '',
      category: '',
      selectedProgram: '',
      email: '',
      countryCode: '+91',
      phone: '',
      message: ''
    });
    setStep(1);
    setIsSuccess(false);
    setIsAnimating(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.phone.trim()) {
      toast.error('Please provide email and phone number');
      return;
    }

    setIsSubmitting(true);
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787/api';
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        countryCode: formData.countryCode,
        category: formData.category || null,
        selectedProgram: formData.selectedProgram || null,
        message: formData.message || null,
        source: 'Contact Page Wizard'
      };

      const response = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setIsSubmitting(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsSuccess(true);
      }, 2600);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page fade-in">
      <section className="section bg-gray contact-hero">
        <div className="container text-center">
          <h1>
            Contact <span className="accent-text">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have questions? We're here to help you on your journey.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#f9f9f9", padding: "6rem 0" }}>
        <div className="container" style={{ maxWidth: "80%", width: "80%", margin: "0 auto", padding: "0" }}>
          
          <div className="contact-wizard-inner">
            
            {/* Left Side: Wizard Form */}
            <div className="home-cta-left" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="contact-wizard-box">
                {!isSuccess ? (
                  <div className="wizard-container">

                    <div className="wizard-steps">
                      {/* Step 1: Name */}
                      {step === 1 && (
                        <div className="wizard-step fade-in-up">
                          <label className="contact-wizard-label">What should we call you?</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="contact-wizard-input"
                            autoFocus
                            onKeyDown={e => e.key === 'Enter' && handleNext()}
                          />
                          <div className="contact-wizard-actions">
                            <button 
                              onClick={handleNext} 
                              className="contact-wizard-btn-next"
                              disabled={!formData.name.trim()}
                            >
                              Continue <FiArrowRight style={{ marginLeft: '8px' }} />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Category Select */}
                      {step === 2 && (
                        <div className="wizard-step fade-in-up">
                          <label className="contact-wizard-label">Who are you representing?</label>
                          <div className="contact-wizard-cards-grid">
                            {categoriesList.map((cat, idx) => (
                              <div
                                key={cat.label}
                                className={`contact-wizard-card ${formData.category === cat.label ? 'selected' : ''}`}
                                onClick={() => handleCategorySelect(cat.label)}
                                style={{ animationDelay: `${idx * 0.05}s` }}
                              >
                                <div className="contact-wizard-card-icon">{cat.icon}</div>
                                <div>
                                  <h4>{cat.label}</h4>
                                  <p>{cat.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="contact-wizard-actions">
                            <button onClick={handleBack} className="contact-wizard-btn-back">
                              <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Service Selection */}
                      {step === 3 && (
                        <div className="wizard-step fade-in-up">
                          <label className="contact-wizard-label">What services are you interested in?</label>
                          <div className="contact-wizard-cards-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                            {programsList.map((srv, idx) => (
                              <div
                                key={srv.label}
                                className={`contact-wizard-card ${formData.selectedProgram === srv.label ? 'selected' : ''}`}
                                onClick={() => handleProgramSelect(srv.label)}
                                style={{ animationDelay: `${idx * 0.05}s` }}
                              >
                                <div className="contact-wizard-card-icon">{srv.icon}</div>
                                <div>
                                  <h4>{srv.label}</h4>
                                  <p>{srv.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="contact-wizard-actions">
                            <button onClick={handleBack} className="contact-wizard-btn-back">
                              <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Contact Info */}
                      {step === 4 && (
                        <div className="wizard-step fade-in-up">
                          <label className="contact-wizard-label">How can we contact you?</label>
                          <div className="contact-wizard-field">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', fontSize: '0.85rem' }}>Email Address</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="name@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              className="contact-wizard-input"
                              required
                            />
                          </div>
                          <div className="contact-wizard-field" style={{ marginTop: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', fontSize: '0.85rem' }}>Phone Number</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                              <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="contact-wizard-select"
                                style={{ width: '120px' }}
                              >
                                <option value="+91">+91 (IN)</option>
                                <option value="+1">+1 (US)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+61">+61 (AU)</option>
                                <option value="+65">+65 (SG)</option>
                              </select>
                              <input
                                type="tel"
                                name="phone"
                                placeholder="00000 00000"
                                value={formData.phone}
                                onChange={handleChange}
                                className="contact-wizard-input"
                                style={{ flex: 1 }}
                                required
                              />
                            </div>
                          </div>
                          <div className="contact-wizard-actions">
                            <button type="button" onClick={handleBack} className="contact-wizard-btn-back">
                              <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                            </button>
                            <button type="button" onClick={handleNext} disabled={!formData.email.trim() || !formData.phone.trim()} className="contact-wizard-btn-next">
                              Next <FiArrowRight style={{ marginLeft: '8px' }} />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 5: Custom Query / Message */}
                      {step === 5 && (
                        <form onSubmit={handleSubmit} className="wizard-step fade-in-up">
                          <label className="contact-wizard-label">Do you have any specific query or message? (Optional)</label>
                          <div className="contact-wizard-field">
                            <textarea
                              name="message"
                              placeholder="Type your message or queries here..."
                              value={formData.message}
                              onChange={handleChange}
                              className="contact-wizard-input"
                              style={{ height: '140px', resize: 'vertical', padding: '12px' }}
                            />
                          </div>
                          <div className="contact-wizard-actions" style={{ marginTop: '1.5rem' }}>
                            <button type="button" onClick={handleBack} disabled={isSubmitting} className="contact-wizard-btn-back">
                              <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                            </button>
                            <button type="submit" disabled={isSubmitting} className="contact-wizard-btn-submit">
                              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="home-wizard-success fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <FiCheckCircle size={60} style={{ color: 'var(--color-success)', marginBottom: '20px' }} />
                    <h3>Inquiry Submitted!</h3>
                    <p>Thank you, <strong>{formData.name.split(' ')[0]}</strong>. Our counselors will reach out to you shortly.</p>
                    <button className="contact-wizard-btn-next" onClick={resetWizard} style={{ marginTop: '20px' }}>Submit Another</button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Dynamic Mentorship Passport / Boarding Pass */}
            <div className="home-cta-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div className={`contact-boarding-pass${isAnimating ? ' pass-tearing' : ''}`}>
                {/* Main Ticket Area */}
                <div className="contact-pass-main">
                  <div className="contact-pass-header-row">
                    <div className="contact-pass-airline">NPATHWAYS AIRLINES</div>
                    <div className="contact-pass-class-badge">FIRST CLASS</div>
                  </div>

                  <div className="contact-pass-route-row">
                    <div className="route-airport">
                      <span className="contact-airport-code">BOM</span>
                      <span className="contact-airport-city">MUMBAI</span>
                    </div>
                    <div className="route-flight-symbol">
                      <span className="plane-icon" style={{ color: 'var(--color-brand-tertiary, #e3a008)' }}>✈</span>
                      <span className="flight-number" style={{ color: '#888' }}>NP-2026</span>
                    </div>
                    <div className="route-airport dest">
                      <span className="contact-airport-code">
                        {formData.selectedProgram
                          ? (formData.selectedProgram.includes("USA") || formData.selectedProgram.includes("Abroad") || formData.selectedProgram.includes("Consulting") ? "USA"
                            : formData.selectedProgram.includes("UK") ? "LHR"
                              : formData.selectedProgram.includes("Canada") ? "YYZ"
                                : formData.selectedProgram.includes("Australia") ? "SYD"
                                  : "ABR")
                          : "ABR"}
                      </span>
                      <span className="contact-airport-city">
                        {formData.selectedProgram
                          ? (formData.selectedProgram.includes("USA") || formData.selectedProgram.includes("Abroad") || formData.selectedProgram.includes("Consulting") ? "UNITED STATES"
                            : formData.selectedProgram.includes("UK") ? "LONDON"
                              : formData.selectedProgram.includes("Canada") ? "TORONTO"
                                : formData.selectedProgram.includes("Australia") ? "SYDNEY"
                                  : "ABROAD")
                          : "ABROAD"}
                      </span>
                    </div>
                  </div>

                  <div className="contact-pass-details-grid">
                    <div className="contact-pass-detail-item span-two">
                      <span className="contact-detail-label">PASSENGER NAME</span>
                      <span className="contact-detail-value highlight">{formData.name || "Awaiting Name..."}</span>
                    </div>
                    <div className="contact-pass-detail-item">
                      <span className="contact-detail-label">OCCUPATION</span>
                      <span className="contact-detail-value">{formData.category || "---"}</span>
                    </div>
                    <div className="contact-pass-detail-item">
                      <span className="contact-detail-label">PHONE NO</span>
                      <span className="contact-detail-value">{formData.phone ? `${formData.countryCode} ${formData.phone}` : "---"}</span>
                    </div>
                    <div className="contact-pass-detail-item span-two">
                      <span className="contact-detail-label">EMAIL ADDRESS</span>
                      <span className="contact-detail-value">{formData.email || "---"}</span>
                    </div>
                    <div className="contact-pass-detail-item span-two">
                      <span className="contact-detail-label">INTEREST / PROGRAM</span>
                      <span className="contact-detail-value highlight-gold">{formData.selectedProgram || "---"}</span>
                    </div>
                    <div className="contact-pass-detail-item span-two">
                      <span className="contact-detail-label">CUSTOM QUERY / MESSAGE</span>
                      <span className="contact-detail-value" style={{ fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {formData.message || "No query added."}
                      </span>
                    </div>
                    <div className="contact-pass-detail-item">
                      <span className="contact-detail-label">FLIGHT / SEAT</span>
                      <span className="contact-detail-value">NP-2026 / 1A</span>
                    </div>
                    <div className="contact-pass-detail-item">
                      <span className="contact-detail-label">GATE / BOARDING</span>
                      <span className="contact-detail-value gold">IKIGAI / NOW</span>
                    </div>
                  </div>
                </div>

                {/* Perforation Line and Notches */}
                <div className="contact-pass-perforation">
                  <div className="notch-top"></div>
                  <div className="perforation-dashed"></div>
                  <div className="notch-bottom"></div>
                </div>

                {/* Stub Area (Receipt) */}
                <div className="contact-pass-stub">
                  <div className="stub-header">
                    <span className="contact-stub-title">STUB RECEIPT</span>
                  </div>
                  <div className="stub-body">
                    <div className="contact-stub-field">
                      <span className="contact-stub-label">PASSENGER</span>
                      <span className="contact-stub-value">{formData.name ? formData.name.split(' ')[0] : "EXPLORER"}</span>
                    </div>
                    <div className="contact-stub-field">
                      <span className="contact-stub-label">ROUTE</span>
                      <span className="contact-stub-value">
                        BOM ➔ {formData.selectedProgram
                          ? (formData.selectedProgram.includes("USA") || formData.selectedProgram.includes("Abroad") || formData.selectedProgram.includes("Consulting") ? "USA"
                            : formData.selectedProgram.includes("UK") ? "LHR"
                              : formData.selectedProgram.includes("Canada") ? "YYZ"
                                : formData.selectedProgram.includes("Australia") ? "SYD"
                                  : "ABR")
                          : "ABR"}
                      </span>
                    </div>
                    <div className="contact-stub-field">
                      <span className="contact-stub-label">CLASS</span>
                      <span className="contact-stub-value gold">PREMIUM</span>
                    </div>
                  </div>
                  <div className="stub-footer">
                    <div className="passport-barcode font-barcode" style={{ letterSpacing: '2px', fontSize: '10px', color: '#555' }}>
                      || |||| | |||| || || | |||| || || | |||| ||
                    </div>
                  </div>
                </div>
              </div>

              {/* Takeoff flight plane animation overlay */}
              {isAnimating && (
                <div className="pass-plane-overlay">
                  <div className="anim-plane-wrapper">
                    <span className="anim-plane" style={{ color: 'var(--color-brand-tertiary, #e3a008)' }}>✈</span>
                    <span className="anim-exhaust" style={{ background: 'linear-gradient(to left, var(--color-brand-tertiary, #e3a008), transparent)' }}></span>
                  </div>
                  <div className="anim-text" style={{ color: 'var(--color-brand-tertiary, #e3a008)' }}>Generating Mentorship Passport...</div>
                </div>
              )}
            </div>

          </div>

          {/* Contact Info Items Row below the wizard */}
          <div className="contact-info-row-premium" style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            <div className="contact-card-creative">
              <div className="contact-card-icon-wrap">
                <FiMapPin size={24} />
              </div>
              <div className="contact-card-info-wrap">
                <h3>Headquarters</h3>
                <p>Ramanathapuram,<br />Coimbatore, Tamil Nadu</p>
              </div>
            </div>
            <div className="contact-card-creative">
              <div className="contact-card-icon-wrap">
                <FiMail size={24} />
              </div>
              <div className="contact-card-info-wrap">
                <h3>Email Us</h3>
                <p className="contact-card-main-val">info@npathways.global</p>
                <p className="contact-card-sub-val">support@npathways.global</p>
              </div>
            </div>
            <div className="contact-card-creative">
              <div className="contact-card-icon-wrap">
                <FiPhoneCall size={24} />
              </div>
              <div className="contact-card-info-wrap">
                <h3>Call Us</h3>
                <p className="contact-card-main-val">+91 98765 43210</p>
                <p className="contact-card-sub-val">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-premium-section" style={{ backgroundColor: "#f9f9f9", padding: "8rem 0", borderTop: "1px solid #eee" }}>
        <div className="container" style={{ maxWidth: "80%", width: "80%", margin: "0 auto", padding: "0" }}>
          
          <div className="faq-grid-layout" style={{ display: "grid", gridTemplateColumns: "1fr 2.2fr", gap: "5rem" }}>
            
            {/* Left Column: Creative Card */}
            <div className="faq-info-card" style={{
              background: "linear-gradient(135deg, #111111 0%, #222222 100%)",
              color: "#ffffff",
              padding: "3.5rem 3rem",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
              position: "sticky",
              top: "120px",
              height: "fit-content",
              minHeight: "380px"
            }}>
              <div>
                <span className="badge" style={{ backgroundColor: "var(--color-brand-tertiary, #e3a008)", color: "#000000", fontWeight: "700", padding: "0.4rem 1.2rem", borderRadius: "20px" }}>FAQ</span>
                <h2 style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffffff", marginTop: "2rem", marginBottom: "1rem", lineHeight: "1.1" }}>
                  Got <br />Questions?
                </h2>
                <p style={{ color: "#aaaaaa", fontSize: "1.05rem", lineHeight: "1.6" }}>
                  We've gathered the most common queries from students and parents. If you can't find what you're looking for, feel free to reach out.
                </p>
              </div>
              <div style={{ marginTop: "3rem" }}>
                <span style={{ fontSize: "0.9rem", color: "#666666", display: "block", marginBottom: "0.8rem", fontWeight: "600" }}>Need immediate assistance?</span>
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))} 
                  className="about-btn-premium" 
                  style={{ width: "100%", textAlign: "center", display: "block", background: "none", border: "1px solid var(--color-brand-tertiary, #e3a008)", color: "var(--color-brand-tertiary, #e3a008)", cursor: "pointer", padding: "0.85rem 1.5rem", borderRadius: "6px", fontWeight: "700" }}
                >
                  Quick Enquiry
                </button>
              </div>
            </div>

            {/* Right Column: FAQ List */}
            <div className="faq-list-wrapper">
              <div className="faq-list">
                {faqsData.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`faq-item-creative ${activeFaq === index ? 'active' : ''}`}
                    onClick={() => toggleFaq(index)}
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderRadius: "12px",
                      marginBottom: "1.25rem",
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      boxShadow: activeFaq === index ? "0 15px 35px rgba(0,0,0,0.03)" : "none"
                    }}
                  >
                    <div className="faq-question-creative" style={{
                      padding: "1.75rem 2.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1.5rem"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        <span style={{
                          fontSize: "1.05rem",
                          fontWeight: "800",
                          color: activeFaq === index ? "var(--color-brand-tertiary, #e3a008)" : "#cccccc",
                          transition: "color 0.3s"
                        }}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 style={{
                          fontSize: "1.25rem",
                          fontWeight: "800",
                          color: "#111111",
                          margin: 0,
                          transition: "color 0.3s"
                        }}>
                          {faq.question}
                        </h3>
                      </div>
                      <div style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: activeFaq === index ? "var(--color-brand-tertiary, #e3a008)" : "#f3f4f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: activeFaq === index ? "#000000" : "#666666",
                        transition: "all 0.3s",
                        flexShrink: 0
                      }}>
                        <FiChevronDown style={{
                          transform: activeFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s",
                          fontSize: "1.25rem"
                        }} />
                      </div>
                    </div>
                    
                    <div className="faq-answer-creative" style={{
                      maxHeight: activeFaq === index ? "300px" : "0",
                      overflow: "hidden",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      borderTop: activeFaq === index ? "1px solid rgba(0,0,0,0.04)" : "1px solid transparent"
                    }}>
                      <p style={{
                        padding: "1.75rem 2.25rem 2.25rem 4.75rem",
                        color: "#555555",
                        lineHeight: "1.75",
                        fontSize: "1.05rem",
                        margin: 0
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
