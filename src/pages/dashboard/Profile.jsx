import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileSection = () => {
  const [userData, setUserData] = useState({
    username: 'KUCC',
    email: 'kucc@ku.edu.np',
    department: 'Department of Computer Engineering',
    profilePicture: 'sam.JPG',
    eventsCreated: [
      { id: 1, name: 'Event 1', date: '2023-01-01', location: 'Venue 1' },
      { id: 2, name: 'Event 2', date: '2023-01-01', location: 'Venue 2' },
      { id: 3, name: 'Event 3', date: '2023-01-01', location: 'Venue 3' },
    ],
    eventsAttended: [
      { id: 2, name: 'Event 2', date: '2023-02-01', location: 'Venue B' },
    ],
  });

  useEffect(() => {
     // Fetch user data and trigger email on component mount
    // Simulate fetching user data from an API
    // Replace this with actual logic to fetch user data
    async function fetchUserData() {
      try {
        // Simulate fetching user data from an API
        const userDataResponse = await axios.get(`${import.meta.env.VITE_BACKEND_HOST}/user-data`);
        setUserData(userDataResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle errors or update the UI accordingly
        alert('Error fetching user data. Please try again.');
      }
    }

    fetchUserData();
  }, []);

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
    borderRadius: '70%',
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
    marginRight: '800px',
  };

  const handleChangePassword = () => {
    // Implement logic for changing password
    alert('Changing password...');
  };

  const handleUpdateProfile = () => {
    // Implement logic for updating profile information
    alert('Updating profile...');
  };

  const handleSendEmail = async () => {
    try {
      // Trigger the backend to send an email
      const emailResponse = await axios.post(`${import.meta.env.VITE_BACKEND_HOST}/send-email`, {
        // Include any other necessary data
        // For example, you might want to include user-specific data like userData.email
        userEmail: userData.email,
      });

      console.log(emailResponse.data);

      // Handle the response or update the UI as needed
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle errors or update the UI accordingly
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={userInfoStyle}>
        <img src={"https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"} alt="Profile" style={{ ...profilePictureStyle, marginLeft: 0 }} />
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

      <div style={actionSectionStyle}>
        <button style={actionButtonStyle} onClick={handleUpdateProfile}>
          Update Profile
        </button>
        <button style={actionButtonStyle} onClick={handleSendEmail}>
          Send Email
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;