import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Plan from './components/Plan';
import Offer from './components/Offer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offer/>
      <Plan />
    </div>
  )
}

export default App
