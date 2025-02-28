import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { Link } from 'react-router-dom';
import dozie from "../images/LinkedInDp.png"
import hr from "../svgs/hr.svg"
import rightarrow from "../svgs/rightarrow.svg"
import hrd from "../svgs/hrd.svg"
import art1 from "../images/art1.png"
import nft1 from "../images/nft1.png"
import { Reveal } from 'react-reveal';

const AboutScreen = ({ styles, light }) => {
    return (
        <>
            <div className='about'>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "100px 48%"
                }}>
                    <img style={{ position: "relative", left: "31%", top: "95px", marginBottom: "45px" }} src={dozie} className="intro-img" />
                </div>
                <ScrollToTop smooth />
                {/* <h2 className='myself'>
                    <span className="ux">UX designer</span> & <span className="visual">Visual artist</span>
                </h2> */}
                <div>
                    <Reveal>
                        <p>
                            My name is Nwaka Chiedozie Mario and I'm passionate about improving the everyday lives of others through
                            design. I'm constantly learning new things everyday and love meeting people who are motivated and unafraid
                            to explore and share their ideas with the world. <br /><br />
                            I'm a self taught designer and have learnt a lot of the processes, concepts and theories of UX/UI and product
                            design through attending workshops, design challenges, reading blogs and applying these to projects in my
                            spare time and at work. I am very much a big-picture thinker and enjoy working on products end to end, from
                            ideation all the way to development. <br /><br />
                        </p>
                        <a href="https://read.cv/dozie">
                            <button style={{ width: "184px" }} className='intro-btn'>
                                Resume/CV
                            </button>
                        </a>
                        <br /><br /><br />
                    </Reveal>
                    <img style={{ width: "100%" }} src={light ? hr : hrd} />
                    <br /><br />
                    <Reveal>
                        <h2 style={
                            !light ? { color: styles.color, margin: "20px 0" } : { color: "#494949", margin: "20px 0" }
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
                            current on the latest trends in design, both social and aesthetic. I prefer subtle over loud, like my personality <br />
                            😁😊.
                        </p>
                    </Reveal>
                </div>
            </div>
            <h2 style={{ textAlign: "center" }}>Some art works of mine</h2>
            <br /><br /><br /><br /><br />
            <div className='artworks' style={!light ? { background: styles.backdrop } : null}>
                <div className='artbg'>
                    <img src={nft1} className="art" />
                    <img src={art1} className="art" />
                    <a href="https://opensea.io/Doziiie">
                        <img src={rightarrow} className="art-arrow" />
                        {/* <button>
                            View More
                        </button> */}
                    </a>
                </div>
            </div>
        </>
    )
}

export default AboutScreen