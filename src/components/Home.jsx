import React from 'react'
import './Home.css'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Footer from './Footer';



function Home() {
  function selectTab(tabName) {
    // Use Bootstrap's Tab API to show the specified tab
    $('#myTabs a[href="#' + tabName + '"]').tab('show');
  }
  return ( 
    <>
      <div className=''>
        <div className='bg-image'>
          <Row>
            <div className='col-lg-2'></div>
            
            <Col className='form shadow' style={{width:'40%',height:'70vh',backgroundColor:'white',marginTop:'100px'}}>
              {/* nav item */}
              <Nav style={{margin:'0 50px',marginTop:'20px'}} className='d-flex justify-content-between' variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link className='text-center text-black fw-bold' href="#first"><i style={{marginBottom:'10px'}} class="fa-solid fa-car fa-2x"></i><br />Ride</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='text-center text-black fw-bold' href="#link"><i class="fa-solid fa-signal fa-2x"></i><br />Drive or<br />deliver</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='text-center text-black fw-bold' href="#"><i class="fa-solid fa-key fa-2x"></i><br />
                    Rent your <br /> fleet
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <h1 className='fw-bolder text-start ms-5 m-3' style={{fontSize:'50px'}}>Request a ride now</h1>
              <form action="">{/* Form */}
                <Form.Group className='m-5 justify-content-center' style={{width:'80%'}}>
                  <div className='d-flex'><Form.Control className='mb-3 p-3' style={{backgroundColor:'#e5e5e5',borderRadius:'0px'}} type="text" placeholder="Enter pick up location" /><a href='#'><i style={{marginLeft:'-30px',marginTop:'20px',color:'gray'}} class="fa-solid fa-location-arrow"></i></a></div>
                  <Form.Control className='mt-2 p-3' style={{backgroundColor:'#e5e5e5',borderRadius:'0px'}} type="text" placeholder="Enter destination" />
                </Form.Group>
                <div className='d-flex ms-5'>
                  <Button className='me-3 p-3' variant="dark">Request now</Button>
                  <Button className='p-3' variant="light" >Schedule for later</Button>
                </div>
              </form>
            </Col>
            <div className='col-lg-5'></div>
          </Row>
        </div>
        <div className='land-img'>
          <div className='land-cont'>
            <h2>The Uber you know, reimagined for business</h2>
            <p>A platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
            <Button className='btn bg-black text-white'>Get started</Button>
          </div>
        </div>
        <div className='mt-5 container fw-bold'>
          <h1 className='m-4 fs-1'>Focus on safety,wherever you go</h1>
          <Row className='ms-3'>
            <Col xs={12} lg={5}>
              <img width={'100%'} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt="" />
              <h3 className='mt-4'>Our commitment to your safety</h3>
              <p className='fw-light'>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
              <a style={{fontSize:'16px'}} className='aa text-black fw-light' href="#">Read about our Community Guidelines</a><span><a style={{fontSize:'16px'}} className='aa text-black fw-light ms-3' href="#">See all safety features</a></span>
            </Col>
            <Col lg={1}></Col>
            <Col xs={12} lg={5}>
              <img width={'100%'} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt="" />
              <h3 className='mt-4'>Setting 10,000+ cities in motion</h3>
              <p className='fw-light'>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
              <a style={{fontSize:'16px'}} className='aa text-black fw-light'  href="#">View all cities</a>
            </Col>
          </Row>
          <Row className='mb-5 ms-3 '>
            <Col className='mt-5' xl={4} lg={4} md={6} sm={12} xs={12}>
              <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg" alt="" />
              <h5 className='mt-2'>About us</h5>
              <p className='fw-light' style={{color:'gray'}}>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
              <a className='aa fw-light' style={{color:'gray'}} href="#">Learn more about Uber</a>
            </Col>
            <Col className='mt-5' xl={4} lg={4} md={6} sm={12} xs={12}>
              <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg" alt="" />
              <h5 className='mt-2'>Newsroom</h5>
              <p className='fw-light' style={{color:'gray'}}>See announcements about our latest releases, initiatives, and partnerships.</p>
              <a className='aa fw-light' style={{color:'gray'}} href="#">Go to Newsroom</a>
            </Col>
            <Col className='mt-5' xl={4} lg={4} md={6} sm={12} xs={12}>
              <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg" alt="" />
              <h5 className='mt-2'>Global citizenship</h5>
              <p className='fw-light' style={{color:'gray'}}>Read about our commitment to making a positive impact in the cities we serve.</p>
              <a className='aa fw-light' style={{color:'gray'}} href="#">See our partnerships</a> 
            </Col>
          </Row>
          <div className='ms-4'>
            <h3 className='fw-bolder'>Ride with Uber</h3>
            <Row>
              <Col lg={6} sm={12} xs={12} className='d-flex mt-3'>
                <Button className='d-flex btn border-white bg-transparent'>
                  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png" alt="" />
                  <div>
                    <h3 className='mt-4 ms-4 text-black text-start'>Uber Auto</h3>
                    <p className='text-black text-start ms-4 fw-light'>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city</p>
                  </div>
                  <i style={{color:'black'}} class="fa-solid fa-arrow-right"></i>
               </Button>
              </Col>
              <Col lg={6} sm={12} xs={12} className='d-flex mt-3'>
                <Button className='d-flex btn border-white bg-transparent'>
                  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png" alt="" />
                  <div>
                    <h3 className='mt-4 ms-4 text-black text-start'>Uber Moto</h3>
                    <p className='text-black text-start ms-4 fw-light'>Get affordable bike rides at your doorsteps. Skip the crowd and zip through traffic with Uber Moto.</p>
                  </div>
                  <i style={{color:'black'}} class="fa-solid fa-arrow-right"></i>
               </Button>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12} xs={12} className='d-flex mt-3'>
                <Button className='d-flex btn border-white bg-transparent'>
                  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png" alt="" />
                  <div>
                    <h3 className='mt-4 ms-4 text-black text-start'>Uber Rentals</h3>
                    <p className='text-black text-start ms-4 fw-light'>Book rentals to save time with onr car and drive for your multi-stop trips.</p>
                  </div>
                  <i style={{color:'black'}} class="fa-solid fa-arrow-right"></i>
               </Button>
              </Col>
              <Col lg={6} sm={12} xs={12} className='d-flex mt-3'>
                <Button className='d-flex btn border-white bg-transparent'>
                  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png" alt="" />
                  <div>
                    <h3 className='mt-4 ms-4 text-black text-start'>Uber Intercity</h3>
                    <p className='text-black text-start ms-4 fw-light'>Book Intercity to head outstation anytime in convenient and affordable car</p>
                  </div>
                  <i style={{color:'black'}} class="fa-solid fa-arrow-right"></i>
               </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div style={{backgroundColor:'#e5e5e5'}}>
          <div className='container p-5'>
            <h2>It's easier in the apps</h2>
            <Row>
              <Col lg={6}>
                <Button className='d-flex btn border-white bg-white'>
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" alt="no image" />
                    <div style={{marginTop:'60px',marginLeft:'20px'}}>
                      <h4 className='text-black text-start'>Download the Uber app</h4>
                      <p className='text-black text-start'>Scan to download</p>
                    </div>
                    <i style={{color:'black',marginTop:'65px',marginLeft:'20px'}} class="fa-solid fa-arrow-right"></i>
                </Button>
              </Col>
              <Col lg={6}>
                <Button className='d-flex btn border-white bg-white p-3'>
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1690813624/assets/50/e85531-2f7e-4ee7-92d4-e39a6801ee2b/original/QR_https___t.uber.com_download-driver-app.png" alt="no image" />
                    <div style={{marginTop:'60px',marginLeft:'20px'}}>
                      <h4 className='text-black text-start'>Download the Driver app</h4>
                      <p className='text-black text-start'>Scan to download</p>
                    </div>
                    <i style={{color:'black',marginTop:'65px',marginLeft:'20px'}} class="fa-solid fa-arrow-right"></i>
                </Button>
              </Col>
            </Row>
          </div>
          <div className='bg-white'>
            <div className='container '>
              <Row style={{padding:'70px 0'}}>
                <Col lg={5}>
                  <a className='aaa' href="#">
                    <div className='d-flex justify-content-between mt-5'>
                      <h1 className='text-black'>Sign up to drive</h1>
                      <i style={{color:'black',marginTop:'10px'}} class="fa-solid fa-arrow-right fa-2x"></i>
                    </div>
                  </a>
                </Col>
                <Col lg={1}></Col>
                <Col lg={5}>
                  <a className='aaa' href="#">
                    <div className='d-flex justify-content-between mt-5'>
                      <h1 className='text-black'>Sign up to ride</h1>
                      <i style={{color:'black',marginTop:'10px'}} class="fa-solid fa-arrow-right fa-2x"></i>
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
