import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isAuthenticated, onLoginClick }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Add Recipe</Link></li>
          <li><Link to="/recipes">Recipe List</Link></li>
          {!isAuthenticated && (
            <li><button onClick={onLoginClick}>Login</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
