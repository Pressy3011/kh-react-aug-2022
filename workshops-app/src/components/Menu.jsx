import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Workshops App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/workshops">List of workshops</Nav.Link>
                    <Nav.Link href="/feedback">Feedback</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;