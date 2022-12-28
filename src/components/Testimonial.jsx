import React from 'react';
// import { Carousel, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import '../styles.css'
import data from './data';

import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';

import { img001, img002, img003, img004} from '../assets';
import Cards from './Card';



const Testimonial = () => {
    return(

       <>
        <Swiper 
        freeMode={true}
        pagination={{
          clickable: true
        }}
        grabCursor={true}
        modules={{FreeMode, Pagination}}
        className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        680:{
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 15
        }  
      }}
    >

         <SwiperSlide>
         <Cards data = {{
          imgSrc: img001,
           name: "Mr Kayode Babarinde", 
           role: "Executive Director", 
           comp: "Africa Blockchain Institute", 
           desc: "We had to tell the CycleBreeze team to stop the recruitment process as we had above 500% individuals that met the criteria more than we envisaged and the journey was worth it as there is so much ease working with their process and the team that came out of it."
    }}/>
          </SwiperSlide>

          <SwiperSlide>
         <Cards data = {{
          imgSrc: img002,
           name: "Mr Taiwo Gbade",
           role: "Human resource manager",
           comp: "Circue",
           desc: "We got the right structure we needed for getting and managing our team, the fact that the procedures worked for our different team in the different countries was also thrilling, we are sincerely grateful for this system as it works."
       }}/>
          </SwiperSlide>

          <SwiperSlide>
         <Cards data = {{
          imgSrc: img003,
          name: "Mr Theophilus Paul",
          role: "Founder",
          comp: "GoKonnect",
          desc: "I was happy to be exposed to experiential formula for the cycle of human resource management that has improved the execution of my duties in the role of an HR. I tried this process and procedure and it works."
   }}/>
          </SwiperSlide>

          <SwiperSlide>
         <Cards data = {{
          imgSrc: img004,
          name: "Miss Opeyemi Omoyele",
          role: "Operational manager",
          comp: "Africa’s Entrepreneurs",
          desc: "I was concerned at first as our organization is very unique, I decided to give it a try and it worked even for our own peculiarity, we had to upgrade our package and also requested for tailored packages and process which gives us exactly what we need."
        }}/>
          </SwiperSlide>



        </Swiper>
        
        <Nav.Link href='/services'>
            <button className='test-button'>Customize your own package</button>
          </Nav.Link>

      
       </>
    )

  
}

export default Testimonial
