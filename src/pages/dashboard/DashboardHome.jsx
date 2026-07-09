import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import { FiBookOpen, FiGlobe, FiAward, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import Card from '../../components/common/Card';
import Modal from '../../components/common/Modal';
import LeadForm from '../../components/common/LeadForm';
import './DashboardHome.css';

const DashboardHome = () => {
  const { user } = useAuth();
  const { profileProgress } = useProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  
  const services = [
    {
      title: "Study Abroad",
      description: "End-to-end guidance for international university admissions, ensuring you find the perfect alignment.",
      icon: <FiGlobe />,
      program: "Study Abroad"
    },
    {
      title: "Skills & Bootcamps",
      description: "Industry-aligned bootcamps designed to build your capability for the global market.",
      icon: <FiBookOpen />,
      program: "Skills & Bootcamps"
    },
    {
      title: "Internships & Research",
      description: "Gain practical experience and academic depth through our curated global programs.",
      icon: <FiAward />,
      program: "Internships & Research"
    },
    {
      title: "Career Guidance",
      description: "Scientific assessments and discovery sessions to find your true career path with clarity.",
      icon: <FiBriefcase />,
      program: "Career Guidance"
    }
  ];

  const handleEnquireClick = (program) => {
    setSelectedService(program);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard-home fade-in">
      <div className="welcome-banner">
        <h1>Welcome back, {user?.name || 'User'}!</h1>
        <p>Explore our premium services and take the next step in your journey.</p>
        
        <div className="dashboard-progress mt-6">
          <div className="progress-header">
            <h3>Profile Completion</h3>
            <span>{profileProgress}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${profileProgress}%` }}></div>
          </div>
          {profileProgress < 100 && (
            <p className="progress-helper-text">
              Complete your profile in the Profile tab.
            </p>
          )}
        </div>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="service-icon-wrapper">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button 
                  className="service-link" 
                  onClick={() => handleEnquireClick(service.program)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Enquire Now <FiArrowRight />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Service Enquiry"
      >
        <LeadForm 
          source="Dashboard Service Enquiry" 
          variant="light" 
          initialProgram={selectedService}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default DashboardHome;
