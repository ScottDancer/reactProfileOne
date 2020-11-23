import React, { useState } from "react";
import style from "./App.css"

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">SD</div>
        <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "" }}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Portolio</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default NavBar;
