import React from 'react';
import login from '../assets/login-to-home-LQ.gif';
import register from '../assets/register-LQ.gif';
import functions from '../assets/functions-light-LQ.gif';
import logs from '../assets/logs-LQ.gif'
import apis from '../assets/apis-light-LQ.gif'
import settings from '../assets/settings-LQ.gif'

const KeyFeatures = () =>  {
    return (
        <div id="KeyFeatures" className="grid grid-cols-2 gap-12 px-20 my-10 pt-16">
            <h3 className="col-span-2 text-center text-3xl pb-10 text-bold text-base-300">Key Features</h3>
            <div className="card bg-gradient-to-r from-secondary to-accent text-primary-content shadow-xl flex justify-center items-center">
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={register} alt="nimbus"/>
            </div>
            <div className="flex justify-center items-center text-center">
                <p className="text-base-300 text-lg w-[80%]">Easily link your AWS account to nimbus in a secure and hassle-free process.</p>
            </div>
            <div className="flex justify-center items-center text-center">
                <p className="text-base-300 text-lg w-[90%]">Our home page provides valuable insights into the health of your AWS application, with a focus on lambda functions.</p>
            </div>
            <div className="card bg-gradient-to-r from-accent to-secondary text-primary-content shadow-xl flex justify-center items-center">
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={login} alt="nimbus"/>
            </div>
            <div className="card bg-gradient-to-r from-secondary to-accent text-primary-content shadow-xl flex justify-center items-center">
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={functions} alt="nimbus"/>
            </div>
            <div className="flex justify-center items-center text-center">
                <p className="text-base-300 text-lg w-[80%]">The Functions tab offers a detailed breakdown of metrics for each of your functions, including invocations, errors, throttles, and durations.</p>
            </div>
            <div className="flex justify-center items-center text-center">
                <p className="text-base-300 text-lg w-[90%]">Need to find specific logs? The Logs tab is where you can filter through all of your lambda function logs by time period, reports only, errors only, or any keyword.</p>
            </div>
            <div className="card bg-gradient-to-r from-accent to-secondary text-primary-content shadow-xl flex justify-center items-center">
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={logs} alt="nimbus"/>
            </div>
            <div className="card bg-gradient-to-r from-secondary to-accent text-primary-content shadow-xl flex justify-center items-center">
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={apis} alt="nimbus"/>
            </div>
            <div className="flex justify-center items-center text-center">
                <p className="flex justify-center items-center text-center text-base-300 text-lg w-[90%]">The APIs tab gives you an in-depth look at common API metrics, endpoints, and the lambda functions they're connected to.</p>
            </div>
            <div className="flex justify-center items-center text-center">
                <p className="flex justify-center items-center text-center text-base-300 text-lg w-[90%]">In the Settings tab, you can also update your personal information and login details with ease.</p>
            </div>
            <div className="card bg-gradient-to-r from-accent to-secondary text-primary-content shadow-xl flex justify-center items-center">
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={settings} alt="nimbus"/>
            </div>
        </div>
    );
}

export default KeyFeatures;
