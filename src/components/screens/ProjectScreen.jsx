import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import VendarCr from "../images/FrameVendar.png"
import pp1 from "../images/p1.png"
import azapay from "../images/azapay.png"
import martial from "../images/martial.png"
import museumpic from "../images/museumPic.png"
import outlink from "../svgs/outlink.svg"
import { Link } from 'react-router-dom'
import { Reveal } from 'react-reveal';
import Footer from '../layouts/Footer'

const ProjectScreen = () => {
  return (
    <>
      <div className='projectsCover' style={{ marginTop: "100px" }}>
        <ScrollToTop smooth />
        <div style={{ display: "grid", position: "relative", justifyContent: "center" }}>
          <h2>Works</h2>
          <p style={{ margin: "24px 0" }}>
            I’ve worked with start-ups and small companies,
            and also created some concepts for my personal side projects.
          </p>
        </div><br /><br /><br />
        <div className='projects'>
          <Reveal>
            <Link to="/case-study/2">
              <div className='card' style={{ margin: "70px 0" }}>
                <div className='card-top cardtop'>
                  <img src={VendarCr} className="parallax-bg" />
                </div>
                <div className='card-bottom cardbottom'>
                  <h2 className='projects-vendar-h2'>Vendar</h2><br />
                  <p>
                    An e-commerce platform that increases sales for stores and
                    small businesses bringing products to online customers.
                  </p><br /><br />
                </div>
              </div>
            </Link>
          </Reveal><br /><br />
          <Reveal>
            <Link to="/case-study/1">
              <div className='card' >
                <div className='card-top cardtop'>
                  <img src={pp1} className="parallax-bg" />
                </div>
                <div className='card-bottom cardbottom'>
                  <h2 className='projects-vendar-h2'>Squid App Revamp</h2><br />
                  <p>
                    A collective and innovative platform for linking professional
                    services and consumers in a simple way.
                  </p><br /><br />
                </div>
              </div>
            </Link>
          </Reveal><br /><br />
          <Reveal>
            <a href="https://play.google.com/store/apps/details?id=com.azapay">
              <div className='card' >
                <div className='card-top cardtop'>
                  <img src={azapay} className="parallax-bg" />
                </div>
                <div className='card-bottom cardbottom'>
                  <h2 className='projects-vendar-h2'>AZAPAY</h2><br />
                  <p>
                    Azapay is a P2P payment application that bridges the existing
                    money transfer gap <br /> between business owners and customers.
                  </p><br /><br />
                </div>
              </div>
            </a>
          </Reveal>
          <Reveal><br /><br />
            <a href="https://www.behance.net/gallery/155407133/NCMM-Nigeria-Website-Redesign">
              <div className='card' >
                <div className='card-top cardtop'>
                  <img src={museumpic} className="parallax-bg" />
                </div>
                <div className='card-bottom cardbottom'>
                  <h2 className='projects-vendar-h2'>NCMM Nigeria Website Redesign</h2><br /><br />
                </div>
              </div>
            </a>
          </Reveal>
        </div><br /><br /><br /><br />
        <Footer />
      </div>
    </>
  )
}

export default ProjectScreen