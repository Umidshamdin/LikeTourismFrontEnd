import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/sass/hoteldetail/reservation.scss";
import { list } from "@chakra-ui/react";

function Reservation(props) {
  // const region = ["Ekonomic 1 neferlik", "Ekonomic 2 neferlik", "Ekonomic 1 neferlik", "Luks 1 neferlik", "Luks 2 neferlik"];

  // const onChange = (e) => {
  //   console.log(e.target.value);
  // };
  const [room, setRooms] = useState([]);

  useEffect(() => {
    loadRooms();
  }, []);

  async function loadRooms() {
    await axios
      .get(`https://localhost:44363/api/Reservation/GetAll`)
      .then((res) => {
        const result = res.data;
        setRooms(result);
      });
  }

  const handle = () => {
    localStorage.setItem("room", JSON.stringify(room));
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

                      <button onClick={() => handle()}>add</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-5">
            <div className="basket">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
