import React from 'react';
import Contributors from './components/Contributors.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutNimbus from './components/AboutNimbus.jsx'
import KeyFeatures from './components/KeyFeatures.jsx'

const App = () =>  {
  return ( 
    <div className="App">
      <Navbar/>
      <AboutNimbus/>
      <KeyFeatures/>
      <Contributors/>
      <Footer/>
    </div>
  );
}

export default App;
