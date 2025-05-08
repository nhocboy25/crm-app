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
            <NavLink to="/tasks" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/deals" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Deals
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
