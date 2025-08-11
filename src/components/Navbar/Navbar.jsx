import React from 'react';
import './Navbar.css';
import { menuItems } from '../../data/menuItems';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="Starbucks Logo" />
      </div>
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="navbar-search">
        <button>Buscar una tienda</button>
      </div>
    </nav>
  );
};

export default Navbar;