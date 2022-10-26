import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import "./screens.css"
import dp from "../images/homepic.png"
// import p1 from "../images/pp1.png"
// import martial from "../images/martial.png"
// // import VendarCr from "../images/VendarCr.png"
import museumpic from "../images/museumpic.png"
import VendarCr from "../images/FrameVendar.png"
import pp1 from "../images/p1.png"
import goodes from "../images/goodDesign.png"
import humandes from "../images/human-design.png"
import hr from "../svgs/hr.svg"
import hrd from "../svgs/hrd.svg"
import band1 from "../svgs/band1.svg"
import band2 from "../svgs/band2.svg"
import Peace from "../svgs/Peace.svg"
import outlink from "../svgs/outlink.svg"
import SendLove from "../svgs/SendLove.svg"
// import Contact from "./Contact.jsx"
// import Autoplay from "./Autoplay.jsx"
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'
import { Reveal } from 'react-reveal';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeScreen = ({ light }) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1930,//1350
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1245,//1350
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1045,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className='home'>
      <div className='invincible'>
        <h1>Good design is human-centered.</h1>
        <div className="floating grad"></div>
        <div className="floating grad2"></div>
      </div>
      <div className='intro'>
        <div>
          <img src={dp} className="intro-img" />
        </div>
        <Reveal>
          <h2 className='text-head'>
            Hi, there
            <span className='wave'>👋</span>
          </h2> <br />
          <p className='intro-text'>
            Need someone with over 3 years experience conceptualising and
            crafting day to day digital products, that’s where i come in. <br />
            Like Vincent Van Gogh said <br />
            “Great things are done by a series of small things brought together.”
          </p> <br />
        </Reveal>
        <ScrollToTop smooth />
        {/* <button style={{ width: "165px", display: "block", margin: "0 auto" }} className='intro-btn'>
          
        </button> */}
      </div>
      {/* <div>
        <h2 className='text-header'>My Skills</h2><br /><br />
        <Zoom>
          <Autoplay />
        </Zoom>
      </div> */}
      <div>
        <h2 className='text-header'>Selected Projects</h2><br /><br />

        <div className='projects'>
          <Reveal>
            <div className='card' >
              <div className='card-top cardtop'>
                <img src={museumpic} className="parallax-bg" />
              </div>
              <div className='card-bottom cardbottom'>
                <h2 className='projects-vendar-h2'>NCMM Nigeria Website Redesign</h2><br /><br />
                <a href="https://www.behance.net/gallery/155407133/NCMM-Nigeria-Website-Redesign">
                  <button className='intro-btn' style={{ width: "255px" }}>
                    View on behance <img style={{ display: "inline" }} src={outlink} />
                  </button>
                </a>
              </div>
            </div>
          </Reveal><br /><br />
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
                <Link to="/case-study/2">
                  <button className='vendar-cr'>
                    Read Case Study
                  </button>
                </Link>
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
                <Link to="/case-study/1">
                  <button className='intro-btn'>
                    Read Case Study
                  </button>
                </Link>
              </div>
            </div>
          </Reveal>
          {/* <Link to="/case-study/2">div className="projects-container"
            <div className='homecard' style={{ border: "1px solid #FFC960" }}>
              <div className='card-top'>
                <img src={Frame41} className="parallax-bg" /><br />
              </div>
              <div className="projectsTextContainer">
                <h2>Vendar</h2> <br />
                <p>
                  An e-commerce platform that increases sales <br /> for stores
                  and small businesses bringing products to online customers.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/case-study/1">
            <div className='homecard' style={{ border: "1px solid #C5B2C8" }}>
              <div className='card-top'>
                <img src={p1} className="parallax-bg" /><br />
              </div>
              <div className="projectsTextContainer">
                <h2>Interface Revamp of the Squid App</h2> <br />
                <p>
                  A collective and innovative platform <br /> for linking professional
                  services and consumers in a simple way.
                </p>
              </div>
            </div>
          </Link> */}
        </div>
        {/* <Slider {...settings}>
          <Link to="/case-study/2">
          <div className='card' style={{ border: "1px solid #FFC960" }}>
            <div className='card-top'>
              <img src={Frame41} className="parallax-bg"/><br />
            </div>
            <div style={{ width: "fitContent", margin: "0 10px" }}>
              <h2>Vendar</h2> <br />
              <p>
                An e-commerce platform that increases sales <br/> for stores
                and small businesses bringing products to online customers. 
              </p>
            </div>
          </div>
          </Link>
          <Link to="/case-study/1">
          <div className='card' style={{ border: "1px solid #C5B2C8" }}>
            <div className='card-top'>
              <img src={p1} className="parallax-bg"/><br />
            </div>
            <div style={{ width: "fitContent", margin: "0 10px" }}>
              <h2>Interface Revamp of the Squid App</h2> <br />
              <p>
                A collective and innovative platform <br /> for linking professional 
                services and consumers in a simple way. 
              </p>
            </div>
          </div>
          </Link>
          <a href="https://www.behance.net/gallery/148532007/Martial-Arts">
          <div className='card' style={{ border: "1px solid #EA1B1B" }}>
            <div className='card-top'>
              <img src={martial} className="parallax-bg"/><br />
            </div>
            <div style={{ width: "fitContent", margin: "0 10px" }}>
              <h2>Belt-Dojo <img style={{display: "inline"}} src={outlink} /></h2> <br />
              <p>
              A martial art landing page re-design. 
              </p>
            </div>
          </div>
          </a>
        </Slider> */}
      </div>
      <div>
        <img className='band band1' src={band1} />
        <img className='band band2' src={band2} />
        <h2 className='text-header'>Design Principles</h2><br />
        <div className='principles'>
          <div className='good-design'>
            <img src={goodes} />
            <span>
              <img src={SendLove} className="sendlove" style={{ width: "50px", borderRadius: "0px" }} />
            </span>
            <div className='princi-text'>
              <h3>Good design solves real problems.</h3>
              <p>
                With great understanding in design & tech,
                Well developed insight on project comprehension
                based on strong customer empathy as regards to business & design.
              </p>
            </div>
          </div>
          <div className='good-design'>
            <img src={humandes} />
            <span><img src={Peace} className="peace" style={{ width: "30px" }} /></span>
            <div className='princi-text' style={{ left: "49px" }}>
              <h3>Design for humans, not users.</h3>
              <p>
                A brilliant merging of practical functionality & aesthetics.
                Excellent micro-copy showing clear results.
                Structuring products with substantial experiences that are well detailed and design oriented.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <img style={{ width: "100%" }} src={light ? hr : hrd} />
      {/* <Contact /> */}
      <h2 className='text-header'>Let's create excellent work together!</h2>
      <p style={{ fontSize: "16px", padding: "50px 0", textAlign: "center" }}>Get in touch for opportunities or just to say hi! 👋</p><br />
      <h1 className='gradientMail' style={{
        textAlign: "center"
      }}
      >
        <a href="mailto:nwakadozie76@gmail.com" className='footerMail'>
          Nwakadozie76@gmail.com
        </a>
      </h1><br /><br />
      <Footer />
    </div>
  )
}

export default HomeScreen
