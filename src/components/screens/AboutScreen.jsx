import React from 'react'
import dozie from "./dozie.png"

const AboutScreen = () => {
  return (
    <>
        <div className='about'>
            <img style={{ left: "35%", top: "45px "}} src={dozie} class="intro-img"/>
            <h2 className='myself'>A little bit about myself.</h2><br/>
            <p>
                My name is Nwaka Chiedozie Mario and I'm passionate about improving the everyday lives of others through <br/>
                design. I'm constantly learning new things everyday and love meeting people who are motivated and unafraid <br/>
                to explore and share their ideas with the world. <br/><br/>
                I'm a self taught designer and have learnt a lot of the processes, concepts and theories of UX/UI and product <br/>
                design through attending workshops, design challenges, reading blogs and applying these to projects in my <br/>
                spare time and at work. I am very much a big-picture thinker and enjoy working on products end to end, from <br/>
                rom ideation all the way to development. <br/><br/><br/>
                <hr/><br/>
                <h2 style={{color: "#494949"}}>
                    Wonder can I get along with the team? Here is me during spare time:
                </h2><br/>
                I create NFTs (visual designs) and pencil portrait art during my spare time, Yea! Design is a life-long passion. <br/>
                I view the goal of design as a better quality of human life, either functionally or aesthetically. . I am <br/>
                fascinated by beautiful environments, creatures, and human-input. I am a continual observer of the world <br/>
                around me, I try to interpret all the messages behind the physical things that we see everyday. I also stay <br/>
                current on the latest trends in design, both social and aesthetic. I prefer subtle over loud, like my personality <br/>
                😁😊.
            </p>
        </div>
    </>
  )
}

export default AboutScreen