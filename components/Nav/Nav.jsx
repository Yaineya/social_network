import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          ПРОФИЛЬ
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          ОБЩЕНИЕ
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          ЛЕНТА
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          МУЗЫКА
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          НАСТРОЙКИ
        </NavLink>
      </div>
      <p />
      <SideBar />
      <p />
      <div className={s.item}>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/99845/pub_5d44898e3f548700ae5bb909_5d448a32ae56cc00c165da8c/scale_1200" />
      </div>
      <div className={s.item}>
        <img src="https://pro-spain.net/wp-content/uploads/2013/09/MAP_spain_MAIN.jpg" />
      </div>
    </nav>
  );
};

export default Nav;
