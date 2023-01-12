import React from 'react';
import Login from "../assets/login-home.gif"

const Hero = () =>  {
    return (
        <div id="Hero" className="hero min-h-screen pt-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center">
                <h3>The ultimate monitoring and visualization tool for AWS Lambda. </h3>    
                <button>Download INSERT DOWNLOAD HERE</button>
                </div>
                {/* Replace svg with whatever image we want here */}
                <img src={Login} alt="login" className="w-96"/>
           </div>
        </div>
    );
}

export default Hero;