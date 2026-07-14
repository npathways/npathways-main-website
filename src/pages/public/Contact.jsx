import React, { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import faqsData from "../../data/faqs.json";
import { FiChevronDown, FiArrowRight, FiArrowLeft, FiCheckCircle, FiPhoneCall, FiUserCheck, FiAward, FiBookOpen } from "react-icons/fi";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    grade: '',
    passoutYear: '',
    examType: '',
    examStatus: '',
    selectedProgram: '',
    email: '',
    countryCode: '+91',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categoriesList = [
    { label: 'Student', desc: 'Currently studying in school or college', icon: <FiBookOpen size={20} /> },
    { label: 'Parent', desc: 'Inquiring for a son or daughter', icon: <FiUserCheck size={20} /> },
    { label: 'Working Professional', desc: 'Currently working and seeking growth', icon: <FiAward size={20} /> }
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
    if (step === 3) {
      if ((formData.category === 'Student' || formData.category === 'Parent') && !formData.grade.trim()) {
        toast.error('Please enter your current grade');
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
      [name]: value,
      ...(name === 'category' && value === 'Working Professional' ? { grade: '' } : {})
    }));
  };

  const handleCategorySelect = (category) => {
    setFormData(prev => ({
      ...prev,
      category,
      ...(category === 'Working Professional' ? { grade: '' } : {})
    }));
    setTimeout(() => setStep(3), 400);
  };

  const handleProgramSelect = (selectedProgram) => {
    setFormData(prev => ({ ...prev, selectedProgram }));
    setTimeout(() => setStep(6), 400); // Jump to contact info after program select
  };

  const resetWizard = () => {
    setFormData({
      name: '',
      category: '',
      grade: '',
      passoutYear: '',
      examType: '',
      examStatus: '',
      selectedProgram: '',
      email: '',
      countryCode: '+91',
      phone: ''
    });
    setStep(1);
    setIsSuccess(false);
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
        grade: formData.grade || null,
        passoutYear: formData.passoutYear || null,
        examType: formData.examType || null,
        examStatus: formData.examStatus || null,
        selectedProgram: formData.selectedProgram || null,
        source: 'Contact Page Wizard'
      };

      const response = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    } finally {
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

      <section className="section">
        <div className="container max-w-4xl">
          {/* Centered Wizard Container */}
          <div className="wizard-center-layout">
            <Card className="contact-form-card contact-wizard-card">
              {!isSuccess ? (
                <div className="wizard-container">
                  <div className="wizard-header">
                    <h2>Let's Get in Touch</h2>
                    <p className="wizard-subtitle">Help us understand your requirements to serve you better</p>
                  </div>

                  <div className="wizard-steps">
                    {/* Step 1: Name */}
                    {step === 1 && (
                      <div className="wizard-step fade-in-up">
                        <label className="wizard-label">What should we call you?</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className="wizard-input"
                          autoFocus
                          onKeyDown={e => e.key === 'Enter' && handleNext()}
                        />
                        <div className="wizard-actions">
                          <Button 
                            onClick={handleNext} 
                            className="wizard-btn-next"
                            disabled={!formData.name.trim()}
                          >
                            Continue <FiArrowRight style={{ marginLeft: '8px' }} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Category Select */}
                    {step === 2 && (
                      <div className="wizard-step fade-in-up">
                        <label className="wizard-label">Who are you representing?</label>
                        <div className="wizard-services-grid">
                          {categoriesList.map((cat, idx) => (
                            <div
                              key={cat.label}
                              className={`wizard-service-card ${formData.category === cat.label ? 'selected' : ''}`}
                              onClick={() => handleCategorySelect(cat.label)}
                              style={{ animationDelay: `${idx * 0.05}s` }}
                            >
                              <div className="wizard-service-icon">{cat.icon}</div>
                              <div className="wizard-service-info">
                                <h3>{cat.label}</h3>
                                <p>{cat.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="wizard-actions flex-between" style={{ marginTop: '24px' }}>
                          <Button variant="secondary" onClick={handleBack} className="wizard-btn-back">
                            <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                          </Button>
                          <Button onClick={handleNext} className="wizard-btn-next" disabled={!formData.category}>
                            Next <FiArrowRight style={{ marginLeft: '8px' }} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Academic Details */}
                    {step === 3 && (
                      <div className="wizard-step fade-in-up">
                        <label className="wizard-label">Tell us about your educational background</label>
                        <div className="wizard-input-group">
                          {(formData.category === 'Student' || formData.category === 'Parent') && (
                            <div className="form-field" style={{ marginBottom: '20px' }}>
                              <label className="form-label" style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Current Grade *</label>
                              <input
                                type="text"
                                name="grade"
                                placeholder="e.g. 12th Grade, Undergrad 3rd Year"
                                value={formData.grade}
                                onChange={handleChange}
                                className="wizard-input"
                                style={{ marginTop: '8px' }}
                                required
                              />
                            </div>
                          )}
                          <div className="form-field">
                            <label className="form-label" style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Graduation / Passout Year</label>
                            <input
                              type="text"
                              name="passoutYear"
                              placeholder="e.g. 2026"
                              value={formData.passoutYear}
                              onChange={handleChange}
                              className="wizard-input"
                              style={{ marginTop: '8px' }}
                            />
                          </div>
                        </div>
                        <div className="wizard-actions flex-between" style={{ marginTop: '24px' }}>
                          <Button variant="secondary" onClick={handleBack} className="wizard-btn-back">
                            <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                          </Button>
                          <Button 
                            onClick={handleNext} 
                            className="wizard-btn-next"
                            disabled={(formData.category === 'Student' || formData.category === 'Parent') && !formData.grade.trim()}
                          >
                            Next <FiArrowRight style={{ marginLeft: '8px' }} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Exams Intent */}
                    {step === 4 && (
                      <div className="wizard-step fade-in-up">
                        <label className="wizard-label">Are you preparing for any entrance exams?</label>
                        <div className="wizard-input-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                          <div className="form-field">
                            <label className="form-label" style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Exam Type</label>
                            <select 
                              name="examType" 
                              value={formData.examType} 
                              onChange={handleChange}
                              className="form-select wizard-input"
                              style={{ marginTop: '8px', cursor: 'pointer' }}
                            >
                              <option value="">None / Other</option>
                              {["CAT", "GMAT", "GRE", "XAT", "NMAT", "SNAP", "Other"].map(e => <option key={e} value={e}>{e}</option>)}
                            </select>
                          </div>
                          <div className="form-field">
                            <label className="form-label" style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Preparation Status</label>
                            <select 
                              name="examStatus" 
                              value={formData.examStatus} 
                              onChange={handleChange}
                              className="form-select wizard-input"
                              style={{ marginTop: '8px', cursor: 'pointer' }}
                            >
                              <option value="">Select Status</option>
                              {["Applied", "Yet to Apply", "Planning to Apply"].map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className="wizard-actions flex-between" style={{ marginTop: '24px' }}>
                          <Button variant="secondary" onClick={handleBack} className="wizard-btn-back">
                            <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                          </Button>
                          <Button onClick={handleNext} className="wizard-btn-next">
                            Next <FiArrowRight style={{ marginLeft: '8px' }} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Service Selection */}
                    {step === 5 && (
                      <div className="wizard-step fade-in-up">
                        <label className="wizard-label">What services are you interested in?</label>
                        <div className="wizard-services-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                          {programsList.map((srv, idx) => (
                            <div
                              key={srv.label}
                              className={`wizard-service-card ${formData.selectedProgram === srv.label ? 'selected' : ''}`}
                              onClick={() => handleProgramSelect(srv.label)}
                              style={{ animationDelay: `${idx * 0.05}s` }}
                            >
                              <div className="wizard-service-icon">{srv.icon}</div>
                              <div className="wizard-service-info">
                                <h3>{srv.label}</h3>
                                <p>{srv.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="wizard-actions flex-between" style={{ marginTop: '24px' }}>
                          <Button variant="secondary" onClick={handleBack} className="wizard-btn-back">
                            <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                          </Button>
                          <Button onClick={handleNext} className="wizard-btn-next" disabled={!formData.selectedProgram}>
                            Next <FiArrowRight style={{ marginLeft: '8px' }} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 6: Contact Info */}
                    {step === 6 && (
                      <form onSubmit={handleSubmit} className="wizard-step fade-in-up">
                        <label className="wizard-label">Almost done! How can we contact you?</label>
                        <div className="wizard-input-group">
                          <div className="form-field" style={{ marginBottom: '16px' }}>
                            <label className="form-label" style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Email Address</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="name@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              className="wizard-input"
                              style={{ marginTop: '8px' }}
                              required
                            />
                          </div>
                          <div className="form-field">
                            <label className="form-label" style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Phone Number</label>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                              <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="form-select wizard-input"
                                style={{ width: '120px', cursor: 'pointer' }}
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
                                className="wizard-input"
                                style={{ flex: 1 }}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="wizard-actions flex-between" style={{ marginTop: '32px' }}>
                          <Button variant="secondary" type="button" onClick={handleBack} disabled={isSubmitting} className="wizard-btn-back">
                            <FiArrowLeft style={{ marginRight: '8px' }} /> Back
                          </Button>
                          <Button type="submit" disabled={isSubmitting || !formData.email.trim() || !formData.phone.trim()} className="wizard-btn-submit">
                            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              ) : (
                <div className="wizard-success fade-in">
                  <div className="wizard-success-icon-wrapper">
                    <FiCheckCircle size={64} className="wizard-success-icon" />
                  </div>
                  <h2>Inquiry Submitted!</h2>
                  <p>Thank you, {formData.name.split(' ')[0]}. We have registered your request for <strong>{formData.selectedProgram}</strong>. Our counselors will reach out to you shortly.</p>
                  <Button onClick={resetWizard} className="wizard-btn-reset" style={{ marginTop: '24px' }}>
                    Submit Another Inquiry
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Contact Info Items Row below the wizard */}
          <div className="contact-info-row-premium" style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            <div className="info-item">
              <div className="info-icon">L</div>
              <div>
                <h3>Headquarters</h3>
                <p>Ramanathapuram,<br />Coimbatore, Tamil Nadu</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">@</div>
              <div>
                <h3>Email Us</h3>
                <p>info@npathways.global</p>
                <p className="text-sm text-gray-500">For support: support@npathways.global</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">#</div>
              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2>Frequently Asked <span className="accent-text">Questions</span></h2>
            <p className="text-gray-600">Quick answers to common queries about our process.</p>
          </div>
          
          <div className="faq-list">
            {faqsData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <FiChevronDown className="faq-chevron" />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
