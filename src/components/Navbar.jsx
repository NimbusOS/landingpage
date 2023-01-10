import React from 'react';
// import gitHubLogo from '../assets/github.png'
// import linkedInLogo from '../assets/linkedin2.png'
import { Outlet } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () =>  {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="#AboutNimbus">About</Link>
          </li>
          <li>
            <Link to="#KeyFeatures">Key Features</Link>
          </li>
          <li>
            <Link to="#Contributors">Contributors</Link>
          </li>
          <li>
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
