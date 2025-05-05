import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header/Header'; 


const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
