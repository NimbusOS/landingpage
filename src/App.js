import React from 'react';
import Contributors from './components/Contributors.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutNimbus from './components/AboutNimbus.jsx'
import KeyFeatures from './components/KeyFeatures.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx';

const App = () =>  {
  return ( 
    <div className="App">
      <Navbar/>
      <Hero />
      <AboutNimbus/>
      <Highlights />
      <KeyFeatures/>
      <Contributors/>
      <Footer/>
    </div>
  );
}

export default App;
