import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import NavItem from "../Nav";
import About from "../pages/about";
import Home from "../pages/Home";
import Contact from "../pages/contact";
import men from "../pages/men";
import women from "../pages/women";
import signup from "../pages/about";



class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <NavItem />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/men" component={men}/>
          <Route path="/women" component={women}/>
          <Route path="/signup" component={signup}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;