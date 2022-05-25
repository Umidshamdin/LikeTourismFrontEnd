import React from "react";
import Carusel from "../components/Carusel";
import AntDesign from "../components/AntDesign";
import Subscripe from "../components/Subscripe";
import Slider from "../components/home/Slider";
import SearchHeader from "../components/home/SearchHeader";
import FamousCity from "../components/home/FamousCity";

function Home() {
  return (
    <div>
      <Slider></Slider>
      <SearchHeader></SearchHeader>
      <FamousCity></FamousCity>
      <Carusel></Carusel>
      <Carusel></Carusel>
      <Carusel></Carusel>
      <Subscripe></Subscripe>
      <AntDesign></AntDesign>
    </div>
  );
}

export default Home;
