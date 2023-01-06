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
    <div className="ContributorCard">
        <h5>{props.name}</h5>
        <img className="teamPicture" src={currentImage} alt={props.name}/>
        <a href={props.gitHub}> <img className="favicon" src={gitHubLogo} alt='GitHub Logo'/> </a>
        <a  href={props.linkedIn}> <img className="favicon" src={linkedInLogo} alt='LinkedIn Logo'/> </a>
    </div>
  );
}

export default ContributorCard;
