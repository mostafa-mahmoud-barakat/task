import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

 const Header = () => {
    return (
      <>
        <div className="ms-5 me-5">
          <Navbar bg="dark" expand="lg">
            <Container fluid>
              
                <img
                  src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
                  style={{ width: 100, height: 100 }}
                  class="img-fluid"
                  alt="BIG RAMY Logo"
                />
                <div className='d-felx'>
                <Button
                    className="text-light bg-dark border-0 fs-6"
                    variant="outline-light"
                    size="lg"
                    active
                  >
                    SIGN IN or SIGN UP
                  </Button>
                </div>
           
            </Container>
          </Navbar>
        </div>
      </>
    );
}

export default Header;
