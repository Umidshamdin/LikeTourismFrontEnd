import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/sass/hoteldetail/reservation.scss";

function Reservation(props) {
  const [room, setRooms] = useState([]);
  const [resrooms, setResRooms] = useState([]);

  useEffect(() => {
    loadRooms();
    setResRooms(JSON.parse(localStorage.getItem("test")));
  }, [room]);

  async function loadRooms() {
    await axios
      .get(`https://localhost:44363/api/Reservation/GetAll`)
      .then((res) => {
        const result = res.data;
        setRooms(result);
      });
  }

  const [test, setTest] = useState([]);

  const handle = (x) => {
    setTest([...test, x]);
      localStorage.setItem("test", JSON.stringify(test));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Otaq növü</th>
                  <th>Qiymet</th>
                  <th>Seher yemeyi</th>
                  <th>Otaq sayi</th>
                </tr>
              </thead>
              <tbody>
                {room.map((rooms) => (
                  <tr>
                    <td>{rooms.roomType}</td>
                    <td>{rooms.roomPrise}</td>
                    <td>{rooms.breakfast}</td>

                    <td>
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>

                      <button onClick={() => handle(rooms)}>add</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-5">
            <div className="basket">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Otaq növü</th>
                    <th>Qiymet</th>
                    <th>Seher yemeyi</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    resrooms&&resrooms.map(e=>
                      {
                        return(
                          <tr>
                            <td>{e.breakfast}</td>
                            <td>{e.roomType}</td>
                            <td>{e.roomPrise}</td>
                          </tr>
                        )
                      })
                  }
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
