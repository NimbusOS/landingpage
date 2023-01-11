import React from 'react';


const Hero = () =>  {
    return (
        <div id="Hero" className="hero mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center">
                <h3>The ultimate monitoring and visualization tool for AWS Lambda. </h3>    
                <button>Download</button>
                </div>
                {/* Replace svg with whatever image we want here */}
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" version="1.1">
                    <circle cx="100" cy="90" r="50" stroke="#5cb85c" stroke-width="6" fill="#5cb85c"></circle>
                </svg>
           </div>
        </div>
    );
}

export default Hero;