import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <div className={s.imageWrap}>
          <img src="https://www.woodiespartyzone.ie/images/summer-sports/header-spain-party.jpg" />
          <h1>España</h1>
        </div>
        <div />
      </div>
    </header>
  );
};

export default Header;
