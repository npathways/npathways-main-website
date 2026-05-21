import React from "react";
import testimonialsData from "../../data/testimonials.json";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header-premium" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge">Success Stories</span>
          <h2>What Our Global Community Says</h2>
        </div>
        
        <div className="testimonials-track-container">
          <div className="testimonials-track">
            {[...testimonialsData, ...testimonialsData].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
