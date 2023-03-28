import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import SimpleDialogDemo from './SimpleDialogDemo'
import { BackToHome, Previous } from './DirectButtons';
import { Reveal } from 'react-reveal';
import arrow from "../svgs/arrow.svg"
import arrowd from "../svgs/arrowd.svg"
import curvyarrow from "../svgs/curvyarrow.svg"
import curvyarrowd from "../svgs/curvyarrowd.svg"
import smiley from "../svgs/smiley.svg"
import smileyd from "../svgs/smileyd.svg"
import flame from "../svgs/flame.svg"
import flamed from "../svgs/flamed.svg"
import Sunshine from "../svgs/Sunshine.svg"
import Sunshined from "../svgs/Sunshined.svg"
import question from "../svgs/_!.svg"
import questioned from "../svgs/questioned.svg"
import archi from "../images/archi.png"
import single from "../images/single.png"
import sketch from "../images/sketch.png"
import flow1 from "../images/flow1.png"
import flow2 from "../images/flow2.png"
import final1 from "../images/final1.png"
import final2 from "../images/final2.png"
import final3 from "../images/final3.png"
import pp1 from "../images/p1.png"
import ScrollspyNav from "react-scrollspy-nav";

const WebhubScreen = ({ styles, light }) => {

    // THIS PAGE WAS CHANGED FROM WEBHUB TO SQUID APP
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
        <div style={{ margin: "0 3%" }}>
            {/* <BackToHome /> */}
            <div className='squid'>
                <div>
                    <Reveal>
                        <div className='text'
                            style={{ display: "contents", textAlign: "center" }}
                        >
                            <h2 style={{ marginTop: "250px" }}>Interface Revamp of the Squid App</h2><br />
                            <p>
                                A collective and innovative platform for linking professional <br />
                                services and consumers in a simple way.
                            </p>
                        </div>
                    </Reveal>
                </div>

            </div>
            <ScrollToTop smooth />
            <div className='webhub-overview' id="introduction" style={
                !light ? { background: styles.backdrop } : { background: "#f4f4f4" }
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
                            ["introduction", "challenge", "goals", "users", "process", "designs", "learnings", "future",]
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
                    <Reveal>
                        <p id='challenge'>
                            Squid app is a service platform that bridges the gap between professional
                            services and consumers. Whether it concerns a renovation,
                            a maintenance job or a repair for all DIY jobs in and around a house.
                        </p> <br /><br /><br />
                    </Reveal>
                    <div>
                        <h2>The Challenge</h2>
                        <br /><br />
                        <Reveal>
                            <p>
                                The outbreak of the Coronavirus pandemic in 2020 resulted in a global
                                shutdown. This put limitations to people's ways of living, as well as their
                                everyday activities, economies and enterprises, and any other element of life
                                you can think of, and even caused a steady increase in social distancing. <br /><br /><br />

                                Squid was geared towards carrying out business in a simple manner for
                                homeowners/customers making it easy for them to access nearby
                                professionals and get a good idea of ​​the quality of the professional through
                                the reviews that other consumers write about the work performed.
                            </p>
                        </Reveal>
                    </div>
                    <div style={{ marginTop: "70px", marginBottom: "100px" }}>
                        <Reveal>
                            <h3>Problem Statement</h3><br /><br />
                            <p id='goals' style={{ color: "#893A96" }}>
                                <b><i>
                                    “How we might redesign a better experience for
                                    consumers to access qualified professionals in a
                                    way that meets their needs”
                                </i></b>
                            </p>
                        </Reveal>
                    </div>
                    <div>
                        {/*  style={{fontSize: "30px"}} */}
                        <h2>Goals</h2>
                        <Reveal>
                            <img className='floaters' src={light ? arrow : arrowd} /><br /><br /><br />
                            <h3>Increase Content Relevancy</h3><br />
                            <p>
                                To work with the dev team to build a recommendation engine that
                                automatically shows consumers the most relevant content based on their
                                search behaviour, recommended and most favourited brands.
                            </p><br /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h3>A delightful, consistent consumer experience</h3><br />
                            <p>
                                To ensure a proper design system is in place to reduce technical debt, and
                                give our consumers a better, consistent experience.
                            </p><br /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h3>Operational efficiency</h3><br />
                            <p id='users'>
                                To optimize internal operations, we will build scalable design components,
                                which will work across Payment and refund systems.
                            </p>
                        </Reveal>
                    </div>
                    <div style={{ marginTop: "110px" }}>
                        <h2>Our Users</h2>
                        <Reveal>
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
                        </Reveal>
                    </div><br /><br /><br />
                    {/* 
                <img src={archi} className="levi" />
                <img src={single} className="sasha" />
            */}
                    <Reveal><><SimpleDialogDemo image={archi} className="levi" /></></Reveal>
                    <Reveal><><SimpleDialogDemo image={single} className="sasha" /></></Reveal>
                    <p id='process'></p><br /><br />
                    <div>
                        <h2>Process</h2>
                        <img className='floaters' src={light ? curvyarrow : curvyarrowd} /><br /><br />
                        <Reveal>
                            <h3>Design Sprints</h3><br />
                            <p>
                                A design sprint was conducted to facilitate collaboration cross-departments.
                                Developers, Product Managers and Creatives contributed their fresh ideas in
                                this sprint. The purpose of these sprints is to align everyone on the same goal
                                To improve our consumer experience by solving our user's problems today.
                            </p><br /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h3>User flows</h3><br />
                            <p>
                                We mapped each archetype to their user journey on the app, with their
                                respective success metrics.
                            </p><br /><br />
                            {/*
                    <img src={flow1} style={{right: "0",}} className="case-ones" />
                */}
                            <SimpleDialogDemo image={flow1} className="case-ones" /><br /><br />
                        </Reveal>
                        <Reveal>
                            <SimpleDialogDemo image={flow2} style={{ right: "0", }} className="case-ones" /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h3>Sketches</h3><br />
                            <p>
                                I sketched multiple user flows to visualize ideas quickly. My focus at this stage
                                is to diverge first, converge later. Here are some early sketches of the Brand page.
                            </p><br /><br />
                            <SimpleDialogDemo image={sketch} className="case-ones" /><br /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h3>Mid-fi Wireframes</h3><br />
                            <p>
                                I sketched multiple user flows to visualize ideas quickly. My focus at this stage
                                is to diverge first, converge later. Here are some early sketches of the Brand page.
                            </p><br /><br />
                            <SimpleDialogDemo image={final3} className="case-ones" /><br /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h2 id="designs">Final Designs</h2>
                            <img className='floaters' src={light ? flame : flamed} /><br />
                            <p>
                                Here's a detailed walkthrough of the revamped app.
                            </p><br /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h3>A new look.</h3><br />
                            <p>
                                Before the redesign, the app was cluttered. Now, Squid has a fresh new
                                modern look and a better experience. To improve the brand and service
                                perception, we introduced scalable components and redesigned micro-interactions.
                            </p><br /><br />
                            <SimpleDialogDemo image={final1} className="case-ones" /><br /><br />
                        </Reveal>
                        <Reveal>
                            <SimpleDialogDemo image={final2} className="case-ones" /><br /><br />
                        </Reveal>
                        <Reveal>
                            <SimpleDialogDemo style={{ right: "0", borderRadius: "12px", }} image={pp1} className="case-ones" />
                        </Reveal>
                    </div>
                    <p id='learnings'></p><br /><br />
                    <div>
                        <h2>What we learned</h2>
                        <img className='floaters' src={light ? question : questioned} /><br /><br /><br />
                        <Reveal>
                            <h3>Take it one phase at a time</h3><br />
                            <p>
                                We learned to break down complicated designs into small, manageable
                                chunks. This eases development and handles bugs as we go along.
                            </p><br /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h3>Adapt to the changing consumer behaviour</h3><br />
                            <p>
                                We recognised the neccessity to stay grounded and focused on the goal,
                                but also account for changes to the product to match the changed
                                behavior of customers during the pandemic.
                                ‍
                            </p><br /><br /><br />
                        </Reveal>
                    </div>
                    <div>
                        <h2 id='future'>Future</h2>
                        <img className='floaters' src={light ? Sunshine : Sunshined} /><br /><br /><br />
                        <Reveal>
                            <h3>Post-launch optimization</h3><br />
                            <p>
                                This is a crucial next step for every UX improvement or product launch. With
                                informed, actionable insights, we are able to design a better experience for
                                our consumers.
                            </p><br /><br /><br />
                        </Reveal>
                        <Reveal>
                            <h3>Continue to design better experiences</h3><br />
                            <p>
                                To follow through our product roadmap and continue to
                                stick to our design principles.
                            </p><br /><br /><br />
                        </Reveal>
                    </div>
                    <br /><br />
                </div>
            </div>
            <Previous light={light} />
        </div>
    )
}

export default WebhubScreen