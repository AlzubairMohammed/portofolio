import React from "react";
import "./NavBar.css";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="NavBar" expand="sm">
      <Container>
        <Navbar.Toggle />
        <Navbar.Offcanvas>
          <Offcanvas.Body>
            <Nav className="justfiy-content-center m-auto">
              <Nav.Link className="p-2 px-lg-4">Home</Nav.Link>
              <Nav.Link className="p-2 px-lg-4">About</Nav.Link>
              <Nav.Link className="p-2 px-lg-4">Projects</Nav.Link>
              <Nav.Link className="p-2 px-lg-4">Skills</Nav.Link>
              <Nav.Link className="p-2 px-lg-4">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
