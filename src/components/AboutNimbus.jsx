import React from 'react';
import { useInView } from "react-intersection-observer";
import aboutBackground from '../assets/shahadat-rahman-voM1Z9cGPCU-unsplash.jpg';

const AboutNimbus = () =>  {
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  return (
      <div id="AboutNimbus" className="hero min-h-screen" style={{ backgroundImage: `url(${aboutBackground})` }}>
      <div className="hero-overlay bg-opacity-10"></div>
      <div ref={ref} className={`${inView ? 'translate-y-0 duration-500' : 'translate-y-64'} hero-content text-center flex justify-end`}>
        <div className="w-1/2 mr-12">
          <h1 className="mb-5 text-6xl font-bold">Lambda monitoring with Nimbus</h1>
          <p className="mb-5 text-lg">Nimbus is an open-source desktop application that provides comprehensive visibility into your AWS serverless components' health and performance, helping you monitor and debug issues as they arise. With Nimbus, you can keep track of critical metrics and logs, including API relations and estimated costs, in a single unified view.</p>
          <a href="https://medium.com/nimbus-os/go-serverless-with-nimbus-an-open-source-tool-for-aws-lambda-developers-fc55d32543a7" target="_blank" rel="noreferrer"><button className="btn btn-outline w-36 btn-secondary">Read More</button></a>
        </div>
      </div>
    </div>
  );
}

export default AboutNimbus;
