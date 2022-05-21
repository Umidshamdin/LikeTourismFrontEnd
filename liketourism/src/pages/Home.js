import React from "react";
import Accordion from "../components/Accordion";
import Carusel from "../components/Carusel";
import AntDesign from "../components/AntDesign";
import Subscripe from "../components/Subscripe";
import Slider from "../components/home/Slider";
import Card from "../components/home/Card";
import SearchHeader from "../components/home/SearchHeader";
import Cityimage from "../components/home/Cityimage";


function Home() {
  return (
    <div>
      <Slider></Slider>
      <SearchHeader></SearchHeader>
      <Cityimage></Cityimage>

      
      <Accordion></Accordion>
      <Carusel></Carusel>
      <Carusel></Carusel>
      <Carusel></Carusel>
      <Subscripe></Subscripe>
      <AntDesign></AntDesign>
    </div>
  );
}

export default Home;
