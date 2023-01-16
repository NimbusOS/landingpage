import React from 'react';
import Login from "../assets/login-to-home-LQ.gif"
import mac from '../assets/mac.png'

const Hero = () =>  {
    return (
        <div id="Hero" className="hero min-h-screen pt-16 bg-base-100">
            <div className="hero-content flex-col lg:flex-row relative">
                <div className="text-center">
                <h3 className="text-accent text-3xl">Go Serverless with Confidence. Monitor and Visualize Your AWS Lambda functions with Ease.</h3>    
                {/* <button className="btn flex items-center"><p>Download</p><img src={mac} alt="Mac Download" className="w-8"/></button> */}
                </div>
                {/* Replace svg with whatever image we want here */}
                {/* <img src={Login} alt="login" className="rounded-xl w-3/5"/> */}
                <div className="cloud absolute"></div>
           </div>
        </div>
    );
}

export default Hero;