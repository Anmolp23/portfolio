import React from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import Work from "../components/Work"
const Project = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading="PROJECT" text="Some of my most recent works" />
       <Work/>
      <Footer />
    </div>
  )
}

export default Project
