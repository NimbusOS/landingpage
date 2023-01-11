import React from 'react';
// import gitHubLogo from '../assets/github.png'
// import linkedInLogo from '../assets/linkedin2.png'
import { Outlet } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'
import nimbus from '../assets/nimbus.png'

const Navbar = () =>  {
  return (
    <>
      <nav className="navbar bg-primary fixed top-0 left-0 flex flex-row flex-wrap text-xs z-10">
        <ul className="w-[100%] justify-start">
          <li className="mx-3">
            <img src={nimbus} alt="Nimbus" className="h-12 pb-2"/>
          </li>
          <li className="text-center mx-3 hover:text-base-300"> 
            <Link to="#AboutNimbus">About</Link>
          </li>
          <li className="text-center mx-3 hover:text-base-300">
            <Link to="#KeyFeatures">Key Features</Link>
          </li>
          <li className="text-center mx-3 hover:text-base-300">
            <Link to="#Contributors">Contributors</Link>
          </li>
          <li className="text-center mx-3 hover:text-base-300">
            <Link to="#Footer">Footer</Link>
          </li>
        </ul>
      </nav>
    <Outlet/>
    </>
  );
}

// const Navbar = () => {
//   return (
//     <div className="Navbar">
//       <div className="App">
//         <h2> Nimbus </h2>
//         <a href="https://www.linkedin.com"> <img className="navbarLink" src={linkedInLogo} alt="LinkedIn Logo"/> </a>
//         <a href="https://github.com/oslabs-beta/nimbus"> <img className="navbarLink" src={gitHubLogo} alt="GitHub Logo"/> </a>
//       </div>
//     </div>
//   )
// }

export default Navbar;
