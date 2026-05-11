import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="dashboard-content-wrapper">
        <header className="dashboard-header">
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </button>
          <div className="dashboard-title">
             {/* Can be dynamic based on route */}
             Dashboard
          </div>
          <div className="user-profile-preview">
            <span className="user-name">{user?.name || 'User'}</span>
            <div className="avatar-circle">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
          </div>
        </header>
        
        <main className="dashboard-main fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
