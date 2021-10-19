import { Nav, Navbar } from 'react-bootstrap';

import CompStyles from '../styles/Components.module.css'

const Navigation = () => {

  	return (<>
        <Navbar expand="lg" variant="dark" className={CompStyles.NavBarBackground}>
            <Navbar.Brand href="/">
                <img
                    src="/images/White_Logo2.png"
                    alt="White Logo" 
                    width="50"
                    height="50"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/"><b>Data Science with Daniel</b></Nav.Link> {/* MAY CHANGE LOOK */}
                    <Nav.Link href="/about">About</Nav.Link>
                    {/* <Nav.Link href="/streaming">Streaming</Nav.Link> */}
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="https://discord.gg/D3KfXbdZgk">Community</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/tutoring">Tutoring</Nav.Link>
                    <Nav.Link href="mailto:contact@datasciencewithdaniel.com.au">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	</>)
}

export default Navigation
