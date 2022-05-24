import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/img/home/logo.png";
import "../../assets/sass/layout/header.scss";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="linknav" to={"/tours"} onClick={closeMenu}>
              <b>Gormeli yerler</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linknav" to={"/tours"} onClick={closeMenu}>
              <b>Turistik yerlər</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linknav" to={"/tours"} onClick={closeMenu}>
              <b>Gormeli yerler</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linknav" to={"/tours"} onClick={closeMenu}>
              <b>Gormeli yerler</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linknav" to={"/tours"} onClick={closeMenu}>
              <button className="btn btn-primary">Login</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="linknav" to={"/tours"} onClick={closeMenu}>
              <button className="btn btn-primary">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
