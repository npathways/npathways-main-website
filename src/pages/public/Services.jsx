import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { consultancyServices, supportServices } from "../../data/services";
import BootcampCalendar from "../../components/bootcamp/BootcampCalendar";
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
    {
      ...supportServices.find((s) => s.id === "bootcamps"),
      image:
        "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop",
      category: "Readiness Tools",
    },
    {
      ...supportServices.find((s) => s.id === "school-programs"),
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
      category: "Readiness Tools",
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
      
      {/* Final CTA */}
      <section className="section text-center py-24">
        <div className="container">
          <h2 className="text-3xl mb-6">Need a Personalized Strategy?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Book a discovery session with our expert counselors to find the
            right path for your unique profile.
          </p>
          <div className="cta-buttons">
            <Button
              variant="primary"
              size="large"
              onClick={() => (window.location.href = "/contact")}
            >
              Talk to an Advisor
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => (window.location.href = "/services/bootcamps")}
            >
              Explore Bootcamps
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
