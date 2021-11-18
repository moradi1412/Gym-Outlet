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
              <div className="nav-item" >home</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link"  to="/men">
              <div  className="nav-item">men</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/women">
              <div  className="nav-item">women</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              <div className="nav-item">about</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact">
              <div className="nav-item">contact</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/signup">
              <div className="nav-item">signup</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default NavItem;