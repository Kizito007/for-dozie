import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import "./screens.css"
import dp from "../images/LinkedInDp.png"
import p1 from "../images/p1.png"
import martial from "../images/martial.png"
// import VendarCr from "../images/VendarCr.png"
import Frame41 from "../images/Frame41.png"
import goodes from "../images/goodDesign.png"
import humandes from "../images/human-design.png"
import hr from "../svgs/hr.svg"
import hrd from "../svgs/hrd.svg"
import Peace from "../svgs/Peace.svg"
import outlink from "../svgs/outlink.svg"
import SendLove from "../svgs/SendLove.svg"
// import Contact from "./Contact.jsx"
import Autoplay from "./Autoplay.jsx"
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'
import { Zoom } from 'react-reveal';
import Slider from "react-slick";
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
        breakpoint: 1080,//1350
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 830,
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
      </div>
      <div className='intro'>
        <div>
          <img src={dp} className="intro-img"/>
        </div>
        <h2 className='text-head'>
            Hi, I'm Dozie. <br/>
            <span style={{fontSize: "21px"}}>
            A {" "}
            <span style={{
              background: "linear-gradient(93deg, #EA1B1B 27.26%, #6C2C83 48.26%)",
              "WebkitBackgroundClip": "text",
              "WebkitTextFillColor": "transparent"}} >UX designer</span> {"& "}
            <span style={{
              background: "linear-gradient(90.98deg, #FFAB2E 57.34%, #FF4202 74.4%)",
              "WebkitBackgroundClip": "text",
              "WebkitTextFillColor": "transparent"}}> Visual artist
            </span>
            </span>
        </h2> <br/>
        <p className='intro-text'>
          With over 3 years experience conceptualizing and
          crafting digital products.
          {/* ,helping businesses and
          non-profits <br/> expand their capacity for impact. */}
        </p> <br/>
        <ScrollToTop smooth />
          <button style={{ width: "165px", display: "block", margin: "0 auto" }} className='intro-btn'>
          <a href="mailto:nwakadozie76@gmail.com" style={{
            display: "flex", justifyContent: "center", textDecoration: "none", width: "auto"
          }}>
            Contact me
          </a>
          </button>
      </div>
      <div>
        <h2 className='text-header'>My Skills</h2><br /><br />
        <Zoom>
          <Autoplay/>
        </Zoom>
      </div>
      <div>
        <h2 className='text-header'>Projects</h2><br />
        <p style={{marginTop: "20px", marginBottom: "60px", textAlign: "center"}}>
          I’ve worked with start-ups and small companies, and also 
          created some concepts for my personal side projects.
        </p>
        <Slider {...settings}>
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
              An martial art landing page re-design. 
              </p>
            </div>
          </div>
          </a>
        </Slider>
      </div>
      <div>
        <h2 className='text-header'>Design Principles</h2><br />
        <div className='principles'>
          <div className='good-design'>
            <img src={goodes} />
            <span>
            <img src={SendLove} className="sendlove" style={{width: "50px", borderRadius: "0px"}}/>
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
            <span><img src={Peace} className="peace" style={{ width: "30px" }}/></span>
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
      <br/><br/><br/>
      <img style={{width: "100%"}} src={light ? hr : hrd} />
      {/* <Contact /> */}
      <h2 className='text-header'>Let's create excellent work together!</h2>
      <p style={{fontSize: "18px", padding: "50px 0", textAlign: "center"}}>Get in touch for opportunities or just to say hi! 👋</p><br/>
      <p style={{
        fontSize: "21px", textAlign: "center"
      }}
      >
        <a href="mailto:nwakadozie76@gmail.com" className='footerMail'>
          Nwakadozie76@gmail.com
        </a>
      </p><br /><br />
      <Footer />
    </div>
  )
}

export default HomeScreen
