import React from 'react';
import { useInView } from "react-intersection-observer";
import api from "../assets/api-gateway.jpeg"
import logs from "../assets/logs.png"
import lambda from '../assets/lambda.png'

const Highlights = () =>  {
    const [ref, inView] = useInView({
        triggerOnce: true
    });
    
    return (
        <div ref={ref} className={`${inView ? 'translate-y-0 duration-500' : 'translate-y-96'} text-center pt-16 `}>
            <h3 className="text-3xl mb-10 text-bold text-base-300">Highlights</h3>
            <div className="grid grid-cols-3 gap-10 mx-20">
                <div className="card bg-base-100 shadow-2xl shadow-secondary">
                    <figure className="px-10 pt-10">
                        <img src={lambda} alt="Lambda Functions" className="rounded-xl w-12" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base-300 ">Lambda Functions</h2>
                        <p className="text-xs text-base-300 ">You can view performance and usage data to identify and resolve any issues quickly. Plus, track your spending on Lambda functions to ensure you're not overspending on your serverless infrastructure</p>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-2xl shadow-secondary">
                    <figure className="px-10 pt-10">
                        <img src={logs} alt="Cloudwatch Logs" className="rounded-xl w-12" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base-300 ">Cloudwatch Logs</h2>
                        <p className="text-xs text-base-300 ">Are you tired of sifting through endless logs to understand the performance and usage of your AWS Lambda functions? nimbus's advanced filtering options allow you to narrow down your search by dates, types, and keywords, making it easy to find exactly what you're looking for.</p>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-2xl shadow-secondary">
                    <figure className="px-10 pt-10">
                        <img src={api} alt="API Gateway" className="rounded-xl w-12" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-base-300 ">API Gateway</h2>
                        <p className="text-xs text-base-300 ">nimbus also gives you visibility into the resources in your AWS API Gateway. You'll be able to see the Lambda functions connected to each endpoint, giving you a complete picture of your serverless architecture.</p>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Highlights;