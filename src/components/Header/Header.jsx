import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/smile_logo.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.logoImg} src={logo} alt="this is logo" />
      <span className={classes.title}>Lloret de Mar Private Social Nework</span>
      <div className={classes.loginBlock}>
        { props.isAuthorised ?
            <span className={classes.loginText}>{props.login}</span>
            : <NavLink className={classes.loginNavLink} to='\login'>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;
