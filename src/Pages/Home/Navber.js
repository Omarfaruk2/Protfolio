import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
// import { logo } from "../../../src/omarlogo.png"
import logo1 from "../../../src/img/nologo.png"
import "./Navber.css"
// import AOS from 'aos'
// import 'aos/dist/aos.css'


const Navber = () => {

    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" className='navimg ' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='text-white' width="70px" src={logo1} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#project">Project</Nav.Link>
                            <Nav.Link href="#deets">Portfolio</Nav.Link>
                            <Nav.Link href="#deets">Contace Me</Nav.Link>
                            <Nav.Link href="#deets">
                                <>
                                    <a href="https://drive.google.com/file/d/1CwzQ3u1xG7GyfW52xf8FtDijfzY0QElu/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Download Resume
                                    </a>
                                </>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navber