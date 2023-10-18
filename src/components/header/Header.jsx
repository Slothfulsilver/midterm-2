import { LinkContainer } from 'react-router-bootstrap';
import './header.scss'
import { Container, Navbar, Nav } from "react-bootstrap";
import lucy from "../Imgs/Lucy/IMGS/Lucy.jpeg"

function Header(){
    return(
        <Navbar className="navbar fixed-top" bg='dark' expand="lg" >
            <Container>
                <LinkContainer to="/home"><Navbar.Brand href=''>Portfolio</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Nav className='ml-auto'>
                        <LinkContainer to="/about"><Nav.Link>About Me</Nav.Link></LinkContainer> 
                        <LinkContainer to="/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
                        <LinkContainer to="/career"><Nav.Link>Career</Nav.Link></LinkContainer>
                        <Nav.Link><img src={lucy} alt="Lucy"/></Nav.Link>
                        
                    </Nav>
            </Container>
        </Navbar>
    )
};

export default Header;