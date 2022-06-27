import React from 'react'
import ph_brain from "./ph_brain.svg"
import archi from "./archi.png"
import single from "./single.png"
import { Link } from 'react-router-dom'
import ScrollspyNav from "react-scrollspy-nav";

const WebhubScreen = ({ styles, light }) => {
  return (
    <>
        <div className='squid'>
          <div>
              
            <div className='text' 
                style={{ display: "contents", textAlign: "center"}}
            >
                <h2 style={{ marginTop: "250px" }}>Interface Revamp of the Squid App</h2>
                <p>
                    A collective and innovative platform for linking professional <br />
                    services and consumers in a simple way.
                </p>
            </div>             
          </div>

        </div>
        <div className='webhub-overview' style={
            !light ? {background: styles.backdrop} : {background: "#f4f4f4"}
        }>
            <div className='hubdiv'>
            <ul>
                <li>
                    <p className='overview-text'>Project Duration</p><br />
                    <p>Total Duration - 3 months</p>
                </li>
                <li>
                    <p className='overview-text'>Platforms</p><br />
                    <p>Android, iOS</p>
                </li>
                <li>
                    <p className='overview-text'>Tools</p><br />
                    <p>Figma, Figjam & Photoshop</p>
                </li>
                <li>
                    <p className='overview-text'>Contributions</p><br />
                    <p>User research, Visual design</p>
                </li>
            </ul>
            </div> 
        </div>
        <div>
        <ul className='webhub-nav'>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["introduction",]}
                    // activeNavClass="is-active"
                >
                <a href="#introduction">
                    Introduction
                </a>
                </ScrollspyNav>
            </li>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["role",]}
                    // activeNavClass="is-active"
                >
                    <a href="#role">
                        My Role
                    </a>
                </ScrollspyNav>
            </li>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["challenge",]}
                    // activeNavClass="is-active"
                >
                    <a href="#challenge">
                        The Challenge
                    </a>
                </ScrollspyNav>
            </li>
            <li>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["goals",]}
                    // activeNavClass="is-active"
                >
                    <a href="#goals">
                        Goals
                    </a>
                </ScrollspyNav>
            </li>
            </li>
            <li>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["users",]}
                    // activeNavClass="is-active"
                >
                    <a href="#users">
                        Our users
                    </a>
                </ScrollspyNav>
            </li>
            </li>
            <li>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["process",]}
                    // activeNavClass="is-active"
                >
                    <a href="#process">
                        Process
                    </a>
                </ScrollspyNav>
            </li>
            </li>
            <li>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["designs",]}
                    // activeNavClass="is-active"
                >
                    <a href="#designs">
                        Final Designs
                    </a>
                </ScrollspyNav>
            </li>
            </li>
            <li>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["learnings",]}
                    // activeNavClass="is-active"
                >
                    <a href="#learnings">
                        Learnings
                    </a>
                </ScrollspyNav>
            </li>
            </li>
            <li>
            <li>
                <ScrollspyNav
                    scrollTargetIds={["future",]}
                    // activeNavClass="is-active"
                >
                    <a href="#future">
                        Future
                    </a>
                </ScrollspyNav>
            </li>
            </li>
        </ul>
        <div className='squid-container'>
            <h2 className='squid-intro' id="introduction">Introduction</h2><br /><br />
            <p>
                Web-Hub is a service platform that bridges the gap between professionals
                and consumers. Whether it concerns a renovation, a
                maintenance job or a repair for all DIY jobs in and around a house.
            </p>
            <div style={{margin: "110px 0"}}>
                <h2 id='role'>My Role</h2><br /><br />
                <p>
                    I'm the lead designer for this project. I collaborated with developers and a
                    product manager through the project.
                </p>
            </div>
            <div>
                <h2 id='challenge'>The Challenge <img style={{marginLeft: "5px", position: "absolute"}} src={ph_brain} /></h2>
                <br /><br />
                <p>
                    The outbreak of the Coronavirus pandemic in 2020 resulted in a global 
                    shutdown. This put limitations to people's ways of living, as well as their 
                    everyday activities, economies and enterprises, and any other element of life 
                    you can think of, and even caused a steady increase in social distancing. <br /><br /><br />

                    Web-Hub was geared towards carrying out business in a simple manner for 
                    homeowners/customers making it easy for them to access nearby 
                    professionals and get a good idea of ​​the quality of the professional through 
                    the reviews that other consumers write about the work performed.
                </p>
            </div>      
            <div style={{ marginTop: "70px", marginBottom: "100px" }}>
                <h2>Problem Statement</h2><br /><br />
                <p style={{ color: "#893A96" }}>
                    <b><i>
                    “How we might redesign a better experience for 
                    consumers to access qualified professionals in a 
                    way that meets their needs”
                    </i></b>
                </p>
            </div>
            <div>
                <h2 id='goals' style={{fontSize: "30px"}}>Goals</h2><br /><br /><br />
                <h2>Increase Content Relevancy</h2><br />
                <p>
                    To work with the dev team to build a recommendation engine that 
                    automatically shows consumers the most relevant content based on their  
                    search behaviour, recommended and most favourited brands.
                </p><br /><br /><br />
                <h2>A delightful, consistent consumer experience</h2><br />
                <p>
                    To ensure a proper design system is in place to reduce technical debt, and 
                    give our consumers a better, consistent experience.
                </p><br /><br /><br />
                <h2>Operational efficiency</h2><br />
                <p>
                    To optimize internal operations, we will build scalable design components, 
                    which will work across Payment and refund systems.
                </p>
            </div>
            <div style={{ marginTop: "110px" }}>
                <h2 id='users'>Our Users</h2><br /><br />
                <ul style={{ marginLeft: "35px" }}>
                    <li>
                        Before I started designing, we decided to dive deep into existing 
                        behavioral and service delivery data of our users to understand them 
                        better. We also conducted a series of customer interviews.
                    </li><br />
                    <li>
                        I focused on identifying what is the job that our 
                        customers hire our product for.
                    </li><br />
                    <li>
                        I defined 3 user archetypes, and mapped them to their respective 
                        jobs-to-be-done.
                    </li>
                </ul>
            </div><br /><br /><br />
            <><img src={archi} className="levi" /></>
            <><img src={single} className="sasha" /></>
            <div>
                <h2 id='process'>Process</h2><br /><br /><br /><br />
                <h2>Design Sprints</h2><br />
                <p>
                    A design sprint was conducted to facilitate collaboration cross-departments. 
                    Developers, Product Managers and Creatives contributed their fresh ideas in 
                    this sprint. The purpose of these sprints is to align everyone on the same goal 
                    To improve our consumer experience by solving our user's problems today.
                </p><br /><br /><br />
                <h2>User flows</h2><br />
                <p>
                    We mapped each archetype to their user journey on the app, with their 
                    respective success metrics.
                </p><br /><br /><br />
                <h2>Sketches</h2><br />
                <p>
                    I sketched multiple user flows to visualize ideas quickly. My focus at this stage 
                    is to diverge first, converge later. Here are some early sketches of the Brand page.
                </p><br /><br /><br />
                <h2>Mid-fi Wireframes</h2><br />
                <p>
                    I sketched multiple user flows to visualize ideas quickly. My focus at this stage 
                    is to diverge first, converge later. Here are some early sketches of the Brand page.
                </p><br /><br /><br />
                <h2>We went through 10+ iterations</h2><br />
                <p>
                    The initial designs went through several user tests, discussions 
                    with operations, and business teams to ensure we have a friendly and scalable 
                    user experience. <br />
                    I wish I could show you every single part of the process!
                </p><br /><br /><br />
                <h2 id='designs'>Final Designs</h2><br />
                <p>
                    Here's a detailed walkthrough of the revamped app.
                </p><br /><br /><br />
                <h2>A new look.</h2><br />
                <p>
                    Before the redesign, the app was cluttered. Now, Web-Hub has a fresh new 
                    modern look and a better experience. To improve the brand and service 
                    perception, we introduced scalable components and redesigned micro-interactions.
                </p><br /><br /><br />
            </div>
            <div>
                <h2 id='learnings'>What we learned</h2><br /><br/><br />
                <h2>Take it one phase at a time</h2><br />
                <p>
                    We learned to break down complicated designs into small, manageable 
                    chunks. This eases development and handles bugs as we go along.
                </p><br /><br /><br />
                <h2>Adapt to the changing consumer behaviour</h2><br />
                <p>
                    We recognised the neccessity to stay grounded and focused on the goal, 
                    but also account for changes to the product to match the changed 
                    behavior of customers during the pandemic.
‍
                </p><br /><br /><br />
            </div>
            <div>
                <h2 id='future'>Future</h2><br /><br/><br />
                <h2>Post-launch optimization</h2><br />
                <p>
                    This is a crucial next step for every UX improvement or product launch. With 
                    informed, actionable insights, we are able to design a better experience for 
                    our consumers.
                </p><br /><br /><br />
                <h2>Continue to design better experiences</h2><br />
                <p>
                    To follow through our product roadmap and continue to 
                    stick to our design principles.
                </p><br /><br /><br />
            </div>
        </div>
        </div>
        
    </>
  )
}

export default WebhubScreen