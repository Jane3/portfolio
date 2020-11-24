
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";



const greeting = {
  /* Your Summary And Greeting Section */
  username: "Jane You",
  title: "Hi there, I am Jane",
  subTitle: emoji("Software developer with 2 years of experience debugging, maintaining and implementing new features to the existing applications written in Javascript, HTML, Jquery and Java."),
  resumeLink: "https://docs.google.com/document/d/1du-4Zwe6455j7eIQ_kOGw_ugZZHUTS-qNeaP_1yDjaY/edit?fbclid=IwAR1Ziy7n_uImXTUoAqnnLS9JkWO2DX1VSitjUaKgK2owaBW7v0rEB5RXJvo"
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
  subTitle: "I consider myself very lucky as I have found my passion in Web Development, which motivates me to continuously expand my knowledge and skills in this area, because once I have found my passion, I no longer see learning as a hassle, but rather as an enjoyment.",
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
      subHeader: "Bachelor's Degrees in Electrical Engineering",
      duration: "September 2014 - December 2018"
    }
  ]
}


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Web Developer",
      company: "Bank of Montréal, BMO",
      companylogo: require("./assets/images/bmo-logo.jpg"),
      date: "March 2020– July 2020 (Contract)",
      descBullets: [
        "Implemented new functionalities for BMO websites with HTML5, JavaScript, CSS3 and jQuery for better user experience and websites content updates, used Adobe Target and OpenText's Web Experience Management (WEM) for code implementation, and went through the code review process with the team using BitBucket",
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
      image: require("./assets/images/Burger-Builder.png"),
      link: "https://github.com/Jane3/Burger-Builder"
    },
    
  ]
};

const contactInfo = {
  title: "Contact Me",
  number: "647-868-9909",
  email_address: "youjane96@gmail.com"
};




export { greeting, socialMediaLinks, skillsSection, educationInfo, workExperiences, bigProjects, contactInfo };
