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
                    <div className="flex justify-start items-center m-4">
                        <a href="http://nimbusapp-env.eba-jwatv44i.us-east-1.elasticbeanstalk.com/" target="_blank" rel="noreferrer"><button className="btn btn-secondary w-36 shadow-md mr-2 flex justify-center items-center opacity-75" >Launch App</button></a>
                        {/* <a href="https://github.com/oslabs-beta/nimbus" target="_blank" rel="noreferrer"><button className="btn btn-secondary w-36 shadow-md mr-2 flex justify-center items-center opacity-75" >Launch App<img src={windows} alt="Windows Download" className="w-6"/></button></a> */}
                        {/* https://drive.google.com/uc?export=download&id=1KjdfYpx6QRlqTTiP1_VGf55pXH2atNnP" */}
                        <a href="https://nimbus-app.s3.us-east-1.amazonaws.com/nimbus-darwin-arm64-1.0.0.zip?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFXb90WGpf84XWPYwa6iZM22aVO3a%2BJbrfxS8vuI15xCAiAFPTIZc7IxNjDgdiZSIoNi0JZ2UNfm1iAUsYde2LOSiyr6Agh9EAAaDDAwMTc0MzQxMjU1MSIMbnRaAH8SJBxVzTO6KtcCjQOK%2BUg0NVdd%2FQtZ61j0srpHDYWn7zOr7KEqmpEfhoKa0%2FOZwNymcT%2BkYtwmGpQEN84rhjjnvZHF%2FpwHFVKC93rABoNOIHoDHxyF3VXArhwNzU19s%2FILnQIzTZOFE7ljjGUH3h4x%2BoFt2DTOIDTvofRRO8CSZax94jBdh7boA1uNhhuNIsJttXMRjHmQhgx0I1ByWXCZucJ9trhg5JhrN%2BPB1Xb84G%2BpwPXZWLi9eyplYyp9qlH8JgV6tTQV3N7iJYGXmjz80W5jMeyLkT8EM02UGxg6hV2OL7ljSM%2BeeXfdj6k9uK3eB9i57K9OePIECP2cI9ZNAixTA%2Bl0SvtGN3MrBpHhFfbqcCW4OPrPdPYMsZ856hC4Cy9okA%2FdFGwUFoJMCMeREE9ykdQe1TbQas5b6Hl3xUD1w0orxp5FiR2aXF09blrFZWhyuPiqAh6DLQF5ZtB9aTDfmo%2BfBjq1AnMWdg287zhYMAVmktI%2BOz12PbA2C%2B0MpXRiAY0AOgirIxbiy1dgQAAwAuxLG%2FuR1JOsZubklosgKxka8PKu5Ws3ADcBGkRtO6Y%2FCrrd%2Bh6GyZN%2B7%2B3O4NP9Mo7KrnuY5%2Bz5sk2FVYC9F445J2A2MbpWwrwBG98%2BNhS7%2BNGgmw2au0Ry1VYWA2XjQSlqvnlYcIw6wlo9l8Z7rM%2BrCp8yWN8oTowWPDYV1XZzKkSPe6V46sJfGUPjPHYQoLh3QYPsq9X%2Bs9%2FWyIFBbPIRqe4uo46IrG78oTl2MfYL0nOtSICR%2BJnCqaf5y6frSSb%2F57cM5lutSRUUajnhLGcz3gzr%2FkAiGHk43DNZ2yAST4rsakh%2FTY2Tzzhm%2BkKasxwps8gcBJUioJe7HBJUS8Z1VDwXicvAs6MWww%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230208T201614Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAQAZ7KLVDTXFGZK6N%2F20230208%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=983343f67f5c618115d947ad3c8cb9e17825dd09535bf18e281e095d09deae86"
                        target="_blank" 
                        rel="noreferrer"
                        ><button className="btn btn-secondary w-36 shadow-md ml-2 flex justify-center items-center opacity-75" >Download<img src={mac} alt="Mac Download" className="w-6 mb-1.5"/></button></a>
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