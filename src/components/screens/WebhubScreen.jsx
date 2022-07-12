import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import SimpleDialogDemo from './SimpleDialogDemo'
import arrow from "./arrow.svg"
import arrowd from "./arrowd.svg"
import curvyarrow from "./curvyarrow.svg"
import curvyarrowd from "./curvyarrowd.svg"
import smiley from "./smiley.svg"
import smileyd from "./smileyd.svg"
import flame from "./flame.svg"
import flamed from "./flamed.svg"
import Sunshine from "./Sunshine.svg"
import Sunshined from "./Sunshined.svg"
import question from "./_!.svg"
import questioned from "./questioned.svg"
import archi from "./archi.png"
import single from "./single.png"
import sketch from "./sketch.png"
import flow1 from "./flow1.png"
import flow2 from "./flow2.png"
import final1 from "./final1.png"
import final2 from "./final2.png"
import final3 from "./final3.png"
import pp1 from "./pp1.png"
import ScrollspyNav from "react-scrollspy-nav";

const WebhubScreen = ({ styles, light }) => {
    
    // const [isOpen, setOpen] = useState(false);
    // const [photoIndex, setPhotoIndex] = useState(false);

    // const images = [
    //     {archi},
    //     {single},
    //     {sketch},
    //     {final1},
    //     {p1},
    //     {final2},
    //     {final3},
    // ];

  return (
    <>
        <Link to="/" className="squid-home">
            Back to Home
        </Link>
        <div className='squid'>
          <div>
              
            <div className='text' 
                style={{ display: "contents", textAlign: "center"}}
            >
                <h2 style={{ marginTop: "250px" }}>Interface Revamp of the Squid App</h2><br />
                <p>
                    A collective and innovative platform for linking professional <br />
                    services and consumers in a simple way.
                </p>
            </div>             
          </div>

        </div>
        <ScrollToTop smooth />
        <div className='webhub-overview' id="introduction" style={
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
        
        <div style={{ position: "sticky", top: "70px" }}>
        <ScrollspyNav
            scrollTargetIds={
                ["introduction", "role", "challenge", "goals", "users", "process", "designs", "learnings", "future",]
            }
            // activeNavClass="is-active"
            //  putting their id above another element so  it can focus on it
        >
        <ul className='webhub-nav'>
            <li>
                <a href="#introduction">
                    Introduction
                </a>
            </li>
            <li>
                <a href="#role">
                    My Role
                </a>
            </li>
            <li>
                <a href="#challenge">
                    The Challenge
                </a>
            </li>
            <li>
                <a href="#goals">
                    Goals
                </a>
            </li>
            <li>
                <a href="#users">
                    Our users
                </a>
            </li>
            <li>
                <a href="#process">
                    Process
                </a>
            </li>
            <li>
                <a href="#designs">
                    Final Designs
                </a>
            </li>
            <li>
                <a href="#learnings">
                    Learnings
                </a>
            </li>
            <li>
                <a href="#future">
                    Future
                </a>
            </li>
        </ul>
        </ScrollspyNav>
        </div>
        <div className='squid-container'>
            <h2 className='squid-intro'>Introduction</h2><br /><br />
            <p id='role'>
                Web-Hub is a service platform that bridges the gap between professionals
                and consumers. Whether it concerns a renovation, a
                maintenance job or a repair for all DIY jobs in and around a house.
            </p>
            <div style={{margin: "110px 0"}}>
                <h2>My Role</h2><br /><br />
                <p id='challenge'>
                    I'm the lead designer for this project. I collaborated with developers and a
                    product manager through the project.
                </p>
            </div>
            <div>
                <h2>The Challenge</h2>
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
                <h3>Problem Statement</h3><br /><br />
                <p id='goals' style={{ color: "#893A96" }}>
                    <b><i>
                    “How we might redesign a better experience for 
                    consumers to access qualified professionals in a 
                    way that meets their needs”
                    </i></b>
                </p>
            </div>
            <div>
                <h2 style={{fontSize: "30px"}}>Goals</h2>
                <img className='floaters' src={light ? arrow : arrowd} /><br /><br /><br />
                <h3>Increase Content Relevancy</h3><br />
                <p>
                    To work with the dev team to build a recommendation engine that 
                    automatically shows consumers the most relevant content based on their  
                    search behaviour, recommended and most favourited brands.
                </p><br /><br /><br />
                <h3>A delightful, consistent consumer experience</h3><br />
                <p>
                    To ensure a proper design system is in place to reduce technical debt, and 
                    give our consumers a better, consistent experience.
                </p><br /><br /><br />
                <h3>Operational efficiency</h3><br />
                <p id='users'>
                    To optimize internal operations, we will build scalable design components, 
                    which will work across Payment and refund systems.
                </p>
            </div>
            <div style={{ marginTop: "110px" }}>
                <h2>Our Users</h2>
                <img className='floaters' src={light ? smiley : smileyd} /><br /><br />
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
            {/* 
                <img src={archi} className="levi" />
                <img src={single} className="sasha" />
            */}
            <><SimpleDialogDemo image={archi} className="levi" /></>
            <><SimpleDialogDemo image={single} className="sasha" /></>
            <p id='process'></p><br /><br />
            <div>
                <h2>Process</h2>
                <img className='floaters' src={light ? curvyarrow : curvyarrowd} /><br /><br />
                <h3>Design Sprints</h3><br />
                <p>
                    A design sprint was conducted to facilitate collaboration cross-departments. 
                    Developers, Product Managers and Creatives contributed their fresh ideas in 
                    this sprint. The purpose of these sprints is to align everyone on the same goal 
                    To improve our consumer experience by solving our user's problems today.
                </p><br /><br /><br />
                <h3>User flows</h3><br />
                <p>
                    We mapped each archetype to their user journey on the app, with their 
                    respective success metrics.
                </p><br /><br />
                {/*
                    <img src={flow1} style={{right: "0",}} className="case-ones" />
                */}
                <SimpleDialogDemo image={flow1} className="case-ones" /><br /><br />
                <SimpleDialogDemo image={flow2} style={{right: "0",}} className="case-ones" /><br /><br />
                <h3>Sketches</h3><br />
                <p>
                    I sketched multiple user flows to visualize ideas quickly. My focus at this stage 
                    is to diverge first, converge later. Here are some early sketches of the Brand page.
                </p><br /><br />
                <SimpleDialogDemo image={sketch} className="case-ones" /><br /><br /><br />
                <h3>Mid-fi Wireframes</h3><br />
                <p>
                    I sketched multiple user flows to visualize ideas quickly. My focus at this stage 
                    is to diverge first, converge later. Here are some early sketches of the Brand page.
                </p><br /><br />
                <SimpleDialogDemo image={final3} className="case-ones" /><br /><br /><br />
                <h3>We went through 10+ iterations</h3><br />
                <p id='designs'>
                    The initial designs went through several user tests, discussions 
                    with operations, and business teams to ensure we have a friendly and scalable 
                    user experience. <br />
                    I wish I could show you every single part of the process!
                </p><br /><br /><br />
                <h2>Final Designs</h2>
                <img className='floaters' src={light ? flame : flamed} /><br />
                <p>
                    Here's a detailed walkthrough of the revamped app.
                </p><br /><br /><br />
                <h3>A new look.</h3><br />
                <p>
                    Before the redesign, the app was cluttered. Now, Web-Hub has a fresh new 
                    modern look and a better experience. To improve the brand and service 
                    perception, we introduced scalable components and redesigned micro-interactions.
                </p><br /><br />
                <SimpleDialogDemo image={final1} className="case-ones" /><br /><br />
                <SimpleDialogDemo image={final2} className="case-ones" /><br /><br />
                <SimpleDialogDemo style={{right: "0", borderRadius: "12px",}} image={pp1} className="case-ones" />
            </div>
            <p id='learnings'></p><br /><br />
            <div>
                <h2>What we learned</h2>
                <img className='floaters' src={light ? question : questioned} /><br /><br/><br />
                <h3>Take it one phase at a time</h3><br />
                <p>
                    We learned to break down complicated designs into small, manageable 
                    chunks. This eases development and handles bugs as we go along.
                </p><br /><br /><br />
                <h3>Adapt to the changing consumer behaviour</h3><br />
                <p>
                    We recognised the neccessity to stay grounded and focused on the goal, 
                    but also account for changes to the product to match the changed 
                    behavior of customers during the pandemic.
‍
                </p><br /><br /><br />
            </div>
            <div>
                <h2 id='future'>Future</h2>
                <img className='floaters' src={light ? Sunshine : Sunshined} /><br /><br/><br />
                <h3>Post-launch optimization</h3><br />
                <p>
                    This is a crucial next step for every UX improvement or product launch. With 
                    informed, actionable insights, we are able to design a better experience for 
                    our consumers.
                </p><br /><br /><br />
                <h3>Continue to design better experiences</h3><br />
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