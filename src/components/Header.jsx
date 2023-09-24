import React from "react";
import '../style/header.scss';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header_wrap">
      <div className="logo">
        <Link to='/'>Logo</Link>
      </div>
      <nav className="nav_block">
        <ul className="nav_wrap">
          <Link to='/'>Головна</Link>
          <Link to='/services'>Послуги</Link>
          <Link to='/all-portfolio'>Шаблони</Link>
          <Link to='/aboutus'>Про нас</Link>
          <Link to='/contsct'>Контакти</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
