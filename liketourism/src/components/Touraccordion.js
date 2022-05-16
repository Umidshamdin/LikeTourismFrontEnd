import React from 'react'
import "../assets/sass/touraccordion.scss";
import { Link } from "react-router-dom";

function Touraccordion() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <h4>Daha çox səyahət yeri kəşf edin</h4>
            <p>Dünyanın dört bir yanındaki şehirlerde yapılacak şeyler bulun</p>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="col-2 ex">
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
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="col-2 ex">
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
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="col-2 ex">
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
      </div>
    </div>
  )
}

export default Touraccordion