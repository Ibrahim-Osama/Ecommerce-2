import {Badge , Nav  , Navbar ,Container } from 'react-bootstrap';
import style from './Headers.module.css'
import HeaderBasket from '../../Ecommerce/HeaderBackets/HeaderBasket';


const Headers = () =>
{
    let {headerLogo , headerContainer}= style

  return <>
    <header>
        <div className={`    ${headerContainer}`}>
      <h1 className={`mb-3 ${headerLogo}`}>
        Our <Badge bg="info">Ecommerce</Badge>
      </h1>
    <HeaderBasket/>
        </div>
    </header>


    <Navbar expand="lg"  className="bg-body-tertiary rounded-3" bg='dark' data-bs-theme = 'dark'>
      <Container>
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Category</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
         
          </Nav>

          <Nav className="">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  </>
}

export default Headers
