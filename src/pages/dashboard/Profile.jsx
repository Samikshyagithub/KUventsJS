import React, { useState, useEffect } from 'react';

const ProfileSection = () => {
  const [userData, setUserData] = useState({
    username: 'Kathmandu University Computer Club',
    email: 'kucc@ku.edu.np',
    department:'Department of Computer Engineering',
    profilePicture: '',
    eventsCreated: [
      { id: 1, name: 'Event 1', date: '2023-01-01', location: 'Venue 1' },
      { id: 2, name: 'Event 2', date: '2023-01-01', location: 'Venue 2' },
      { id: 3, name: 'Event 3', date: '2023-01-01', location: 'Venue 3' },
    ],
    eventsAttended: [
      { id: 2, name: 'Event 2', date: '2023-02-01', location: 'Venue B' },
    ],
  });

  

  const containerStyle = {
    border: '1px solid #ddd',
    borderRadius: 8,
    marginBottom: 30,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 30,
    padding: 20,
  };

  const profilePictureStyle = {
    borderRadius: '50%',
    marginRight: '50px',
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 100,
  };

  const nameAndEmailStyle = {
    textAlign: 'left',
  };

  const eventHistoryStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '20px',
    marginLeft: 100,
    marginRight: 100,
  };

  const actionSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const actionButtonStyle = {
    marginTop: '10px',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#7848F4',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  };

  const handleChangePassword = () => {
    // Implement logic for changing password
    alert('Changing password...');
  };

  const handleUpdateProfile = () => {
    // Implement logic for updating profile information
    alert('Updating profile...');
  };

  const handlePrivacySettings = () => {
    // Implement logic for privacy settings
    alert('Privacy settings...');
  };

  return (
    <div style={containerStyle}>
      <div style={userInfoStyle}>
        <img src={userData.profilePicture} alt="Profile" style={{ ...profilePictureStyle, marginLeft: 0 }} />
        <div style={{ ...nameAndEmailStyle, marginLeft: 20 }}>
          <h2>{userData.username}</h2>
          <p>{userData.email}</p>
          <p>{userData.department}</p>
        </div>
      </div>

      <div style={eventHistoryStyle}>
        <div style={{ textAlign: 'left' }}>
          <h3>Events Created</h3>
          <ul>
            {userData.eventsCreated.map((event) => (
              <li key={event.id}>{`${event.name} (${event.date}, ${event.location})`}</li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: 'left' }}>
          <h3>Events Attended</h3>
          <ul>
            {userData.eventsAttended.map((event) => (
              <li key={event.id}>{`${event.name} (${event.date}, ${event.location})`}</li>
            ))}
          </ul>
        </div>
      </div>

      
      
    </div>
  );
};

export default ProfileSection;