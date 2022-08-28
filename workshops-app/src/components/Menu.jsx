import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand to="/" as={Link}>Workshops App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={Link}>Home</Nav.Link>
                    <Nav.Link to="/workshops" as={Link}>List of workshops</Nav.Link>
                    <Nav.Link to="/feedback" as={Link}>Feedback</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;