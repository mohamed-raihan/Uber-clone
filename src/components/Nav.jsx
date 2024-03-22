import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'

function Navb() {

  return (
    <>
      <div>
        <Navbar  expand="lg" className="bg-black text-white">
          <Container fluid>
            <Navbar.Brand className='ms-5 text-white' href="#">Uber</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavDropdown className='custom-dropdown' title="Company" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">About us</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Our offerings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">How Uber works</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Global citizenship</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Newsroom</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Investor relations</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Career</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='text-light' href="#action1">safety</Nav.Link>
                <Nav.Link className='text-light' href="#action2">Help</Nav.Link>
              </Nav>
              <Nav.Link className='me-3' href="#action1"><i style={{marginRight:'5px'}} class="fa-solid fa-globe"></i>EN</Nav.Link>
              <Nav.Link className='me-3' href="#action1"><i style={{marginRight:'5px'}} class="fa-solid fa-boxes-stacked"></i>Products</Nav.Link>
              <Nav.Link className='me-3' href="#action1">Login</Nav.Link>


              <Form className="d-flex">
                
                <Button className='me-5' variant="outline-success">Sign up</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Navb