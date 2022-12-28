import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer'
import Navpage from '../components/NavPage'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';
const GetStarted = () => {
  const form = useRef();
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_qyw31dl', 'template_5foep0c', form.current, 'hCA_n7mXmo1OHdVJA')
      .then((result) => {
          console.log(result.text);
          console.log("Sent")
          navigate('/getfeedback');
      }, (error) => {
          console.log(error.text);
          alert('You have made an error!')
      });
  };
  return (
    <>
      <Navpage/>
      <div className='start'>
        <div className='start-div'>
        <h1 className='start-head'>Get Started</h1>
        </div>
      <Form  className='start-form' onSubmit={sendEmail} ref = {form}>
        <p className='start-p'>Let us get to know you and your business</p>
        <div className='start-form1'>
        <Form.Group className='border-form1' controlId="formBasicEmail">
        <Form.Control type="text" name='user_name' placeholder="First Name"  className='border-form'/>
        
      </Form.Group>

      <Form.Group className='border-form1' controlId="formBasicEmail">
        <Form.Control type="text" name='user_name' placeholder="Last Name"  className='border-form'/>
       
      </Form.Group>

        </div>
      <div className='start-form2'>
      <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="email" name='user_email' placeholder="Email address"  className='border-form'/>
      </Form.Group>
      <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Phone number(Whatsapp number)"  className='border-form'/>
      </Form.Group>

      <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" name='message' placeholder="Address"  className='border-form'/>      
        </Form.Group>
      </div>

        <div className='start-form1'>
        <Form.Group className='border-form1' controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="City" name='message'  className='border-form'/>
      </Form.Group>
      <Form.Group className='border-form1' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Country" name='message' className='border-form'/>
        
      </Form.Group>
        </div>

        <div className='start-form2'>
        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Company name" name='message' className='border-form'/>      
        </Form.Group>

        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Company url(optional)" name='message' className='border-form'/>      
        </Form.Group>

        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="number" name='message' placeholder="Number of employees"  className='border-form'/>      
        </Form.Group>

        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Areas of concern" name='message' className='border-form'/>      
        </Form.Group>

        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="How did you hear about us" name='message'  className='border-form'/>      
        </Form.Group>
        </div>
      <Button variant="primary" className='border-btn'  type="submit">
        Submit
      </Button>
    </Form>
      </div>
      <Footer/>
    </>
  )
}

export default GetStarted
