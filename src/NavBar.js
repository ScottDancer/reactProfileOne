import React from "react";
import style from "./App.css"

function NavBar() {
  return (
    <div>
      <nav>
        <div className="logo">logo</div>
        <ul className="nav-links">
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
      </nav>
    </div>
  );
}

export default NavBar;
