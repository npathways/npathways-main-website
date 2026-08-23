import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PathwayTopNav.css';

const PathwayTopNav = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine context
  const isStudyAbroadContext = 
    path.includes('study-abroad') || 
    path.includes('visa-assistance');

  const corePathwaysItems = [
    { name: 'Academic Pathways', link: '/services/education-consulting' },
    { name: 'Career Pathways', link: '/services/career-guidance' },
    { name: 'Curricular-Based Pathways', link: '/services/curricular-based-pathways' },
    { name: 'Pathway Programs (Bridge Courses)', link: '/services/pathway-programs' },
    { name: 'Competitive Exam Pathways', link: '/services/competitive-exam-strategy' },
    { name: 'Skill & Bootcamp Pathways', link: '/bootcamps-webinars' }
  ];

  const studyAbroadItems = [
    { name: 'Study Abroad Overview', link: '/services/study-abroad-pathway' },
    { name: 'Visa & Study Abroad Assistance', link: '/services/visa-assistance' },
    { name: '360° Complete Support', link: '/services/study-abroad/complete-support' },
    { name: 'Popular Destinations', link: '/services/study-abroad/destinations' }
  ];

  const items = isStudyAbroadContext ? studyAbroadItems : corePathwaysItems;

  return (
    <div className="pathway-top-nav-bar">
      <div className="container">
        <div className="pathway-top-nav-links">
          {items.map((item, index) => {
            const isActive = path === item.link;
            return (
              <Link
                key={index}
                to={item.link}
                className={`pathway-top-nav-link ${isActive ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PathwayTopNav;
