import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li>
          <a className={classes.navLink} href="#">Profile</a>
        </li>
        <li>
          <a className={classes.navLink} href="#">Messages</a>
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
