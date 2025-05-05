import React from 'react';
import '../styles/Dashboard.scss';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your CRM overview.</p>
      </header>
      <section className="dashboard-content">
        <div className="widget">
          <h2>Key Metrics</h2>
          <p>Placeholder for metrics or charts.</p>
        </div>
        <div className="widget">
          <h2>Recent Activities</h2>
          <p>Placeholder for recent activity logs.</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;