import React from 'react'
import "./screens.css"
import dozie from "./dozie.png"
import art1 from "./art1.png"
import goodes from "./goodes.png"
import humandes from "./humandes.png"
import arrow4 from "./arrow4.svg"
import hr from "./hr.svg"
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'

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
        <p className='intro-text'>
          With over 3 years experience conceptualizing<br/> and
          crafting digital products,helping<br/> businesses and
          non-profits expand their capacity for impact.
        </p>
      </div>
      <div>
        <h2 className='text-header'>My Skills.</h2><br /><br />
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
      </div>
      <div>
        <h2 className='text-header'>My Design Principles</h2><br /><br />
        <div className='principles'>
          <div className='good-design'>
            <img src={goodes} style={{marginTop: "15px"}} />
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
            <img src={humandes} />
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
        <div className='project'>
          <div className='projectdiv'><img src={art1} className=""/></div>
          
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
          <div className='projectdiv'><img src={art1} className=""/></div>
          
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
          <div className='projectdiv'><img src={art1} className=""/></div>
          
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
        </div><br/><br/><br/><br/>
        <Link 
          to="/projects"
          style={{
            textDecoration: "none",
            color: "inherit",
            textAlign: "center"
          }}
        >
          <p>
            View more
            <img style={{marginLeft: "10px"}} src={arrow4} />
          </p>
        </Link>
      </div><br/><br/><br /><br /><br />
      <img style={{width: "100%"}} src={hr} />
      <Footer />
    </div>
  )
}

export default HomeScreen