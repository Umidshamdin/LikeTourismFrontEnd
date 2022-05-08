import React from "react";
import "../assets/sass/accordion.scss";

function Accordions() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
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
                    <a href="">Saqqız adası</a>
                    <h6>255 məkan</h6>
                  </li>
                  <li>
                    <a href="">Lviv Oblastı</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Mikonos</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santoron</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Phuket</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
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
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
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
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
                    <h6>255 məkan</h6>

                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Kapadokya</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Malta</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Ibiza</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Hawaii</a>
                    <h6>255 məkan</h6>

                  </li>
                  <li>
                    <a href="">Santa Provinse</a>
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
