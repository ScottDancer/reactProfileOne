import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact1 from "./assets/probs.png"
import "./style.css"


function Contact() {
  return (
      <div style = {{textAlign: "center"}}>
          <h1>Scott Dancer</h1>
          <h3>Graphic Designer</h3>
          <h3>Fullstack Web Developer</h3>

          <div>
          <img className ="Contact1" src = {Contact1}></img>
          </div>

          <h4>Please feel free to contact me directly at my email or visit the links below to see more: </h4>
          <h4>scottpdancer@gmail.com</h4>
        
      
                <li>
                    <Link to={{ pathname: "https://github.com/ScottDancer" }} target="_blank">github</Link>
                </li>
                <li>
                    <Link to={{ pathname: "https://www.linkedin.com/in/scott-dancer-9744091b2/" }} target="_blank">linkedin</Link>
                </li>

      </div>
  )
}
export default Contact