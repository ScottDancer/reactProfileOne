import React, { useState } from "react";
// import style from "./App.css;
import {Link} from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
     
      <nav>
        <div className="logo">SD</div>
        <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "" }}>
        <li>
          <Link to = "/home">Home</Link>
        </li>
        <li>
          <Link to = "/portfolio">Portolio</Link>
        </li>
        <li>
          <Link to = "/contact">Contact</Link>
        </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default NavBar;
