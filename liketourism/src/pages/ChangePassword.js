
import axios from "axios";
import { Button,Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function ChangePassword() {
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
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token != null) {
      let email = parseJwt(token).sub[1];
      axios.get(`https://localhost:44363/api/Account/GetUserByEmail/${email}`).then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  const [currentpassword, setCurrentPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  async function resetPassword(e) {
    e.preventDefault();
    await axios
      .put(
        `https://localhost:44363/api/Account/UpdateUserPassword/${user?.email}`,
        {
          CurrentPassword: currentpassword,
          NewPassword: newpassword,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire("Şifrəniz Yeniləndi", "Updated", "success");
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
  return (
    <div className="row justify-content-between container">
      <div className="col-lg-8 col-md-9 col-sm-12  mt-5">
        <h2 className="mt-5">Şifrəni yenilə</h2>
        <div className="passwords mt-5">
          <Form onSubmit={(e) => resetPassword(e)}>
            <div className="mt-4 updatepassw">
              <Form.Group className="mb-3" controlId="formBasicOldPassword">
                <Form.Label className="labtext">Cari parol</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="labtext">Yeni Parol</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label className="labtext">Parolu təsdiqlə </Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
            </div>
            <div className="mt-4 ">
              <div className="passbut">
                <Button className="passbutton" type="submit">
                  Tamamla
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
   
    </div>
  );
}

export default ChangePassword;
