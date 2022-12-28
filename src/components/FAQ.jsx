import React from 'react';
import vect from '../assets/vect.png'
import Form from 'react-bootstrap/Form'


const FAQ = () => {
  return (

    <div className='faq'>
      <h3 className='faq-head'>FAQs</h3>
      <h1 className='faq-text'>Have questions? We’re here to help.</h1>
      <Form.Group className="mb-3">
        <Form.Control className='search'  placeholder={`Search Questions`} />
      </Form.Group>
      <Form.Group className="select-bar">
      {/* className="mb-3" */}
        <Form.Select className='form-one' size='lg'>
          <option className='form-text'>What is the difference between recruitment system and recruitment execution?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>Do I have to be an HR to use the tools, process or procedure?</option>
        </Form.Select >
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>How can I customize a package?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>When do I get my package after paying?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='form-text' >Can I integrate this system to our existing HR system?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>Is there a refund policy?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>What does the office tool entail?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>Is it free?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg' >
          <option className='f-text'>Can there be a payment plan?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='form-text'>If I still have an HR challenge that is not in the system, can I share?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>Can I get only one feature?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>Can there be a payment plan?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>I want to get a consultation what do I do?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>I want to be trained as an HR what do I do?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='form-text'>Can I use the tool and system without a website?</option>
        </Form.Select>
        <Form.Select className='form-one' size='lg'>
          <option className='f-text'>How do I manage performance of my team?</option>
        </Form.Select>
      <Form.Select className='form-one' size='lg'>
          <option className='form-text'>Can the system sort out payroll and salary process?</option>
        </Form.Select>
      </Form.Group>
   
    </div>
  );
}


export default FAQ
