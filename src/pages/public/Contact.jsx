import { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import faqsData from "../../data/faqs.json";
import { FiChevronDown } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    qualification: "",
    purpose: "Study Abroad",
    goal: "",
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      qualification: "",
      purpose: "Study Abroad",
      goal: "",
    });
  };

  return (
    <div className="contact-page fade-in">
      <section className="section bg-gray contact-hero">
        <div className="container text-center">
          <h1>
            Contact <span className="text-primary">Us</span>
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp Number</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    className="form-input"
                    placeholder="+91 00000 00000"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="qualification">Current Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    className="form-input"
                    placeholder="e.g. 12th Grade, B.Tech"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="purpose">Primary Purpose</label>
                  <select
                    id="purpose"
                    name="purpose"
                    className="form-select"
                    value={formData.purpose}
                    onChange={handleChange}
                  >
                    <option value="Study Abroad">Study Abroad</option>
                    <option value="Bootcamps">Skills & Bootcamps</option>
                    <option value="Internships">Internships & Research</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="goal">Long-term Goal</label>
                  <textarea
                    id="goal"
                    name="goal"
                    className="form-textarea"
                    placeholder="Tell us about your ultimate career or academic goal..."
                    rows="4"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <Button variant="premium" type="submit" fullWidth size="large">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2>Frequently Asked <span className="text-primary">Questions</span></h2>
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
