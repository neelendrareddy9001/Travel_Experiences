import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Plan from './components/Plan';
import Offer from './components/Offer';
import Rooms from './components/Rooms';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offer/>
      <Plan />
      <Rooms/>
    </div>
  )
}

export default App
