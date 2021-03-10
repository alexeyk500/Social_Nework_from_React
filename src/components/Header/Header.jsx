import React from 'react';
import logo from './../../assets/img/smile_logo.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logoImg} src={logo} alt="this is logo" />
      <span className={classes.title}>Lloret de Mar Private Social Nework</span>
    </header>
  )
}

export default Header;
