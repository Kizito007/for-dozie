import React from 'react'
import "./screens.css"
import dozie from "./dozie.png"

const HomeScreen = () => {
  return (
    <div className='home'>
    <div className='intro'>
      <h2 className='text-head'>
          Hi, I'm Nwaka Dozie. <br/>
          A <span style={{color: "#f50000"}} >product designer</span>  & <span style={{color: "#f5b500"}}>visual artist</span>.
      </h2> <br/>
      <p>
        With over 3 years experience conceptualizing and<br/>
        crafting digital products,helping businesses and<br/>
        non-profits expand their capacity for impact.
      </p>
      <img src={dozie} className="intro-img"/>
    </div>
    <div>
      <h2 className='text-head'>My Skills.</h2>
      <ul className='skills'>
        <li>Visual Design</li>
        <li>UI Design</li>
        <li>Communication</li>
        <li>Decision Making</li>
        <li>User Research</li>
        <li>Efficiency</li>
        <li>Collaboration</li>
        <li>UX Design</li>
        <li>User Focus</li>
        <li>Prototyping</li>
      </ul>
      <ul className='skills'>
        <li>Visual Design</li>
        <li>UI Design</li>
        <li>Communication</li>
        <li>Decision Making</li>
        <li>User Research</li>
        <li>Efficiency</li>
        <li>Collaboration</li>
        <li>UX Design</li>
        <li>User Focus</li>
        <li>Prototyping</li>
      </ul>
      <ul className='skills'>
        <li>Visual Design</li>
        <li>UI Design</li>
        <li>Communication</li>
        <li>Decision Making</li>
        <li>User Research</li>
        <li>Efficiency</li>
        <li>Collaboration</li>
        <li>UX Design</li>
        <li>User Focus</li>
        <li>Prototyping</li>
      </ul>
      <ul className='skills'>
        <li>Visual Design</li>
        <li>UI Design</li>
        <li>Communication</li>
        <li>Decision Making</li>
        <li>User Research</li>
        <li>Efficiency</li>
        <li>Collaboration</li>
        <li>UX Design</li>
        <li>User Focus</li>
        <li>Prototyping</li>
      </ul>
      <ul className='skills'>
        <li>Visual Design</li>
        <li>UI Design</li>
        <li>Communication</li>
        <li>Decision Making</li>
        <li>User Research</li>
        <li>Efficiency</li>
        <li>Collaboration</li>
        <li>UX Design</li>
        <li>User Focus</li>
        <li>Prototyping</li>
      </ul>
    </div>
    </div>
  )
}

export default HomeScreen