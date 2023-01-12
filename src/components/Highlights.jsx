import React from 'react';
import nimbus from "../assets/nimbus.png"

const Highlights = () =>  {
    return (
        <div className="text-center pt-16">
            <h3 className="text-3xl mb-10">Highlights</h3>
            <div className="grid grid-cols-3 gap-10 mx-20">
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={nimbus} alt="Shoes" className="rounded-xl w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">PLACE TITLE HERE</h2>
                        <p className="text-xs">You can view performance and usage data to identify and resolve any issues quickly. Plus, track your spending on Lambda functions to ensure you're not overspending on your serverless infrastructure</p>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={nimbus} alt="Shoes" className="rounded-xl w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">PLACE TITLE HERE</h2>
                        <p className="text-xs">Are you tired of sifting through endless logs to understand the performance and usage of your AWS Lambda functions?nimbus's advanced filtering options allow you to narrow down your search by dates, types, and keywords, making it easy to find exactly what you're looking for.</p>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={nimbus} alt="Shoes" className="rounded-xl w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">PLACE TITLE HERE</h2>
                        <p className="text-xs">nimbus also gives you visibility into the resources in your AWS API Gateway. You'll be able to see the Lambda functions connected to each endpoint, giving you a complete picture of your serverless architecture.</p>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Highlights;