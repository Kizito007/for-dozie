import React from 'react'
import "./layout.css"
import { Link } from 'react-router-dom'
import beh from "./beh.svg"
import drib from "./drib.svg"
import twit from "./twit.svg"
import linked from "./in.svg"

const Footer = () => {
  return (
    <div className='bottom'>
      <p style={{ paddingTop: "70px" }}>
        <a href="https://behance.net/marioedgar">
          <img src={beh}/>
        </a>
        <a href="https://dribbble.com/Doziiie">
          <img src={drib}/>
        </a>
        <a href="https://twitter.com/Doziiie">
          <img src={twit}/>
        </a>
        <a href="https://www.linkedin.com/in/nwaka-chiedozie-67a073142/">
          <img src={linked}/>
        </a>
      </p>
    </div>
  )
}

export default Footer