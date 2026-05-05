import LoginForm from "../../components/auth/LoginForm";
import BackButton from "../../components/common/BackButton";
import "./Login.css";

const Login = () => {
  return (
    <div className="auth-page fade-in">
      <div className="container">
        <BackButton label="Home" to="/" />
        <div className="auth-layout">
          <div className="auth-illustration">
            {/* We can use an illustration or info here */}
            <div className="illustration-content">
              <h1>User Portal</h1>
              <p>
                Access your dashboard, manage documents, and track your
                applications.
              </p>
              <img
                src="https://placehold.co/400x300/00C194/FFFFFF?text=User+Portal"
                alt="Login Illustration"
              />
            </div>
          </div>
          <div className="auth-form-container">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
