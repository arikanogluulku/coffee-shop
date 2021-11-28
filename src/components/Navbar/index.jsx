import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import navbarLogo from '../../assets/navbar.png';
import Search from '../Search/Search';
import { IconButton } from '../IconButton';

import './style.scss';
import { useSelector } from 'react-redux';

function Navbar() {
  const basket = useSelector((state) => state.basket.basket);
  const history = useHistory();
  const favoritesHandler = () => {
    history.push('/favorites');
  };
  const cartHandler = () => {
    history.push('/cart');
  };
  console.log('navbar');
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={navbarLogo} alt="" />
        <p>Coffe Shop</p>
      </Link>
      <div className="navbar__icons">
        <Search />
        <IconButton icon="fas fa-heart " iconStyle="navbar__icons-color" handlerClick={favoritesHandler} />
        <IconButton icon="fas fa-shopping-cart " iconStyle="navbar__icons-color" handlerClick={cartHandler} badge={basket.length ? basket.length : null} />

      </div>
    </nav>
  );
}

export default Navbar;
