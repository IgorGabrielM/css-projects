import React from 'react'
import { Navbar, Container, Offcanvas, NavDropdown, Form, Button, Nav, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHome, faBars, faUser, faPlus, faFutbol, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from './assets/logoCssProjects.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="#"><img className='image-login' src={logo} alt='logo css projects' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Css Projects
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action2"> <Link to={"home"}><a className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faHome} />
                                    Home</a></Link></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header