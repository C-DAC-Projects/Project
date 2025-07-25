// src/components/Dashboard.js
import React from 'react';
import MainNavbar from './common/MainNavbar'; // ✅ Corrected path
import './Dashboard.css'; // ✅ Make sure file exists

const Dashboard = () => {
  return (
    <>
      <MainNavbar />
      <div className="dashboard-container">
        <h1>Welcome to Cutipets!</h1>
        {/* Add layout for buy/sell, vet, etc. */}
      </div>
    </>
  );
};

export default Dashboard;
