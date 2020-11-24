import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Contact() {
  return (
      <div>
          <h1>This is the contact page.</h1>
          Please feel free to contact me directly at my email: 
          scottpdancer@gmail.com
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