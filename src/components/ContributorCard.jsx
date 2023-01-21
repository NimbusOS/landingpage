import React from 'react';
import gitHubLogo from '../assets/github.svg'
import linkedInLogo from '../assets/linkedin.png'
import madeline from '../assets/madelinedoctor.png';
import arturo from '../assets/arturokim.png';
import georges from '../assets/georgesmaroun.png';
import arthur from '../assets/arthursu.png';
import zhaowei from '../assets/zhaoweisun.png';


const ContributorCard = (props) =>  {
  // Create a link between props.name and imported image
  let currentImage;
  if (props.name === "Madeline Doctor") currentImage = madeline;
  else if (props.name === "Arturo Kim") currentImage = arturo;
  else if (props.name === "Georges Maroun") currentImage = georges;
  else if (props.name === "Arthur Su") currentImage = arthur;
  else if (props.name === "Zhaowei Sun") currentImage = zhaowei;

  return (
    // <div className="flex flex-col items-center pb-10">
    //     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
    //     <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={currentImage} alt={props.name}/>
    //     <div className="flex mt-4 space-x-3 md:mt-6">
    //       <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href={props.gitHub}> <img className="favicon" src={gitHubLogo} alt='GitHub Logo'/> </a>
    //       <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" href={props.linkedIn}> <img className="favicon" src={linkedInLogo} alt='LinkedIn Logo'/> </a>
    //     </div>
    // </div>
    <div className="card w-48 bg-white shadow-2xl shadow-primary">
    <figure className="px-8 pt-8">
      <img src={currentImage} alt={props.name} className="rounded-xl hover:scale-90 transition duration-300 ease-in-out" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-sm text-base-300">{props.name}</h2>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a className="inline-flex items-center scale-75 text-center max-w-xs hover:scale-90 transition duration-300 ease-in-out" href={props.gitHub} target="_blank" rel="noreferrer"> <img className="favicon" src={gitHubLogo} alt='GitHub Logo'/> </a>
          <a className="inline-flex items-center scale-75 text-center max-w-xs hover:scale-90 transition duration-300 ease-in-out" href={props.linkedIn} target="_blank" rel="noreferrer"> <img className="favicon" src={linkedInLogo} alt='LinkedIn Logo'/> </a>
      </div>
    </div>
  </div>
  );
}

export default ContributorCard;
