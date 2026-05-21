import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <div className="not-found-divider"></div>
        <h2 className="not-found-title">Path Not Found</h2>
        <p className="not-found-text">
          The global pathway you are looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <Link to="/" className="back-home-btn">
          Back to Reality
        </Link>
      </div>
      <div className="not-found-bg-text">NPATHWAYS</div>
    </div>
  );
};

export default NotFound;
