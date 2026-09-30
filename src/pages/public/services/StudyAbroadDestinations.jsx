import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Button from "../../../components/common/Button";
import PathwayTopNav from "../../../components/services/PathwayTopNav";
import destinationsData from "../../../data/destinations.json";
import toast from "react-hot-toast";
import "./ServiceDetails.css";
import "../Home.css"; // Reuse masonry and widget styling

const landmassPoints = [
  // North America
  { lat: 70, lon: -160 }, { lat: 70, lon: -140 }, { lat: 70, lon: -120 }, { lat: 70, lon: -100 },
  { lat: 70, lon: -80 }, { lat: 70, lon: -60 }, { lat: 65, lon: -150 }, { lat: 60, lon: -140 },
  { lat: 58, lon: -135 }, { lat: 55, lon: -125 }, { lat: 50, lon: -125 }, { lat: 45, lon: -125 },
  { lat: 40, lon: -122 }, { lat: 35, lon: -120 }, { lat: 30, lon: -115 }, { lat: 50, lon: -110 },
  { lat: 45, lon: -110 }, { lat: 40, lon: -105 }, { lat: 35, lon: -105 }, { lat: 30, lon: -100 },
  { lat: 25, lon: -98 }, { lat: 48, lon: -100 }, { lat: 43, lon: -95 }, { lat: 38, lon: -90 },
  { lat: 33, lon: -85 }, { lat: 28, lon: -82 }, { lat: 48, lon: -70 }, { lat: 45, lon: -70 },
  { lat: 43, lon: -75 }, { lat: 40, lon: -75 }, { lat: 35, lon: -80 }, { lat: 30, lon: -80 },
  { lat: 25, lon: -80 }, { lat: 25, lon: -105 }, { lat: 22, lon: -105 }, { lat: 20, lon: -100 },
  { lat: 18, lon: -95 }, { lat: 15, lon: -95 }, { lat: 12, lon: -85 }, { lat: 9, lon: -80 },
  // Greenland
  { lat: 80, lon: -40 }, { lat: 75, lon: -50 }, { lat: 75, lon: -30 }, { lat: 70, lon: -45 },
  { lat: 70, lon: -35 }, { lat: 65, lon: -45 }, { lat: 65, lon: -40 },
  // South America
  { lat: 10, lon: -75 }, { lat: 10, lon: -70 }, { lat: 8, lon: -65 }, { lat: 5, lon: -60 },
  { lat: 2, lon: -55 }, { lat: -2, lon: -50 }, { lat: -5, lon: -45 }, { lat: -5, lon: -40 },
  { lat: -8, lon: -35 }, { lat: -12, lon: -38 }, { lat: -16, lon: -39 }, { lat: -20, lon: -42 },
  { lat: -23, lon: -45 }, { lat: -26, lon: -48 }, { lat: -30, lon: -50 }, { lat: -35, lon: -55 },
  { lat: -40, lon: -60 }, { lat: -45, lon: -65 }, { lat: -50, lon: -70 }, { lat: -5, lon: -80 },
  { lat: -10, lon: -78 }, { lat: -15, lon: -75 }, { lat: -20, lon: -70 }, { lat: -25, lon: -70 },
  { lat: -30, lon: -72 }, { lat: -35, lon: -73 }, { lat: -40, lon: -75 }, { lat: -45, lon: -75 },
  { lat: -50, lon: -75 }, { lat: -53, lon: -72 },
  // Africa
  { lat: 35, lon: -5 }, { lat: 35, lon: 0 }, { lat: 35, lon: 5 }, { lat: 35, lon: 10 },
  { lat: 35, lon: 15 }, { lat: 35, lon: 20 }, { lat: 32, lon: 25 }, { lat: 31, lon: 30 },
  { lat: 28, lon: -5 }, { lat: 28, lon: 5 }, { lat: 28, lon: 15 }, { lat: 28, lon: 25 },
  { lat: 20, lon: -10 }, { lat: 20, lon: 0 }, { lat: 20, lon: 10 }, { lat: 20, lon: 20 },
  { lat: 20, lon: 30 }, { lat: 15, lon: -15 }, { lat: 12, lon: -15 }, { lat: 8, lon: -10 },
  { lat: 5, lon: -5 }, { lat: 5, lon: 0 }, { lat: 5, lon: 5 }, { lat: 5, lon: 10 },
  { lat: 0, lon: 10 }, { lat: 0, lon: 15 }, { lat: 0, lon: 20 }, { lat: 0, lon: 25 },
  { lat: -5, lon: 15 }, { lat: -5, lon: 20 }, { lat: -5, lon: 25 }, { lat: -10, lon: 15 },
  { lat: -10, lon: 25 }, { lat: -15, lon: 15 }, { lat: -15, lon: 25 }, { lat: -20, lon: 18 },
  { lat: -20, lon: 25 }, { lat: -25, lon: 20 }, { lat: -25, lon: 28 }, { lat: -30, lon: 22 },
  { lat: -30, lon: 28 }, { lat: -34, lon: 25 }, { lat: -15, lon: 47 }, { lat: -20, lon: 48 },
  { lat: -25, lon: 46 }, { lat: 10, lon: 40 }, { lat: 5, lon: 42 }, { lat: 0, lon: 40 },
  { lat: -5, lon: 38 }, { lat: -10, lon: 39 }, { lat: 15, lon: 38 }, { lat: 12, lon: 43 },
  { lat: 10, lon: 47 }, { lat: 8, lon: 48 }, { lat: 22, lon: 36 }, { lat: 25, lon: 34 },
  // Europe
  { lat: 38, lon: -9 }, { lat: 40, lon: -8 }, { lat: 42, lon: -5 }, { lat: 48, lon: 0 },
  { lat: 50, lon: 5 }, { lat: 52, lon: 10 }, { lat: 52, lon: 15 }, { lat: 50, lon: 20 },
  { lat: 55, lon: -2 }, { lat: 57, lon: -4 }, { lat: 42, lon: 13 }, { lat: 40, lon: 16 },
  { lat: 38, lon: 22 }, { lat: 38, lon: 24 }, { lat: 60, lon: 10 }, { lat: 62, lon: 12 },
  { lat: 65, lon: 15 }, { lat: 68, lon: 20 }, { lat: 70, lon: 25 }, { lat: 60, lon: 20 },
  { lat: 62, lon: 22 }, { lat: 65, lon: 22 }, { lat: 45, lon: 25 }, { lat: 48, lon: 30 },
  { lat: 50, lon: 35 }, { lat: 52, lon: 40 }, { lat: 55, lon: 35 }, { lat: 55, lon: 45 },
  // Russia / Siberia
  { lat: 70, lon: 40 }, { lat: 70, lon: 60 }, { lat: 70, lon: 80 }, { lat: 70, lon: 100 },
  { lat: 70, lon: 120 }, { lat: 70, lon: 140 }, { lat: 70, lon: 160 }, { lat: 60, lon: 40 },
  { lat: 60, lon: 50 }, { lat: 60, lon: 60 }, { lat: 60, lon: 70 }, { lat: 60, lon: 80 },
  { lat: 60, lon: 90 }, { lat: 60, lon: 100 }, { lat: 60, lon: 110 }, { lat: 60, lon: 120 },
  { lat: 60, lon: 130 }, { lat: 60, lon: 140 }, { lat: 60, lon: 150 }, { lat: 60, lon: 160 },
  { lat: 50, lon: 50 }, { lat: 50, lon: 60 }, { lat: 50, lon: 70 }, { lat: 50, lon: 80 },
  { lat: 50, lon: 90 }, { lat: 50, lon: 100 }, { lat: 50, lon: 110 }, { lat: 50, lon: 120 },
  { lat: 50, lon: 130 }, { lat: 50, lon: 140 }, { lat: 50, lon: 150 },
  // Middle East & Central Asia
  { lat: 30, lon: 40 }, { lat: 30, lon: 45 }, { lat: 25, lon: 45 }, { lat: 20, lon: 45 },
  { lat: 15, lon: 48 }, { lat: 15, lon: 52 }, { lat: 20, lon: 55 }, { lat: 25, lon: 55 },
  { lat: 40, lon: 50 }, { lat: 40, lon: 60 }, { lat: 45, lon: 70 }, { lat: 40, lon: 70 },
  { lat: 40, lon: 80 }, { lat: 45, lon: 80 }, { lat: 35, lon: 65 }, { lat: 35, lon: 75 },
  // India / South Asia
  { lat: 32, lon: 75 }, { lat: 28, lon: 77 }, { lat: 26, lon: 80 }, { lat: 22, lon: 70 },
  { lat: 20, lon: 73 }, { lat: 16, lon: 74 }, { lat: 12, lon: 76 }, { lat: 9, lon: 77 },
  { lat: 10, lon: 79 }, { lat: 13, lon: 80 }, { lat: 17, lon: 82 }, { lat: 22, lon: 85 },
  { lat: 22, lon: 89 },
  // China / East Asia
  { lat: 35, lon: 90 }, { lat: 35, lon: 100 }, { lat: 35, lon: 110 }, { lat: 30, lon: 100 },
  { lat: 30, lon: 110 }, { lat: 30, lon: 115 }, { lat: 25, lon: 105 }, { lat: 25, lon: 112 },
  { lat: 22, lon: 110 }, { lat: 22, lon: 115 }, { lat: 38, lon: 116 }, { lat: 40, lon: 120 },
  { lat: 43, lon: 125 },
  // SE Asia & Indonesia
  { lat: 18, lon: 102 }, { lat: 14, lon: 105 }, { lat: 10, lon: 105 }, { lat: 5, lon: 102 },
  { lat: 3, lon: 101 }, { lat: 0, lon: 102 }, { lat: -3, lon: 104 }, { lat: -6, lon: 107 },
  { lat: -7, lon: 112 }, { lat: 0, lon: 113 }, { lat: 2, lon: 114 }, { lat: -3, lon: 114 },
  { lat: 15, lon: 120 }, { lat: 10, lon: 122 }, { lat: 6, lon: 125 }, { lat: 1, lon: 122 },
  { lat: -2, lon: 120 }, { lat: -3, lon: 135 }, { lat: -4, lon: 140 },
  // Japan
  { lat: 32, lon: 130 }, { lat: 35, lon: 135 }, { lat: 38, lon: 139 }, { lat: 43, lon: 142 },
  // Australia / NZ
  { lat: -22, lon: 115 }, { lat: -25, lon: 113 }, { lat: -30, lon: 115 }, { lat: -34, lon: 116 },
  { lat: -12, lon: 125 }, { lat: -12, lon: 131 }, { lat: -12, lon: 136 }, { lat: -15, lon: 141 },
  { lat: -20, lon: 147 }, { lat: -25, lon: 151 }, { lat: -30, lon: 152 }, { lat: -35, lon: 150 },
  { lat: -38, lon: 145 }, { lat: -34, lon: 125 }, { lat: -34, lon: 135 }, { lat: -37, lon: 140 },
  { lat: -42, lon: 146 }, { lat: -37, lon: 175 }, { lat: -41, lon: 175 }, { lat: -45, lon: 170 },
  { lat: -46, lon: 167 }
];

