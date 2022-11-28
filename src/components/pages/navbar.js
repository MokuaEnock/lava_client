import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="nav" id="logo">
        Pumpkin
      </NavLink>
      <NavLink to="/contact" className="nav">
        Contact
      </NavLink>
      <NavLink to="/about" className="nav">
        About
      </NavLink>
      <NavLink to="/auth" className="nav" id="log-in">
        Log In
      </NavLink>
    </header>
  );
}
