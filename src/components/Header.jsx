//import Library
import React from "react";
import { Link } from "react-router-dom";

// import Styles and Images
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

// import Components

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <Link to="/register">Registro</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
