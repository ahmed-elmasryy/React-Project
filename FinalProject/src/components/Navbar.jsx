import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 

function NavbarComp() {
  return (
    <Navbar bg="primary" data-bs-theme="light">
      <Container>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
        <Nav.Link as={Link} to="/Events">Events</Nav.Link>
        <Nav.Link as={Link} to="/CreateEvent">Create Event</Nav.Link>
        <Nav.Link as={Link} to="/MyEvents">My Events</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;