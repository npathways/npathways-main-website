import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import { FiCamera, FiEdit2, FiSave, FiX } from 'react-icons/fi';
import Button from '../../components/common/Button';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const { profileData, saveProfileToBackend, profileProgress } = useProfile();
  
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [draftData, setDraftData] = useState(null);
  const fileInputRef = useRef(null);

  // Location Data State
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);

  // Requested Countries Mapping
  const targetCountries = [
    "India", "United Arab Emirates", "United Kingdom", "New Zealand", "Australia", 
    "Canada", "Switzerland", "Germany", "France", "Hungary", "Singapore", 
    "Russia", "United States", "Georgia", "Malaysia", "Italy", "Ireland", 
    "Spain", "Cyprus", "Netherlands", "Barbados", "Japan", "Malta", 
    "Grenada", "Poland"
  ];

  // Fetch Countries on Mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const cachedCountries = localStorage.getItem('npathways_countries');
        if (cachedCountries) {
          setCountries(JSON.parse(cachedCountries));
          setIsLoadingLocation(false);
          return;
        }

        const res = await fetch('https://countriesnow.space/api/v0.1/countries/states');
        const data = await res.json();
        
        if (!data.error) {
          // Normalize some names to match our target list
          const normalizedData = data.data.map(c => {
            let name = c.name;
            if (name === 'Russian Federation') name = 'Russia';
            return { ...c, name };
          });

          const filtered = normalizedData.filter(c => targetCountries.includes(c.name));
          
          // Add North Cyprus manually if not found (usually treated under Cyprus)
          if (!filtered.some(c => c.name === 'North Cyprus')) {
             filtered.push({ name: 'North Cyprus', states: [] });
          }

          setCountries(filtered.sort((a, b) => a.name.localeCompare(b.name)));
          localStorage.setItem('npathways_countries', JSON.stringify(filtered));
        }
      } catch (err) {
        console.error("Failed to fetch countries", err);
      } finally {
        setIsLoadingLocation(false);
      }
    };
    fetchCountries();
  }, []);

  // Sync draftData with profileData or localStorage
  useEffect(() => {
    if (!profileData) return;
    const draftKey = `npathways_profile_draft_${user?.email || 'default'}`;
    const savedDraft = localStorage.getItem(draftKey);
    if (savedDraft) {
      setDraftData(JSON.parse(savedDraft));
      setIsEditing(true); // Automatically open edit mode if a draft exists
    } else {
      setDraftData(profileData);
    }
  }, [profileData, user]);

  const displayData = draftData || profileData;

  // Update States when Country changes
  useEffect(() => {
    if (displayData.country && countries.length > 0) {
      const selectedCountry = countries.find(c => c.name === displayData.country);
      if (selectedCountry && selectedCountry.states) {
        setStates(selectedCountry.states);
      } else {
        setStates([]);
      }
    } else {
      setStates([]);
    }
  }, [displayData.country, countries]);

  // Fetch Cities when State changes
  useEffect(() => {
    const fetchCities = async () => {
      if (displayData.country && displayData.state) {
        setIsLoadingCities(true);
        try {
          // Reverse normalization if needed
          let apiCountry = displayData.country;
          if (apiCountry === 'Russia') apiCountry = 'Russian Federation';
          if (apiCountry === 'North Cyprus') {
            setCities([]); 
            setIsLoadingCities(false);
            return;
          }

          const res = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              country: apiCountry,
              state: displayData.state
            })
          });
          const data = await res.json();
          if (!data.error) {
            setCities(data.data);
          } else {
            setCities([]);
          }
        } catch (err) {
          console.error("Failed to fetch cities", err);
          setCities([]);
        } finally {
          setIsLoadingCities(false);
        }
      } else {
        setCities([]);
      }
    };

    fetchCities();
  }, [displayData.country, displayData.state]);


  const updateDraftData = (updates) => {
    const newDraft = { ...displayData, ...updates };
    setDraftData(newDraft);
    const draftKey = `npathways_profile_draft_${user?.email || 'default'}`;
    localStorage.setItem(draftKey, JSON.stringify(newDraft));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-reset dependent fields
    if (name === 'country') {
      updateDraftData({ [name]: value, state: '', city: '' });
    } else if (name === 'state') {
      updateDraftData({ [name]: value, city: '' });
    } else {
      updateDraftData({ [name]: value });
    }
  };

  const handlePhotoClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoUrl = URL.createObjectURL(file);
      updateDraftData({ photo: photoUrl });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await saveProfileToBackend(displayData);
      const draftKey = `npathways_profile_draft_${user?.email || 'default'}`;
      localStorage.removeItem(draftKey);
      setIsEditing(false);
    } catch (err) {
      // Error is handled in context
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      // User is canceling edit, discard local draft
      const draftKey = `npathways_profile_draft_${user?.email || 'default'}`;
      localStorage.removeItem(draftKey);
      setDraftData(profileData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-page fade-in">
      <div className="profile-page-header">
        <h1>My Profile</h1>
        <Button 
          variant={isEditing ? "outline" : "primary"} 
          onClick={toggleEdit}
          className="edit-profile-btn"
        >
          {isEditing ? <><FiX /> Cancel Editing</> : <><FiEdit2 /> Edit Profile</>}
        </Button>
      </div>
      
      {/* Progress Bar Section */}
      <div className="profile-progress-container mb-8">
        <div className="progress-header">
          <h3>Profile Completion</h3>
          <span>{profileProgress}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${profileProgress}%` }}></div>
        </div>
        {profileProgress < 100 && (
          <p className="progress-helper-text">Complete your profile.</p>
        )}
      </div>

      <div className="profile-container">
        {/* Header Card */}
        <div className="profile-header-card">
          <div 
            className={`profile-avatar-large ${isEditing ? 'editable' : ''}`}
            onClick={handlePhotoClick}
            style={displayData.photo ? { backgroundImage: `url(${displayData.photo})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent' } : {}}
          >
            {!displayData.photo && displayData.initials}
            {isEditing && (
              <div className="avatar-edit-overlay">
                <FiCamera />
                <span>Upload</span>
              </div>
            )}
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handlePhotoChange} 
            accept="image/*" 
            style={{ display: 'none' }} 
          />
          <div className="profile-identity">
            <h2>{displayData.name}</h2>
            <p className="text-gray-500">{displayData.email}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="profile-tabs">
          <button 
            type="button"
            className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Details
          </button>
          <button 
            type="button"
            className={`tab-btn ${activeTab === 'guardian' ? 'active' : ''}`}
            onClick={() => setActiveTab('guardian')}
          >
            Guardian Details
          </button>
          <button 
            type="button"
            className={`tab-btn ${activeTab === 'address' ? 'active' : ''}`}
            onClick={() => setActiveTab('address')}
          >
            Address
          </button>
        </div>

        <form onSubmit={handleSave} className="profile-form">
          
          {/* Personal Details */}
          {activeTab === 'personal' && (
            <div className="profile-details-card tab-content fade-in">
              <div className="profile-section">
                <div className="section-header">
                  <h3>Personal Details</h3>
                  <p>View and manage student's personal details</p>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" name="name"
                      value={displayData.name} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" name="email"
                      value={displayData.email} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" name="phone"
                      value={displayData.phone} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select 
                      name="gender" value={displayData.gender} onChange={handleChange}
                      disabled={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    >
                      <option value="" disabled>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Nationality</label>
                    <select 
                      name="nationality" value={displayData.nationality} onChange={handleChange}
                      disabled={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    >
                      <option value="" disabled>Select Nationality</option>
                      {countries.map(c => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Marital Status</label>
                    <select 
                      name="maritalStatus" value={displayData.maritalStatus} onChange={handleChange}
                      disabled={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    >
                      <option value="" disabled>Select Marital Status</option>
                      <option>Unmarried</option>
                      <option>Married</option>
                      <option>Divorced</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Passport Number</label>
                    <input 
                      type="text" name="passportNumber" placeholder="Enter passport number"
                      value={displayData.passportNumber} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Guardian Details */}
          {activeTab === 'guardian' && (
            <div className="profile-details-card tab-content fade-in">
              <div className="profile-section">
                <div className="section-header">
                  <h3>Guardian Details</h3>
                  <p>Guardian contact information</p>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Guardian Name</label>
                    <input 
                      type="text" name="guardianName" placeholder="Guardian Name"
                      value={displayData.guardianName} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Guardian Mobile Number</label>
                    <input 
                      type="tel" name="guardianMobile" placeholder="Enter guardian mobile number"
                      value={displayData.guardianMobile} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Guardian Email</label>
                    <input 
                      type="email" name="guardianEmail" placeholder="guardian@example.com"
                      value={displayData.guardianEmail} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Relation</label>
                    <select 
                      name="relation" value={displayData.relation} onChange={handleChange}
                      disabled={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    >
                      <option value="" disabled>Father / Mother / etc.</option>
                      <option>Father</option>
                      <option>Mother</option>
                      <option>Legal Guardian</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Address Details */}
          {activeTab === 'address' && (
            <div className="profile-details-card tab-content fade-in">
              <div className="profile-section">
                <div className="section-header">
                  <h3>Address</h3>
                  <p>Residential address details</p>
                </div>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Street Address</label>
                    <input 
                      type="text" name="street" placeholder="Street address, P.O. box, company name, c/o"
                      value={displayData.street} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Apartment, suite, etc. (optional)</label>
                    <input 
                      type="text" name="apartment" placeholder="Apartment, suite, unit, building, floor, etc."
                      value={displayData.apartment} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select 
                      name="country" value={displayData.country} onChange={handleChange}
                      disabled={!isEditing || isLoadingLocation}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    >
                      <option value="" disabled>
                        {isLoadingLocation ? 'Loading countries...' : 'Select Country'}
                      </option>
                      {countries.map(c => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>State / Province</label>
                    {states.length > 0 ? (
                      <select 
                        name="state" value={displayData.state} onChange={handleChange}
                        disabled={!isEditing || !displayData.country}
                        className={!isEditing ? 'readonly-input' : 'form-input'}
                      >
                        <option value="" disabled>Select State</option>
                        {states.map(s => (
                          <option key={s.name} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    ) : (
                      <input 
                        type="text" name="state" placeholder={displayData.country ? "Enter State" : "Please select a country first"}
                        value={displayData.state} onChange={handleChange}
                        readOnly={!isEditing || !displayData.country}
                        className={!isEditing ? 'readonly-input' : 'form-input'}
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    {cities.length > 0 ? (
                      <select 
                        name="city" value={displayData.city} onChange={handleChange}
                        disabled={!isEditing || !displayData.state || isLoadingCities}
                        className={!isEditing ? 'readonly-input' : 'form-input'}
                      >
                        <option value="" disabled>
                          {isLoadingCities ? 'Loading cities...' : 'Select City'}
                        </option>
                        {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    ) : (
                      <input 
                        type="text" name="city" placeholder={displayData.state ? "Enter City" : "Please select a state first"}
                        value={displayData.city} onChange={handleChange}
                        readOnly={!isEditing || !displayData.state}
                        className={!isEditing ? 'readonly-input' : 'form-input'}
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label>Postal / Zip Code</label>
                    <input 
                      type="text" name="postalCode" placeholder="Enter Postal Code"
                      value={displayData.postalCode} onChange={handleChange}
                      readOnly={!isEditing}
                      className={!isEditing ? 'readonly-input' : 'form-input'}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {isEditing && (
            <div className="profile-actions-bottom">
              <Button type="submit" variant="primary" size="large">
                <FiSave style={{ marginRight: '8px' }} /> Save All Changes
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
