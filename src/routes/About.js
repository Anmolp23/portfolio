import React from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import Aboutcontent from "../components/Aboutcontent"
const About = () => {
  return (
    <div>  
    <NavBar />
    <Hero2 heading="ABOUT" text="I'M a  front-end developer" />
    <Aboutcontent />
    <Footer />
    </div>
  )
}

export default About
