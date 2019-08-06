import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Container from "reactstrap/lib/Container";

export default class AppNavBar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    console.log(`Toggle clicked ${this.state.isOpen}`)
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (<div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="htttps://github.com/CaesarBourne">
                      Github link of project
                  </NavLink>
              </NavItem>
          </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
    );
  }
}
