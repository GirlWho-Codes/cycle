import React from 'react'
import LogoW from '../assets/LogoW.png'
import yt from '../assets/yt.png'
import insta from '../assets/insta.png'
import random from '../assets/random.png'
import tweet from '../assets/tweet.png';


const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer-main'>
          <div className='my-footer'>
          <img className='footer-img' src={LogoW} alt="logo" />
         
         <div className='foot-top'>

         <p className='footer-p'>A one-stop hub for solutions to your business needs and for research and technological development! </p>

            <div className='footer-link'>
              <div><img src={insta} alt="" /></div>
              <div><img src={random} alt="" /></div>
            <div> <img src={tweet} alt="" /></div>
              <div><img src={yt} alt="" /></div>
            </div>

         </div>
        </div>
        <div className='my-footer'>
         <div> <h2 className='footer-head'>< a href="/start" className='footer-head'>Contact Us</a></h2>
         <div className='footer-line'/>
         </div>
          
          <div className='footer-mail'>
          <p className='footer-p1'>hr@cyclebreeze.com</p>
          <p className='footer-p1'>https://cyclebreeze.com</p>
          <p className='footer-p1'>WhatsApp: +234 902 024 9763</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className='footer-last'>
        <div>
          <p className='footer-p3'>© 2022 Cycle Breeze. All rights reserved</p>
        </div>
        <div>
          <p className='footer-p3'>Privacy Policy - <a href="/terms" style={{textDecoration: "none", color: "#ffffff"}}>Terms and Condition</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
