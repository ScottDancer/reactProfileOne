import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import FacePic from "./assets/blueglo.jpg"

export default function Home() {
  return (
    // <div>
    //   <Link to="/"> Home </Link>
    //   <Link to="/Portfolio"> Portfolio </Link>
    //   <Link to="/Contact"> Contact </Link>
    // </div>
    <div style = {{textAlign: "center"}} className="Home">
      <h1 style={{ color: "black"}}>
        Hello, I’m Scott Dancer and I’ve gone digital!
      </h1>
 
      <img src = {FacePic} className="profilePic" alt = "blue glow face pic"></img>
  
      {/* <img
        src="https://res-console.cloudinary.com/dpnjzg0ar/thumbnails/transform/v1/image/upload//v1606120852/Ymx1ZV9nbG93X3FvcGduaA==/drilldown"
        alt="blue glow face pic"
      /> */}
  
      <h4>
        I have graciously worked in the restaurant industry for over two and a
        half decades. Mostly in Boston and mainly tending bars at fine dining
        establishments.
      </h4>
      <h4>
        I now live in the Pacific Northwest where I am taking my artistic
        passions and bringing them to the digital world. I am a full stack web
        developer with a background in fine arts. I studied writing and music
        theory at Harvard Extension School and learned color theory and life
        drawing at the Museum of Fine Arts in Boston, MA. I received two
        certificates in San Diego, CA for Visual, Vector, Digital and
        Multi-Media Design.
      </h4>
      <h4>
        {" "}
        My most recent achievement is a Full Stack Web Developing Certificate
        from the University of Washington’s Coding Bootcamp certified through
        Trilogy Education Services.
      </h4>
      <h4>
        {" "}
        I have always been creative, and I have had a long desire of learning to
        build websites completely from the ground up. I am finding great joy in
        this challenging endeavor and look forward to future projects.
      </h4>
      <h4>
        {" "}
        Quirky, cartoonish, and a bit nerdy would describe who I am and that
        certainly is reflected in my design style. Fluent in front end and back
        end languages including many of the apps with the Adobe Creative Suite
        including: Photo Shop, InDesign, Lightroom, Illustrator, Xd, HTML. CSS,
        JavaScript, jQuery, Node.js, Heroku, Git, Responsive Design, User
        Authentication, Materialize, Bootstrap, MySQL, MongoDB and continue to
        learn more each day.
      </h4>
      <h4>
        I could not be more excited about finding opportunities within the tech
        industry to build a satisfying career. My current endeavors consist of
        two websites built entirely by me to showcase my unique styles, digital
        and hand drawn images along with my technical skills. Black Diamond
        Graphix will display multiple levels of design with a great emphasis on
        winter sports and Graphic Graphic Design will be dedicated to present
        material intended for the mature audience.{" "}
      </h4>
     
    </div>
  );
}
