import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="nav">
        <li className="nav-item active ">
          <a className="nav-link btn btn-outline-light navbtn" href="/">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn btn-outline-light navbtn" href="/saved">Saved</a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;