import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return (
        <>
            <Navbar className="bg-black" collaspeonSelect expand="sm">
               <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link className="text-white">ABOUT</Nav.Link>
                        <Nav.Link className="text-white">PROJECTS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
               </Container>
            </Navbar>
        </>
    )
}

export default NavBar;