import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/main.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>CRM</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/sales" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Support
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
