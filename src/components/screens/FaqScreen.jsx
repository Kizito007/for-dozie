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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <div style={{ textAlign: "center", marginTop: "840px" }}>
        <h2>Thanks for making it this far! I hope you find this helpful. ✌️</h2>
        <p>Got a question?</p>
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