import Link from 'next/link'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CompStyles from '../styles/Components.module.css'
 
const Navigation = () => {
  	return (<>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="../assets/Black_Logo_B.PNG"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Data Science with Daniel
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	</>)
}

export default Navigation
