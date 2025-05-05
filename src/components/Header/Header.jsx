import React from 'react';
import './Header.scss';
import SearchBar from './Searchbar';
import { FaPlus, FaBell, FaCog, FaStore, FaPhone, FaQuestionCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <SearchBar />
        <button className="icon-btn"><FaPlus /></button>
      </div>

      <div className="right">
        <FaPhone className="icon-btn" />
        <FaStore className="icon-btn" />
        <FaQuestionCircle className="icon-btn" />
        <FaCog className="icon-btn" />
        <FaBell className="icon-btn" />
        <div className="profile">
          <span>SUF ▾</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
