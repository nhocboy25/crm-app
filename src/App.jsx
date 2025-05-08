import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import Contact from './pages/Contact';
import Sales from './pages/Sales';
import Support from './pages/Support';


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;