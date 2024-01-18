import React from 'react'
import "./Footer.css"
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
<div className='footer'>
<div className='footer-container'>

<div className='left'>

    <div className='location'>
    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
   <div>
    <p>287,kalpana nagar</p>
    <p>Bhopal</p>
  </div>
</div>

  <div className='phone'>
   <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
   9343872494
   </h4>
   </div>

   <div className='email'>
   <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
  anmolparihar2494@gmail.com
   </h4>
   </div>

</div>

<div className='right'>
    <h4>About Me</h4>
  <p>Thank you for visiting my portfolio! I'm a dedicated Computer Science Engineering student, passionate about leveraging technology to solve real-world challenges.</p>
  <div className='social'>
<FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
<FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>   
<FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>   
</div>

</div>
</div>
</div>
  )
}

export default Footer
