import React from "react";
import { NavLink } from "react-router-dom";

export default function Bar() {
  return (
    <header>
      <NavLink to="/home" className="home-nav">
        Home
      </NavLink>
      <NavLink to="/profile" className="home-nav">
        Profile
      </NavLink>
      <NavLink to="/messages" className="home-nav">
        Messages
      </NavLink>

      <button>Exit</button>
    </header>
  );
}
