import React from 'react';
import img from '../images/ronaldo.jpg';
import './Dashboard.css';

function UserProfile() {
  return (
    <div className="user-profile">
      <img src={img} alt="User" />
      <h3 className="user-name">Ronaldo</h3>
      <p className="user-designation">Project manager</p>
    </div>
    
  );
}

export default UserProfile;
