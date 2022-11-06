import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [click, setClick] = useState(false);

  //====== sticky navbar=========
  const changeSticky = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener('scroll', changeSticky);
  // ====navbar end========

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className={sticky ? 'header scrolled' : 'header'}>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/movies/popular" onClick={closeMenu}>
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies/top_rated" onClick={closeMenu}>
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies/upcoming" onClick={closeMenu}>
              Upcoming
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
