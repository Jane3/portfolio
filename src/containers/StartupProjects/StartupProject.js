import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

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
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjects.projects.map((project) => {
                return (
                  <div
                    className="burger-builder-div"
                    onClick={() => openProjectInNewWindow(project.link)}
                  >
                   
                    <img className="burger" alt="Burger Builder App in progress, Please click on text to see Github code" src ={require("../../assets/images/Burger-Builder.png")}></img>
                  </div>
                );
              })}
            </div>
            <div className="startup-project-image"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
