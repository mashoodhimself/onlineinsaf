import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { faHouse, faUser, faScaleUnbalanced, faScaleBalanced, faPhone, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../App.css";

export default function NavMenu() {
    return (
        <Navbar bg="dark" expand="lg" style={{paddingLeft:'20px'}}>

            <Navbar.Brand className='pr-2 nav__item' as={Link} to="/"><FontAwesomeIcon icon={faScaleBalanced} /> Online Insaf</Navbar.Brand>

            <Nav className="me-auto">
                <Nav.Link className='nav__item' as={Link} to="/"><FontAwesomeIcon icon={faHouse} /> Home</Nav.Link>
                <Nav.Link className='nav__item' as={Link} to="/about"><FontAwesomeIcon icon={faUser} /> About Us</Nav.Link>
                <Nav.Link className='nav__item' as={Link} to="/list"><FontAwesomeIcon icon={faScaleUnbalanced} /> Hire Lawyer</Nav.Link>
                <Nav.Link className='nav__item' as={Link} to="/contact"><FontAwesomeIcon icon={faPhone} /> Contact us</Nav.Link>
                <Nav.Link className='nav__item' as={Link} to="/login"><FontAwesomeIcon icon={faRightToBracket} /> Login </Nav.Link>
                <Nav.Link className='nav__item' as={Link} to="/profile"><FontAwesomeIcon icon={faRightToBracket} /> My Profile </Nav.Link>
            </Nav>


        </Navbar>
    )
}
