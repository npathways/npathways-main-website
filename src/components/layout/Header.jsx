import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

import { FiUser, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (e, name) => {
    // Only apply toggle logic on mobile
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-island">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              {/* Logo */}
              <Link
                to="/"
                className="logo"
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: "70px" }}
                />
              </Link>
              {/* Desktop Navigation */}
              <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <div
                  className={`nav-dropdown mega-dropdown-wrapper ${
                    activeDropdown === "about" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/about"
                    className="nav-link dropdown-toggle"
                    onClick={(e) => handleDropdownToggle(e, "about")}
                  >
                    About <FiChevronDown className="chevron" />
                  </Link>
                  <div className="dropdown-menu cols-1">
                    <div className="dropdown-container">
                      {/* Column 1: Explore Callout (Apple-style) */}
                      <div className="dropdown-col-explore">
                        <span className="explore-label">Explore About</span>
                        <h3>Who We <br />Are</h3>
                        <Link
                          to="/about"
                          className="explore-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Read Our Story <span>→</span>
                        </Link>
                      </div>

                      {/* Column 2: Company */}
                      <div className="dropdown-category">
                        <span className="category-label">Company</span>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                          Overview
                        </Link>
                        <Link
                          to="/about/founder"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About Founder
                        </Link>
                        <Link
                          to="/about/how-it-works"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          How It Works
                        </Link>
                      </div>

                      {/* Column 3: Philosophy */}
                      <div className="dropdown-category">
                        <span className="category-label">Philosophy</span>
                        <Link
                          to="/about#ikigai"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Ikigai
                        </Link>
                        <Link
                          to="/about#kiku"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Kiku
                        </Link>
                        <Link
                          to="/about#kaizen"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Kaizen
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`nav-dropdown mega-dropdown-wrapper ${
                    activeDropdown === "services" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/services"
                    className="nav-link dropdown-toggle"
                    onClick={(e) => handleDropdownToggle(e, "services")}
                  >
                    Services <FiChevronDown className="chevron" />
                  </Link>
                  <div className="dropdown-menu cols-2">
                    <div className="dropdown-container">
                      {/* Column 1: Explore Callout (Apple-style) */}
                      <div className="dropdown-col-explore">
                        <span className="explore-label">Explore Services</span>
                        <h3>Design Your <br />Pathway</h3>
                        <Link
                          to="/services"
                          className="explore-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          All Services Overview <span>→</span>
                        </Link>
                      </div>

                      {/* Column 2: Core Pathways */}
                      <div className="dropdown-category">
                        <span className="category-label">Pathways</span>
                        <Link
                          to="/services/education-consulting"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Academic Pathways
                        </Link>
                        <Link
                          to="/services/career-guidance"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Career Pathways
                        </Link>
                        <Link
                          to="/services/curricular-based-pathways"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Curricular-Based Pathways
                        </Link>
                        <Link
                          to="/services/pathway-programs"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Pathway Programs (Bridge Courses)
                        </Link>
                        <Link
                          to="/services/competitive-exam-strategy"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Competitive Exam Pathways
                        </Link>
                        <Link
                          to="/bootcamps-webinars"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Skill & Bootcamp Pathways
                        </Link>
                      </div>

                      {/* Column 3: Study Abroad Pathway & Subcat Services */}
                      <div className="dropdown-category">
                        <span className="category-label">Study Abroad Pathway</span>
                        <Link
                          to="/services/study-abroad-pathway"
                          onClick={() => setIsMenuOpen(false)}
                          style={{ fontWeight: "700", color: "var(--color-brand-primary)" }}
                        >
                          Study Abroad Pathway (Overview)
                        </Link>
                        <Link
                          to="/services/visa-assistance"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Visa & Study Abroad Assistance
                        </Link>
                        <Link
                          to="/services/study-abroad/student-support"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Complete Student Support
                        </Link>
                        <Link
                          to="/services/study-abroad/parent-support"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Complete Parents Support
                        </Link>
                        <Link
                          to="/services/study-abroad/destinations"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Popular Destinations
                        </Link>
                        <Link
                          to="/services/study-abroad/destinations#explore-destinations"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Explore Other Destinations
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/bootcamps-webinars"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bootcamps & Webinars
                </Link>

                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Actions */}
            <div className="header-actions">
              {/* User/Login */}
              {isAuthenticated ? (
                <Link to="/dashboard" className="user-button">
                  <FiUser className="user-icon" />
                  <span className="user-name">{user?.name}</span>
                </Link>
              ) : (
                <Link to="/login" className="login-button">
                  Login
                </Link>
              )}

              {/* Mobile Menu Toggle */}
              <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
