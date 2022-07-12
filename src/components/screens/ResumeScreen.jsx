import React from 'react'
import resume from "./resume.pdf"

const ResumeScreen = () => {
  return (
    <>
    <center>
        <embed 
            src={resume}
            width="100%"
            height="800"
        />
    </center>
    </>
  )
}

export default ResumeScreen