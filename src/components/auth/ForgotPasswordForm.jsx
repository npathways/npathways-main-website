import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './LoginForm.css'; // Reuse existing styles

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}/auth/portal/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to process request");
      }

      setMessage(data.message || "Reset link sent to your email.");
      setEmail('');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card">
      <h2 className="text-center mb-6">Reset Password</h2>
      <p className="text-center mb-6" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      {error && <div className="error-alert">{error}</div>}
      {message && <div className="success-alert" style={{ 
        padding: '0.75rem', 
        marginBottom: '1rem', 
        borderRadius: 'var(--radius-sm)', 
        backgroundColor: 'rgba(16, 185, 129, 0.1)', 
        color: 'var(--color-success)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        fontSize: 'var(--font-size-sm)'
      }}>{message}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
            placeholder="user@npathways.com"
          />
        </div>
        
        <Button 
          type="submit" 
          variant="primary" 
          fullWidth 
          size="medium"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>
      
      <div className="login-footer">
        <p>
          Remembered your password? <Link to="/login">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
