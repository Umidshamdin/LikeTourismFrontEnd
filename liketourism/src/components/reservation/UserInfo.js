import axios from "axios";
import { Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/reservation/userinfo.scss";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";

function UserInfo() {
  const [resrooms, setResRooms] = useState([]);
  let token = localStorage.getItem("token");
  let hotelss = JSON.parse(localStorage.getItem("test"));
  let test = [];

  if (JSON.parse(localStorage.getItem("test")) != null) {
    test = JSON.parse(localStorage.getItem("test"));
  }

  useEffect(() => {
    setResRooms(JSON.parse(localStorage.getItem("test")));
    if (token != null) {
      let usermail = parseJwt(token).sub[1];
      axios
        .get(`https://localhost:44363/api/Account/GetUserByEmail/${usermail}`)
        .then((res) => {
          setUser(res.data);
        });
    }
  }, []);

  const deleteItem = (id) => {
    let result = JSON.parse(localStorage.getItem("test"));
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === id) {
        result.splice(i, 1);
      }
    }
    setResRooms(result);
    localStorage.setItem("test", JSON.stringify(result));
  };
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  const [user, setUser] = useState();

  // function orders(e) {
  //   debugger;
  //   e.preventDefault();
  //   // hotelss?.forEach((hotello) => {
  //   createOrder()

  async function createOrder(e) {
    e.preventDefault();
    await axios
      .post(
        "https://localhost:44363/api/Order/CreateOrder",
        {
          email: parseJwt(token).sub[1],
          phoneNumber: user?.phoneNumber,
          fullName: parseJwt(token).sub[0],
          Hotellistid: hotelss[0].hotelListId,
          ReservationId: hotelss[0].id,
          ReservationName: hotelss[0].roomType,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire("Created", "success");
        localStorage.setItem("test", JSON.stringify([]));
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }
  // });
  // }

  var totalprise = 0;
  let count = 0;

  return (
    <div className="container">
      <div className="row">
        <div
          style={{ width: "100%", marginTop: "200px" }}
          className="col-8 totalbig"
        >
          {resrooms &&
            resrooms.map((e) => {
              totalprise += e.roomPrise * e.remained;
              return (
                <Table
                  style={{ marginTop: "10px", width: "66%" }}
                  striped
                  bordered
                  hover
                >
                  <thead>
                    <tr>
                      <th>Count</th>
                      <th>Image</th>
                      <th>RoomType</th>
                      <th>RoomPrise</th>
                      <th>Setting</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{++count}</td>
                      <td>
                        <img
                          style={{ width: "200px" }}
                          className="getImg"
                          src={`data:image/jpeg;base64,${e.image}`}
                          alt=""
                        />
                      </td>
                      <td>{e.roomType}</td>
                      <td>{e.roomPrise * e.remained}   AZN</td>

                      <td>
                        <button
                          onClick={() => deleteItem(e.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              );
            })}
        </div>

        <div className="col-4 totals">
          <div className="totalss">
            <h4>Ümumi qiymət:  {totalprise}  Azn</h4>
          </div>

          
        </div>
      </div>

      <div className="row blank2">
        

        <Form className="mt-5">
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Ad ve soyad</Form.Label>
            <Form.Control type="text" defaultValue={user?.fullName} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicNumber">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" defaultValue={user?.phoneNumber} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label> Email</Form.Label>
            <Form.Control type="email" defaultValue={user?.email} />
          </Form.Group>
          
          <Form.Group className="mb-3 cardcode" controlId="formBasicNumberCode">
          <Form.Label> Kart nömrəsini daxil edin</Form.Label>

            <Form.Control type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
          </Form.Group>

          <Button
            className="tickord"
            onClick={(e) => createOrder(e)}
            type="submit"
          >
            Rezervasiyanı təsdiqlə
          </Button>
        </Form>
      </div>
    </div>

    // <div className="container">
    //   <div className="row mt-5 blank col-8">
    //     <div className="titles">
    //       {resrooms &&
    //         resrooms.map((e) => {
    //           totalprise += e.roomPrise * e.remained;
    //           return (
    //             <div className="reservations">
    //               <img
    //                 className="getImg"
    //                 src={`data:image/jpeg;base64,${e.image}`}
    //                 alt=""
    //               />

    //               <h2>{e.roomType}</h2>
    //               <h3>{e.roomPrise * e.remained} AZN</h3>
    //               <button
    //                 onClick={() => deleteItem(e.id)}
    //                 className="btn btn-danger"
    //               >
    //                 Delete
    //               </button>
    //             </div>
    //           );
    //         })}
    //     </div>
    //     <div className="sum">
    //       <h4>
    //         Sub total:
    //         <span className="float-left">{totalprise}</span>
    //       </h4>
    //     </div>
    //   </div>

    //   <div className="row blank2">
    //     <h5>Melumatlari doldurun</h5>

    //     <Form className="mt-5">
    //       <Form.Group className="mb-4" controlId="formBasicText">
    //         <Form.Label>Ad ve soyad</Form.Label>
    //         <Form.Control type="text" defaultValue={user?.fullName} />
    //       </Form.Group>

    //       <Form.Group className="mb-4" controlId="formBasicNumber">
    //         <Form.Label>Phone</Form.Label>
    //         <Form.Control type="text" defaultValue={user?.phoneNumber} />
    //       </Form.Group>
    //       <Form.Group className="mb-4" controlId="formBasicEmail">
    //         <Form.Label> Email</Form.Label>
    //         <Form.Control type="email" defaultValue={user?.email} />
    //       </Form.Group>
    //       <Form.Group className="mb-4" controlId="formBasicCheckbox">
    //         <Form.Check
    //           type="checkbox"
    //           label=" Şərtləri və qaydaları qəbul edirəm."
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3 cardcode" controlId="formBasicNumberCode">
    //         <Form.Control type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
    //       </Form.Group>

    //       <Button
    //         className="tickord"
    //         onClick={(e) => createOrder(e)}
    //         type="submit"
    //       >
    //         Sifaris yarat
    //       </Button>
    //     </Form>
    //   </div>
    // </div>
  );
}

export default UserInfo;
