import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavBarStyle from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={NavBarStyle.all}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" className={NavBarStyle.options}>
            Home
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/Biography" className={NavBarStyle.options}>
                CV
              </Nav.Link>
              <Nav.Link href="/ArtWorks" className={NavBarStyle.options}>
                ArtWorks
              </Nav.Link>
              <Nav.Link href="/Skills" className={NavBarStyle.options}>
                Skills
              </Nav.Link>
              <Nav.Link href="/Contact" className={NavBarStyle.options}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar