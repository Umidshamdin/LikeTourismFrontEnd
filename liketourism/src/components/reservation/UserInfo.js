import React, { useState, useEffect } from "react";
import "../../assets/sass/reservation/userinfo.scss";
function UserInfo() {
  const [resrooms, setResRooms] = useState([]);
  const [rerender, setRerender] = useState();
  

  let test = [];

  if (JSON.parse(localStorage.getItem("test")) != null) {
    test = JSON.parse(localStorage.getItem("test"));
  }

  useEffect(() => {
    setResRooms(JSON.parse(localStorage.getItem("test")));
  }, []);

  const deleteItem = (id) => {
    let result = JSON.parse(localStorage.getItem('test'));
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === id) {
        result.splice(i,1)
      }
    }
    setResRooms(result)
    localStorage.setItem('test',JSON.stringify(result))
    
  };

  return (
    <div className="container">
      <div className="row mt-5 blank">
        <div className="titles">
          {resrooms &&
            resrooms.map((e) => {
              return (
                <div className="reservations">
                  <img
                    className="getImg"
                    src={`data:image/jpeg;base64,${e.image}`}
                    alt=""
                  />

                  <h2>{e.roomType}</h2>
                  <h3>{e.roomPrise} AZN</h3>
                  <button
                    onClick={() => deleteItem(e.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row blank2">
        <h5>Melumatlari doldurun</h5>
        <div className="name">
          <div className="name1">
            <label htmlFor=""> Ad* </label>
            <input type="text" />
          </div>
          <div className="name2">
            <label htmlFor=""> Soyad* </label>
            <input type="text" />
          </div>
        </div>

        <div className="emails">
          <div className="email1">
            <label htmlFor="">Emaili daxil edin</label>
            <input type="email" />
          </div>

          <div className="email2">
            <label htmlFor="">Emaili tesdiqliyin</label>
            <input type="email" />
          </div>
        </div>

        <div className="cards">
          <label htmlFor="">Kartin 16 reqemini daxil edin</label>
           <input placeholder="XXXX/XXXX/XXXX/XXXX" max={16} type="number" />
        </div>

        <button className="btn btn-success">Rezervasiyani tamamla</button>
      </div>
    </div>
  );
}

export default UserInfo;
