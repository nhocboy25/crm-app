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
          <li>
            <NavLink to="/signin" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
/*const Sidebar = () => (
  <nav>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/tasks">Tasks</NavLink>
    <NavLink to="/deals">Deals</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
  </nav>
);*/
/*const Sidebar = () => {
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
};*/ 