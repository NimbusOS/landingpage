import React from 'react';
import gitHubLogo from '../assets/github.png'
import linkedInLogo from '../assets/linkedin2.png'


const Navbar = () =>  {
  return (
    <div className="Navbar">
        <h2> Nimbus </h2>
        <a href="https://www.linkedin.com"> <img className="navbarLink" src={linkedInLogo} alt="LinkedIn Logo"/> </a>
        <a href="https://github.com/oslabs-beta/nimbus"> <img className="navbarLink" src={gitHubLogo} alt="GitHub Logo"/> </a>
    </div>
  );
}

export default Navbar;
