import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import VendarCr from "../images/VendarCr.png"
import pp1 from "../images/pp1.png"
import martial from "../images/martial.png"
import outlink from "../svgs/outlink.svg"
import { Link } from 'react-router-dom'
import { Reveal } from 'react-reveal';
import Footer from '../layouts/Footer'

const ProjectScreen = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <h2>Projects</h2>
        <ScrollToTop smooth />
        <p style={{ margin: "24px 0" }}>
          I’ve worked with start-ups and small companies, 
          and also created some concepts for my personal side projects.
        </p><br /><br />
        <div className='projects'>
        <Reveal>
        <div className='card' style={{ height: "500px" }}>
          <div className='card-top cardtop'>
            <img src={pp1} className="parallax-bg"/>
          </div>
          <div className='card-bottom cardbottom'>
          <h2 className='p-card1'>Interface Revamp of the Squid App</h2>
              <p className='p-card1'>
                A collective and innovative platform for linking 
                professional services and consumers in a simple way. 
              </p><br />
              <Link to="/case-study/1">
                <button className='intro-btn'>
                  Read Case Study
                </button>
              </Link>
          </div>
        </div>
        </Reveal>
        <Reveal>
        <div className='card'  style={{ height: "500px" }}>
          <div className='card-top cardtop'>
            <img src={VendarCr} className="parallax-bg"/>
          </div>
          <div className='card-bottom cardbottom'>
          <h2 className='projects-vendar-h2'>Vendar</h2><br />
              <p>
                An e-commerce platform that increases sales for stores and 
                small businesses bringing products to online customers.
              </p><br />
              <Link to="/case-study/2">
                <button className='vendar-cr'>
                  Read Case Study
                </button>
              </Link>
          </div>
        </div>
        </Reveal>
        <Reveal>
        <div className='card' style={{ height: "500px" }}>
          <div className='card-top cardtop'>
            <img src={martial} className="parallax-bg"/>
          </div>
          <div className='card-bottom cardbottom'>
          <h2>Belt-Dojo</h2>
              <p>
                A martial art landing page re-design. 
              </p><br /><br />
              <a href="https://www.behance.net/gallery/148532007/Martial-Arts">
                <button className='martial-btn'>
                  View <img style={{display: "inline"}} src={outlink} />
                </button>
              </a>
          </div>
        </div>
        </Reveal>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProjectScreen