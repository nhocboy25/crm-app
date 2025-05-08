// layouts/MainLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        <Outlet /> {/* Đây là nơi page con sẽ hiển thị */}
      </div>
    </div>
  );
};

export default MainLayout;
