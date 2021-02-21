import React from 'react';
import logo from './../../img/smile_logo.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logoImg} src={logo} alt="this is logo" />
    </header>
  )
}

export default Header;
