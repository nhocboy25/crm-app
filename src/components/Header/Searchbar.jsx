import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-box">
      <FaSearch />
      <input type="text" placeholder="Search..." />
      <span className="shortcut">Ctrl K</span>
    </div>
  );
};

export default SearchBar;
