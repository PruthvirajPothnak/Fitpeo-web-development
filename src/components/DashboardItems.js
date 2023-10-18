import React from 'react';
import './Dashboard.css';

function DashboardItems() {
  return (
    
    <div className="dashboard-items">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <ul>
          <li className='dashboard-item'>
          <i class="fa fa-key"></i><b>Dashboard</b></li>
            
          <li className="dashboard-item" >
          <i class="fa fa-codepen"></i>Product <span>&gt;</span></li>
          <li className="dashboard-item">
          <i class="fa fa-user-circle"></i>Customers <span>&gt;</span></li>
          <li className="dashboard-item">
          <i class="fa fa-money"></i>Income <span>&gt;</span></li>
          <li className="dashboard-item">
          <i class="fa fa-percent"></i>Promote <span>&gt;</span></li>
          <li className="dashboard-item">
          <i class="fa fa-question-circle-o"></i>Help <span>&gt;</span></li>
        </ul>
      </div>
  );
}

export default DashboardItems;
