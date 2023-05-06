import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Plan from './components/Plan';
import Offer from './components/Offer';
import Rooms from './components/Rooms';
import ImageSlider from './components/ImageSlider';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offer/>
      <Plan />
      <Rooms/>
      <ImageSlider/>
    </div>
  )
}

export default App
