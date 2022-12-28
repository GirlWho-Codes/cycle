import React from 'react'
import Vector5 from '../assets/Vector5.png'
import Vector6 from '../assets/Vector6.png'
import Vector7 from '../assets/Vector7.png'
import Vector8 from '../assets/Vector8.png'
import Vector10 from '../assets/Vector10.png'
import Vector11 from '../assets/Vector11.png'
import doc from '../assets/doc.png'

const Features = () => {
  return (
    <div id='#features' style={{marginTop: '70rem' }} className='features'>
      <div >
        <h5 className='feature-text'>FEATURES</h5>
      </div>
      <div>
        <div className='feature-card'>
          <h1 className='feature-head'>Recruitment system</h1>
          <div className='feature-flex'>
          <div>
            <img src={Vector5} className='spec' alt="" />
          </div>
          <div>
            <p className='features-p'>Our 96.7% success rate of recruiting system helps you get all the applicants you need that aligns with the tailored job description & with an information system, simulated core competency assessment, interview and other procedure that helps get refined and top-quality talents for the roles opened. While you can do it yourself, we can also assist you were necessary.</p>
          </div>
          </div>

        </div>
        <div className='feature-card'>
        <h1 className='feature-head'>Onboarding System</h1>
         <div className='feature-flex'>
         <div>
          <img src={Vector6} className='spec'alt="" />
          </div>
          <div>
            <p className='features-p'>Let the tempo of talents entry to your organization be structured by gathering, organizing and analyzing talents data & ensure exposure to your organizational culture and integrate them to your system to ensure they are in-line with the uniqueness of your company and to leave a lasting impression.</p>
          </div>
         </div>
        </div>
        <div className='feature-card'>
        <h1 className='feature-head'>People Management System</h1>
        <div className='feature-flex'>
        <div>
          <img src={Vector7} className='spec' alt="" />
          </div>
          <div><p className='features-p'>
          Get to sit at the heart of people performance, quality of work, salaries, leaves and other core operational activities of people in your company through our ROME System, by having the eye sight to see those struggling or thriving in your company so as to make strategic decision, analyze your return on time and resource investment and for growth.
            </p></div>
        </div>
          
        </div>
        <div className='feature-card'>
        <h1 className='feature-head'>Exit system</h1>
        <div className='feature-flex'>
        <div>
          <img src={Vector8} className='spec' alt="" />
          </div>
          <div>
            <p className='features-p'>Exit is also a beautiful thing like entry. Find this out with our system to have the perfect plan to mitigate against the challenges that comes with the exit of talents is also in place to ensure succession, hassle free exit process, continuity and maintenance of relationship, while leaving no gap or space for inefficiency.</p>
          </div>
        </div>
         
        </div>
        <div className='feature-card'>
        <h1 className='feature-head'>Documents and copies</h1>
        <div className='feature-flex'>
        <div>
          <img src={doc} className='spec' alt="" />
          </div>
          <div>
            <p className='features-p'>With over 16 email copies template and 280 HR and employees document templates, you have all you need to create a structure for your HR process and procedure while you evolve. We can also develop tailored copies and document specifically for your use.</p>
          </div>
        </div>
          
        </div>
        <div className='feature-card'>
        <h1 className='feature-head'>Web pages and tools</h1>
        <div className='feature-flex'>
        <div><img src={Vector10} className='spec' alt="" />
          </div>
          <div>
            <p className='features-p'>We design, develop and deploy all-in-one HR and office tools for all your HR needs and to automate your HR process and reports. We also setup web pages and other IT need to ensure smooth execution of your HR process and procedures.</p>
          </div>
        </div>
         
        </div>
      </div >
      <div className='feature-card'>
        <h1 className='feature-head'>Consultation and Trainings</h1>
        <div className='feature-flex'>
        <div>
          <img src={Vector11} className='spec' alt="" />
        </div>
        <div>
          <p className='features-p'>
          We offer professional consulting, education, training, and human resource solutions for corporate and small business clients. It involves diverse tasks like business research, analysis, and management counseling with the aim of advising clients on building more robust and well-suited business and human resource policies, getting tailor strategies to implement certain operational process and so on.
          </p>
        </div>
        </div>
      </div>
      
      
    </div>
    
  )
}

export default Features
