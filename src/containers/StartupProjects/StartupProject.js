import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Dashboard from '../../components/dashboard/Dashboard.js'

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  
  //const { isDark } = useContext(StyleContext);
  return (

    
    <Fade bottom duration={1000} distance="20px">
    
      <div className="main" id="projects">
    
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
        
     
          <Dashboard/>

        </div>
      </div>
      
    </Fade>
  );
}

/*
<div className="startup-projects-main">
<div className="startup-project-text">
  {bigProjects.projects.map((project) => {
   
    return (
      <div
        className="burger-builder-div"
        //onClick={() => openProjectInNewWindow(project.link)}
      >
        <Dashboard/>
        <div className="container">
          <a href= {project.link} target="_blank">  
            <img alt="Project Image" src ={project.image} className="image" ></img></a>
            <div className="middle">
              <div className="text"></div>
            </div>
        </div>

        
        <a href= {project.gitLink} target="_blank">     
        Github Link</a>  
          <br></br>
        </div>
    
    );
  })}
</div>
<div className="startup-project-image"></div>
</div>

*/