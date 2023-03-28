import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import VendarCr from "../images/FrameVendar.png"
import pp1 from "../images/p1.png"
import martial from "../images/martial.png"
import museumpic from "../images/museumPic.png"
import outlink from "../svgs/outlink.svg"
import { Link } from 'react-router-dom'
import { Reveal } from 'react-reveal';
import Footer from '../layouts/Footer'

const ProjectScreen = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <ScrollToTop smooth />
        <div style={{ textAlign: "center" }}>
          <h2>Works</h2>
          <p style={{ margin: "24px 0" }}>
            I’ve worked with start-ups and small companies,
            and also created some concepts for my personal side projects.
          </p>
        </div><br /><br /><br />
        <div className='projects'>
          <Reveal>
            <div className='card' >
              <div className='card-top cardtop'>
                <img src={VendarCr} className="parallax-bg" />
              </div>
              <div className='card-bottom cardbottom'>
                <h2 className='projects-vendar-h2'>Vendar</h2><br />
                <p>
                  An e-commerce platform that increases sales for stores and
                  small businesses bringing products to online customers.
                </p><br /><br />
                {/* <Link to="/case-study/2">
                  <button className='vendar-cr'>
                    Read Case Study
                  </button>
                </Link> */}
              </div>
            </div>
          </Reveal><br /><br />
          <Reveal>
            <div className='card' >
              <div className='card-top cardtop'>
                <img src={pp1} className="parallax-bg" />
              </div>
              <div className='card-bottom cardbottom'>
                <h2 className='p-card1'>Interface Revamp of the Squid App</h2> <br />
                <p className='p-card1'>
                  A collective and innovative platform for linking
                  professional services and consumers in a simple way.
                </p><br /><br />
                {/* <Link to="/case-study/1">
                  <button className='intro-btn'>
                    Read Case Study
                  </button>
                </Link> */}
              </div>
            </div>
          </Reveal><br /><br />
          <Reveal>
            <div className='card' >
              <div className='card-top cardtop'>
                <img src={martial} className="parallax-bg" />
              </div>
              <div className='card-bottom cardbottom'>
                <h2>Belt-Dojo</h2><br />
                <p>
                  A martial art landing page re-design.
                </p><br /><br />
                {/* <a href="https://www.behance.net/gallery/148532007/Martial-Arts">
                  <button className='martial-btn'>
                    View <img style={{ display: "inline" }} src={outlink} />
                  </button>
                </a> */}
              </div>
            </div>
          </Reveal>
          <Reveal><br /><br />
            <div className='card' >
              <div className='card-top cardtop'>
                <img src={museumpic} className="parallax-bg" />
              </div>
              <div className='card-bottom cardbottom'>
                <h2 className='projects-vendar-h2'>NCMM Nigeria Website Redesign</h2><br /><br />
                {/* <a href="https://www.behance.net/gallery/155407133/NCMM-Nigeria-Website-Redesign">
                  <button className='intro-museum'>
                    View <img style={{ display: "inline" }} src={outlink} />
                  </button>
                </a> */}
              </div>
            </div>
          </Reveal>
        </div><br /><br /><br /><br />
        <Footer />
      </div>
    </>
  )
}

export default ProjectScreen