import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-link">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          {" "}
          Contact{" "}
        </NavLink>
        <NavLink to="/about" className="nav-link">
          {" "}
          About{" "}
        </NavLink>
        <NavLink to="/blogs" className="nav-link">
          {" "}
          Blogs{" "}
        </NavLink>
        <NavLink to="/user" className="nav-link">
          {" "}
          User{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
