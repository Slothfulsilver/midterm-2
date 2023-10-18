import { LinkContainer } from 'react-router-bootstrap';
import './header.scss'
import { Container, Navbar, Nav } from "react-bootstrap";
import Lucy from "../Imgs/Lucy/IMGS/Lucy.jpeg"
import Arturo from '../Imgs/Arturo/Arturo.jpeg'
import { useTheme } from '../../Context/ThemeContext';


function Header(){

    const {theme, toggleTheme} = useTheme();
    console.log(theme);
    return(
        <Navbar className={`navbar ${theme ? "lucy": "arturo"} fixed-top`} bg='dark body-tertiary' expand="xl" data-bs-theme="dark" >
            <Container>
                <LinkContainer to="/home"><Navbar.Brand href=''>Portfolio</Navbar.Brand></LinkContainer>
                <Navbar.Toggle/>
                <Navbar.Collapse className='justify-content-end' id='basic-Navbar-nav'>
                    <Nav className='mr-auto'>
                            <LinkContainer to="/about"><Nav.Link>About Me</Nav.Link></LinkContainer> 
                            <LinkContainer to="/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
                            <LinkContainer to="/career"><Nav.Link>Career</Nav.Link></LinkContainer>
                            <Nav.Link><img src={theme ? Lucy: Arturo} alt={theme ? 'Lucy': 'Arturo'} onClick={toggleTheme}/></Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;