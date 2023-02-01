import React from 'react';
import mac from '../assets/mac-icon.png';
import windows from '../assets/windows-icon.png';
import homeBackground from '../assets/home-background.png';
// import homeDisplayFunctions from '../assets/home-display-functions.png'
import homeDisplayHome from '../assets/home-display-home.png';
// import homeDisplayLogs from '../assets/home-display-logs.png'
import homeDisplayRegister from '../assets/home-display-register.png';

const Hero = () =>  {
    return (
        <div id="Hero" className="hero min-h-screen pt-16 bg-base-100 relative z-0">
            <div className="hero-content flex-col lg:flex-row justify-start w-full">
                <div className="flex flex-col w-1/2">
                    <h3 className="text-base-300 text-4xl font-nunito font-extrabold mx-4 mb-1">Go Serverless with Confidence.</h3>
                    <h3 className="text-base-300 text-xl font-bold mx-4">Monitor and Visualize Your AWS Lambda functions with Ease.</h3>    
                    {/* <button className="btn flex items-center"><p>Download</p><img src={mac} alt="Mac Download" className="w-8"/></button> */}
                    <div className="flex justify-start items-center m-4">
                        <a href="http://nimbusapp-env.eba-jwatv44i.us-east-1.elasticbeanstalk.com/" target="_blank" rel="noreferrer"><button className="btn btn-secondary w-36 shadow-md mr-2 flex justify-center items-center opacity-75" >Launch App</button></a>
                        {/* <a href="https://github.com/oslabs-beta/nimbus" target="_blank" rel="noreferrer"><button className="btn btn-secondary w-36 shadow-md mr-2 flex justify-center items-center opacity-75" >Launch App<img src={windows} alt="Windows Download" className="w-6"/></button></a> */}
                        <a href="https://github.com/oslabs-beta/nimbus" target="_blank" rel="noreferrer"><button className="btn btn-secondary w-36 shadow-md ml-2 flex justify-center items-center opacity-75" >Download<img src={mac} alt="Mac Download" className="w-6 mb-1.5"/></button></a>
                    </div>
                </div>
                {/* Replace svg with whatever image we want here */}
                {/* <img src={Login} alt="login" className="rounded-xl w-3/5"/> */}
                <div className="w-1/2 relative">
                    <div className="absolute rounded-xl shadow-xl bg-secondary flex justify-center items-center w-4/6 p-3 -top-48">
                        <img className="aspect-auto rounded-xl shadow-xl" alt="home page demo display on home tab" src={homeDisplayHome}/>
                    </div>
                    <div className="absolute rounded-xl shadow-xl bg-accent flex justify-center items-center w-3/6 p-3 -top-8 left-80">
                        <img className="aspect-auto rounded-xl shadow-xl" alt="home page demo display on register page" src={homeDisplayRegister}/>
                    </div>
                </div>
           </div>
           <img className="w-full absolute -z-10 rotate-6 scale-110 opacity-75" alt="home background art" src={homeBackground} />
        </div>
    );
}

export default Hero;