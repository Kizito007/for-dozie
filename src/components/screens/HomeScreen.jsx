import React from 'react'
import "./screens.css"
import dozie from "./dozie.png"
// import art1 from "./art1.png"
import p1 from "./p1.png"
import goodes from "./goodes.png"
import humandes from "./humandes.png"
// import squidbg from "./squidbg.png"
// import arrow4 from "./arrow4.svg"
import hr from "./hr.svg"
import hrd from "./hrd.svg"
import Peace from "./Peace.svg"
import SendLove from "./SendLove.svg"
import Contact from "./Contact.jsx"
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'
import { Zoom } from 'react-reveal';
import ScrollspyNav from "react-scrollspy-nav";
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
        breakpoint: 1350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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
        <h1>Good design is invincible.</h1>
      </div>
      <div className='intro'>
        <div>
          <img src={dozie} className="intro-img"/>
        </div>
        <h2 className='text-head'>
            Hi, I'm Nwaka Dozie. <br/>
            A <span style={{color: "#f50000"}} >product designer</span>  & <span style={{color: "#f5b500"}}>visual artist</span>.
        </h2> <br/>
        <p className='intro-text'>
          With over 3 years experience conceptualizing<br/> and
          crafting digital products,helping businesses and
          non-profits <br/> expand their capacity for impact.
        </p>
        <ScrollspyNav
            scrollTargetIds={["contactt",]}
            // activeNavClass="is-active"
        >
          <a href="#contactt">
          <button style={{ width: "184px" }} className='intro-btn'>
            Contact me
          </button>
          </a>
        </ScrollspyNav>
      </div>
      <div>
        <h2 className='text-header'>My Skills.</h2><br /><br />
        <Zoom>
        <ul className='skills'>
          <li className='reds'>Visual Design</li>
          <li className='greens'>UI Design</li>
          <li className='purples'>Communication</li>
          <li className='blues'>Decision Making</li>
          <li className='greens'>User Research</li>
          <li className='purples'>Efficiency</li>
          <li className='blues'>Collaboration</li>
          <li className='reds'>UX Design</li>
          <li className='greens'>User Focus</li>
          <li className='reds'>Prototyping</li>
        </ul>
        </Zoom>
      </div>
      <div>
        <h2 className='text-header'>My Design Principles</h2><br /><br />
        <div className='principles'>
          <div className='good-design'>
            <img src={goodes} />
            <img src={SendLove} className="sendlove" style={{width: "50px", borderRadius: "0px"}}/>
            <div className='princi-text'>
              <h3>Good design solves real problems.</h3>
              <p>
                I have a good understanding in tech, business and design. I start every
                project by comprehending the business and customers before
                diving into design.
              </p>
            </div>
          </div>
          <div className='human-design'>
            <img src={humandes} style={{marginTop: "-40px"}} /><span><img src={Peace} style={{width: "40px"}}/></span>
            <div className='princi-text'>
              <h3>Design for humans, not users.</h3>
              <p>
                Strike a balance between aesthetics and functionality. Good 
                micro-copy brings massive results. Let's build products with meaningful 
                experiences that pay attention to design details.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-header'>Projects</h2>
        <p style={{marginTop: "20px", marginBottom: "60px"}}>
          I’ve worked with start-ups and small companies, and also 
          created some concepts for my personal side projects.
        </p>
        <Slider {...settings}>
        <div className='card'>
          <div className='card-top'>
            <img src={p1} className="parallax-bg"/>
          </div>
          <div className='card-bottom'>
          <h2>Interface Revamp of the Squid App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit. Varius id porta ornare adipiscing morbi integer <br/>
                lectus eget. 
              </p><br /><br />
              <Link to="/case-study/1">
                <button className='intro-btn'>
                  Read Case Study
                </button>
              </Link>
          </div>
        </div>
        <div className='card'>
          <div className='card-top'>
            <img src={p1} className="parallax-bg"/>
          </div>
          <div className='card-bottom'>
          <h2>Project Title2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit. Varius id porta ornare adipiscing morbi integer <br/>
                lectus eget. 
              </p><br /><br />
              <Link to="/case-study/1">
                <button className='intro-btn'>
                  Read Case Study
                </button>
              </Link>
          </div>
        </div>
        <div className='card'>
          <div className='card-top'>
            <img src={p1} className="parallax-bg"/>
          </div>
          <div className='card-bottom'>
          <h2>Project Title3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit. Varius id porta ornare adipiscing morbi integer <br/>
                lectus eget. 
              </p><br /><br />
              <Link to="/case-study/1">
                <button className='intro-btn'>
                  Read Case Study
                </button>
              </Link>
          </div>
        </div>
        </Slider>
      </div>
      <img style={{width: "100%"}} src={light ? hr : hrd} />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomeScreen
