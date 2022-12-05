import React from 'react';

import { Container } from 'reactstrap';
import logo from '../../assets/images/logo.jpg';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';

const nav__links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]

const Header = () => {
  return <header className="header">
    <Container>
      <div className="nav__wrapper d-flex align-items-center 
      justify-content-between">
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <h5>TamSang CRUD</h5>
        </div>

        {/* Menu */}
        <div className="navigation">
          <div className="menu d-flex align-items-center gap-5">
            {nav__links.map((item, index) => (
              <NavLink 
                to={item.path} 
                key={index}
                className = {(navClass) => 
                  navClass.isActive ? "active__menu" : ""
                }
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </header>
};

export default Header;