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
      <div ref={ref} className={`${inView ? 'translate-y-0 duration-500' : 'translate-y-96'} hero-content text-center`}>
        <div className="ml-40 max-w-lg">
          <h1 className="mb-5 text-6xl font-bold">Lambda monitoring with Nimbus</h1>
          <p className="mb-5 text-md">Nimbus is an open-source desktop application that provides comprehensive visibility into your AWS serverless components' health and performance, helping you monitor and debug issues as they arise. With Nimbus, you can keep track of critical metrics and logs, including API relations and estimated costs, in a single unified view.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutNimbus;
