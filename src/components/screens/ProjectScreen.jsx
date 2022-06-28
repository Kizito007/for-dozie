import React from 'react'
import p1 from "./p1.png"
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'

const ProjectScreen = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <h2>Projects</h2>
        <p style={{ margin: "24px 0" }}>
          I’ve worked with start-ups and small companies, 
          and also created some concepts for my personal side projects.
        </p><br /><br />
        <div className='projects'>
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
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProjectScreen