import React, { useState } from 'react'
import logo from "../svgs/logo.svg"
import icon from "../svgs/icon.svg"
import iconic from "../svgs/iconic.svg"
import "./layout.css"
import { Link } from "react-router-dom";

const Header = ({ toggleTheme, light, styles }) => {

  const [isMobile, setMobile] = useState(false);

  const handleToggle = () => {
    setTimeout(() => setMobile(!isMobile), 100)
  }
  return (
    <nav className='header' style={!light ? {background: styles.background} : null}>
        <Link className="navbar-brand" to="/">
            <div className="logo-image">
              <img src={logo} className="img-fluid"/>
            </div>
        </Link>
        <ul 
          className={isMobile? "nav-list-mobile": "nav-list"}
          onClick={() => setMobile(false)}
          // {setTimeout(() => setMobile(false), 1000)}
        >
          <li><Link to="/about" style={!light ? {color: styles.color} : null}>About</Link></li>
          <li><Link to="/projects" style={!light ? {color: styles.color} : null}>Projects</Link></li>
          <li><Link to="/faq" style={!light ? {color: styles.color} : null}>FAQ</Link></li>
          <li onClick={toggleTheme}>
            {/* src={iconic} */}
            <img src={light ? iconic : icon} className="img-icon"/>
          </li>
        </ul>
        <button 
          className='mobile-menu-icon'           
          onClick={handleToggle}
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