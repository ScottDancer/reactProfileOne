import React from "react";
import "./home-styles.css";
import { Link } from "react-router-dom";
import FacePic from "./assets/headshot.jpg"
import hero from "./assets/hero-comp.jpg"

export default function Home() {
  return (
    // <div>
    //   <Link to="/"> Home </Link>
    //   <Link to="/Portfolio"> Portfolio </Link>
    //   <Link to="/Contact"> Contact </Link>
    // </div>
    <div style = {{textAlign: "center"}} className="Home">
      <h1 style={{ color: "#877D74"}}>
        Scott Patrcick Dancer
      </h1>
      <img src = {hero} className="hero" alt ="glowing laptop"></img>
      <img src = {FacePic} className="profilePic" alt ="headshot"></img>
  
      <div className="container">
        <p>Full Stack Web Developer and Graphic Designer with a background in
        illustration and cartooning. Possess a strong foundation in
        communication, problem solving, and creativity that lends itself to
        building applications that are aesthetically pleasing and meet
        client expectations. Earned a Certificate in Web Development from
        the University of Washington.</p>

        <p>
          Vancouver, WA | (360) 953-7969 
          Email:        scottpdancer@gmail.com
          GitHub:      https://github.com/ScottDancer
          Portfolio:   https://spd-react-profile.herokuapp.com/home
          LinkedIn:   https://www.linkedin.com/in/scott-dancer-9744091b2/
      </p>
    
  
      </div>
    </div>
  );
}
