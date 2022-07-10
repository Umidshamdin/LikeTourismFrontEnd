import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import "../../assets/sass/layout/header.scss";

function Header() {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const handleClick = () => setClick(!click);

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  let user;
  if (localStorage.getItem("token") != null) {
    user = parseJwt(localStorage.getItem("token"));
  }

  // if(window.location.href === 'http://localhost:3000/'){
  //     let elem = document.getElementById('fixed');
  //     if(elem != null){
  //       elem.style.position = 'fixed';

  //     }
  // }

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  const closeMenu = () => setClick(false);

  function changeLng(value) {
    document.cookie = `i18next=${value}`;
    window.location.reload();
  }

  const [forrender, setForrender] = useState();
  function clearToken(e) {
    e.preventDefault();
    localStorage.removeItem("token");

    setForrender("");
    console.log(forrender);
  }

  // id="fixed"
  return (
    <div className={color ? "header header-bg " : "header "}>
      <nav className="navbar">
        <Link className="logo" to={"/"}>
          <img src={require("../../assets/img/logo/logo.png")} alt="" />
        </Link>
        <div className="closeicon" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="linknav" to={"/Hotels/55"} onClick={closeMenu}>
              <b>{t("Otellər")}</b>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="linknav" to={"/"} onClick={closeMenu}>
              <i className="fas fa-globe"></i>
              <select
                className="multi"
                name=""
                id=""
                defaultValue={Cookies.get("i18next")}
                onChange={(e) => changeLng(e.target.value)}
              >
                <option value="en">en</option>
                <option value="az">az</option>
              </select>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="linknav"
              to={user != null ? "/ChangePassword" : "/login"}
              onClick={closeMenu}
            >
              <button className="btn btn-primary">
                {user != null ? user.sub[0] : "Login"}
              </button>
            </Link>
          </li>
          <li className="nav-item">
            {user == null ? (
              <Link className="linknav" to={"/register"} onClick={closeMenu}>
                <button className="btn btn-primary">Qeydiyyat</button>
              </Link>
            ) : (
              <button
                className="btn btn-primary"
                onClick={(e) => clearToken(e)}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
