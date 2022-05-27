import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/sass/home/searchheader.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
function SearchHeader() {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/cityhotels", { state: { destination, date, options } });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="headerSearch mt-5 mb-5">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Where from"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >
                {date[0].startDate.toLocaleDateString("en-US").toString()} to{" "}
                {date[0].endDate.toLocaleDateString("en-US").toString()}{" "}
              </span>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >
                {options.adult} adult {options.children} children {options.room}{" "}
                room
              </span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                        className="optionCounterButton"
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        onClick={() => handleOption("adult", "i")}
                        className="optionCounterButton"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 1}
                        onClick={() => handleOption("children", "d")}
                        className="optionCounterButton"
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>

                      <button
                        onClick={() => handleOption("children", "i")}
                        className="optionCounterButton"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.room <= 1}
                        onClick={() => handleOption("room", "d")}
                        className="optionCounterButton"
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>

                      <button
                        onClick={() => handleOption("room", "i")}
                        className="optionCounterButton"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
