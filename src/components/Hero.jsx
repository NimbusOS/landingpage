import React from 'react';
import Login from "../assets/login-to-home-LQ.gif"
import mac from '../assets/mac.png'

const Hero = () =>  {
    return (
        <div id="Hero" className="hero min-h-screen pt-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center">
                <h3>The ultimate monitoring and visualization tool for AWS Lambda. </h3>    
                {/* <button className="btn flex items-center"><p>Download</p><img src={mac} alt="Mac Download" className="w-8"/></button> */}
                </div>
                {/* Replace svg with whatever image we want here */}
                <img src={Login} alt="login" className="rounded-xl w-3/5"/>
           </div>
        </div>
    );
}

export default Hero;