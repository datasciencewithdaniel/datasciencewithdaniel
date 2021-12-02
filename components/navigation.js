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
                    <Nav.Link href="/"><span className="font-bold blueText">Data Science with Daniel</span></Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/tutoring">Tutoring</Nav.Link>
                    {/* <Nav.Link href="/index/#contact">Contact</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	</>)
}

export default Navigation
