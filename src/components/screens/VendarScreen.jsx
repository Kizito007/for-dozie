import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import SimpleDialogDemo from './SimpleDialogDemo'
import BackToHome from './BackToHome';
import arrow from "../svgs/arrow.svg"
import arrowd from "../svgs/arrowd.svg"
import curvyarrow from "../svgs/curvyarrow.svg"
import curvyarrowd from "../svgs/curvyarrowd.svg"
import smiley from "../svgs/smiley.svg"
import smileyd from "../svgs/smileyd.svg"
import flame from "../svgs/flame.svg"
import flamed from "../svgs/flamed.svg"
import question from "../svgs/_!.svg"
import questioned from "../svgs/questioned.svg"
import group from "../images/group.png"
import s1 from "../images/s1.png"
import s2 from "../images/s2.png"
import flow3 from "../images/flow3.png"
import w1 from "../images/w1.png"
import w2 from "../images/w2.png"
import w3 from "../images/w3.png"
import w4 from "../images/w4.png"
import f1 from "../images/f1.png"
import f2 from "../images/f2.png"
import f3 from "../images/f3.png"
import f4 from "../images/f4.png"
import f5 from "../images/f5.png"
import f6 from "../images/f6.png"
import f7 from "../images/f7.png"
import f8 from "../images/f8.png"
import f9 from "../images/f9.png"
import f10 from "../images/f10.png"
import f11 from "../images/f11.png"
import f12 from "../images/f12.png"
import Tablet from "../images/Tablet.png"
import ScrollspyNav from "react-scrollspy-nav";

