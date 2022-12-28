import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Vector1 from '../assets/Vector1.png'
import Vector2 from '../assets/Vector2.png'
import Vector3 from '../assets/Vector3.png'
import Vector4 from '../assets/Vector4.png'

import bgImg from '../assets/bgImg.png'

import '../styles.css'


const Hero = () => {

    return (
    <div className="hero-card-container">
      <Carousel controls={false}  >
        <Carousel.Item>
          {/* <img
            className="hero-img"
            src={bgImg}
            alt="bg"
          /> */}
          <Carousel.Caption className='hero-card' >
            
            <h3 className='hero-text'>Freedom & ease from human resource challenges</h3>
            <p className='hero-p'>Your HR Process and Procedures is now a productive system. Put an end to the struggles and now recruit the best and quality talent for your business, onboard them in a seamless yet effective method, manage them for quality, efficiency and productivity, with a perfect exit plan through our ROME System.</p>

          </Carousel.Caption>
          
        </Carousel.Item>
        
      </Carousel>
      <Carousel.Caption className='card-style'>
            <p className='unique-text'>OUR UNIQUENESS</p>
           <div className='card-too'>
           <h2 className='unique-head'>With us you get best results!</h2>
            <div className='card-new'>
            <div className='my-card-new'>
            <Card className="my-card">
              <Card.Body className='card-body'>
               <img src={Vector1} alt="" className='vector-img' />
                <Card.Title className='my-card-text'>All-in-one</Card.Title>
                <Card.Text className='my-card-p'>
                All you need to manage the human resource cycle in your business with a system that works.
                </Card.Text>
              </Card.Body>
                </Card>
             <Card className="my-carda">
              <Card.Body className='card-body'>
               <img src={Vector2} alt=""  className='vector-img'/>
                <Card.Title className="my-card-text">Improve & Optimize</Card.Title>
                <Card.Text className='my-card-p'>
                It will help improve and optimize your HR process and procedures for efficiency and productivity.
                </Card.Text>
              </Card.Body>
             </Card>
            </div>
             <div className='my-card-new'>
             <Card  className="my-cardb">
              <Card.Body className='card-body'>
               <img src={Vector3} alt=""  className='vector-img'/>
                <Card.Title className="my-card-text">Facilitate growth</Card.Title>
                <Card.Text className='my-card-p'>
                Spend less time managing and more time growing your business without the hassle of human capital.
                </Card.Text>
              </Card.Body>
             </Card>
             <Card  className="my-cardc">
              <Card.Body className='card-body'>
               <img src={Vector4} alt="" className='vector-img'/>
                <Card.Title className='my-card-text'>Do it yourself</Card.Title>
                <Card.Text className='my-card-p'>
                Our system offers everything you need to be the hero in your business even if you do not have an HRM.
                </Card.Text>
              </Card.Body>
             </Card>

             </div>
            </div>
           </div>
          </Carousel.Caption>
    
      </div>
    );
  }

export default Hero
