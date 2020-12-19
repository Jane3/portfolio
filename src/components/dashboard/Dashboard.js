import React, {Component} from "react";
import ReactDOM from "react-dom";
import { bigProjects } from "../../portfolio";
import './Dashboard.css';
import Modal from "../modal/Modal.js"; 


class Dashboard extends Component {
   
    state={
        show:false
    };

    showModal=()=> {
        this.setState({show: true}); 
    };

    hideModal =()=> {
        this.setState({show:false}); 
    };

    render(){
        return(
            <main>
                <div className="startup-projects-main">
                    <div className="startup-project-text">
                    {bigProjects.projects.map((project) => {
                        return (
                        
                        <div
                            className="burger-builder-div"
                            //onClick={() => openProjectInNewWindow(project.link)}
                        >
                            <div className="container">
                              
                            <a href={project.link} target="_blank">  
                            <img alt="Project Image" src ={project.image} className="image" >
                                </img>
   
                            </a>
                            
  
                                <p>{project.description}</p>
                                <a href= {project.gitLink} target="_blank">     
                                    Github Link
                                </a>  

                                
                            </div>

                            <br/>
                        </div>
                        
                        );
                    })}        
                </div>
                
                </div>
            </main>
        );
    }
}

export default Dashboard; 

/*
<Modal show={this.state.show} handleClose={this.hideModal}>
                                <p>{project.description}</p>
                                <a href= {project.gitLink} target="_blank">     
                                    Github Link
                                </a>  

                                <button type="button" onClick={this.showModal}>
                                open
                            </button>
                                </Modal>

                            */
