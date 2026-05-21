import { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import LeadForm from "../../components/common/LeadForm";
import faqsData from "../../data/faqs.json";
import { FiChevronDown } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
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
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="mb-8">
                Reach out to us for any queries regarding our services,
                products, or support.
              </p>

              <div className="info-item">
                <div className="info-icon">L</div>
                <div>
                  <h3>Headquarters</h3>
                  <p>
                    123 Education Lane, Tech Park
                    <br />
                    Bangalore, KA 560001, India
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">@</div>
                <div>
                  <h3>Email Us</h3>
                  <p>info@npathways.global</p>
                  <p className="text-sm text-gray-500">
                    For support: support@npathways.global
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">#</div>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210</p>
                  <p className="text-sm text-gray-500">
                    Mon-Fri, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="contact-form-card">
              <h2>Send a Message</h2>
              <LeadForm source="Contact Page" variant="light" />
            </Card>
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
