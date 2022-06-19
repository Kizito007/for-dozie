import React from 'react'
import { Link } from 'react-router-dom'
import art1 from "./art1.png"
import Footer from '../layouts/Footer'
import "./screens.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Zoom } from 'react-reveal';

const ProjectScreen = () => {
  return (
    <div style={{ margin: "0 3%" }}>
      <div className='invincible'>
        <h1>Got questions?</h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "840px" }}>
        <h2 style={{ fontWeight: "normal" }}>In here, I answer questions I get from my DMs and emails.</h2><br/><br/>
        {/* <form>
          <input type="search" 
            placeholder='Search for a keyword' 
            id="search" name="search"
            // style={{width: "40%"}}
          />
          <br/><br/><br/>
          <button className='faq-button'>
            Search
          </button>
        </form> */}
      </div>
      <Zoom>
      <Accordion
        style={{
          margin: "0 auto",
          marginTop: "100px",
          borderRadius: "12px"
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Why did you choose UX/UI design?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I believe product design is a hybrid of 3 things: Tech, Usability and Aesthetics. 
            being able to design something functional (solves a real problem). 
            It's fascinating to see how humans react to design and how it affects their actions. 
            Good UX helps people reach the goal they're set to achieve. 
            For example, adding shadows to a button helps to promote the Call-To-Action, 
            which triggers people to click on it. Every little detail in design affects the entirety of the product!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          borderRadius: "12px",
          margin: "50px auto"
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the skills needed for a good product designer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are a lot on the list but I'll try to keep this incisive. 
            - Craft & Execution - Understand the principles of UX and guidelines (material design, human interface, accessibility) 
            - Visual design skills (good eye for design, attention to detail, interaction design, software, design systems, prototyping) 
            - Design Methods (design thinking, design sprints, journey mapping, usability testing) - Collaboration (PMs, Devs and other depts)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          borderRadius: "12px",
          margin: "50px auto"
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What’s the best part of the job and what’s your least favourite?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I think, the best part of the job is designing interfaces that function to solve a problem, 
            from interaction design to building design systems, collaborating with developers and Product Managers together bringing it to actualization. 
            There's never one best way to solve the problem, that’s why I always challenge myself to achieve a design breakthrough. 
            As for my least favourite part of the job, I think it would be the day-to-day meetings. 
            Althought I believe in getting things done efficiently and quickly. 
            Meetings that are unnecessarily long and arid make one weary .
            A perfect balance of deep focus time and alignment meetings would be awesome.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          borderRadius: "12px",
          margin: "50px auto"
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            I noticed that you've created your own case studies rather than redesigns of apps/websites. 
            What's your take on redesigning app/websites vs creating your own case study for the portfolio?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            On average i avoid web/app redesigns without proper context. 
            UI/Web designers redesign stuff and showcase them on Dribbble. 
            As Product Designers, let's not forget the UX side of things—The problem to be solved. 
            Case studies give more depth compared to redesigns. 
            It highlights your thought process, design process, method of work. 
            Always start from the problem you set out to solve!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          borderRadius: "12px",
          margin: "50px auto"
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What do you think about Product Designers on a project basis VS a permanent role?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Zoom>
      <div style={{ textAlign: "center", marginTop: "200px" }}>
        <h2 style={{ fontWeight: "normal", marginBottom: "140px" }}>Thanks for making it this far! I hope you find this helpful. ✌️</h2>
        <h2 style={{ fontSize: "22px", margin: "50px 0" }}>Got a question?</h2>
        <form>
          <input type="search" 
            placeholder='Search for a keyword' 
            id="search" name="search"
            // style={{width: "40%"}}
          /><br /><br />
          <textarea id="search-msg" name="w3review" 
            placeholder='Message' rows="6" cols="70"
            // style={{
            //   width: "40%"
            // }}
          >
          </textarea>
          <br/><br/><br/>
          <button className='faq-button'>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default ProjectScreen