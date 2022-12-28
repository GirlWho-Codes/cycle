import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer'
import Navpage from '../components/NavPage'
import emailjs from '@emailjs/browser'

const Services = () => {
  const form = useRef();
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_qyw31dl', 'template_5foep0c', form.current, 'hCA_n7mXmo1OHdVJA')
      .then((result) => {
          console.log(result.text);
          console.log("Sent")
          navigate('/servicefeed');
      }, (error) => {
          console.log(error.text);
          alert('You have made an error!')
      });
  };
  return (
    <>
      <Navpage/>
      <div className='start-again'>
        <h1 className='btn-head'>Custom Package</h1>
      <Form  className='start-form' onSubmit={sendEmail} ref={form}>
        <div className='just-start'>

        <p className='btn-p'>What service can we help you with?</p>
        <div className='button-container'>
        <div className='button-a'>
          <button className='button-a1'>Recruitment</button>
          <button className='button-a2'>Onboarding</button>
          <button className='button-a3'>Document and copies</button>
          <button className='button-a4'>Web pages</button>
        </div>
        <div className='button-b'>
          <button className='button-b1'>People management</button>
          <button className='button-b2'>Training</button>
          <button className='button-b3'>Exit</button>
          <button className='button-b4'>Consultation</button>

        </div>

        </div>

        </div>
        <div className='pp'>
        <p className='btn-p'>Tell us about you and your project</p>
        <div className='start-form1'>
       

        <Form.Group className='border-form1' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="First Name"  className='border-form'/>
        
      </Form.Group>

      <Form.Group className='border-form1' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Last Name"  className='border-form'/>
       
      </Form.Group>

        </div>
      <div className='start-form2'>
      <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email address"  className='border-form'/>
      </Form.Group>
      <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Phone number(Whatsapp number preferably)"  className='border-form'/>
      </Form.Group>

      <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Website"  className='border-form'/>      
        </Form.Group>
      </div>

        <div className='start-form1'>
        <Form.Group className='border-form1' controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="City"  className='border-form'/>
      </Form.Group>
      <Form.Group className='border-form1' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Country"  className='border-form'/>
        
      </Form.Group>

        </div>
        </div>

       <div className='ppp'>

       <div className='start-form2'>
        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Company name"  className='border-form'/>      
        </Form.Group>

        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Company url(optional)"  className='border-form'/>      
        </Form.Group>

        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Number of employees"  className='border-form'/>      
        </Form.Group>

        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Areas of concern"  className='border-form'/>      
        </Form.Group>

        <Form.Group className='border-form2' controlId="formBasicEmail">
        <Form.Control type="text" placeholder="How did you hear about us"  className='border-form'/>      
        </Form.Group>
        </div>

       </div>
      <Button variant="primary" className='border-btn' type="submit">
        Submit
      </Button>
    </Form>
      <div className='p'>

      <p className='btn-p'>What are you looking for?</p>
    <div className='button-containera'>
        <div className='button-c'>
          <button className='button-c1'>Getting the right talent</button>
          <button className='button-c2'>Manage talents for productivity and efficiency</button>
          <button className='button-c3'>Automate your HR process</button>
        </div>
        <div className='button-d'>
          <button className='button-d1'>Ensure proper talent exit</button>
          <button className='button-d2'>Create a system for your process</button>
          <button className='button-d3'>Put structure to onboarding talent</button>

        </div>
        <div className='button-e'>
          <button className='button-e1'>Get tech tools for your HR needs</button>
          <button className='button-e2'>Get trained or speak with an expert</button>
        </div>
        <div className='button-f'>
          <button className='button-f1'>Ensure performance with your team</button>
          <button className='button-f2'>Get your HR and employee documents and copies</button>
          
        </div>

        </div>

      </div>
        <div className='state'>
      <Form.Group className='border-form2' controlId="formBasicEmail">
          <label htmlFor="" className='btn-t'>Is it another service? please comprehensively state it.</label>
        <Form.Control type="text" placeholder="Enter reply here"  className='border-form'/>      
        </Form.Group>
      </div>

      <div className='budget'>
      <p className='btn-p'>What is your budget</p>
      <div className='last-btn'>
      <div className='last-btna'>
        <button className='last-btna1'>$100 - $249</button>
        <button className='last-btna2'>$250 - $499</button>
        <button className='last-btna3'>$500 - $749</button>
      </div>
      <div className='last-btnb'>
        <button className='last-btnb1'>$750 - $999</button>
        <button className='last-btnb2'>$1,000</button>
      </div>
      </div>
      </div>
      </div>
      <div className='abcd'>
     <div className='a'>
     <Form.Group className='border-form2' controlId="formBasicEmail">
          <label htmlFor="" className='btn-t'>After would you be willing to schedule a call with us?</label>
        <Form.Control type="text" placeholder="Enter reply here"  className='border-form'/>      
        </Form.Group>
     </div>
        <div className='b'>
        <Form.Group className='border-form2' controlId="formBasicEmail">
          <label htmlFor="" className='btn-t'>How do you preferred to be contacted?</label>
        <Form.Control type="text" placeholder="Enter reply here"  className='border-form'/>      
        </Form.Group>
        </div>
        <div className='c'>
        <Form.Group className='border-form2' controlId="formBasicEmail">
          <label htmlFor="" className='btn-t'>What are the best times that works for you?</label>
        <Form.Control type="text" placeholder="Enter reply here"  className='border-form'/>      
        </Form.Group>
        </div>
        <div className='d'>
        <Form.Group className='border-form2' controlId="formBasicEmail">
          <label htmlFor="" className='btn-t'>How did you hear about us?</label>
        <Form.Control type="text" placeholder="Enter reply here"  className='border-form'/>      
        </Form.Group>
        </div>
        <button className='btn-submit'>Submit</button>
     </div>
       
      <Footer/>
    </>
  )
}

export default Services
