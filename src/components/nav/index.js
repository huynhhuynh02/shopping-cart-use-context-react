import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
const NavBar = () => {

    const { logoColor } = useStore();
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </Nav>
                    { logoColor }
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;