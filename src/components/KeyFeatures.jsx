import React from 'react';
import { useInView } from "react-intersection-observer";
import login from '../assets/login-to-home-LQ.gif';
import register from '../assets/register-LQ.gif';
import functions from '../assets/functions-light-LQ.gif';
import logs from '../assets/logs-LQ.gif'
import apis from '../assets/apis-light-LQ.gif'
import settings from '../assets/settings-LQ.gif'

const KeyFeatures = () =>  {
    const [refRegister, inViewRegister] = useInView({
        triggerOnce: true
    });
    const [refLogin, inViewLogin] = useInView({
        triggerOnce: true
    });
    const [refFunctions, inViewFunctions] = useInView({
        triggerOnce: true
    });
    const [refLogs, inViewLogs] = useInView({
        triggerOnce: true
    });
    const [refApis, inViewApis] = useInView({
        triggerOnce: true
    });
    const [refSettings, inViewSettings] = useInView({
        triggerOnce: true
    });
    return (
        <div id="KeyFeatures" className="grid grid-cols-2 gap-12 px-20 my-10 pt-16">
            <h3 className="col-span-2 text-center text-3xl pb-10 font-bold text-base-300">Key Features</h3>
            <div ref={refRegister} className={`${inViewRegister ? 'translate-7-0 duration-300' : '-translate-x-28'} card bg-gradient-to-r from-secondary to-accent text-primary-content shadow-xl flex justify-center items-center`}>
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={register} alt="nimbus"/>
            </div>
            <div ref={refRegister} className={`${inViewRegister ? 'translate-x-0 duration-300' : 'translate-x-28'} flex justify-center items-center`}>
                <div className="w-3 bg-gradient-to-b from-base-300 to-accent h-[45%] mr-6 rounded"></div>
                <div className="flex flex-col justify-start items-start w-[80%]">
                    <h3 className='text-base-300 font-bold text-2xl mb-2'>Register</h3>
                    <p className="text-base-300 text-lg self-start">Easily link your AWS account to nimbus in a secure and hassle-free process.</p>
                </div>
            </div>
            <div ref={refLogin} className={`${inViewLogin ? 'translate-x-0 duration-300' : '-translate-x-28'} flex justify-center items-center`}>
                <div className="flex flex-col justify-end items-end w-[80%]">
                    <h3 className='text-base-300 font-bold text-2xl mb-2'>Home</h3>
                    <p className="text-base-300 text-lg self-end text-right">Our home page provides valuable insights into the health of your AWS application, with a focus on lambda functions.</p>
                </div>
                <div className="w-3 bg-gradient-to-b from-base-300 to-accent h-[45%] ml-6 rounded"></div>
            </div>
            <div ref={refLogin} className={`${inViewLogin ? 'translate-x-0 duration-300' : 'translate-x-28'} card bg-gradient-to-r from-accent to-secondary text-primary-content shadow-xl flex justify-center items-center`}>
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={login} alt="nimbus"/>
            </div>
            <div ref={refFunctions} className={`${inViewFunctions ? 'translate-x-0 duration-300' : '-translate-x-28'} card bg-gradient-to-r from-secondary to-accent text-primary-content shadow-xl flex justify-center items-center`}>
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={functions} alt="nimbus"/>
            </div>
            <div ref={refFunctions} className={`${inViewFunctions ? 'translate-x-0 duration-300' : 'translate-x-28'} flex justify-center items-center`}>
                <div className="w-3 bg-gradient-to-b from-base-300 to-accent h-[45%] mr-6 rounded"></div>
                <div className="flex flex-col justify-start items-start w-[80%]">
                    <h3 className='text-base-300 font-bold text-2xl mb-2'>Functions</h3>
                    <p className="text-base-300 text-lg self-start">The Functions tab offers a detailed breakdown of metrics for each of your functions, including invocations, errors, throttles, and durations.</p>
                </div>
            </div>
            <div ref={refLogs} className={`${inViewLogs ? 'translate-x-0 duration-300' : '-translate-x-28'} flex justify-center items-center`}>
                <div className="flex flex-col justify-end items-end w-[80%]">
                    <h3 className='text-base-300 font-bold text-2xl mb-2'>Logs</h3>
                    <p className="text-base-300 text-lg self-end text-right">Need to find specific logs? The Logs tab is where you can filter through all of your lambda function logs by time period, reports only, errors only, or any keyword.</p>
                </div>
                <div className="w-3 bg-gradient-to-b from-base-300 to-accent h-[45%] ml-6 rounded"></div>
            </div>
            <div ref={refLogs} className={`${inViewLogs ? 'translate-x-0 duration-300' : 'translate-x-28'} card bg-gradient-to-r from-accent to-secondary text-primary-content shadow-xl flex justify-center items-center`}>
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={logs} alt="nimbus"/>
            </div>
            <div ref={refApis} className={`${inViewApis ? 'translate-x-0 duration-300' : '-translate-x-28'} card bg-gradient-to-r from-secondary to-accent text-primary-content shadow-xl flex justify-center items-center`}>
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={apis} alt="nimbus"/>
            </div>
            <div ref={refApis} className={`${inViewApis ? 'translate-x-0 duration-300' : 'translate-x-28'} flex justify-center items-center`}>
                <div className="w-3 bg-gradient-to-b from-base-300 to-accent h-[45%] mr-6 rounded"></div>
                <div className="flex flex-col justify-start items-start w-[80%]">
                    <h3 className='text-base-300 font-bold text-2xl mb-2'>APIs</h3>
                    <p className="text-base-300 text-lg self-start">The APIs tab gives you an in-depth look at common API metrics, endpoints, and the lambda functions they're connected to.</p>
                </div>
            </div>
            <div ref={refSettings} className={`${inViewSettings ? 'translate-x-0 duration-300' : '-translate-x-28'} flex justify-center items-center`}>
            <div className="flex flex-col justify-end items-end w-[80%]">
                    <h3 className='text-base-300 font-bold text-2xl mb-2'>Settings</h3>
                    <p className="text-base-300 text-lg self-end text-right">In the Settings tab, you can also update your personal information and login details with ease.</p>
                </div>
                <div className="w-3 bg-gradient-to-b from-base-300 to-accent h-[45%] ml-6 rounded"></div>
            </div>
            <div ref={refSettings} className={`${inViewSettings ? 'translate-x-0 duration-300' : 'translate-x-28'} card bg-gradient-to-r from-accent to-secondary text-primary-content shadow-xl flex justify-center items-center`}>
                <img className="w-[95%] h-[95%] rounded-xl shadow-sm" src={settings} alt="nimbus"/>
            </div>
        </div>
    );
}

export default KeyFeatures;
