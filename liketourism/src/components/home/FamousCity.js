import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../assets/sass/home/famouscity.scss";

function FamousCity() {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    // Update the document title using the browser API
    loadCards();
  }, []);

  async function loadCards() {
    await axios.get(`https://localhost:44363/api/FamousCity/GetAll`).then((res) => {
      const results = res.data;
      setCards(results);
    });
  }

  return (
    <section id="famous-cities">
      <div className="container mt-5">
        <div className="row">
          {cards.slice(0, 2).map((card,i) => (
            <div
              className="col-lg-6 col-md-6 col-sm-12 mt-3 cards"
              key={i}

            >
              <Link className="link" to={`hotels/${card.id}`}>
                <img src={`data:image/jpeg;base64,${card.image}`} alt="" />

                <b>{card.name}</b>
              </Link>
            </div>
          ))}

          {cards.slice(2, 5).map((cardx,i) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-3 cards"
              key={i}
            >
              <Link className="link" to={`hotels/${cardx.id}`}>
                <img src={`data:image/jpeg;base64,${cardx.image}`} alt="" />

                <b>{cardx.name}</b>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FamousCity;
