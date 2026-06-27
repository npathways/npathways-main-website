import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/common/Button";
import BackButton from "../../components/common/BackButton";
import { FiEye, FiEyeOff, FiCheck, FiX } from 'react-icons/fi';
import "./Login.css"; // Reusing Login styles
import "../../components/auth/LoginForm.css"; // Form and card styles

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register } = useAuth(); // Assuming register function exists in auth context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const passwordCriteria = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password),
  };
  const isPasswordValid = formData.password.length > 0 && Object.values(passwordCriteria).every(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!isPasswordValid) {
      setError("Please ensure your password meets all requirements");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    try {
      await register(formData.name, formData.email, formData.password);
      navigate("/dashboard"); // Direct to dashboard or login
    } catch (err) {
      console.error(err);
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page fade-in">
      <div className="container">
        <BackButton label="Home" to="/" />
        <div className="auth-layout">
          <div className="auth-illustration">
            <div className="illustration-content">
              <h1>Join NPathways</h1>
              <p>Create your account to start your global education journey.</p>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600&h=450"
                alt="Register Illustration"
                style={{ borderRadius: '8px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="auth-form-container">
            <div className="login-card">
              {" "}
              {/* Reuse login card style */}
              <h2 className="text-center mb-6">Create Account</h2>
              
              {error && <div className="error-alert">{error}</div>}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="form-input"
                      style={{ paddingRight: '2.5rem' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0
                      }}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                  <div style={{ color: passwordCriteria.uppercase ? '#00C194' : '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', transition: 'color 0.2s ease' }}>
                    {passwordCriteria.uppercase ? <FiCheck /> : <FiX />} One uppercase letter
                  </div>
                  <div style={{ color: passwordCriteria.number ? '#00C194' : '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', transition: 'color 0.2s ease' }}>
                    {passwordCriteria.number ? <FiCheck /> : <FiX />} One number
                  </div>
                  <div style={{ color: passwordCriteria.special ? '#00C194' : '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', transition: 'color 0.2s ease' }}>
                    {passwordCriteria.special ? <FiCheck /> : <FiX />} One special character
                  </div>
                  <div style={{ color: passwordCriteria.length ? '#00C194' : '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s ease' }}>
                    {passwordCriteria.length ? <FiCheck /> : <FiX />} Minimum 8 characters
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="form-input"
                      style={{ paddingRight: '2.5rem' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0
                      }}
                      aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                    >
                      {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="medium"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </Button>
              </form>
              <div className="login-footer">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
