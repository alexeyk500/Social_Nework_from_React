import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li>
          <NavLink className={classes.navLink} activeClassName={classes.active} to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink} activeClassName={classes.active} to="/dialogs">Dialogs</NavLink>
        </li>
        <li>
          <a className={classes.navLink} href="#">News</a>
        </li>
        <li>
          <a className={classes.navLink} href="#">Music</a>
        </li>
        <br/>
        <li>
          <a className={classes.navLink} href="#">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
