import React from 'react'
import { Link } from 'react-router-dom'

const WebhubScreen = () => {
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
        <div className='webhub-overview'>
            <div style={{margin: "50px 10%"}}>
            <ul className='overview-text'>
                <li className='duration'>Project Duration</li>
                <li>Platforms</li>
                <li className='tools'>Tools</li>
                <li className='contrs'>Contributions</li>
            </ul><br />
            <ul className='sub-text'>
                <li className='duration'>Total Duration - 3 months</li>
                <li className='duration2'>Android, iOS</li>
                <li className='tools2'>Figma, Figjam & Photoshop</li>
                <li>User research, Visual design</li>
            </ul>
            </div>
        </div><div>
        <ul className='webhub-nav'>
            <li><Link to="/about">Introduction</Link></li>
            <li><Link to="#">My Role</Link></li>
            <li><Link to="#">The Challenge</Link></li>
            <li><Link to="#">Goals</Link></li>
            <li><Link to="#">Our Users</Link></li>
            <li><Link to="#">Process</Link></li>
            <li><Link to="#">Final Designs</Link></li>
            <li><Link to="#">Learnings</Link></li>
            <li><Link to="#">Future</Link></li>
        </ul></div>
        <div style={{margin: "0 100px"}}>
            <h2 style={{marginTop: "750px"}}>Introduction</h2><br /><br />
            <p>
                Web-Hub is a service platform that bridges the gap between professionals
                and consumers. Whether it concerns a renovation, a
                maintenance job or a repair for all DIY jobs in and around a house.
            </p>
            <div style={{margin: "110px 0"}}>
                <h2>My Role</h2><br /><br />
                <p>
                    I'm the lead designer for this project. I collaborated with developers and a
                    product manager through the project.
                </p>
            </div>
            <div>
                <h2>The Challenge</h2><br /><br />
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
                    <i>
                    “How we might redesign a better experience for 
                    consumers to access qualified professionals in a 
                    way that meets their needs”
                    </i>
                </p>
            </div>
            <div>
                <h2>Goals</h2><br /><br /><br /><br />
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
                <h2>Our Users</h2><br /><br />
                <ul style={{ marginLeft: "35px" }}>
                    <li>
                        Before i started designing, we decided to dive deep into existing 
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
            </div>
            <div>
                <h2>Process</h2><br /><br /><br /><br />
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
                <h2>Final Designs</h2><br />
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
                <h2>What we learned</h2><br /><br/><br />
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
                <h2>Future</h2><br /><br/><br />
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
    </>
  )
}

export default WebhubScreen