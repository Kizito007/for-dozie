import React from 'react'
import { Link } from 'react-router-dom'
import art1 from "./art1.png"
import Footer from '../layouts/Footer'

const ProjectScreen = () => {
  return (
    <div style={{ margin: "0 3%" }}>
        <h2 style={{ marginTop: "70px" }}>Projects</h2>
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
        </div><br/><br/><br/>
        <Footer />
    </div>
  )
}

export default ProjectScreen