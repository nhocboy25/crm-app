import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import Marketing from './pages/Marketing';
import Sales from './pages/Sales';
import Support from './pages/Support';
import SlidingLogin from './pages/auth/SlidingLogin';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<SlidingLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;