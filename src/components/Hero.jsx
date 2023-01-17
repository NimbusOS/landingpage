import React from 'react';
import Login from "../assets/login-to-home-LQ.gif";
import mac from '../assets/mac-icon.png';
import windows from '../assets/windows-icon.png'

const Hero = () =>  {
    return (
        <div id="Hero" className="hero min-h-screen pt-16 bg-base-100">
            <div className="hero-content flex-col lg:flex-row justify-start w-full">
                <div className="flex flex-col w-1/2">
                    <h3 className="text-base-300 text-3xl font-bold mx-4 mb-1">Go Serverless with Confidence.</h3>
                    <h3 className="text-base-300 text-xl font-bold mx-4">Monitor and Visualize Your AWS Lambda functions with Ease.</h3>    
                    {/* <button className="btn flex items-center"><p>Download</p><img src={mac} alt="Mac Download" className="w-8"/></button> */}
                    <div className="flex justify-start items-center m-4">
                        <a href="/" target="_blank" rel="noreferrer"><button className="btn btn-secondary w-36 shadow-md mr-2 flex justify-center items-center">Windows<img src={windows} alt="Windows Download" className="w-6"/></button></a>
                        <a href="/" target="_blank" rel="noreferrer"><button className="btn btn-secondary w-36 shadow-md ml-2 flex justify-center items-center">Mac<img src={mac} alt="Mac Download" className="w-6 mb-1.5"/></button></a>
                    </div>
                </div>
                {/* Replace svg with whatever image we want here */}
                {/* <img src={Login} alt="login" className="rounded-xl w-3/5"/> */}
           </div>
        </div>
    );
}

export default Hero;