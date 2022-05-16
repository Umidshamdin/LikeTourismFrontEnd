import React from "react";
import "../assets/sass/searchtour.scss";

function Searchtour() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <h1>Gözəl bir yer seçin və rezervasiya edin</h1>
            <p>
              Ziyarət edəcəyiniz səyahət nöqtəsini kəşfedin və səyahətin keyfini
              sonana qədər çıxarın
            </p>
            <div className="forms">
              <input
                className="form-control"
                type="text"
                placeholder="Səyahət yerləri, turlar"
              />
              <button className="btn btn-primary">Axtar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchtour;
