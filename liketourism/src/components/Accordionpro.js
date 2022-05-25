import React from "react";
import "../assets/sass/accordionpro.scss";
import { Link } from "react-router-dom";
function Accordionpro() {
  return (
    <>
      <div className="container">
        <div className="row">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="row">

            <div  className="tab-content" id="pills-tabContent">
            <div
            className="col-lg-2 col-md-3 col-sm-12 tab-content"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <ul>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>
                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-2 col-md-3 col-sm-12 tab-content"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <ul>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>
                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-2 col-md-3 col-sm-12 tab-content"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <ul>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>
                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
              <li>
                <Link to={"/"}>Saqqız adası</Link>

                <h6>255 məkan</h6>
              </li>
            </ul>
          </div>
            </div>
        
        </div>
      </div>
    </>
  );
}

export default Accordionpro;
