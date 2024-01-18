import "./NavBar.css";
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa"

 const NavBar = () => {

 const[click,setclick]=useState(false);
 const handleClick=()=>{
    setclick(!click);
 }

const[color,setcolor]=useState(false);
const changecolor=()=>{
  if(window.scrollY>=100){
    setcolor(true);
  }
  else setcolor(false);
}

window.addEventListener("scroll",changecolor);
  return (
    <div className={color ? " header header-bg":"header"}>
        <Link to="/"><h1 className="port">Portfolio</h1></Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="move">
            <Link to="/">Home</Link>
            <br/>
            <Link to="/project">Project</Link>
            <br/>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/contact">Contact</Link>
            <br/>
            </li>
        </ul>
<div className="hamburger" onClick={handleClick}>
{click ? (
 <FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>
  )}
        </div>
    </div>
  )
}

export default NavBar
