import Link from 'next/link'
import Image from 'next/image'
import WhiteLogo from '../assets/White_Logo.PNG'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CompStyles from '../styles/Components.module.css'
 
const Navigation = () => {
  	return (<>
        <Navbar expand="lg" variant="dark" className={CompStyles.NavBarBackground}>
            <Navbar.Brand href="/">
                <Image
                    alt=""
                    src={WhiteLogo}
                    width={30}
                    height={30}
                    className="d-inline-block align-top"
                />{' '}
                Data Science with Daniel
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/streaming">Streaming</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="https://discord.gg/mCKa7WMPUh">Community</Nav.Link>
                    <Nav.Link href="mailto:contact@datasciencewithdaniel.com.au">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	</>)
}

export default Navigation
