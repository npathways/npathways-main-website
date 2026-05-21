import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Quick fade out - don't block image loading
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <img src={logo} alt="Logo" style={{ height: "100px", marginBottom: "20px" }} />
        </div>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
