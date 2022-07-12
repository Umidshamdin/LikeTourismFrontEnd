import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../assets/sass/Villas/villaList.scss";
import axios from "axios";
function VillaList() {
  const [villa, setVillas] = useState([]);

  async function loadVillas() {
    await axios.get(`https://localhost:44363/api/Villa/GetAll`).then((res) => {
      const result = res.data;
      setVillas(result);
    });
  }

  useEffect(() => {
    loadVillas();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {villa.map((villas,i) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className="card">
                <img
                  src={`data:image/jpeg;base64,${villas.image}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{villas.name}</h5>
                  <h6>{villas.location}</h6>

                  <div className="ratings">
                    <span className="ratingNumber">{villas.rating}</span>
                    <span className="ratingText">{villas.ratingText}</span>
                  </div>

                  <p className="card-text">
                    {villas.desc}
                  </p>
                  <Link to={"/"}>
                    <button className="btn btn-primary cardButton">
                      Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default VillaList;
