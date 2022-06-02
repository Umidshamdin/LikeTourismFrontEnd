import { Table } from "react-bootstrap";
import React from "react";

function Reservation() {
  return (
    <div>
      <div className="container">
        <div className="row">
         <div className="col-7">
         <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Otaq növü</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td colSpan={2}>Larry the Bird</td>
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
