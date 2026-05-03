import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/common/Button";
import heroVideo from "../../assets/video/hero.mp4";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ctaForm, setCtaForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    qualification: "",
    purpose: "Study Abroad",
    goal: "",
  });

  const handleCtaChange = (e) => {
    const { name, value } = e.target;
    setCtaForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    console.log("CTA Form submitted:", ctaForm);
    alert("Thank you! We will contact you shortly.");
    setCtaForm({
      name: "",
      email: "",
      whatsapp: "",
      qualification: "",
      purpose: "Study Abroad",
      goal: "",
    });
  };

  const destinations = [
    {
      name: "United States",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop",
      size: "large",
    },
    {
      name: "United Kingdom",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
      size: "small",
    },
    {
      name: "Canada",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop",
      size: "small",
    },
    {
      name: "Australia",
      img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop",
      size: "medium",
    },
    {
      name: "Germany",
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
      size: "medium",
    },
  ];

  return (
    <div className="home-redesign">
      {/* Hero Section - Split Layout */}
      <section className="home-hero-premium">
        <video
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        
        <div className="container hero-split">
          <div className="hero-content-left">
            <span className="hero-badge-minimal">
              Global Education Reimagined
            </span>
            <h1 className="hero-title-premium">
              Find Your <br /> <span>Global Pathway</span>
            </h1>
            <p className="hero-desc-premium">
              Premium study abroad guidance from career discovery to
              post-arrival support. We don't just find you a university; we find
              you a future.
            </p>
            <div className="hero-actions-premium">
              <Button variant="premium" onClick={() => navigate("/contact")}>
                Book Free Consultation
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ marginLeft: "10px" }}
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                variant="premium-outline"
                onClick={() => navigate("/about/how-it-works")}
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Course Finder */}
        {/* <div className="course-finder-container">
          <div className="finder-card">
            <div className="finder-field">
              <label>Where to?</label>
              <select>
                <option>All Destinations</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="finder-field">
              <label>Study Level</label>
              <select>
                <option>Bachelors</option>
                <option>Masters</option>
                <option>PhD</option>
              </select>
            </div>
            <div className="finder-field">
              <label>Subject</label>
              <input type="text" placeholder="e.g. Computer Science" />
            </div>
            <button className="finder-submit">Search Pathways</button>
          </div>
        </div> */}
      </section>

      {/* Services Highlight - Tour Categories Style */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header-premium">
            <span className="badge">Our Ecosystem</span>
            <h2>Complete Student Support</h2>
          </div>
          <div className="highlights-grid">
            {[
              {
                title: "Career Discovery",
                icon: "01",
                desc: "Psychometric & Ikigai mapping",
              },
              {
                title: "Admissions",
                icon: "02",
                desc: "Expert university shortlisting",
              },
              {
                title: "Visa Success",
                icon: "03",
                desc: "98% success rate in filing",
              },
              {
                title: "Support",
                icon: "04",
                desc: "Arrival & accommodation help",
              },
            ].map((item, i) => (
              <div key={i} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations - Masonry Style */}
      <section className="destinations-section">
        <div className="container">
          <div className="section-header-premium">
            <span className="badge">Destinations</span>
            <h2>Popular Pathways</h2>
          </div>
          <div className="destinations-masonry">
            {destinations.map((dest, i) => (
              <div key={i} className={`dest-card ${dest.size}`}>
                <img src={dest.img} alt={dest.name} />
                <div className="dest-overlay">
                  <h3>{dest.name}</h3>
                  <Link to="/products/pathways">Explore Programs →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Slider - Brand Alliances */}
      <section className="partners-slider-section">
        <div className="container">
          <h3 className="partners-title">Our University Partners</h3>
          <div className="partners-track">
            {/* Grayscale placeholders for partner logos */}
            <div className="partner-logo">IVY LEAGUE HUB</div>
            <div className="partner-logo">RUSSELL GROUP</div>
            <div className="partner-logo">GLOBAL TECH U</div>
            <div className="partner-logo">EUROPEAN INSTITUTE</div>
            <div className="partner-logo">PACIFIC ACADEMY</div>
          </div>
        </div>
      </section>

      {/* CTA: Contact Form Section */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-form-wrapper">
            <div className="cta-content-info">
              <span className="badge">Get Started</span>
              <h2 style={{color: "white"}}>Ready to start your journey?</h2>
              <p>
                Fill out the form and our expert mentors will reach out to help
                you find your perfect global pathway.
              </p>
              <div className="cta-contact-minimal">
                <span>info@npathways.global</span>
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="cta-form-box">
              <form onSubmit={handleCtaSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={ctaForm.name}
                      onChange={handleCtaChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={ctaForm.email}
                      onChange={handleCtaChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>WhatsApp Number</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="+91 00000 00000"
                      value={ctaForm.whatsapp}
                      onChange={handleCtaChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Current Qualification</label>
                    <input
                      type="text"
                      name="qualification"
                      placeholder="e.g. 12th Grade, B.Tech"
                      value={ctaForm.qualification}
                      onChange={handleCtaChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>Primary Purpose</label>
                  <select
                    name="purpose"
                    value={ctaForm.purpose}
                    onChange={handleCtaChange}
                  >
                    <option value="Study Abroad">Study Abroad</option>
                    <option value="Career Counseling">Career Counseling</option>
                    <option value="Bootcamps">Skills & Bootcamps</option>
                    <option value="Internships">Internships & Research</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Long-term Goal</label>
                  <textarea
                    name="goal"
                    placeholder="Tell us about your ultimate career or academic goal..."
                    value={ctaForm.goal}
                    onChange={handleCtaChange}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <Button variant="premium" type="submit" fullWidth size="large">
                  Get Free Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
