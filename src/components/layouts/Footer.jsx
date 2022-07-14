import React from 'react'
import "./layout.css"
import beh from "../svgs/beh.svg"
import drib from "../svgs/drib.svg"
import twit from "../svgs/twit.svg"
import linked from "../svgs/in.svg"

const Footer = () => {
  return (
    <div className='bottom'>
      <p style={{ padding: "70px 0" }}>
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