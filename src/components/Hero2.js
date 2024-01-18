import './Hero2.css'
import React from 'react'

const Hero2 = (props) => {
    const heading=props.heading;
    const text=props.text;
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Hero2
