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
    </div>
    </div>
  )
}

export default HomeScreen