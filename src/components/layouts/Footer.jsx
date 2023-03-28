import React from 'react'
import "./layout.css"
import beh from "../svgs/beh.svg"
import drib from "../svgs/drib.svg"
import twit from "../svgs/twit.svg"
import linked from "../svgs/in.svg"

const Footer = () => {
  return (
    <div className='bottom'>
      <h2 className='text-header'>CHIEDOZIE NWAKA</h2>
      <p style={{ fontSize: "16px", padding: "20px 0 30px 0", textAlign: "center", textTransform: "uppercase" }}>
        Freelance Ux / Visual Designer -- Lagos/Nigeria
      </p><br />
      <p>FIND ME ON</p>
      <p style={{ paddingTop: "10px" }}>
        <a href="https://behance.net/marioedgar">
          <img src={beh} />
        </a>
        <a href="https://www.linkedin.com/in/nwaka-chiedozie-67a073142/">
          <img src={linked} />
        </a>
        <a href="https://dribbble.com/Doziiie">
          <img src={drib} />
        </a>
        <a href="https://twitter.com/Doziiie">
          <img src={twit} />
        </a>
      </p><br /><br />
      <p style={{ paddingBottom: "150px" }}>
        Website made with <span style={{ color: "red" }}>❤</span> love by Chiedozie Nwaka -- &copy; dozie.design / 2023 / All rights reserved.
      </p>
    </div>
  )
}

export default Footer