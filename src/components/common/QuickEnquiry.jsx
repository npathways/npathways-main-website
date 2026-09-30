import React, { useState, useEffect } from 'react';
import './QuickEnquiry.css';
import { FiMessageCircle, FiX, FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';

const QuickEnquiry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Name, 2: Occupation, 3: Service, 4: Email/Phone, 5: Message
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    service: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleTrigger = (e) => {
      setIsOpen(true);
      setStep(1);
      setIsSuccess(false);
      const countryDetail = e.detail?.country || '';
      setFormData({
        name: '',
        occupation: '',
        service: countryDetail ? 'Study Abroad & Visa Assistance' : '',
        email: '',
        phone: '',
        message: countryDetail ? `Enquiry for: ${countryDetail}` : ''
      });
    };
    window.addEventListener('open-quick-enquiry', handleTrigger);
    return () => window.removeEventListener('open-quick-enquiry', handleTrigger);
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Academic & University Consulting",
    "Career Guidance",
    "Curricular-Based Strategy",
    "Pathway Programs (Bridge Courses)",
    "Competitive Exam Strategy",
    "Skills & Bootcamp Programs",
    "Study Abroad & Visa Assistance"
  ];

  const occupations = ["Student", "Parent", "Working Professional", "Just Looking Around"];

  const handleOpen = () => {
    setIsOpen(true);
    setStep(1);
    setIsSuccess(false);
    setFormData({ name: '', occupation: '', service: '', email: '', phone: '', message: '' });
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
    }, 300); // Wait for transition
  };

  const handleNext = () => {
    if (step === 1 && !formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (step === 2 && !formData.occupation) {
      toast.error('Please select who you are');
      return;
    }
    if (step === 3 && !formData.service) {
      toast.error('Please select a service');
      return;
    }
    if (step === 4 && (!formData.email.trim() || !formData.phone.trim())) {
      toast.error('Please provide email and phone number');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOccupationSelect = (occupation) => {
    setFormData(prev => ({ ...prev, occupation }));
    setTimeout(() => setStep(3), 400);
  };

  const handleServiceSelect = (service) => {
    setFormData(prev => ({ ...prev, service }));
    setTimeout(() => setStep(4), 400); // Auto-advance after animation
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
        selectedProgram: formData.service,
        source: 'Quick Enquiry Widget',
        countryCode: '+91', // Default country code
        category: formData.occupation || null,
        message: formData.message || null,
      };

      const response = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setIsSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        className={`qe-fab ${isOpen ? 'hidden' : ''}`} 
        onClick={handleOpen}
        aria-label="Quick Enquiry"
      >
        <div className="qe-fab-icon">
          <FiMessageCircle size={24} />
        </div>
        <span className="qe-fab-text">Quick Enquiry</span>
      </button>

      {/* Popup Overlay & Modal */}
      <div className={`qe-overlay ${isOpen ? 'active' : ''}`} onClick={handleClose} />
      
      <div className={`qe-modal ${isOpen ? 'active' : ''}`}>
        <button className="qe-close-btn" onClick={handleClose}>
          <FiX size={20} />
        </button>

        {!isSuccess ? (
          <div className="qe-content">
            <div className="qe-header">
              <h3>Let's get started</h3>
              <div className="qe-progress">
                <div className={`qe-dot ${step >= 1 ? 'active' : ''}`} />
                <div className={`qe-line ${step >= 2 ? 'active' : ''}`} />
                <div className={`qe-dot ${step >= 2 ? 'active' : ''}`} />
                <div className={`qe-line ${step >= 3 ? 'active' : ''}`} />
                <div className={`qe-dot ${step >= 3 ? 'active' : ''}`} />
                <div className={`qe-line ${step >= 4 ? 'active' : ''}`} />
                <div className={`qe-dot ${step >= 4 ? 'active' : ''}`} />
                <div className={`qe-line ${step >= 5 ? 'active' : ''}`} />
                <div className={`qe-dot ${step >= 5 ? 'active' : ''}`} />
              </div>
            </div>

            <div className="qe-steps-container">
              {/* Step 1: Name */}
              <div className={`qe-step ${step === 1 ? 'active' : step > 1 ? 'prev' : 'next'}`}>
                <h4>What's your name?</h4>
                <input 
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="qe-input"
                  autoFocus={isOpen && step === 1}
                  onKeyDown={e => e.key === 'Enter' && handleNext()}
                />
                <button className="qe-btn-primary" onClick={handleNext}>
                  Next
                </button>
              </div>

              {/* Step 2: Occupation */}
              <div className={`qe-step ${step === 2 ? 'active' : step > 2 ? 'prev' : 'next'}`}>
                <h4>Hi {formData.name.split(' ')[0]}, what do you do?</h4>
                <div className="qe-bubbles">
                  {occupations.map((occupation, idx) => (
                    <button
                      key={idx}
                      className={`qe-bubble ${formData.occupation === occupation ? 'selected' : ''}`}
                      onClick={() => handleOccupationSelect(occupation)}
                      style={{ animationDelay: `${idx * 0.1}s`, padding: '8px 12px', fontSize: '0.85rem' }}
                    >
                      {occupation}
                    </button>
                  ))}
                </div>
                <button className="qe-btn-text" onClick={handleBack}>
                  Back
                </button>
              </div>

              {/* Step 3: Service Selection */}
              <div className={`qe-step ${step === 3 ? 'active' : step > 3 ? 'prev' : 'next'}`}>
                <h4>How can we help you?</h4>
                <div className="qe-bubbles" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {services.map((service, idx) => (
                    <button
                      key={idx}
                      className={`qe-bubble ${formData.service === service ? 'selected' : ''}`}
                      onClick={() => handleServiceSelect(service)}
                      style={{ animationDelay: `${idx * 0.05}s`, padding: '8px 10px', fontSize: '0.8rem', textAlign: 'center' }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                <button className="qe-btn-text" onClick={handleBack} style={{ marginTop: '12px' }}>
                  Back
                </button>
              </div>

              {/* Step 4: Email & Phone */}
              <div className={`qe-step ${step === 4 ? 'active' : step > 4 ? 'prev' : 'next'}`}>
                <h4>How can we reach you?</h4>
                <div>
                  <div className="qe-input-group">
                    <input 
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="qe-input"
                      required
                    />
                  </div>
                  <div className="qe-input-group">
                    <input 
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="qe-input"
                      required
                    />
                  </div>
                  <div className="qe-actions">
                    <button type="button" className="qe-btn-text" onClick={handleBack}>
                      Back
                    </button>
                    <button type="button" className="qe-btn-primary" onClick={handleNext} disabled={!formData.email.trim() || !formData.phone.trim()}>
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 5: Message */}
              <div className={`qe-step ${step === 5 ? 'active' : step > 5 ? 'prev' : 'next'}`}>
                <h4>Any details or questions? (Optional)</h4>
                <form onSubmit={handleSubmit}>
                  <div className="qe-input-group">
                    <textarea
                      name="message"
                      placeholder="Message or specific queries..."
                      value={formData.message}
                      onChange={handleChange}
                      className="qe-input"
                      style={{ height: '80px', padding: '8px', fontSize: '0.9rem', resize: 'none' }}
                    />
                  </div>
                  <div className="qe-actions">
                    <button type="button" className="qe-btn-text" onClick={handleBack} disabled={isSubmitting}>
                      Back
                    </button>
                    <button type="submit" className="qe-btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="qe-success">
            <div className="qe-success-icon">
              <FiCheckCircle size={48} />
            </div>
            <h3>Thank You!</h3>
            <p>We've received your request. Our team will get back to you shortly.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default QuickEnquiry;
