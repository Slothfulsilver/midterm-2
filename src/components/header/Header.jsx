import { LinkContainer } from 'react-router-bootstrap';
import './header.scss'
import { Container, Navbar, Nav } from "react-bootstrap";

function Header(){
    return(
        <Navbar className="navbar fixed-top" bg='dark' expand="lg" >
            <Container>
                <LinkContainer to="/home"><Navbar.Brand href=''>Portfolio</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse className="d-flex" id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <LinkContainer to="/about"><Nav.Link>About Me</Nav.Link></LinkContainer> 
                        <LinkContainer to="/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
                        <LinkContainer to="/career"><Nav.Link></Nav.Link></LinkContainer>
                        <Nav.Link><img alt='img'/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;