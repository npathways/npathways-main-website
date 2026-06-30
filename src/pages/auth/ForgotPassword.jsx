import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
import BackButton from "../../components/common/BackButton";
import "./Login.css"; // Reuse login styles

const ForgotPassword = () => {
  return (
    <div className="auth-page fade-in">
      <div className="container">
        <BackButton label="Login" to="/login" />
        <div className="auth-layout">
          <div className="auth-illustration">
            <div className="illustration-content">
              <h1>Forgot Password</h1>
              <p>
                Don't worry, we'll help you get back into your account.
              </p>
              <img
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600&h=450"
                alt="Forgot Password Illustration"
                style={{ borderRadius: '8px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="auth-form-container">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
