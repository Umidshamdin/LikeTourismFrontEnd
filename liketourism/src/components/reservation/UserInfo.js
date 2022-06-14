import React, { useState, useEffect } from "react";

import "../../assets/sass/reservation/userinfo.scss";
function UserInfo() {
  const [resrooms, setResRooms] = useState([]);
  let test = [];

  if (JSON.parse(localStorage.getItem("test")) != null) {
    test = JSON.parse(localStorage.getItem("test"));
  }

  useEffect(() => {
    setResRooms(JSON.parse(localStorage.getItem("test")));
  }, []);

  const deleteItem = (id) => {
    test.forEach((teste) => {
      console.log(id);
      if ((test.id = id)) {
        localStorage.removeItem(test[0]);
      } else {
        JSON.parse(localStorage.getItem("test"));
      }
    });

    // let nums=localStorage.removeItem("test")
    // let arr=[];
    // if(nums){
    //   arr=JSON.parse(nums);
    //   arr.push(this.state.num);
    //   arr=Array.from(new Set(arr));
    //   localStorage.removeItem("test",JSON.stringify(arr));
    // }
    // else{
    //   arr=[];
    //   arr.push(this.state.num);
    //   localStorage.removeItem("test",JSON.stringify(arr));

    // }
    // this.setState({isSaved:true})
  };

  console.log(test);

  return (
    <div className="container">
      <div className="row mt-5 blank">
        <div className="titles">
          {resrooms &&
            resrooms.map((e) => {
              return (
                <div className="reservations">
                  <img
                    className="getImg"
                    src={`data:image/jpeg;base64,${e.image}`}
                    alt=""
                  />

                  <p>Otaq adi</p>
                  <h2>{e.roomType}</h2>
                  <h2>{e.roomPrise}</h2>
                  <button
                    onClick={() => deleteItem(e.id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
