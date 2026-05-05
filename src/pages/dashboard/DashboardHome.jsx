import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/common/Card';
import './DashboardHome.css';

const DashboardHome = () => {
  const { user } = useAuth();
  
  // Mock data for dashboard
  const stats = [
    { label: 'Purchased Products', value: '2', icon: '📦' },
    { label: 'Files Uploaded', value: '5', icon: '📂' },
    { label: 'Profile Completion', value: '80%', icon: '👤' },
  ];

  const recentActivity = [
    { id: 1, action: 'Purchased "Visa Dossier Kit"', date: '2 days ago' },
    { id: 2, action: 'Uploaded "Passport Copy"', date: '3 days ago' },
    { id: 3, action: 'Updated Profile Information', date: '1 week ago' },
  ];

  return (
    <div className="dashboard-home fade-in">
      <div className="welcome-banner">
        <h1>Welcome back, {user?.name || 'User'}!</h1>
        <p>Here's what's happening with your applications today.</p>
      </div>

      <div className="stats-grid-dashboard">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card">
            <div className="stat-icon-wrapper">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="dashboard-sections-grid">
        <div className="recent-activity-section">
          <h2>Recent Activity</h2>
          <Card>
            <ul className="activity-list">
              {recentActivity.map(activity => (
                <li key={activity.id}>
                  <span className="activity-text">{activity.action}</span>
                  <span className="activity-date">{activity.date}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        
        <div className="quick-actions-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions-grid">
            <Link to="/dashboard/my-files" className="quick-action-card">
              <span className="action-icon">📤</span>
              <span>Upload Document</span>
            </Link>
            <Link to="/products" className="quick-action-card">
              <span className="action-icon">🛒</span>
              <span>Browse Products</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
