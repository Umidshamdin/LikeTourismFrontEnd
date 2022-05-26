import { DateRange } from "react-date-range";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../assets/sass/cityhotels/hotelsearch.scss";
function HotelSearch() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  console.log(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="searchContainer">
            <div className="searchCommon">
              <div className="listSearch">
                <h1 className="searchTitle">Search</h1>

                <div className="searchItem">
                  <label>Destination</label>
                  <input type="text" placeholder={destination} onChange={(e)=>setDestination(e.target.value)} />
                </div>

                <div className="searchItem">
                  <label>Check In Date</label>
                  <span onClick={() => setOpenDate(!openDate)}>
                    {" "}
                    {date[0].startDate
                      .toLocaleDateString("en-US")
                      .toString()}{" "}
                    to {date[0].endDate.toLocaleDateString("en-US").toString()}{" "}
                  </span>

                  {openDate && (
                    <DateRange
                      onchange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                    />
                  )}
                </div>

                <div className="searchItem">
                  <label>Options</label>

                  <div className="options">
                    <div className="searchOptionItem">
                      <span className="searchOptionText">
                        Min Prise <small>per night</small>
                      </span>
                      <input type="number" className="searchOptionInput" />
                    </div>
                    <div className="searchOptionItem">
                      <span className="searchOptionText">
                        Max Prise <small>per night</small>
                      </span>
                      <input type="number" className="searchOptionInput" />
                    </div>
                    <div className="searchOptionItem">
                      <span className="searchOptionText">Adult</span>
                      <input
                        type="number"
                        min={1}
                        className="searchOptionInput"
                        placeholder={options.adult}
                        onChange={(e)=>setOptions(e.target.value)}
                      />
                    </div>
                    <div className="searchOptionItem">
                      <span className="searchOptionText">Children</span>
                      <input
                        type="number"
                        min={0}
                        className="searchOptionInput"
                        placeholder={options.children}
                        onChange={(e)=>setOptions(e.target.value)}

                      />
                    </div>
                    <div className="searchOptionItem">
                      <span className="searchOptionText">Room</span>
                      <input
                        type="number"
                        min={1}
                        className="searchOptionInput"
                        placeholder={options.room}
                        onChange={(e)=>setOptions(e.target.value)}

                      />
                    </div>
                  </div>
                </div>
                <button>Search</button>
              </div>
              <div className="listResult">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelSearch;
