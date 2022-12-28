import React from 'react'
import NavPage from '../components/NavPage'
import Footer from '../components/Footer'

const ServiceFeedback = () => {
  return (
        <div>
          <NavPage/>
          <div className='feedback'>
            
              <h1>Thank you so much for your honest feedback, we will look into it. Thank you for also trusting and choosing us.</h1>
          
              <button><a href="/" className='feed-button'>Back to home</a></button>
       
           
          </div>
          <Footer/>
        </div>
      )
  
}

export default ServiceFeedback