import React from 'react'
import "./screens.css"
import dozie from "./dozie.png"
import art1 from "./art1.png"
import p1 from "./p1.png"
import goodes from "./goodes.png"
import humandes from "./humandes.png"
// import arrow4 from "./arrow4.svg"
import hr from "./hr.svg"
import Peace from "./Peace.svg"
import SendLove from "./SendLove.svg"
import Contact from "./Contact.jsx"
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'
import { Zoom } from 'react-reveal';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import ScrollspyNav from "react-scrollspy-nav";

const HomeScreen = () => {
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
        <p className='intro-text' style={{ margin: "50px 0" }}>
          With over 3 years experience conceptualizing<br/> and
          crafting digital products,helping<br/> businesses and
          non-profits expand their capacity for impact.
        </p>
        <ScrollspyNav
            scrollTargetIds={["contactt",]}
            // activeNavClass="is-active"
        >
          <a href="#contactt">
          <button className='intro-btn'>
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
              <h2>Good design solves real problems.</h2>
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
              <h2>Design for humans, not users.</h2>
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
        <div className='projectdivv'>
          <div className='project'>
            <div><img src={p1} className=""/></div>
            
            <div className='text'>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit. Varius id porta ornare adipiscing morbi integer <br/>
                lectus eget. 
              </p><br /><br />
              <Link to="/case-study/1">
                <button>
                  Read Case Study
                </button>
              </Link>
            </div>   
          </div><br/><br/><br/>
          <div className='project'>
            <div><img src={art1} className=""/></div>
            
            <div className='text'>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit. Varius id porta ornare adipiscing morbi integer <br/>
                lectus eget. 
              </p><br /><br />
              <Link to="/case-study/1">
                <button>
                  Read Case Study
                </button>
              </Link>
            </div>   
          </div><br/><br/><br/>
          <div className='project'>
            <div><img src={art1} className=""/></div>
            
            <div className='text'>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit. Varius id porta ornare adipiscing morbi integer <br/>
                lectus eget. 
              </p><br /><br />
              <Link to="/case-study/1">
                <button>
                  Read Case Study
                </button>
              </Link>
            </div>   
          </div>
        </div><br/><br/>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={2}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={art1} className=""/>
            <h2>Slide 1</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={art1} className=""/>
            <h2>Slide 2</h2> 
          </SwiperSlide>
          <SwiperSlide>
            <img src={art1} className=""/>
            <h2>Slide 3</h2>
          </SwiperSlide>
          ...
        </Swiper> */}
      </div><br/><br/><br /><br /><br />
      <img style={{width: "100%"}} src={hr} />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomeScreen