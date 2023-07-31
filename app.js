let resume = {
    name: 'Billy Bob',
    career: 'Web Support',
    description: 'I like to code.',
    interests: {
        interest1: 'Computers',
        interest2: 'Gaming',
        interest3: 'tinkering with things',
        interest4: 'Rock music'
    },
    jobHistory:{
        jobOne:{
            company: 'HostCroc',
            title: 'Technical Support',
            jobDescription: 'Took inbound support calls, assisting with everything from tech support to billing inqueries.',

        },
        jobTwo:{
            company: 'Larrys Web Design',
            title: 'Developer',
            jobDescription: 'Develop and maintain customer websites.'
        },
        jobThree:{
            company: 'Garys Remodle and more',
            title: 'Grunt',
            jobDescription: 'Doing anything asked'
        },
    },
    skills: {
        skillOne: {
            skill:'wordpress',
            state: false
        },
        skillTwo: {
            skill: 'JavaScript',
            state: false
        },
        skillThree: {
            skill: 'CSS',
            state: false
        },
        skillFour: {
            skill: 'HTML',
            state: false
        },
        skillFive: {
            skill:'Piano',
            state: true
        }
    }
}

let bigName = resume.name.toUpperCase();


function displayPosition(company, jobTitle, description) {
    console.log('* ' + company + '; ' + jobTitle + ': ' + description);
};

function displaySkill (skillName, cool){
    if (cool == false){
        console.log('* ' + skillName);
    }else if(cool == true){
        console.log('* BAM: ' + skillName); 
    }
};

console.log(bigName);
console.log(resume.career);
console.log(resume.description);

console.log(' ');

console.log('My Interests: ');
console.log('* ' + resume.interests.interest1);
console.log('* ' + resume.interests.interest2);
console.log('* ' + resume.interests.interest3);
console.log('* ' + resume.interests.interest4);

console.log(' ');
console.log('My Previous Experience: ');
displayPosition(resume.jobHistory.jobOne.company, resume.jobHistory.jobOne.title, resume.jobHistory.jobOne.jobDescription);
displayPosition(resume.jobHistory.jobTwo.company,resume.jobHistory.jobTwo.title, resume.jobHistory.jobTwo.jobDescription);
displayPosition(resume.jobHistory.jobThree.company, resume.jobHistory.jobThree.title, resume.jobHistory.jobThree.jobDescription);

console.log(' ');
console.log('My Skills: ')
displaySkill(resume.skills.skillOne.skill, resume.skills.skillOne.state);
displaySkill(resume.skills.skillTwo.skill, resume.skills.skillTwo.state);
displaySkill(resume.skills.skillThree.skill, resume.skills.skillThree.state);
displaySkill(resume.skills.skillFour.skill, resume.skills.skillFour.state);
displaySkill(resume.skills.skillFive.skill, resume.skills.skillFive.state);

