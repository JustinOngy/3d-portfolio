import React from "react";
import { NavLink } from "react-router-dom";
import { night, day } from "../assets/icons/";

export const Navbar = ({ isDarkMode, toggleNightMode }) => {
  const linkTextColor = isDarkMode ? "text-white" : "text-black";

  return (
    <header className="header flex items-center justify-between p-4">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">JO</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : linkTextColor
          }>
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : linkTextColor
          }>
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : linkTextColor
          }>
          Contact
        </NavLink>
        <button onClick={toggleNightMode}>
          <img src={isDarkMode ? day : night} className="w-8 h-8" alt="Mode" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
