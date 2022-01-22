import React from 'react';
import {Nav,Navbar,NavDropdown,Container,Offcanvas,FormControl,Button,Form } from 'react-bootstrap' 
import './NavbarSection.css'
export default function NavbarSection() {
  return(
       <div>
   <Navbar >
    <Container>
    <Navbar.Brand href="#home"><img src="assets/hello.png"/></Navbar.Brand>
    <div >
    <Nav className="me-auto">
      <Nav.Link href="#home" ><h1 className='headings1'>Home</h1></Nav.Link>
      <Nav.Link href="#features"><h1 className='headings1'>Features</h1></Nav.Link>
      <Nav.Link href="#pricing"><h1 className='headings1'>About us</h1></Nav.Link>
      <Nav.Link href="#pricing"><h1 className='headings1'>Contact</h1></Nav.Link>
      <Nav.Link href="#pricing"><p className='buttons1'>Sign in</p></Nav.Link>
      <Nav.Link href="#pricing"><p className='buttons2'>Sign up</p></Nav.Link>
    </Nav>
    </div>
    </Container>
  </Navbar>
  
  </div>
  );
}
