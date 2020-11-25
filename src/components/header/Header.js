import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences } from "../../portfolio";

function Header() {
  //const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className={"header"}>
        <a href="" className="logo">
          <span className="logo-name">Home</span>
         
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={"navicon"}></span>
        </label>
        <ul className={"menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {exp === true && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}

          <li>
            <a href="#projects">Projects</a>
          </li>

         <li>
            <a href="#education">Education</a>
          </li>

          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
            
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
