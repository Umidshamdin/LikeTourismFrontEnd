import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import "../../assets/sass/hoteldetail/rooms.scss";

function Rooms() {
  const [room, setRooms] = useState([]);
  const [resrooms, setResRooms] = useState([]);
  let test = [];

  if (JSON.parse(localStorage.getItem("test")) != null) {
    test = JSON.parse(localStorage.getItem("test"));
  }

  

  useEffect(()=>{
    setResRooms(JSON.parse(localStorage.getItem("test")));
    loadRooms();
  },[])

  async function loadRooms() {
    await axios
      .get(`https://localhost:44363/api/Reservation/GetAll`)
      .then((res) => {
        const result = res.data;
        setRooms(result);
      });
  }
  
  const handleCount=()=>{
   console.log('====================================');
   console.log("sss");
   console.log('====================================');
  }

  const handle = (x) => {
    test.push(x);
    localStorage.setItem("test", JSON.stringify(test));
    setResRooms(JSON.parse(localStorage.getItem("test")));
  };

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-7">
          <div className="hotelList">
            {room.map((rooms) => (
              <div className=" roominfo mt-3">
                <img
                  className="roomimg"
                  src={`data:image/jpeg;base64,${rooms.image}`}
                  alt=""
                />
                <div className="infoss">
                  <h5>{rooms.roomType}</h5>
                  <hr />
                  <span>Otaga daxildir:</span> <span>{rooms.breakfast}</span>
                  <div className="iconinfo">
                    <ul>
                      <li>
                        <i class="fas fa-parking">Parking</i>
                      </li>
                      <li>
                        <i class="fas fa-parking">Parking</i>
                      </li>
                      <li>
                        <i class="fas fa-parking">Parking</i>
                      </li>
                      <li>
                        <i class="fas fa-parking">Parking</i>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i class="fas fa-parking">Parking</i>
                      </li>
                      <li>
                        <i class="fas fa-parking">Parking</i>
                      </li>
                      <li>
                        <i class="fas fa-parking">Parking</i>
                      </li>
                      <li>
                        <i class="fas fa-parking">Parking</i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="choise">
                  <h6>Otaq sec</h6>
                  <select onchange={handleCount}>
                    <option>1 otaq</option>
                    <option>2 otaq</option>
                    <option>3 otaq</option>
                    <option>4 otaq</option>
                  </select>
                </div>

                <div className="price">
                  <h6>Qiymet</h6>

                  <p>{rooms.roomPrise} AZN</p>
                </div>
                <div className="but">
                  <button
                    onClick={() => handle(rooms)}
                    className="btn btn-primary"
                  >
                    Rezervasiya et
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-5 mt-3">
          <div className="basket">
            {resrooms &&
              resrooms.map((e) => {
                return (
                  <div className="baskets d-flex">
                    <div className="basketrez">
                      <div className="reserImg">
                        <img
                          style={{ width: "140px" }}
                          src={`data:image/jpeg;base64,${e.image}`}
                        />
                      </div>

                      <p>{e.roomType}</p>
                      <p>{e.roomPrise} AZN</p>
                     
                    </div>
                    
                  </div>
                );
              })}
               <hr />
            <Link to="/">
            <button className="btn btn-primary">Rezervasiya et</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="container">
    //     <div className="row mt-5">
    //      <div className="reser">
    //      {room.map((rooms) => (
    //         <div className=" roominfo mt-3">
    //           <img
    //             className="roomimg"
    //             src={`data:image/jpeg;base64,${rooms.image}`}
    //             alt=""
    //           />
    //           <div className="infoss">
    //             <h5>{rooms.roomType}</h5>
    //             <hr />
    //             <span>Otaga daxildir:</span> <span>{rooms.breakfast}</span>
    //             <div className="iconinfo">
    //               <ul>
    //                 <li>
    //                   <i class="fas fa-parking">Parking</i>
    //                 </li>
    //                 <li>
    //                   <i class="fas fa-parking">Parking</i>
    //                 </li>
    //                 <li>
    //                   <i class="fas fa-parking">Parking</i>
    //                 </li>
    //                 <li>
    //                   <i class="fas fa-parking">Parking</i>
    //                 </li>
    //               </ul>
    //               <ul>
    //                 <li>
    //                   <i class="fas fa-parking">Parking</i>
    //                 </li>
    //                 <li>
    //                   <i class="fas fa-parking">Parking</i>
    //                 </li>
    //                 <li>
    //                   <i class="fas fa-parking">Parking</i>
    //                 </li>
    //                 <li>
    //                   <i class="fas fa-parking">Parking</i>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>

    //           <div className="choise">
    //             <h6>Otaq sec</h6>
    //             <select>
    //               <option>1 otaq</option>
    //               <option>2 otaq</option>
    //               <option>3 otaq</option>
    //               <option>4 otaq</option>
    //             </select>
    //           </div>

    //           <div className="price">
    //             <h6>Qiymet</h6>

    //             <p>{rooms.roomPrise} AZN</p>
    //           </div>
    //           <div className="but">
    //             <button
    //               onClick={() => handle(rooms)}
    //               className="btn btn-primary"
    //             >
    //               Rezervasiya et
    //             </button>
    //           </div>
    //         </div>
    //       ))}

    //       <div className="basketrr">
    //         {resrooms &&
    //           resrooms.map((e) => {
    //             return (
    //               <div className="basket">
    //                 <div className="reserImg">
    //                   <img src={`data:image/jpeg;base64,${e.image}`} />
    //                 </div>

    //                 <p>{e.roomType}</p>
    //                 <button className="btn btn-primary">Rezervasiya et</button>
    //               </div>
    //             );
    //           })}
    //       </div>
    //      </div>
    //     </div>
    //   </div>
    // </div>
  );
}

{
  /* <td> alt="" /></td> */
}
{
  /* <img src={`data:image/jpeg;base64,${e.image}`}/> */
}
export default Rooms;
