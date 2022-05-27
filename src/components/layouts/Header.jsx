import React, { useState } from 'react'
import logo from "./logo.svg"
import icon from "./icon.svg"
import "./layout.css"
import { Link } from "react-router-dom";

const Header = () => {

  const [isMobile, setMobile] = useState();

  return (
    <nav className='header'>
        <Link className="navbar-brand" to="/">
            <div className="logo-image">
              <img src={logo} className="img-fluid"/>
            </div>
        </Link>
        <ul 
          className={isMobile? "nav-list-mobile": "nav-list"}
          onClick={() => setMobile(false)}
        >
          <li><Link to="/about">About</Link></li>
          <li><Link to="#contact">Contact</Link></li>
          <li><Link to="/resume">FAQ</Link></li>
          <li><img src={icon} className="img-icon"/></li>
        </ul>
        <button 
          className='mobile-menu-icon'           
          onClick={() => setMobile(!isMobile)}
        >
          { 
            isMobile ? 
            <i className='fas fa-times'></i> : 
            <i className='fas fa-bars'></i> 
          }
        </button>
    </nav>
  )
}

export default Header