import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardItems from './DashboardItems';
import UserProfile from './UserProfile';
import './Dashboard.css';
import DoughnutChart from './DoughnutChart';
function Dashboard() {
  return (
    <div className="dashboard dashboard-left">
      <DashboardHeader />
      
      <DashboardItems />
      
      <UserProfile />
    </div>
  );
}

export default Dashboard;
