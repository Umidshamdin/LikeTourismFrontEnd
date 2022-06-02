import { Table } from "react-bootstrap";
import React from "react";

import "../../assets/sass/hoteldetail/reservation.scss";

function Reservation() {
  const region = ["Ekonomic 1 neferlik", "Ekonomic 2 neferlik", "Ekonomic 1 neferlik", "Luks 1 neferlik", "Luks 2 neferlik"];

  const onChange = (e) => {
    console.log(e.target.value);
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
                <tr>
                  <td>
                    <select name="select" onChange={onChange}>
                      <option>Otaq sec</option>
                      {region.map((nameOfRegion, i) => {
                        return <option key={i}>{nameOfRegion}</option>;
                      })}
                    </select>
                  </td>

                  <td></td>
                  <td></td>
                  <td>
                    <select name="select" onChange={onChange}>
                      <option>Otaq sec</option>
                      {region.map((nameOfRegion, i) => {
                        return <option key={i}>{nameOfRegion}</option>;
                      })}
                    </select>
                  </td>

                </tr>
                <tr>
                  <td>
                    Jacob
                    <p>dddddddddddd</p>
                  </td>
                  <td>313 azn</td>
                  <td>Qiymete daxildir</td>
                  <td>2</td>

                </tr>
                
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
