import React from 'react'
import { Link } from 'react-router-dom'
import left from "../svgs/chevron_left.svg"
import darkleft from "../svgs/chevron_left_dark.svg"
import right from "../svgs/chevron_right.svg"
import darkright from "../svgs/chevron_right_dark.svg"

export const BackToHome = () => {
  return (
    <Link to="/" className="squid-home">
      <img src={left} />
      Back to Home
    </Link>
  )
}

export const Previous = ({ light }) => {
  return (
    <Link to="/case-study/2" className="squid-home directPrev">
      <img src={light ? darkleft : left} />
      Previous
    </Link>
  )
}

export const Next = ({ light }) => {
  return (
    <Link to="/case-study/1" className="squid-home direct" style={{ paddingRight: "0" }}>
      Next
      <img src={light ? right : darkright} />
    </Link>
  )
}
