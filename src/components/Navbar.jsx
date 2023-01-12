import React from 'react';
// import gitHubLogo from '../assets/github.png'
// import linkedInLogo from '../assets/linkedin2.png'
import { HashLink as Link } from 'react-router-hash-link'
import nimbus from '../assets/nimbus.png'

const Navbar = () =>  {
  return (
    <>
      <nav className="navbar bg-primary fixed top-0 left-0 flex flex-row flex-wrap text-xs z-10 overflow-auto p-0">
        <ul className="w-[100%] justify-start">
          <li>
              <img src={nimbus} alt="Nimbus" className="flex justify-center items-center w-24 mb-0.5 mx-3"/>
          </li>
          <li className="text-center mx-3 hover:text-base-300"> 
            <Link to="#AboutNimbus">About</Link>
          </li>
          <li className="text-center mx-3 hover:text-base-300">
            <Link to="#Highlights">Highlights</Link>
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
