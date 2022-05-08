import React from 'react'
import Header from '../components/layout/Header'
import Slider from '../components/Slider'
import Card from '../components/Card'
import Accordion from '../components/Accordion'
import Footer from '../components/layout/Footer'







function Home() {
  return (
    <div>

      <Header></Header>
      <Slider></Slider>
      <Card></Card>

      <Accordion></Accordion>
      <Footer></Footer>
      
    </div>
  )
}

export default Home