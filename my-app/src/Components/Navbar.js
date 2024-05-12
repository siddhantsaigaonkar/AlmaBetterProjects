import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "./Images/Logo.png";
import "../App.css"



export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" width="120px" />
          </NavLink>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activenav" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-quizzes"
                className={({ isActive }) => (isActive ? "activenav" : "")}
              >
                My Quizzes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
