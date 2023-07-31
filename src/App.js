import React from 'react';
import Contributors from './components/Contributors'
import Footer from './components/Footer'
import AboutNimbus from './components/AboutNimbus'
import KeyFeatures from './components/KeyFeatures'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights';

const App = () => {
  return (
    <div className="bg-base-200 font-nunito">
      <Navbar/>
        <Hero />
        <AboutNimbus/>
        <Highlights />
        <KeyFeatures/>
        <Contributors/>
        <Footer/>
      </div>
  )
}

export default App;
