import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/logo.jpg';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';
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
    display: 'History',
    path: '/purchase-history'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
 
  return <header className="header" ref={headerRef}>
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

        {/* Nav right icons */}
        <div className="nav__right d-flex align-items-center gap-4">
          <span className="cart__icon" onClick={toggleCart}>
            <i className="ri-shopping-basket-line"></i>
            <span className="cart__badge">{totalQuantity}</span>
          </span>

          <span className="user">
            <Link to="/userdetail">
              <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>

        
      </div>
    </Container>
  </header>
};

export default Header;