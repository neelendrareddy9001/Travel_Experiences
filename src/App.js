import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Plan from './components/Plan';
import Offer from './components/Offer';
import Rooms from './components/Rooms';
import ImageSlider from './components/ImageSlider';



const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact element={<Hero/> } />
          <Route exact element={<Offer/>} />
          <Route exact element={<Plan />} />
          <Route exact element={<Rooms/>} />
          <Route exact element={<ImageSlider/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