const GlobeWidget = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [zoomFactor, setZoomFactor] = useState(1);
  const [rotationSpeed, setRotationSpeed] = useState(0.003);
  const rotationRef = useRef(0);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const autocompleteList = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany",
    "Ireland", "France", "Netherlands", "New Zealand", "Singapore", 
    "Sweden", "Switzerland", "Italy", "Spain", "Austria"
  ];

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length > 0) {
      const filtered = autocompleteList.filter(country =>
        country.toLowerCase().includes(val.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (country) => {
    setSearchQuery(country);
    setSuggestions([]);
    setShowSuggestions(false);
    setTimeout(() => {
      triggerSubmit(country);
    }, 50);
  };

  const matchCountry = (query) => {
    const q = query.toLowerCase().trim();
    const exactMatches = {
      "usa": "usa",
      "us": "usa",
      "uk": "uk",
      "aus": "australia",
      "can": "canada",
      "ger": "germany",
    };
    if (exactMatches[q]) return exactMatches[q];

    if (q === "united states" || q === "united states of america" || q === "america") return "usa";
    if (q === "united kingdom" || q === "england" || q === "britain" || q === "great britain") return "uk";
    if (q === "canada") return "canada";
    if (q === "australia" || q === "austrilia") return "australia";
    if (q === "germany" || q === "germani" || q === "deutschland") return "germany";

    const tokens = q.split(/\s+/);
    if (tokens.includes("usa") || tokens.includes("america") || tokens.includes("states")) return "usa";
    if (tokens.includes("uk") || tokens.includes("kingdom") || tokens.includes("england") || tokens.includes("britain")) return "uk";
    if (tokens.includes("canada")) return "canada";
    if (tokens.includes("australia") || tokens.includes("austrilia")) return "australia";
    if (tokens.includes("germany") || tokens.includes("germani")) return "germany";

    return null;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = (canvas.width / 2.6) * zoomFactor;

      rotationRef.current += rotationSpeed;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      for (let lat = -60; lat <= 60; lat += 30) {
        const r = radius * Math.cos((lat * Math.PI) / 180);
        const y = cy + radius * Math.sin((lat * Math.PI) / 180);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.beginPath();
        ctx.ellipse(cx, y, Math.abs(r), Math.abs(r * 0.2 * Math.sin(rotationRef.current)), 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      for (let lon = 0; lon < 360; lon += 45) {
        const angle = (lon * Math.PI) / 180 + rotationRef.current;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(radius * Math.cos(angle)), radius, 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      landmassPoints.forEach(pt => {
        const radLat = (pt.lat * Math.PI) / 180;
        const radLon = (pt.lon * Math.PI) / 180 + rotationRef.current;

        const x = cx + radius * Math.cos(radLat) * Math.sin(radLon);
        const y = cy - radius * Math.sin(radLat);
        const z = Math.cos(radLat) * Math.cos(radLon);

        if (z > 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.15 * z})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.8 * z, 0, 2 * Math.PI);
          ctx.fill();
        }
      });

      const dots = [
        { lat: 38, lon: -97, label: "USA" },
        { lat: 55, lon: -3, label: "UK" },
        { lat: 56, lon: -106, label: "Canada" },
        { lat: -25, lon: 133, label: "Australia" },
        { lat: 51, lon: 10, label: "Germany" }
      ];

      dots.forEach(dot => {
        const radLat = (dot.lat * Math.PI) / 180;
        const radLon = (dot.lon * Math.PI) / 180 + rotationRef.current;
        
        const x = cx + radius * Math.cos(radLat) * Math.sin(radLon);
        const y = cy - radius * Math.sin(radLat);
        const z = Math.cos(radLat) * Math.cos(radLon);

        if (z > 0) {
          ctx.fillStyle = "#e0a52b";
          ctx.beginPath();
          ctx.arc(x, y, 5 * z, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.font = "bold 9px monospace";
          ctx.fillText(dot.label, x + 7, y + 3);
        } else {
          ctx.fillStyle = "rgba(253, 186, 49, 0.2)";
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
          ctx.font = "italic 8px monospace";
          ctx.fillText(dot.label, x + 5, y + 2);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [zoomFactor, rotationSpeed]);

  const triggerSubmit = (query) => {
    if (!query.trim()) return;

    setIsAnimating(true);
    setRotationSpeed(0.08);

    let currentZoom = 1;
    const interval = setInterval(() => {
      currentZoom += 0.06;
      setZoomFactor(currentZoom);
      if (currentZoom >= 1.8) {
        clearInterval(interval);
        
        const matchedId = matchCountry(query);
        if (matchedId) {
          toast.success(`Zooming to Study in ${matchedId.toUpperCase()}!`);
          setTimeout(() => {
            navigate(`/destinations/${matchedId}`);
            setIsAnimating(false);
            setZoomFactor(1);
            setRotationSpeed(0.003);
            setSearchQuery("");
          }, 500);
        } else {
          toast(`Opening Enquiry for "${query}"`, { icon: '✈️' });
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent('open-quick-enquiry', { detail: { country: query } }));
            setIsAnimating(false);
            setZoomFactor(1);
            setRotationSpeed(0.003);
            setSearchQuery("");
          }, 500);
        }
      }
    }, 25);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerSubmit(searchQuery);
  };

  return (
    <div className="globe-widget-card" style={{ background: 'var(--color-bg-dark, #1a202c)', color: '#fff', padding: '2rem', borderRadius: '16px' }}>
      <div className="globe-circle-wrap" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <canvas ref={canvasRef} width="180" height="180" className="globe-canvas" />
      </div>
      <div className="globe-widget-details" style={{ textAlign: 'center' }}>
        <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Explore Other Destinations</h4>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Search any country to start your journey.</p>
        <form onSubmit={handleSubmit} className="globe-search-form" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Where do you want to fly? (e.g. Germany)"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => { if (searchQuery.trim()) setShowSuggestions(true); }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            disabled={isAnimating}
            className="globe-search-input"
            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }}
          />
          <button type="submit" className="globe-search-submit" disabled={isAnimating} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.25rem', cursor: 'pointer' }}>
            ✈
          </button>
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <div className="globe-suggestions-pills" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
            {suggestions.map((country, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSuggestion(country)}
                className="globe-suggestion-pill"
                style={{ padding: '0.35rem 0.75rem', borderRadius: '15px', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', fontSize: '0.8rem', cursor: 'pointer' }}
              >
                {country}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const StudyAbroadDestinations = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#explore-destinations") {
      const el = document.getElementById("explore-destinations");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="service-detail-page fade-in">
      {/* Hero / Breadcrumb */}
      <section className="service-hero bg-gray">
        <div className="container text-center">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services/study-abroad-pathway">Study Abroad</Link>
            <span>/</span>
            <span className="text-black font-medium">Destinations</span>
          </nav>
          <h1>Popular Destinations</h1>
        </div>
      </section>

      <PathwayTopNav />

      <div className="container">
        <div className="service-layout-grid">
          {/* Main Content */}
          <main className="service-main-content">
            <section className="service-intro mb-12">
              <h2>Explore timelines, intake cycles, and guidebooks for global universities.</h2>
              <p className="text-xl text-gray-700 mb-8">
                Different destinations offer unique strengths in different fields. We help you choose the right country based on admission feasibility, budget, visa policies, and post-study employment rights.
              </p>

              <h3>Major Destination Guidebooks</h3>
              <div className="destinations-masonry-mini" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
                {destinationsData.map((dest, i) => (
                  <div key={i} className="dest-mini-card" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                    <div style={{ padding: '1rem' }}>
                      <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: '700' }}>{dest.name}</h4>
                      {dest.hasGuide ? (
                        <Link to={`/destinations/${dest.id}`} style={{ fontSize: '0.875rem', color: 'var(--color-brand-primary)', fontWeight: '600', textDecoration: 'none' }}>
                          View Application Guide →
                        </Link>
                      ) : (
                        <span style={{ fontSize: '0.875rem', color: '#999' }}>Guide coming soon</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="benefits-section mb-12" id="explore-destinations">
              <h3>Interactive Destination Finder</h3>
              <p className="mb-8">Use our global canvas to search for your target country and initiate your path planning with our team.</p>
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <GlobeWidget />
              </div>
            </section>
          </main>

          {/* Fixed Side Image / CTA */}
          <div className="service-image-panel">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
              alt="Globe exploration"
              className="grayscale"
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
              >
                Inquire About a Destination
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadDestinations;
