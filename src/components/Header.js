import React from 'react';
import './Header.css';
import logo from '../assets/rectangle-2.svg';
import CallToAction from '../assets/rectangle-4-3.svg';
import NavbarBg from '../assets/rectangle-1.svg';

const menuItems = [
  { label: 'About', left: 0 },
  { label: 'Services', left: 77 },
  { label: 'Process', left: 170 },
  { label: 'Work', left: 259 },
  { label: 'Pricing', left: 330 },
  { label: 'FAQs', left: 413 }
];

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${NavbarBg})` }}>
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="nav-item" style={{ left: item.left }}>{item.label}</div>
        ))}
      </div>
      <div className="cta" style={{ backgroundImage: `url(${CallToAction})` }}>
        <div className="cta-text">Book a call</div>
      </div>
    </div>
  );
};

export default Header;
