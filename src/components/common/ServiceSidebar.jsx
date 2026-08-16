import React from "react";
import { Link, useLocation } from "react-router-dom";
const ServiceSidebar = () => {
  const location = useLocation();
  
  const allSidebarItems = [
    {
      id: 'academic-pathways',
      name: 'Academic Pathways',
      link: '/services/education-consulting'
    },
    {
      id: 'career-pathways',
      name: 'Career Pathways',
      link: '/services/career-guidance'
    },
    {
      id: 'curricular-based-pathways',
      name: 'Curricular-Based Pathways',
      link: '/services/curricular-based-pathways'
    },
    {
      id: 'pathway-programs',
      name: 'Pathway Programs (Bridge Courses)',
      link: '/services/pathway-programs'
    },
    {
      id: 'competitive-exam-strategy',
      name: 'Competitive Exam Pathways',
      link: '/services/competitive-exam-strategy'
    },
    {
      id: 'skill-bootcamp-pathways',
      name: 'Skill & Bootcamp Pathways',
      link: '/bootcamps-webinars'
    },
    {
      id: 'study-abroad-pathway',
      name: 'Study Abroad Pathway',
      link: '/services/study-abroad-pathway'
    }
  ];

  const isActive = (itemLink) => {
    if (location.pathname === itemLink) return true;
    if (itemLink === '/services/study-abroad-pathway' && location.pathname === '/services/visa-assistance') {
      return true;
    }
    return false;
  };

  return (
    <aside className="service-sidebar">
      <div className="sidebar-widget">
        <h3 className="widget-title">Our Pathways & Services</h3>
        <ul className="sidebar-nav">
          {allSidebarItems.map((s) => (
            <li key={s.id} className="sidebar-nav-item">
              <Link
                to={s.link}
                className={`sidebar-nav-link ${
                  isActive(s.link) ? "active" : ""
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
