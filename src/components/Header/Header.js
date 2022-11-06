import React from 'react';

import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="tm-top-header">
        <div className="container">
          <div className="row">
            <div className="tm-top-header-inner">
              <div className="tm-logo-container">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="tm-site-logo"
                />
                <h1 className="tm-site-name tm-handwriting-font">Cafe House</h1>
              </div>
              <div className="mobile-menu-icon">
                <i className="fa fa-bars"></i>
              </div>
              <nav className="tm-nav">
                <ul>
                  <li>
                    <NavLink
                      exact
                      to="/"
                      className="nav"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/special" className="nav">
                      Today Special
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/menu" className="nav">
                      Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/contact" className="nav">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
