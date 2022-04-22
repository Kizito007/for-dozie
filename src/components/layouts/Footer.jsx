import React from 'react'
import "../screens/screens.css"
import { Link } from 'react-router-dom'
import beh from "./beh.svg"
import drib from "./drib.svg"
import twit from "./twit.svg"
import linked from "./in.svg"

const Footer = () => {
  return (
    <div className='bottom'>
        <h2 className='text-head'>Let's create excellent work together!</h2>
        <p style={{fontSize: "21px"}}>Get in touch for opportunities or just to say hi! 👋</p><br/>
        <Link to="/contact">
          <button className='contact'>
            Contact me
          </button>
        </Link>
        <p style={{ padding: "70px 0" }}>
          <Link to="/be">
            <img src={beh}/>
          </Link>
          <Link to="/drib">
            <img src={drib}/>
          </Link>
          <Link to="/twit">
            <img src={twit}/>
          </Link>
          <Link to="/ln">
            <img src={linked}/>
          </Link>
        </p>
    </div>
  )
}

export default Footer