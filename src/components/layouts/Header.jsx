import React from 'react'
import logo from "./logo.svg"
import icon from "./icon.svg"
import "./layout.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='header'>
        <a class="navbar-brand" href="/">
            <div class="logo-image">
              <img src={logo} class="img-fluid"/>
            </div>
        </a>
        <ul className='nav-list'>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><img src={icon} class="img-icon"/></li>
        </ul>
    </nav>
  )
}

export default Header