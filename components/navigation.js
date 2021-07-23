import Image from 'next/image'

import { Nav, Navbar } from 'react-bootstrap';

import CompStyles from '../styles/Components.module.css'

import WhiteLogo from '../assets/White_Logo2.png'
 
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
                {/* Data Science with Daniel */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/"><b>Data Science with Daniel</b></Nav.Link> {/* MAY CHANGE LOOK */}
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
