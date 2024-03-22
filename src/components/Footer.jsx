import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-black text-white'>
        <div className='container mt-5'>
          <div className='ms-4 pt-5'>
              <a className='mb-4' style={{textDecoration:'none',color:'white'}} href="#"><h3>Uber</h3></a>
              <a className='aa' href="#">Visit Help Center</a>
          </div>
          <Row className='mt-5'>
            <Col xs={6} sm={6} lg={3}>
              <ul style={{listStyleType:'none'}}>
                <li><a href="#"><h5>Company</h5></a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Our offerings</a></li>
                <li><a href="">Newsroom</a></li>
                <li><a href="">Investors</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">AI</a></li>
                <li><a href="">Gift cards</a></li>
              </ul>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <ul style={{listStyleType:'none'}}>
                <li><a href="#"><h5>Products</h5></a></li>
                <li><a href="">Ride</a></li>
                <li><a href="">Drive</a></li>
                <li><a href="">Deliver</a></li>
                <li><a href="">Eat</a></li>
                <li><a href="">Uber for Business</a></li>
                <li><a href="">Uber Freight</a></li>
              </ul>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <ul style={{listStyleType:'none'}}>
                <li><a href="#"><h5>Global citizenship</h5></a></li>
                <li><a href="">Safety</a></li>
                <li><a href="">Diversity and Inclusion</a></li>
              </ul>
            </Col>
            <Col xs={6} sm={6} lg={3}>
              <ul style={{listStyleType:'none'}}>
                <li><a href="#"><h5>Travel</h5></a></li>
                <li><a href="">Reserve</a></li>
                <li><a href="">Airports</a></li>
                <li><a href="">Cities</a></li>
              </ul>
            </Col>
          </Row>
          <div className='d-flex justify-content-between'>
            <div className='itag'>
            <a href='#'><i class="fa-brands fa-facebook"></i></a>
            <a href='#'><i class="fa-brands fa-twitter"></i></a>
            <a href='#'><i class="fa-brands fa-youtube"></i></a>
            <a href='#'><i class="fa-brands fa-linkedin"></i></a>
            <a href='#'><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div style={{marginTop:'20px'}} className='lang d-flex '>
              <a href=''><i style={{marginRight:'5px'}} class="fa-solid fa-globe"></i>English</a>
              <a className='ms-3 me-5' href=''><i style={{marginRight:'5px'}} class="fa-solid fa-location-dot"></i>Kochi</a>
            </div>
          </div>
          <div className='ms-4'>
            <a className='me-4' href=""><img width={'140px'} src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" alt="" /></a>
            <a href=""><img width={'130px'} src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg" alt="" /></a>
          </div>
          <div style={{fontSize:'12px',color:'gray'}} className='d-flex justify-content-between mt-4 ms-4 me-5 fw-light'>
            <p>&copy; 2023 Uber Technologies Inc.</p>
            <div>
              <a className='me-3' style={{textDecoration:'none',color:'grey'}} href="">Privacy</a>
              <a className='me-3' style={{textDecoration:'none',color:'grey'}} href="">Accessibility</a>
              <a style={{textDecoration:'none',color:'grey'}} href="">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer