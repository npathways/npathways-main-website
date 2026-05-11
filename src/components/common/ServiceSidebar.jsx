import React from "react";
import { Link, useLocation } from "react-router-dom";
import { consultancyServices, supportServices } from "../../data/services";

const ServiceSidebar = () => {
  const location = useLocation();
  const allServices = [...consultancyServices, ...supportServices];

  return (
    <aside className="service-sidebar">
      <div className="sidebar-widget">
        <h3 className="widget-title">Our Services</h3>
        <ul className="sidebar-nav">
          {allServices.map((s) => (
            <li key={s.id} className="sidebar-nav-item">
              <Link
                to={s.link}
                className={`sidebar-nav-link ${
                  location.pathname === s.link ? "active" : ""
                }`}
              >
                {s.name}
                <span>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
