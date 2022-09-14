import React, { useState } from 'react'
import axios from "axios"
import Spinner from './Spinner';
import { Box, Alert, IconButton, Collapse } from '@mui/material';
// import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {

  const [email, setEmail] = useState(false);
  const [subject, setSubject] = useState(false);
  const [textField, setText] = useState(false);
  const [fullname, setFullname] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  let [open, setOpen] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
        setIsLoading(true)
        const to = "nwakadozie76@gmail.com"
        const sender = { email, subject, textField, to, fullname };
        const senderRes = await axios.post(
          "https://vast-bayou-66131.herokuapp.com/v1/dozie/sendMail",
          sender 
        );
        setIsLoading(false)
        setResponse(senderRes.data.message)
        setOpen(true)
    } catch (err) {
      console.log(err)
      setResponse(senderRes.data.message)
    }
  }

  return (
    <div id='contactt' className='contact'>
        <h2 className='text-header'>Let's create excellent work together!</h2>
        <p style={{fontSize: "21px", padding: "50px 0"}}>Get in touch for opportunities or just to say hi! 👋</p><br/>
        
        {
          response ?
          <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
            <Alert
                action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                    setOpen(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {response}
            </Alert>
            </Collapse>
        </Box>
          : null
        }

        <form onSubmit={submit}>
            <input 
              type="text" id="fname" 
              placeholder='Name' name="fname" required
              onChange={e => setFullname(e.target.value)}
            /><br/><br/>
            <input 
              type="email" id="email" required
              placeholder='Email Address' name="email"
              onChange={e => setEmail(e.target.value)}
            /><br/><br/>
            <input 
              type="text" id="subject" required
              placeholder='Subject' name="subject"
              onChange={e => setSubject(e.target.value)}
            /><br/><br/>
            <textarea 
              id="w3review" name="w3review" required
              placeholder='Message' rows="10" cols="70"
              onChange={e => setText(e.target.value)}
            ></textarea><br /><br />
            {
              isLoading ? <Spinner/> : null
            }
            <button className='contact-b'>
              Submit
            </button>
        </form>
    </div>
  )
}

export default Contact