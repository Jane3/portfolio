
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";




const greeting = {
  /* Your Summary And Greeting Section */
  username: "Jane You",
  title: "Hi there, I am Jane",
  subTitle: emoji("I am a software developer with 2 years of experience debugging, maintaining and implementing new features to the existing applications and platforms written in React JS, Javascript, HTML, Node JS, CSS, Python and Java to improve user experience and make software updates. I am constantly looking for challenging problems to tackle on HackerRank and Leetcode, and working towards Udemy completion certificates in React JS, JavaScript, MongoDB and Node.js in my free time."),
  resumeLink: "https://docs.google.com/document/d/1du-4Zwe6455j7eIQ_kOGw_ugZZHUTS-qNeaP_1yDjaY/edit"
               
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Jane3",
  linkedin: "https://www.linkedin.com/in/jane-you-50619015b/",
  gmail: "youjane96@gmail.com",
  facebook: "https://www.facebook.com/jane.you.7921/",
 
  // Instagram and Twitter are also supported in the links!
};


// Your Skills Section


const skillsSection = {
  title: "Skills",
  subTitle: "I consider myself very lucky as I have found my passion in Software Development, which motivates me to further expand my knowledge and skills in this area through continuous learning, because once I have found my passion, I no longer see learning as a hassle, but rather as an enjoyment.",
  skills: [
   
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
   
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  }
]


};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of Ottawa",
      logo: require("./assets/images/uOttawa.png"),
      subHeader: "Bachelor's Degree in Electrical Engineering",
      duration: "September 2014 - December 2018"
    }
  ]
}


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Web Developer",
      company: "Communyco",
      companylogo: require("./assets/images/Communyco.png"),
      date: "December 2020– Current (Part-time Internship)",
      descBullets: [
        "Developing back-end and front-end features from scratch with other developers for a full scale social media platform that connects content creators with their followers",
        "Building and optimizing front-end design features and functionalities with React.js and React Hooks, developing Microservices with JavaScript, Typescript and Node.js, and fixing any bugs in the existing codebase"
      ]
    },
    {
      role: "Front-End Web Developer",
      company: "Bank of Montréal, BMO",
      companylogo: require("./assets/images/bmo-logo.jpg"),
      date: "March 2020– July 2020 (Contract)",
      descBullets: [
        "Implemented new functionalities to BMO's website with HTML5, JavaScript, CSS3 and jQuery for better user experience and web content updates, used Adobe Target and OpenText's Web Experience Management (WEM) for code implementation, and went through the code review process with the team using BitBucket",
        "Performed A/B testing and Experience Targeting on Adobe Target to personalize content for website visitors"
      ]
    },
    {
      role: "Application Software Developer",
      company: "Bank of Montréal, BMO",
      companylogo: require("./assets/images/bmo-logo.jpg"),
      date: "January 2019– March 2020 (Contract)",
      descBullets: [
        "Automated the repetitive business processes that BMO clients perform on a regular basis using Pega Robotics Studio. This shortened the overall processing time by 10%",
        "Fixed bugs and implemented new functionalities to existing software written in VBA and C# that assist BMO clients with processing transactions and other banking services"
      ]
      
    },
    {
      role: "Software Programmer",
      company: "Health Canada",
      companylogo: require("./assets/images/sante-canada-.png"),
      date: "May 2018– August 2018 (Co-op)",
      descBullets: [
        "Debugged and developed a platform written in Java that could produce more detailed and accurate graphs from big data stored in Oracle Databases for comparison purposes",
        "Generated more sophisticated graphs and models by troubleshooting and developing SQL statements on a platform written in Python with MySQL Workbench"
      ]
    },
  ]
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "I am trying to build and develop more projects to further enhance my skills in Web Development ",
  projects: [
    {
      image: require("./assets/images/Pizza-Builder.png"),
      link: "https://pizza-eat-app.herokuapp.com/",
      gitLink: "https://github.com/Jane3/pizza-eat-app",
      description: "A Pizza Builder Application in React.js (Single Page Application) that allows users to customize the pizza they want and proceed to checkout with the help of Redux for State Management and Firebase for Backend-as-a-Service."
      
    },
    {
      image: require("./assets/images/Recipe.png"),
      link: "https://github.com/Jane3/recipe-book-app",
      gitLink: "https://github.com/Jane3/recipe-book-app",
      description: "In the process of designing a Recipe Book written in JavaScript that allows users to search, add, and bookmark recipes, and update the number of servings."
      
    }
  ]
};

const contactInfo = {
  title: "Contact Me",
  number: "647-868-9909",
  email_address: "youjane96@gmail.com"
};




export { greeting, socialMediaLinks, skillsSection, educationInfo, workExperiences, bigProjects, contactInfo };
