import React from 'react';
import Contributors from './components/Contributors'
import Footer from './components/Footer'
import AboutNimbus from './components/AboutNimbus'
import KeyFeatures from './components/KeyFeatures'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero'
import Highlights from './components/Highlights';

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <AboutNimbus/>
      <Highlights />
      <KeyFeatures/>
      <Contributors/>
      <Footer/>
        <Routes>
          <Route path="/about" element={<AboutNimbus/>}/>
          <Route path="/features" element={<KeyFeatures/>}/>
          <Route path="/contributors" element={<Contributors/>}/>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
    </>
  )
}

// const App = () =>  {
//   return ( 
//     <div className="App">
//       <Navbar/>
//       <AboutNimbus/>
//       <KeyFeatures/>
//       <Contributors/>
//       <Footer/>
//     </div>
//   );
// }

export default App;
