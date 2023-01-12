import React from 'react';


const AboutNimbus = () =>  {
    return (
        <div id="AboutNimbus" className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Lambda monitoring with Nimbus</h1>
            <p className="mb-5">Nimbus is an open-source desktop application that provides comprehensive visibility into your AWS serverless components' health and performance, helping you monitor and debug issues as they arise. With Nimbus, you can keep track of critical metrics and logs, including API relations and estimated costs, in a single unified view.</p>
          </div>
        </div>
      </div>
    );
}

export default AboutNimbus;
