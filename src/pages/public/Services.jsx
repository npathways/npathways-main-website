import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { consultancyServices, supportServices } from "../../data/services";
import BootcampCalendar from "../../components/bootcamp/BootcampCalendar";
import { destinationsData } from "../../data/destinationsData";
import "./Services.css";

const Services = () => {
  // Combine all services for the grid overview
  const allServices = [
    {
      ...consultancyServices[0],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      category: "Individual Transition",
    },
    {
      ...consultancyServices[1],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      category: "Individual Transition",
    },
    {
      ...consultancyServices[2],
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      category: "Individual Transition",
    },
    {
      ...supportServices.find((s) => s.id === "for-parents"),
      image:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop",
      category: "Stakeholder Services",
    },
    {
      ...supportServices.find((s) => s.id === "for-schools"),
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
      category: "Stakeholder Services",
    },
  ];


  return (
    <div className="services-page fade-in">
      {/* Global Banner */}
      <section className="services-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="text-black">Our Services</span>
          </nav>
          <h1>
            Our <span className="accent-text">Services</span>
          </h1>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-intro-center">
            <span className="mini-title">Consultancy & Support</span>
            <h2 className="main-section-title">
              Strategic guidance for global transition
            </h2>
          </div>

          <div className="services-main-grid">
            {allServices.map((service, index) => (
              <div key={service.id} className="service-card-premium">
                <div className="service-card-image-wrap">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="card-icon-float">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                  {service.category}
                </span>
                <h3>{service.name}</h3>
                <p>
                  {service.shortDescription ||
                    service.description.substring(0, 100) + "..."}
                </p>
                <Link
                  to={service.link || "/services"}
                  className="read-more-btn"
                >
                  Read More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Study Destinations Guides Section */}
      <section className="services-destinations-section" style={{ padding: "6rem 0", background: "#f5f5f5" }}>
        <div className="container" style={{ maxWidth: "80%", width: "80%", margin: "0 auto", padding: "0" }}>
          <div className="section-intro-center" style={{ marginBottom: "4rem" }}>
            <span className="mini-title">Destination Guides</span>
            <h2 className="main-section-title">
              Explore Popular Study Destinations
            </h2>
            <p style={{ color: "#666", marginTop: "1rem" }}>
              Deep-dive insights, academic requirements, and visa updates for 2026.
            </p>
          </div>

          <div className="services-main-grid">
            {Object.keys(destinationsData).map((key) => {
              const dest = destinationsData[key];
              return (
                <div key={key} className="service-card-premium">
                  <div className="service-card-image-wrap">
                    <img src={dest.heroImage} alt={dest.name} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                    Destination Guide
                  </span>
                  <h3>Study in {dest.name}</h3>
                  <p>{dest.shortDescription}</p>
                  <Link to={`/destinations/${key}`} className="read-more-btn">
                    View {dest.name} Guide <span>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Creative CTA */}
      <section className="services-cta-section" style={{ padding: "8rem 0", background: "#fbfbfb" }}>
        <div className="container" style={{ maxWidth: "80%", width: "80%", margin: "0 auto", padding: "0" }}>
          
          <div className="services-creative-cta-card">
            
            {/* Glowing radar pulses behind text */}
            <div className="cta-pulse-ring ring-1"></div>
            <div className="cta-pulse-ring ring-2"></div>
            <div className="cta-pulse-ring ring-3"></div>

            <div className="cta-content-wrapper">
              <span className="cta-tagline">Map Your Transition</span>
              <h2 className="cta-title">Ready to Launch Your Global Journey?</h2>
              <p className="cta-desc">
                Skip the guesswork. Connect with our expert advisors to engineer a custom pathway tailored precisely to your background, profile, and ambitions.
              </p>
              
              <div className="cta-button-wrap">
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
                  className="cta-launch-button"
                >
                  <span className="btn-text">Begin Pathway Design</span>
                  <span className="btn-arrow">✈</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
