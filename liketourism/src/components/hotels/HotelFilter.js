import React from "react";
import "../../assets/sass/hotels/hotelfilter.scss";
function HotelFilter() {

    const filtersStar =()=>{
        console.log('====================================');
        console.log("dd");
        console.log('====================================');
    }
  return (
    <div>
      <div className="filterss">
        <input onClick={()=>filtersStar()} type="checkbox" />
        <label htmlFor="">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </label>
      </div>
    </div>
  );
}

export default HotelFilter;
