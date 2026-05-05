import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import {
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isAuthenticated, user } = useAuth();
  const { getCartCount, toggleCart } = useCart();

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
              <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
                <span className="logo-text">NPathways</span>
                <span className="logo-subtitle">Global</span>
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
                  className={`nav-dropdown ${
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
                  <div className="dropdown-menu">
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
                  </div>
                </div>

                <div
                  className={`nav-dropdown ${
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
                  <div className="dropdown-menu">
                    <div className="dropdown-category">
                      <span className="category-label">Stakeholder Services</span>
                      <Link
                        to="/services/parents"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        For Parents
                      </Link>
                      <Link
                        to="/services/schools"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        For Schools
                      </Link>
                    </div>
                    <div className="dropdown-category">
                      <span className="category-label">Core Offerings</span>
                      <Link
                        to="/services/assessments"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Career & Assessments
                      </Link>
                      <Link
                        to="/services/bootcamps"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Bootcamps
                      </Link>
                      <Link
                        to="/services/school-programs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        School Programs
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className={`nav-dropdown ${
                    activeDropdown === "products" ? "active" : ""
                  }`}
                >
                  <Link
                    to="/products"
                    className="nav-link dropdown-toggle"
                    onClick={(e) => handleDropdownToggle(e, "products")}
                  >
                    Products <FiChevronDown className="chevron" />
                  </Link>
                  <div className="dropdown-menu">
                    <div className="dropdown-category">
                      <span className="category-label">Pathways & Programs</span>
                      <Link
                        to="/products/pathways"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Full Pathways
                      </Link>
                      <Link
                        to="/products/programs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Structured Programs
                      </Link>
                      <Link
                        to="/products/subscriptions"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Subscriptions
                      </Link>
                    </div>
                    <div className="dropdown-category">
                      <span className="category-label">Readiness Tools</span>
                      <Link
                        to="/products/assessments"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Assessments
                      </Link>
                      <Link
                        to="/products/bootcamps"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Bootcamps
                      </Link>
                      <Link
                        to="/products/payments"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Payment Info
                      </Link>
                    </div>
                  </div>
                </div>
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
              {/* Cart Icon */}
              <button
                className="cart-button"
                onClick={toggleCart}
                aria-label="Shopping Cart"
              >
                <FiShoppingCart className="cart-icon" />
                {getCartCount() > 0 && (
                  <span className="cart-badge">{getCartCount()}</span>
                )}
              </button>

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