const VendarScreen = ({ styles, light }) => {
    
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
        <BackToHome />
        <div className='squid vendar'>
          <div className='vendar-bg'>
            <div className='vendar-tablet'>
                <img className='tablet' src={Tablet} />
            </div>              
            <div>
                <h2>Vendar</h2><br />
                <p>
                    An e-commerce platform that increases sales for stores and
                    small businesses bringing products to online customers.
                </p>
            </div>             
          </div>

        </div>
        <ScrollToTop smooth />
        <div className='webhub-overview' id="introduction" style={
            !light ? {background: styles.backdrop} : {background: "#f4f4f4"}
        }>
            <div className='hubdiv vendar-hub'>
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
                ["brief", "challenge", "goals", "target", "process", "designs", "learnings",]
            }
            // activeNavClass="is-active"
            //  putting their id above another element so  it can focus on it
        >
        <ul className='webhub-nav'>
            <li>
                <a href="#brief">
                    Brief
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
                <a href="#target">
                    Target Group
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
        </ul>
        </ScrollspyNav>
        </div>
        <span id='brief'/>
        <div className='squid-container'>
            <h2 className='squid-intro'>Brief</h2><br /><br />
            <p id='challenge'>
                We want to create a B2C e-commerce platform that aggregates 
                local businesses and provide customers 
                a way to access hundreds of options from local businesses in their city.
            </p>
            <div>
                <h2 style={{marginTop: "110px"}}>The Challenge</h2>
                <br /><br />
                <ul style={{marginLeft: "30px"}}>
                    <li>The acceleration towards e-commerce is hurting our local economy.</li>
                    <li>The pandemic was also the highest closure of retail business in the last 20 years.</li>
                    <li id='goals'>Unequal competition between large players online and small local businesses.</li>
                </ul>
            </div>      
            {/* <div style={{ marginTop: "70px", marginBottom: "100px" }}>
                <h3>Problem Statement</h3><br /><br />
                <p id='goals' style={{ color: "#893A96" }}>
                    <b><i>
                    “How we might redesign a better experience for 
                    consumers to access qualified professionals in a 
                    way that meets their needs”
                    </i></b>
                </p>
            </div> */}
            <div>
                <h2 style={{marginTop: "70px"}}>Goals</h2>
                <img className='floaters' src={light ? arrow : arrowd} /><br /><br /><br />
                <h3>Operational Efficiency</h3><br />
                <p>
                    Sourcing products close to customers pretty fast and timely but also secure deliveries. 
                </p><br /><br /><br />
                <h3>A convinient consumer experience</h3><br />
                <p>
                    A model that allows customers to conviniently contribute to their local economy.
                </p><br /><br /><br />
                <h3>Business aware</h3><br />
                <p id='target'>
                Aggregating product options from many stores on a single platform.
                </p>
            </div>
            <div style={{ marginTop: "110px" }}>
                <h2>Target Group</h2>
                <img className='floaters' src={light ? smiley : smileyd} /><br /><br />
                <p>
                    We conducted market research to identify our personal and target audience. 
                    Based on the service feature sets we were able to fragment how important 
                    for us to know what demography the local businesses are in and how comfortable 
                    they were in adapting new technology. 
                    What solutions were they already using and what their day to day tasks look like.
                </p><br /><br />
                <ul style={{ marginLeft: "35px" }}>
                    <li>
                        People who shop at supermarket, malls and stores.
                    </li><br />
                    <li>
                        Store owners who sell goods and services to consumers.
                    </li><br />
                    <li>
                        Merchants who own multiple stores in several locations.
                    </li>
                </ul>
            </div><br /><br /><br />
            {/* 
                <img src={archi} className="levi" />
                <img src={single} className="sasha" />
            */}
            <><SimpleDialogDemo image={group} /></>
            {/* <><SimpleDialogDemo image={single} className="sasha" /></> */}
            <p id='process'></p><br /><br />
            <div>
                <h2>Process</h2>
                <img className='floaters' src={light ? curvyarrow : curvyarrowd} /><br /><br />
                <h3>User flows</h3><br />
                <p>
                    We mapped the archetype to the user journey on the website, 
                    the respective guarantee of success.
                </p><br /><br />
                {/*
                    <img src={flow1} style={{right: "0",}} className="case-ones" />
                */}
                <SimpleDialogDemo image={flow3} className="case-ones" /><br /><br />
                <h3>Sketches</h3><br />
                <p>
                    I sketched multiple user flows to visualize ideas quickly. 
                    sketching is the basis for the design of our product. 
                    Here are some early sketches of the Web page.
                </p><br /><br />
                <SimpleDialogDemo image={s1} className="case-ones" /><br />
                <SimpleDialogDemo image={s2} className="case-ones" /><br /><br /><br />
                <h3>Mid-fi Wireframes</h3><br />
                <p>
                    Wireframes are the blueprints for the design. In this phase we thought of interactions,
                    placement, flow and logic. It was the phase wherein we had to solve big design
                    puzzles, which often went hand in hand with heated discussions.
                </p><br /><br />
                <div className='wireframes'>
                    <SimpleDialogDemo image={w1} />
                    <SimpleDialogDemo image={w2} />
                    <SimpleDialogDemo image={w3} />
                    <SimpleDialogDemo image={w4} />
                </div><br /><br /><br />
                <h2 id='designs'>Final Designs</h2>
                <img className='floaters' src={light ? flame : flamed} /><br />
                <p>
                    Here's a detailed walkthrough of the revamped app.
                </p><br /><br />
                <div className='wireframes' style={{ background: "#072F54" }}>
                    <SimpleDialogDemo image={f1} />
                    <SimpleDialogDemo image={f2} />
                    <SimpleDialogDemo image={f3} />
                    <SimpleDialogDemo image={f4} />
                    <SimpleDialogDemo image={f5} />
                    <SimpleDialogDemo image={f6} />
                </div><br /><br />
                <><SimpleDialogDemo image={f7} className="levi" /></>
                <><SimpleDialogDemo image={f8} className="sasha" /></>
                <><SimpleDialogDemo image={f9} className="levi" /></>
                <><SimpleDialogDemo image={f10} className="sasha" /></>
                <><SimpleDialogDemo image={f11} className="levi" /></>
                <><SimpleDialogDemo image={f12} className="sasha" /></>
            </div>
            <p id='learnings'></p><br /><br />
            <div>
                <h2>What we learned</h2>
                <img className='floaters' src={light ? question : questioned} /><br /><br/><br />
                <h3>Keeping up to B2C needs</h3><br />
                <p>
                    We can conclude that we created a commercial tool for 
                    local businesses which has the definite possibility to grow rapidly. 
                    Our product gives us a chance to provide customers a way to access 
                    hundreds of local businesses in their city.
                </p><br />
            </div>
        </div>
        </div>
        
    </>
  )
}

export default VendarScreen