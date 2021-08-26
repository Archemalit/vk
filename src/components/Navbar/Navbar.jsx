import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import MyFriends from './My Friends/MyFriends';
import MyFriendsContainer from './My Friends/MyFriendsContainer';
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
          <a>News</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>
        <div className={s.item}>
          <a>Settings</a>
        </div>
        <MyFriendsContainer />
      </nav>
    );
}

export default Navbar;