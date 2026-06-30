import ResetPasswordForm from "../../components/auth/ResetPasswordForm";
import BackButton from "../../components/common/BackButton";
import "./Login.css"; // Reuse login styles

const ResetPassword = () => {
  return (
    <div className="auth-page fade-in">
      <div className="container">
        <BackButton label="Login" to="/login" />
        <div className="auth-layout">
          <div className="auth-illustration">
            <div className="illustration-content">
              <h1>Secure Your Account</h1>
              <p>
                Choose a strong password to protect your data and applications.
              </p>
              <img
                src="https://images.unsplash.com/photo-1614064641913-6b05e41ce2b2?auto=format&fit=crop&q=80&w=600&h=450"
                alt="Reset Password Illustration"
                style={{ borderRadius: '8px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="auth-form-container">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
