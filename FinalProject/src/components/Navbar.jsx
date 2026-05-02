import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
function NavbarComp() {
  return (
    <Navbar bg="primary">
      <Container className="justify-content-center">
        <Nav className="justify-content-center">
        <Nav.Link as={Link} to="/Home" style={{ color: 'white' }}>Home</Nav.Link>
        <Nav.Link as={Link} to="/Events" style={{ color: 'white' }}>Events</Nav.Link>
        <Nav.Link as={Link} to="/CreateEvent" style={{ color: 'white' }}>Create Event</Nav.Link>
        <Nav.Link as={Link} to="/MyEvents" style={{ color: 'white' }}>My Events</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;