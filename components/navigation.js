import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {

  	return (<>
        <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="/" className="pl-5">
                <img
                    src="/logo/NewLogo_White_Small_Transparent.png"
                    alt="White Logo" 
                    width="50"
                    height="50"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/index2/"><b>Data Science with Daniel</b></Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/streaming">Streaming</Nav.Link> */}
                    {/* <Nav.Link href="/index2/#projects">Projects</Nav.Link> */}
                    {/* <Nav.Link href="https://discord.gg/D3KfXbdZgk">Community</Nav.Link> */}
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/tutoring">Tutoring</Nav.Link>
                    {/* <Nav.Link href="mailto:contact@datasciencewithdaniel.com.au">Contact</Nav.Link> */}
                    {/* <Nav.Link href="/index2/#contact">Contact</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	</>)
}

export default Navigation
