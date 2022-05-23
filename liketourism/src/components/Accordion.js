import React from "react";
import { Link } from "react-router-dom";
import "../assets/sass/accordion.scss";

function Accordions() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
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
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active"id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="col-lg-3 col-md-4 col-sm-6 ex">
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
                </ul>
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
                </ul>
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
                </ul>
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
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="col-lg-3 col-md-4 col-sm-6 ex">
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
                </ul>
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
                </ul>
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
                </ul>
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
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div className="col-lg-3 col-md-4 col-sm-6 ex">
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
                </ul>
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
                </ul>
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
                </ul>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordions;
