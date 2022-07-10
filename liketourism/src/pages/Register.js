import React, { useState } from "react";
import "../assets/sass/register.scss";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [number, setNumber] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  async function register(e) {
    e.preventDefault();
    await axios
      .post(
        "https://localhost:44363/api/Account/Register",
        {
          Email: mail,
          Password: password,
          FullName: fullname,
          UserName: username,
          PhoneNumber: number,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        // setRegisterOpen(false)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Zəhmət olmasa emailinizi yoxlayın",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {});
  }
  return (
    <div className="container">
      <div className="row">
        <div className="register mt-5">
          <label htmlFor="">UserName</label>
          <input
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder=""
          />

          <label htmlFor="">Email</label>
          <input
            className="form-control"
            onChange={(e) => setMail(e.target.value)}
            type="text"
            placeholder=""
          />

          <label htmlFor="">FullName</label>
          <input
            className="form-control"
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder=""
          />

          <label htmlFor="">Password</label>
          <input
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=""
          />

          <label htmlFor="">PhoneNumber</label>
          <input
            className="form-control"
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder=""
          />
        </div>
        <div className="buttonss">
          <button className="registerButton btn btn-primary" onClick={register}>
            Qeydiyyatı tamamla
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
