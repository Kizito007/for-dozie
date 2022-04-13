import React from 'react'
import logo from "./logo.svg"
import icon from "./icon.svg"
import "./layout.css"

const Header = () => {
  return (
    <nav className='header'>
        <a class="navbar-brand" href="/">
            <div class="logo-image">
              <img src={logo} class="img-fluid"/>
            </div>
        </a>
        <ul className='nav-list'>
          <li><a href="#home">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><img src={icon} class="img-icon"/></li>
        </ul>
    </nav>
  )
}

export default Header