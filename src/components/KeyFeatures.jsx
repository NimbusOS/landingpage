import React from 'react';
import nimbus from '../assets/nimbus.png'

const KeyFeatures = () =>  {
    return (
        <div id="KeyFeatures" className="grid grid-cols-2 gap-2 px-20 my-10 pt-16">
            <h3 className="col-span-2 text-center text-3xl pb-10">Key Features</h3>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <img className="h-20 w-20" src={nimbus} alt="nimbus"/>
                </div>
            </div>
            <p className="flex justify-center items-center text-center">Easily link your AWS account to nimbus in a secure and hassle-free process.</p>
            <p className="flex justify-center items-center text-center">Our home page provides valuable insights into the health of your AWS application, with a focus on lambda functions.</p>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <img className="h-20 w-20" src={nimbus} alt="nimbus"/>
                </div>
            </div>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <img className="h-20 w-20" src={nimbus} alt="nimbus"/>
                </div>
            </div>
            <p className="flex justify-center items-center text-center">You can easily switch between dark mode and light mode, depending on your preference.</p>
            <p className="flex justify-center items-center text-center">The Functions tab offers a detailed breakdown of metrics for each of your functions, including invocations, errors, throttles, and durations.</p>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <img className="h-20 w-20" src={nimbus} alt="nimbus"/>
                </div>
            </div>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <img className="h-20 w-20" src={nimbus} alt="nimbus"/>
                </div>
            </div>
            <p className="flex justify-center items-center text-center">Need to find specific logs? The Logs tab is where you can filter through all of your lambda function logs by time period, reports only, errors only, or any keyword.</p>
            <p className="flex justify-center items-center text-center">The APIs tab gives you an in-depth look at common API metrics, endpoints, and the lambda functions they're connected to.</p>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <img className="h-20 w-20" src={nimbus} alt="nimbus"/>
                </div>
            </div>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <img className="h-20 w-20" src={nimbus} alt="nimbus"/>
                </div>
            </div>
            <p className="flex justify-center items-center text-center">In the Settings tab, you can also update your personal information and login details with ease.</p>
        </div>
    );
}

export default KeyFeatures;
