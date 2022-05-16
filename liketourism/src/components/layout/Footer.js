import React from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/layout/footer.scss";

function Footer() {
  return (
    <div className="foot">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 footer mt-5">
            <img
              className="imagelogo"
              style={{ width: "150px" }}
              src={require("../../assets/img/home/logo.png")}
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur
              
            </p>

            <div className="icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
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

        <div className="col-12">
        <div className="image">
          <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          <img src={require("../../assets/img/home/footerimg.png")} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
