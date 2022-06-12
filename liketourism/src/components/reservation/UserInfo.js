import React from "react";
import "../../assets/sass/reservation/userinfo.scss";
function UserInfo() {
  return (
    <div className="container">
      <div className="row mt-5 blank">
      <div className="titles">
      <h4>Vacib bilgiləri doldurun</h4>
      </div>
        <div className="inputs">
          <label htmlFor="">Ad</label>
          <input type="text" />
          <label htmlFor="">Soyad</label>
          <input type="text" />
        </div>
        <div className="inputsTwo mt-5">
        <label htmlFor="">Ad</label>
          <input type="text" />
          
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
