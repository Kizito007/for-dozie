import React from 'react'
import logo from "./logo.svg"
import "./layout.css"

const Header = () => {
  return (
    <div className='header'>
        <a class="navbar-brand" href="/">
            <div class="logo-image">
              <img src={logo} class="img-fluid"/>
            </div>
        </a>
    </div>
  )
}

export default Header