import React, {Component} from "react";
import { Navbar, Nav ,NavDropdown,Container} from 'react-bootstrap'

export default class NavbarComp extends Component{
    render() {
        return(
          <div> 
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><h1>Kaos-H</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Keranjang</Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
      <NavDropdown title="Pilihan Baju" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Kaos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Kameja</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Profil Toko</Nav.Link>
      <Nav.Link href="#deets">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>

        )
    }
}