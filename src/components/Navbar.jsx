import React from 'react';
// import gitHubLogo from '../assets/github.png'
// import linkedInLogo from '../assets/linkedin2.png'
import { HashLink as Link } from 'react-router-hash-link'
import cloud from '../assets/cloud.png'
import nimbus from '../assets/nimbus2.png'

const Navbar = () =>  {
  return (
    <>
      <nav className="navbar bg-secondary fixed top-0 left-0 flex flex-column lg:flex-row z-10 overflow-auto p-0 shadow-md w-full justify-between">
         <div className="w-[20%] flex">
            <img src={cloud} alt="nimbus cloud logo" className="w-12 ml-3" />
            <img src={nimbus} alt="nimbus logo text" className="w-28 ml-1"/>
        </div>
        <ul className="w-[50%] flex justify-center">
          <li className="text-center mx-8 text-base-300 hover:text-purple-600 text-lg"> 
            <Link to="#AboutNimbus">About</Link>
          </li>
          <li className="text-center mx-4 text-base-300 hover:text-purple-600 text-lg">
            <Link to="#Highlights">Highlights</Link>
          </li>
          <li className="text-center mx-4 text-base-300 hover:text-purple-600 text-lg">
            <Link to="#KeyFeatures">Key Features</Link>
          </li>
          <li className="text-center mx-4 text-base-300 hover:text-purple-600 text-lg">
            <Link to="#Contributors">Contributors</Link>
          </li>
          <li className="text-center mx-4 text-base-300 hover:text-purple-600 text-lg">
            <a href="https://github.com/oslabs-beta/nimbus" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>
      </nav>
    </>
  );
}


export default Navbar;
