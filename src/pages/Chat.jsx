import React, {useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer'
import Navpage from '../components/NavPage'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Select } from 'react-select';
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';
// import  {FlagIcon} from 'flag-icon-css'

const Chat = () => {
  const form = useRef();
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_qyw31dl', 'template_5foep0c', form.current, 'hCA_n7mXmo1OHdVJA')
      .then((result) => {
          console.log(result.text);
          console.log("Sent")
          navigate('/feedback')
      }, (error) => {
          console.log(error.text);
          alert('You have made an error!')
      });
  };
  const {selectedCountry, setSelectedCountry} = useState('NG')
  // const options = [
  //   { value: 'NG', label: <FlagIcon code="NG" />, name: 'Nigeria' },
  //   { value: 'US', label: <FlagIcon code="US" />, name: 'United States' },
  //   { value: 'GB', label: <FlagIcon code="GB" />, name: 'United Kingdom' },
  //   { value: 'CA', label: <FlagIcon code="CA" />, name: 'Canada' },
    
  // ];
  return (
    <>
      <Navpage/>
      <div className='start'>
        <h1 className='start-head'>Chat with Us</h1>
      <Form onSubmit={sendEmail} ref={form} className='start-form'>
        <p className='start-p'>Let us get to know you</p>
        <div className='start-form1'>
        <Form.Group className='border-form1' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="First Name" name='user_name'  className='border-form'/>
        
      </Form.Group>

      <Form.Group className='border-form1' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Last Name" name='user_name' className='border-form'/>
       
      </Form.Group>

        </div>
      <div className='start-form2'>
      <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="email" name='user_email' placeholder="Email address"  className='border-form'/>
      </Form.Group>
      <Form.Group className='border-form2' controlId="formBasicEmail">
     <Form.Control 
        // onChange={(option) => setSelectedCountry(option.value)}
        
        type="text" placeholder="Phone number(Whatsapp number preferably)"  className='border-form'/>
      </Form.Group>
      </div>

        <div className='start-form2'>
        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" name='message' placeholder="How did you hear about us"  className='border-form'/>      
        </Form.Group>
        </div>
      <Button variant="primary" className='border-btn' type="submit">
        Submit
      </Button>
    </Form>
      </div>
      <Footer/>
    </>
  )
}

export default Chat
