import React from 'react'
import art1 from "./art1.png"
import { Link } from 'react-router-dom'

const WebhubScreen = () => {
  return (
    <>
        <div className='project'
            style={{
                position: "absolute",
                width: "100%",
                height: "400px",
                left: "0px",
                top: "60px",
                color: "#f9f9f9",
                background: "linear-gradient(180deg, rgba(137, 58, 150, 0.21) 0%, #6D0EB8 128.03%)"
            }}
        >
          <div style={{ margin: "50px", marginLeft: "14%" }}>
              
            <div className='text' style={{ position: "relative", bottom: "40px", marginLeft: "0" }}>
                <h2>Interface Revamp of the Web-Hub App</h2>
                <p>
                    A collective and innovative platform for linking <br /> professionals and consumers in a simple way.
                </p>
            </div>             
            {/*  */}
            <div className='projectdiv'><img style={{marginLeft: "16%"}} src={art1} className=""/></div>
          </div>

        </div>
        <div>

        </div>
    </>
  )
}

export default WebhubScreen