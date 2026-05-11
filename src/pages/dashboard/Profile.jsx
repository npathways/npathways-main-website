import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/common/Button';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'User Name',
    email: user?.email || 'user@example.com',
    phone: '+91 98765 43210',
    targetCountry: 'United Kingdom',
    intake: 'Fall 2026'
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic would go here
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-page fade-in">
      <h1 className="mb-6">My Profile</h1>
      
      <div className="profile-container">
        <div className="profile-header-card">
          <div className="profile-avatar-large">
            {profileData.name.charAt(0).toUpperCase()}
          </div>
          <div className="profile-identity">
            <h2>{profileData.name}</h2>
            <p className="text-gray-500">{profileData.email}</p>
            <span className="student-badge">Aspiring Member</span>
          </div>
          <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel Editing' : 'Edit Profile'}
          </Button>
        </div>

        <div className="profile-details-card">
          <form onSubmit={handleSave}>
            <div className="profile-section">
              <h3>Personal Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={profileData.name} 
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={!isEditing ? 'readonly-input' : 'form-input'}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    value={profileData.email} 
                    readOnly
                    className="readonly-input disabled"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={profileData.phone} 
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={!isEditing ? 'readonly-input' : 'form-input'}
                  />
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h3>Academic Goals</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Target Country</label>
                  <select 
                    name="targetCountry"
                    value={profileData.targetCountry}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={!isEditing ? 'readonly-input' : 'form-input'}
                  >
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Ireland</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Target Intake</label>
                  <input 
                    type="text" 
                    name="intake"
                    value={profileData.intake} 
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={!isEditing ? 'readonly-input' : 'form-input'}
                  />
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="form-actions text-right mt-6">
                <Button type="submit" variant="primary">Save Changes</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
