import React from "react";
import "./auth.css";

export default function Authentication() {
  return (
    <main id="authentication">
      <form className="auth-forms" id="form-get-started">
        <span>Log In</span>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <form className="auth-forms" id="form-log-in">
        <span>Sign Up</span>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}
