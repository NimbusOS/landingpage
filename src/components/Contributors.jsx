import React from 'react';
import ContributorCard from './ContributorCard.jsx'


const Contributors = () =>  {
    // Create an array of Team Members contact information
    const team = [
        {
            name: 'Madeline Doctor', 
            linkedIn: 'https://www.linkedin.com/in/madeline-doctor/', 
            gitHub: 'https://github.com/madelinedoctor1',
        },
        {
            name: 'Arturo Kim', 
            linkedIn: 'https://www.linkedin.com/in/arturokim/', 
            gitHub: 'https://github.com/arturokim',
        },
        {
            name: 'Georges Maroun', 
            linkedIn: 'https://www.linkedin.com/in/georges-m/', 
            gitHub: 'https://github.com/george-maroun',
        },
        {
            name: 'Arthur Su', 
            linkedIn: 'https://www.linkedin.com/in/arthursu/', 
            gitHub: 'https://github.com/suster22',
        },
        {
            name: 'Zhaowei Sun', 
            linkedIn: 'https://www.linkedin.com/in/zhaowei-sun/', 
            gitHub: 'https://github.com/zhaowei-sun',
        },

    ]

    const cards = [];
    for (let i = 0; i < team.length; i++) {
        cards.push(<ContributorCard name={team[i].name} linkedIn={team[i].linkedIn} gitHub={team[i].gitHub}/>)
    }

    return (
        <div id="Contributors" className="pt-16">
            <h3 className="text-3xl text-center pb-10"> Meet The Team </h3>
            <div className="flex flex-row justify-evenly flex-wrap">
                {cards}
            </div>
        </div>
    );
}

export default Contributors;
