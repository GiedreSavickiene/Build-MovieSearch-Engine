import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

class Navigation extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {
        ;

    }

    render() {
        return (
            <Navbar bg="light" expand="lg">

                <Navbar.Brand href="#">Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={() => { this.props.changePage('') }}>Home</Nav.Link>
                        <Nav.Link href="#" onClick={() => { this.props.changePage("search") }}>Search</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}


export default Navigation;
