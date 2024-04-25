import React, { Component } from 'react';
import './Profile.css'; // Import CSS file for styles
import profileImage from '../pages/images/profile.png'; // Import profile picture

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <div className="profile-header">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1 className="profile-title">Welcome to Your Profile</h1>
        </div>
        <div className="profile-info">
          <h2>User Information</h2>
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Level: 10</p>
          <p>Experience Points: 5000</p>
        </div>
        <div className="profile-stats">
          <h2>Game Stats</h2>
          <p>Games Played: 100</p>
          <p>Wins: 50</p>
          <p>Losses: 50</p>
        </div>
        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="change-pass-btn">Change Password</button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    );
  }
}
