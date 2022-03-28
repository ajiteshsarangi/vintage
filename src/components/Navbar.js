import React from "react";
import logoMain from "../logo.png";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <div className="navbar flex">
      <div className="logo">
        <img src={logoMain} style={{ height: "80px", width: "80px" }} />
      </div>
      <div>
        <ul className="navlinks flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/#about-us">About Us</Link>
          </li>
          <li>
            <Link to="/#our-services">Services</Link>
          </li>
          <li>
            <Link to="/#menu">Menu</Link>
          </li>
          <li>
            {" "}
            <Link to="/#testimonial">Testimonial</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
