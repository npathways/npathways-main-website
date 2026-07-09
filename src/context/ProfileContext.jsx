import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from './AuthContext';
import { toast } from 'react-hot-toast';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    // Personal Details
    phone: '',
    gender: '',
    nationality: '',
    maritalStatus: 'Unmarried',
    passportNumber: '',
    photo: null,
    
    // Guardian Details
    guardianName: '',
    guardianMobile: '',
    guardianEmail: '',
    relation: '',
    
    // Address Details
    street: '',
    apartment: '',
    country: '',
    state: '',
    city: '',
    postalCode: ''
  });
  const [loading, setLoading] = useState(true);

  // Combine auth user data with profile data for the frontend views
  const fullProfileData = useMemo(() => {
    return {
      ...profileData,
      name: user?.name || '',
      email: user?.email || '',
      initials: user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : '',
    };
  }, [profileData, user]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.token) return;
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
        const response = await fetch(`${baseUrl}/profiles/me`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          // Map backend fields to frontend fields
          setProfileData(prev => ({
            ...prev,
            phone: data.phone || '',
            gender: data.gender || '',
            nationality: data.nationality || '',
            maritalStatus: data.maritalStatus || 'Unmarried',
            passportNumber: data.passportNumber || '',
            guardianName: data.guardianName || '',
            guardianMobile: data.guardianMobile || '',
            guardianEmail: data.guardianEmail || '',
            relation: data.guardianRelation || '',
            street: data.addressStreet || '',
            apartment: data.addressApartment || '',
            country: data.addressCountry || '',
            state: data.addressState || '',
            city: data.addressCity || '',
            postalCode: data.addressPostalCode || ''
          }));
        }
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const saveProfileToBackend = async (fullDraftData) => {
    if (!user?.token) return;
    try {
      // Map frontend fields back to backend payload
      const payload = {
        phone: fullDraftData.phone,
        gender: fullDraftData.gender,
        nationality: fullDraftData.nationality,
        maritalStatus: fullDraftData.maritalStatus,
        passportNumber: fullDraftData.passportNumber,
        guardianName: fullDraftData.guardianName,
        guardianMobile: fullDraftData.guardianMobile,
        guardianEmail: fullDraftData.guardianEmail,
        guardianRelation: fullDraftData.relation,
        addressStreet: fullDraftData.street,
        addressApartment: fullDraftData.apartment,
        addressCountry: fullDraftData.country,
        addressState: fullDraftData.state,
        addressCity: fullDraftData.city,
        addressPostalCode: fullDraftData.postalCode
      };

      const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
      const response = await fetch(`${baseUrl}/profiles/me`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) throw new Error('Failed to update profile');
      
      // Update global context state with the saved data
      setProfileData(fullDraftData);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error(error);
      toast.error('Could not save profile changes');
      throw error;
    }
  };

  const profileProgress = useMemo(() => {
    const fieldsToCheck = [
      'name', 'email', 'phone', 'gender', 'nationality', 'maritalStatus', 'passportNumber',
      'guardianName', 'guardianMobile', 'guardianEmail', 'relation',
      'street', 'country', 'state', 'city', 'postalCode'
    ];
    let filledCount = 0;
    fieldsToCheck.forEach(field => {
      if (fullProfileData[field] && String(fullProfileData[field]).trim() !== '') {
        filledCount++;
      }
    });
    return Math.round((filledCount / fieldsToCheck.length) * 100);
  }, [fullProfileData]);

  return (
    <ProfileContext.Provider value={{ profileData: fullProfileData, saveProfileToBackend, profileProgress, loading }}>
      {children}
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }
  return context;
};

export default ProfileContext;
