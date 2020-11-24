
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Project1a from "./assets/jazz.png"
import Project1b from "./assets/jazzhp.png"
import Project2a from "./assets/cwtwo.png"
import Project2b from "./assets/cwone.png"
import Project3a from "./assets/indulgeone.png"
import Project3b from "./assets/indulgetwo.png"
import "./style.css"



function Portfolio() {
    return (

        <div style = {{textAlign: "center"}}>
         
            <h1>Group Projects</h1>
            <h4>Click On the Images To View The Websites</h4>
            <ul>
                <li>
                    <Link to={{ pathname: "https://gnuartemis.github.io/Music-Chord-Identifier/index.html" }} target="_blank"><img className ="profile-image" src = {Project1a}></img><img className ="profile-image" src = {Project1b}></img></Link>
                </li>
                <h3>Achording to Jazz: Music Theory app for 5th grade music students</h3>
                <li>
                    <Link to={{ pathname: "https://the-cold-west.herokuapp.com/" }} target="_blank"><img className ="profile-image" src = {Project2a}></img><img className ="profile-image" src = {Project2b}></img></Link>
                </li>
                <h3>The Cold West: A winter adventure touring website</h3>
                <li>
                    <Link to={{ pathname: "https://experience-indulgence.herokuapp.com/" }} target="_blank"><img className ="profile-image" src = {Project3a}></img><img className ="profile-image" src = {Project3b}></img></Link>
                </li>
                <h3>Indulge: An upscale private chef dining service</h3>
            </ul>
        </div>
    )
}  

export default Portfolio