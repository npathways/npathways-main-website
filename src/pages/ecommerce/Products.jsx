import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import "./Products.css";

const Products = () => {
  const categories = [
    {
      id: "assessments",
      name: "Assessments",
      tag: "Assess",
      description:
        "Scientific map of cognitive patterns and personality traits to identify natural strengths. Start your journey with data, not best guesses.",
      link: "/products/assessments",
      icon: "01",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "bootcamps",
      name: "Bootcamps",
      tag: "Accelerate",
      description:
        "Intensive accelerators designed to build specific readiness dimensions in record time. Close skill gaps with targeted intervention.",
      link: "/products/bootcamps",
      icon: "02",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "programs",
      name: "Programs",
      tag: "Execute",
      description:
        "Mid-term structured engagements focused on building core transition competencies over 3-6 months. Direct mentorship and tracking.",
      link: "/products/programs",
      icon: "03",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "pathways",
      name: "Full Pathways",
      tag: "Complete Guidance",
      description:
        "End-to-end guided journey from assessment to enrollment in top-tier global institutions. Our flagship all-inclusive service.",
      link: "/products/pathways",
      icon: "04",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop",
    },
    {
      id: "subscriptions",
      name: "Subscriptions",
      tag: "Coming Soon",
      description:
        "Long-term continuity and priority access for our global industry network. Stay connected with ongoing mentorship.",
      link: "/products/subscriptions",
      icon: "05",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      disabled: true,
    },
  ];

  return (
    <div className="products-page products-home fade-in">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <nav className="breadcrumb text-sm text-gray-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black font-bold">Products</span>
          </nav>
          <h1>
            Structured <span className="text-gray-500">Products</span>
          </h1>
          <p>
            Guidance, not just content. Our products are designed to unlock
            specific stages of your journey, ensuring you are ready for what
            comes next.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="products-grid-section">
        <div className="container">
          <div className="section-intro-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">
              Our Offerings
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Choose Your Level of Engagement
            </h2>
          </div>

          <div className="products-main-grid">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`product-card-premium ${
                  cat.disabled ? "opacity-60 grayscale" : ""
                }`}
              >
                <div className="card-image-wrap">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="card-icon-float">{cat.icon}</div>

                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
                  {cat.tag}
                </span>

                <h3>{cat.name}</h3>
                <p>{cat.description}</p>

                <Link
                  to={cat.disabled ? "#" : cat.link}
                  className="cards-btn-link"
                  style={{ pointerEvents: cat.disabled ? "none" : "auto" }}
                >
                  {cat.disabled ? "Coming Soon" : "Explore Category"}{" "}
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Logic / Why Choose Us */}
      <section className="product-logic-section">
        <div className="container">
          <div className="split-layout">
            <div className="logic-content">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-4">
                Methodology
              </span>
              <h2>The Product Logic</h2>
              <p>
                We don't sell generic courses. We build productized
                interventions. Each category represents a specific stage of the
                student lifecycle, optimized for maximum impact in minimum time.
              </p>

              <div className="logic-steps">
                <div className="logic-box-bw">
                  <h4>1. Assess</h4>
                  <p>
                    Identify strengths and gaps first with scientific precision.
                  </p>
                </div>
                <div className="logic-box-bw">
                  <h4>2. Unlock</h4>
                  <p>
                    Gain access to specific programs tailored to your profile.
                  </p>
                </div>
                <div className="logic-box-bw">
                  <h4>3. Execute</h4>
                  <p>Build your profile systematically with expert guidance.</p>
                </div>
                <div className="logic-box-bw">
                  <h4>4. Outcome</h4>
                  <p>Secure specific, measurable admission & career results.</p>
                </div>
              </div>
            </div>

            <div className="logic-visual">
              <div className="logic-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                  alt="Strategic planning"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section text-center py-24">
        <div className="container">
          <h2 className="text-3xl mb-6 font-bold">Not sure where to start?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
            Take our initial readiness check to see which assessment or program
            fits your current stage.
          </p>
          <div className="products-cta-buttons">
            <Button
              variant="premium"
              size="large"
              onClick={() => (window.location.href = "/products/assessments")}
            >
              Explore Assessments
            </Button>
            <Button
              variant="premium-outline"
              size="large"
              onClick={() => (window.location.href = "/contact")}
            >
              Check Your Readiness
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
