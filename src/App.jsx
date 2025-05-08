import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import Contact from './pages/Contact';
import Tasks from './pages/Tasks';
import Deals from './pages/Deals';


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;