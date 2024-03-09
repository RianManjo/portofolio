import React from 'react';
import {Container, Navbar, Button, Row, Col} from 'react-bootstrap';

const NavigationBar = () => {
    return (            
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>                    
    );
}

export default NavigationBar;