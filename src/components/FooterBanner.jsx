import React from 'react'
import { Nav } from 'react-bootstrap'

const FooterBanner = () => {
  return (
    <div className='semi-footer'>
      <div>
        <h3 className='semi-text'>What would you love to do next?</h3>
      </div>
      <div className='semi-button'>
        <div >
        <Nav.Link href='/chat'>
            <button>Start a chat</button>
          </Nav.Link>
        </div>
        <div>
        <Nav.Link href='/services'>
            <button>Customize Package</button>
          </Nav.Link>
        </div>
        <div>
        <Nav.Link href='/start'>
            <button>Get package</button>
          </Nav.Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
 