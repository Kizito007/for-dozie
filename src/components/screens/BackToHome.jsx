import React from 'react'
import { Link } from 'react-router-dom'
import left from "../svgs/chevron_left.svg"

const BackToHome = () => {
  return (
    <Link to="/" className="squid-home">
      <img src={left}  />
      Back to Home
    </Link>  
    )
}

export default BackToHome