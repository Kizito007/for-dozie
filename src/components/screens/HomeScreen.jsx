import React from 'react'
import "./screens.css"
import dozie from "./dozie.png"
import art1 from "./art1.png"
import arrow4 from "./arrow4.svg"
import beh from "./beh.svg"
import drib from "./drib.svg"
import twit from "./twit.svg"
import linked from "./in.svg"
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div className='home'>
      <div className='intro'>
        <h2 className='text-head'>
            Hi, I'm Nwaka Dozie. <br/>
            A <span style={{color: "#f50000"}} >product designer</span>  & <span style={{color: "#f5b500"}}>visual artist</span>.
        </h2> <br/>
        <p>
          With over 3 years experience conceptualizing and<br/>
          crafting digital products,helping businesses and<br/>
          non-profits expand their capacity for impact.
        </p>
        <img src={dozie} className="intro-img"/>
      </div>
      <div>
        <h2 className='text-head'>My Skills.</h2>
        <ul className='skills'>
          <li>Visual Design</li>
          <li>UI Design</li>
          <li>Communication</li>
          <li>Decision Making</li>
          <li>User Research</li>
          <li>Efficiency</li>
          <li>Collaboration</li>
          <li>UX Design</li>
          <li>User Focus</li>
          <li>Prototyping</li>
        </ul>
      </div>
      <div>
        <h2 className='text-head'>Projects</h2>
        <div className='project'>
          <img src={art1} className=""/>
          <div className='text'>
            <h2>Project Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
              elit. Varius id porta ornare adipiscing morbi integer <br/>
              lectus eget. 
            </p>
            <Link to="/case-study/1">
              <button>
                Read Case Study
              </button>
            </Link>
          </div>   
        </div><br/>
        <div className='project'>
          <img src={art1} className=""/>
          <div className='text'>
            <h2>Project Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
              elit. Varius id porta ornare adipiscing morbi integer <br/>
              lectus eget. 
            </p>
            <Link to="/case-study/1">
              <button>
                Read Case Study
              </button>
            </Link>
          </div>  
        </div><br/>
        <div className='project'>
          <img src={art1} className=""/>
          <div className='text'>
            <h2>Project Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
              elit. Varius id porta ornare adipiscing morbi integer <br/>
              lectus eget. 
            </p>
            <Link to="/case-study/1">
              <button>
                Read Case Study
              </button>
            </Link>
          </div>         
        </div><br/><br/>
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
            <img src={arrow4} />
          </p>
        </Link>
      </div><br/><br/>
      <hr/>
      <div className='bottom'>
        <h2 className='text-head'>Let's create excellent work together!</h2>
        <p style={{fontSize: "21px"}}>Get in touch for opportunities or just to say hi! 👋</p><br/>
        <Link to="/contact">
          <button className='contact'>
            Contact me
          </button>
        </Link>
        <p style={{ padding: "70px 0" }}>
          <Link to="/be">
            <img src={beh}/>
          </Link>
          <Link to="/drib">
            <img src={drib}/>
          </Link>
          <Link to="/twit">
            <img src={twit}/>
          </Link>
          <Link to="/ln">
            <img src={linked}/>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default HomeScreen