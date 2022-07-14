import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <Link to="/" className="squid-home">
        {`${`<` + " " + "Back to Home"}`}
    </Link>  
    )
}

export default BackToHome