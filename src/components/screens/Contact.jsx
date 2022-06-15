import React from 'react'

const Contact = () => {
  return (
    <div id='contactt' className='contact'>
        <h2 className='text-header'>Let's create excellent work together!</h2>
        <p style={{fontSize: "21px", padding: "50px 0"}}>Get in touch for opportunities or just to say hi! 👋</p><br/>
        <form>
            {/* <label for="fname">First name:</label><br/> */}
            <input type="text" id="fname" placeholder='Name' name="fname"/><br/><br/>
            {/* <label for="lname">Last name:</label><br/> */}
            <input type="email" id="email" placeholder='Email Address' name="email"/><br/><br/>
            <input type="text" id="subject" placeholder='Subject' name="subject"/><br/><br/>
            <textarea id="w3review" name="w3review" placeholder='Message' rows="10" cols="70"></textarea><br /><br />
            <button className='contact'>
              Submit
            </button>
        </form>
    </div>
  )
}

export default Contact