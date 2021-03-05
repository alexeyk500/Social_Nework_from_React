import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const NavLinkTo = (props) => {
  return <NavLink className={classes.navLink} activeClassName={classes.active} to={props.to}>{props.item}</NavLink>
}

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li>
          <NavLinkTo item='Profile' to='/profile' />
        </li>
        <li>
          <NavLinkTo item='Dialogs' to='/dialogs' />
        </li>
        <li>
          <NavLinkTo item='News' to='/news' />
        </li>
        <li>
          <NavLinkTo item='Music' to='/music' />
        </li>
          <br/>
        <li>
        <li>
          <NavLinkTo item='Finde User' to='/users' />
        </li>
        </li>
          <br/>
        <li>
          <NavLinkTo item='Settings' to='/settings' />
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
