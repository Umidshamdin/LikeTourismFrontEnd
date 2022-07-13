import React from "react";
import Slider from "../components/home/Slider";
import SearchHeader from "../components/home/SearchHeader";
import FamousCity from "../components/home/FamousCity";
import Carusel from "../components/home/Carusel";




function Home() {
  return (
    <div>
      <Slider></Slider>
      <SearchHeader></SearchHeader>
      <FamousCity></FamousCity>
      <Carusel></Carusel>

      {/* <CategoryCarusel></CategoryCarusel> */}

      {/* <Subscripe></Subscripe> */}
    </div>
  );
}

export default Home;
