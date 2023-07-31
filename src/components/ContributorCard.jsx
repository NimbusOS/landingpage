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
