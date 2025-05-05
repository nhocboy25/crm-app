import React from 'react';
import '../styles/Dashboard.scss';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  // Data for the Pie Chart
  const pieData = {
    labels: ['Sales', 'Marketing', 'Development'],
    datasets: [
      {
        label: 'Department Budget',
        data: [300, 200, 500],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Data for the Bar Chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your CRM overview.</p>
      </header>
      <section className="dashboard-content">
        <div className="widget">
          <h2>Key Metrics</h2>
          <Pie data={pieData} />
        </div>
        <div className="widget">
          <h2>Monthly Revenue</h2>
          <Bar data={barData} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;