import React from 'react';
import Footer from '../components/Footer';
import NavPage from '../components/NavPage'
import { Link } from 'react-router-dom';

const Feeback = () => {
  return (
    <>
    <div>

      <NavPage/>
      <div className='feedback'>
        
          <h1>Thank you for your interest in our solution, we will send your more information via your email address. Kindly stay in touch and periodically check your mail inbox, promotion and spam folder</h1>
          
      
        <button><a href="/" className='feed-button'>Back to home</a></button>
       
      </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default Feeback
