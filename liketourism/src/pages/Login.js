import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Form, Button, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/sass/login.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function Login(props) {
  const [email, setEmail] = useState();
  const [logpassword, setLogpassword] = useState();
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    await axios
      .post(
        `https://localhost:44363/api/Account/Login`,
        {
          Email: email,
          Password: logpassword,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        debugger;
        console.log("====================================");
        console.log(response);
        console.log("====================================");
        if (response.status == 200) {
          localStorage.setItem("token", response.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Ugurla giris etdiz",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
          window.location.reload();

          props.render("");
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Email ve ya sifre yalnisdir",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
          window.location.reload();

          props.render("");
        }
      })
      .catch(function (error) {});
  }
  const [state, setState] = useState(false);

  const toogleBtn = () => {
    setState((prevState) => !prevState);
  };
  return (
    <div>
      {/* <label htmlFor="">Email</label>
    <input  type="text" placeholder="username" />

    <label htmlFor="">Password</label>
    <input type="text" placeholder="password" /> */}

      <Form className="loginhead" onSubmit={(e) => login(e)}>
        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
          <Form.Control
            className="logins"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3 eye" controlId="formBasicPassword">
          <Form.Control
            className="logins"
            outline="yellow"


            type={state ? "text" : "password"}


            
            onChange={(e) => setLogpassword(e.target.value)}
            placeholder="Password"
          />

          <button onClick={toogleBtn} className="btn">
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>


          
        </Form.Group>
        <Form.Group style={{ marginLeft: "750px" }} className="mb-3 mt-3">
          <span>Şifrəni unutmusuz?</span>
          <Link style={{ marginLeft: "10px" }} to={"/forgotpassword"}>
            Keçid et
          </Link>
        </Form.Group>
        {/* <Button className='login' onClick={handleForgotOpen}>Unutmusunuz?</Button> */}
        <Button className="warning login mt-3" size="sm" type="submit">
          {" "}
          Daxil Ol
        </Button>{" "}
      </Form>
    </div>
  );
}

export default Login;
