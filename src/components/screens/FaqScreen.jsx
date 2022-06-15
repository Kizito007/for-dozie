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

const ProjectScreen = () => {
  return (
    <div style={{ margin: "0 3%" }}>
      <div className='invincible'>
        <h1>Got questions?</h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "840px" }}>
        <p>In here, I answer questions I get from my DMs and emails.</p><br/><br/>
        <form>
          <input type="search" 
            placeholder='Search for a keyword' 
            id="search" name="search"
            style={{width: "40%"}}
          />
          <br/><br/><br/>
          <button className='faq-button'>
            Submit
          </button>
        </form>
      </div>
      <Accordion
        style={{
          marginTop: "100px",
          borderRadius: "12px",
          border: "1.5px solid #C4C4C4",
          padding: "10px 0",
          fontFamily: "'DM Sans', sans-serif"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          margin: "50px 0",
          borderRadius: "12px",
          border: "1.5px solid #C4C4C4",
          padding: "10px 0",
          fontFamily: "'DM Sans', sans-serif"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          margin: "50px 0",
          borderRadius: "12px",
          border: "1.5px solid #C4C4C4",
          padding: "10px 0",
          fontFamily: "'DM Sans', sans-serif"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          margin: "50px 0",
          borderRadius: "12px",
          border: "1.5px solid #C4C4C4",
          padding: "10px 0",
          fontFamily: "'DM Sans', sans-serif"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          margin: "50px 0",
          borderRadius: "12px",
          border: "1.5px solid #C4C4C4",
          padding: "10px 0",
          fontFamily: "'DM Sans', sans-serif"
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
      
      <div style={{ textAlign: "center", marginTop: "200px" }}>
        <h2 style={{ fontWeight: "normal", marginBottom: "140px" }}>Thanks for making it this far! I hope you find this helpful. ✌️</h2>
        <h2 style={{ fontSize: "22px", margin: "50px 0" }}>Got a question?</h2>
        <form>
          <input type="search" 
            placeholder='Search for a keyword' 
            id="search" name="search"
            style={{width: "40%"}}
          /><br /><br />
          <textarea id="w3review" name="w3review" 
            placeholder='Message' rows="6" cols="70"
            style={{
              width: "40%"
            }}
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