import React, { useState } from 'react'
import logo from "./logo.svg"
import icon from "./icon.svg"
import iconic from "./iconic.svg"
import "./layout.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

const Header = ({ toggleTheme, light, styles }) => {

  const [isMobile, setMobile] = useState();

  let location = useLocation();
  let navigate = useNavigate();

  const locationChange = () => {
    if(location.pathname !== "/") {
      // console.log(location.pathname)
      navigate("/#contactt")
    }
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
        >
          <li><Link to="/about" style={!light ? {color: styles.color} : null}>About</Link></li>
          <ScrollspyNav
            scrollTargetIds={["contactt",]}
            // activeNavClass="is-active"
          >
            <li>
              <a href="#contactt" onClick={locationChange} style={!light ? {color: styles.color} : null}>Contact</a>
            </li>
          </ScrollspyNav>
          <li><Link to="/faq" style={!light ? {color: styles.color} : null}>FAQ</Link></li>
          <li onClick={toggleTheme}>
            {/* src={iconic} */}
            <img src={light ? iconic : icon} className="img-icon"/>
          </li>
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