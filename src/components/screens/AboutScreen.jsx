import React from 'react'
import dozie from "./dozie.png"
import hr from "./hr.svg"
import art1 from "./art1.png"
import nft1 from "./nft1.png"
import { Link } from 'react-router-dom'

const AboutScreen = ({styles, light}) => {
  return (
    <>
        <div className='about'>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "100px 48%"
            }}>
                <img style={{ position: "relative", left: "31%", top: "95px", marginBottom: "45px" }} src={dozie} className="intro-img"/>
            </div>
            <h2 className='myself'>A little bit about myself. </h2>
            <div>
                <p>
                My name is Nwaka Chiedozie Mario and I'm passionate about improving the everyday lives of others through 
                design. I'm constantly learning new things everyday and love meeting people who are motivated and unafraid 
                to explore and share their ideas with the world. <br/><br/>
                I'm a self taught designer and have learnt a lot of the processes, concepts and theories of UX/UI and product 
                design through attending workshops, design challenges, reading blogs and applying these to projects in my 
                spare time and at work. I am very much a big-picture thinker and enjoy working on products end to end, from 
                rom ideation all the way to development. <br/><br/><br/>
                </p>
                <img style={{width: "100%"}} src={hr} />
                <br/><br/>
                <h2 style={
                    !light ? {color: styles.color, margin: "20px 0"} : {color: "#494949", margin: "20px 0"}
                    } 
                    className="myself"
                >
                    Wonder can I get along with the, team? Here is me during spare time:
                </h2>
                <p>
                I create NFTs (visual designs) and pencil portrait art during my spare time, Yea! Design is a life-long passion. 
                I view the goal of design as a better quality of human life, either functionally or aesthetically. . I am 
                fascinated by beautiful environments, creatures, and human-input. I am a continual observer of the world 
                around me, I try to interpret all the messages behind the physical things that we see everyday. I also stay 
                current on the latest trends in design, both social and aesthetic. I prefer subtle over loud, like my personality <br/> 
                😁😊.
                </p>
            </div>
        </div>
        <div className='artworks' style={!light ? {background: styles.backdrop} : null}>
            <br/><br/>
            <h2 style={{color: "#f9f9f9", textAlign: "center"}}>Some art works of mine</h2>
            <br/><br/>
            <div className='artbg'>
                <img src={art1} className="art"/>
                <img src={nft1} className="art"/>
                <Link to="/view-more">
                    <button>
                        View More
                    </button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default AboutScreen