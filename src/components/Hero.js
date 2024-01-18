
import "./Hero.css"
import {Link} from "react-router-dom";
import into from "../assets/into2.jpg";


const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
       <img className='into-img' src={into} alt="introimg"/>
        </div>
        <div className='content'>
            <p>HI,I'M A DEVELOPER</p>
            <h1>FRONTEND DEVELOPER</h1>
            <div className="twobtn">
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
}

export default Hero
