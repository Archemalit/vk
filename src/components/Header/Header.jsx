import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return (
      <header className={s.header}>
        <img src="https://e7.pngegg.com/pngimages/197/457/png-clipart-round-multicolored-logo-vanamo-logo-icons-logos-emojis-tech-companies.png" />
        <div className={s.loginBlock}>
          <div className={s.loginBlockText}>
          {props.isAuth ? <NavLink to={'/profile'}><div className={s.loginBlockText}>{ props.login } - <button onClick={props.logoutTH}>Log out</button></div></NavLink> : <NavLink to={"/login"}>Login</NavLink>}
          </div>
          <div className={s.smallPhotoUser}>
            <img src={props.isAuth && props.smallPhoto != null ? props.smallPhoto : 'https://www.joeroganfans.net/wp-content/uploads/2019/06/Unknown-person.jpg' }/>
          </div>
        </div>
      </header>
    );
}

export default Header;