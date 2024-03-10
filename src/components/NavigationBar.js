import React from 'react';
import { Navbar, NavbarText } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#" className='title'>Manjo <span>Dev</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <ul className='navbar-list'>
              <li>Home</li>
              <li>About</li>
              <li>Project</li>
              <li>Blog</li>
              {/* <Button>Contact Me</Button> */}
            </ul>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>         
  )
}

export default NavigationBar;