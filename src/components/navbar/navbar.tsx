// components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Create this CSS file for styling

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
