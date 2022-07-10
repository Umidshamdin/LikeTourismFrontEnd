import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import "../assets/sass/forgotpassword.scss"

function ForgotPassword() {
  const [forgotmail, setForgotMail] = useState();
  async function resetpassword(e) {
    e.preventDefault();
    await axios
      .post(
        "https://localhost:44363/api/Account/ForgotPassword",
        {
          Email: forgotmail,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
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
      <div className="forgotdiv">
      <div className="forgote">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="forgots"> Emaili daxil edin</Form.Label>
          <Form.Control className="forgot"
            onChange={(e) => setForgotMail(e.target.value)}
            type="email"
          />
        </Form.Group>

        <Button
          onClick={(e) => resetpassword(e)}
          className="forgotss"
          type="submit"
        >
          Emaili təsdiqlə
        </Button>
      </Form>
      </div>
      </div>
     
    
    </div>
  );
}

export default ForgotPassword;
