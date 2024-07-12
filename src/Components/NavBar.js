import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return (
        <>
            <Navbar collaspeonSelect expand="sm">
               <Container style={{paddingLeft:"5vw"}}fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse >
                    <Nav className="nav-container gap-4" style={{fontFamily:"barlow-bold"}}>
                        <Nav.Link className="text-black" href="#about">ABOUT</Nav.Link>
                        <Nav.Link className="text-black" href="#projects">PROJECTS</Nav.Link>
                        <Nav.Link className="text-black" href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
               </Container>
            </Navbar>
        </>
    )
}

export default NavBar;