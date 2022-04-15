import React from 'react'
import "./screens.css"
import dozie from "./dozie.png"

const HomeScreen = () => {
  return (
    <div className='home'>
    <div className='intro'>
      <h2 className='text-head'>
          Hi, I'm Nwaka Dozie. <br/>
          A product designer based in Nigeria.
      </h2> <br/>
      <p>
        I'm a Product Designer with over 3 years experience <br/>
        conceptualizing and crafting digital products, <br/>
        helping businesses and non-profits expand their <br/>
        capacity for impact.
      </p>
      <img src={dozie} class="intro-img"/>
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
    </div>
    </div>
  )
}

export default HomeScreen