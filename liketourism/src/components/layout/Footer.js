import React from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/layout/footer.scss";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";


function Footer() {
  const { t } = useTranslation();

  return (
    <div className="foot">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 footer mt-5">
            <img
              className="imagelogo"
              style={{ width: "150px" }}
              src={require("../../assets/img/logo/logo.png")}
              alt=""
            />

            <div className="icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 footer mt-5">
            <h4>{t("Haqqimizda")}</h4>
            <ul>
              <li style={{ color: "white" }}>
              {t("Desc")}
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 footer mt-5">
            <h4>{t("Contacts")}</h4>

            <ul>
              {/* <li style={{ color: "white" }}>
                7/24 destek İster az önce rezervasyon yapmış olun ister çoktan
                gezinizin keyfini çıkarmaya başlamış olun. Gezginler için olan
                SSS sayfamızı ziyaret etmeyi unutmayın.
              </li> */}

              <li>
               <p style={{color:"white"}}> <i style={{fontSize:"30px"}} className="fas fa-envelope"></i> liketourism13@gmail.com</p>

               <p><i className="fas fa-phone"></i>+994506855256</p>
              </li>
            </ul>
          </div>

          {/*           
          <div className="col-lg-3 col-md-4 col-sm-6 footer mt-5">
            <ul>
              <h4>QUICK LINKS</h4>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 footer mt-5">
            <ul>
              <h4>QUICK LINKS</h4>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 footer mt-5">
            <ul>
              <h4>QUICK LINKS</h4>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="linkfooter" to={"/"}>Home</Link>
              </li>
            </ul>
          </div> */}

          <div className="col-12">
            <div className="image">
              {/* <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          <img src={require("../../assets/img/home/footerimg.png")} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
