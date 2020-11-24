import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";

import WorkExperience from "./workExperience/WorkExperience";

import StartupProject from "./StartupProjects/StartupProject";

import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";


import Education from "./education/Education";
import Top from "./topbutton/Top";

import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";
import { educationInfo } from "../portfolio";

export default class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
      <div className={ null}>
        <StyleProvider
          //value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <WorkExperience />
          <StartupProject />
          <Education />
          <Profile />
          <Footer />
          <Top />
         
        </StyleProvider>
      </div>
    );
  }
}
