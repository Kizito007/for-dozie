import React from 'react'
import dozie from "./dozie.png"

const AboutScreen = () => {
  return (
    <>
        <div className='about'>
            <img style={{ left: "35%", top: "45px "}} src={dozie} class="intro-img"/>
            <h2>A little bit about myself.</h2><br/>
            <p>
                My name is Nwaka Chiedozie Mario and I'm passionate about improving the everyday lives of others through <br/>
                design. I'm constantly learning new things everyday and love meeting people who are motivated and unafraid <br/>
                to explore and share their ideas with the world. <br/><br/>
                I'm a self taught designer and have learnt a lot of the processes, concepts and theories of UX/UI and product <br/>
                design through attending workshops, design challenges, reading blogs and applying these to projects in my <br/>
                spare time and at work. I am very much a big-picture thinker and enjoy working on products end to end, from <br/>
                rom ideation all the way to development.
            </p><br/><br/>
        <hr/>
        </div>
    </>
  )
}

export default AboutScreen