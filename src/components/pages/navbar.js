import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <span>Pumpkin</span>
      <NavLink to="/">Home</NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
    </header>
  );
}
