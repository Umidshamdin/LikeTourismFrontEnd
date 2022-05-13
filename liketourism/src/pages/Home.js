import React from 'react'
import Slider from '../components/Slider'
import Card from '../components/Card'
import Accordion from '../components/Accordion'
import Footer from '../components/layout/Footer'
import Carusel from '../components/Carusel'
import Imagegallery from '../components/Imagegallery'









function Home() {
  return (
    <div>

      <Slider></Slider>
      <Card></Card>

      <Accordion></Accordion>
      <Carusel></Carusel>
      <Footer></Footer>
      
    </div>
  )
}

export default Home