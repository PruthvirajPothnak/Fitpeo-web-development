import React from 'react';
import './MainLayout.css';

function CustomCard({imagePath, title, amount, increase,extension }) {
  return (
    <div className="custom-card">
      <div className="custom-card-image">
        <img src={imagePath} alt="User" />
      </div>
      <div className="custom-card-content">
        <div className="custom-card-title">{title}</div>
        <div className="custom-card-amount">{amount}</div>
        <div className="custom-card-increase"><span className="highlighted">{increase}</span> <p>{extension}</p></div>
      </div>
    </div>
  );
}

export default CustomCard;
