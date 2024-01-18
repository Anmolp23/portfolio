import "./Aboutcontent.css"
import React from 'react'
import {Link} from "react-router-dom"
import imagenew1 from "../assets/imagenew1.jpg"
import image2 from "../assets/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
const Aboutcontent = () => {
  return (
    <div  className="about">
    <div className="left">
        <h1>About me</h1>
        <p>Dedicated web developer with a passion for transforming creative concepts into interactive and efficient digital solutions.
        I'm excited about the ever-evolving landscape of web development and eager to contribute my skills to projects that demand both technical excellence and a knack for problem-solving.
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button></Link>
    </div>
    <div className="right">
        <div className="image-container">
            <div className="top">
                <img src={imagenew1} className="img" alt="true"/>
            </div>
            <div className="bottom">
                <img src={image2} className="img" alt="true"/>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Aboutcontent
