import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavItem (props) {
  return (
    <div>
      <Navbar>
        <ul>
          <li>
            <NavLink className="link" to="/home">
              <div className="nav-item" >Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link"  to="/men">
              <div  className="nav-item">Men</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/women">
              <div  className="nav-item">Women</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              <div className="nav-item">About</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact">
              <div className="nav-item">Contact</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/signup">
              <div className="nav-item">Signup</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default NavItem;