import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import "../../assets/sass/home/searchheader.scss";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, Modal, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const style = {
  search: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "500px",
    bgcolor: "background.paper",
    borderradius: "20px",
    boxShadow: 24,
    p: 4,
  },
};
function SearchHeader() {
  const { t } = useTranslation();

  // const [openDate, setOpenDate] = useState(false);
  // const [destination, setDestination] = useState("");

  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);
  const [searchapi, setSearchapi] = useState();

  const [searchdata, setSearchdata] = useState([]);
  async function search() {
    if (searchapi == null) {
      searchapi = "";
    }
    await axios
      .get(
        `https://localhost:44363/api/FamousCity/GetAllByName/${searchapi}`,
        {},
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        setSearchdata(response.data);
        if(response.data.length > 0){
          handleSearchOpen();
        }
        console.log(searchdata);
      })
      .catch(function (error) {});
  }

  // const [openOptions, setOpenOptions] = useState(false);
  // const [options, setOptions] = useState({
  //   adult: 1,
  //   children: 0,
  //   room: 1,
  // });

  // const navigate = useNavigate();

  // const handleOption = (name, operation) => {
  //   setOptions((prev) => {
  //     return {
  //       ...prev,
  //       [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
  //     };
  //   });
  // };

  // const handleSearch = () => {
  //   navigate("/hotels", { state: { destination, date, options } });
  // };
  const [searchopen, setSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => setSearchOpen(false);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="headerSearch  mb-5">
            <div className="headerSearchItem">
              
              <input
                type="text"
                placeholder="enter city name"
                className="form-control"
                onChange={(e) => setSearchapi(e.target.value)}
              />
            </div>

            <Modal
              open={searchopen}
              onClose={handleSearchClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style.search} className="overflow-hidden">
                <div className="modal-size">
                  <Typography
                    component="span"
                    id="modal-modal-body"
                    sx={{ mt: 2 }}
                  >
                    <ul>
                      {searchdata.map((searchdat) => (
                        <Link to={`/Hotels/${searchdat?.id}`}>
                          <li><p>{searchdat?.name}</p></li>
                        </Link>
                      ))}
                    </ul>
                  </Typography>
                </div>
              </Box>
            </Modal>

            {/* <div className="headerSearchItem">
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
            </div> */}
            <div className="headerSearchItem">
              <button onClick={(e) => search(e)} className="headerBtn btn btn-primary">
              {t("Searchs")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
