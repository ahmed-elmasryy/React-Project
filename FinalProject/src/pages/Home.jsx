import { Container } from "react-bootstrap";
import {Routes,Route, Link} from 'react-router-dom';
import Events from "./Events";
import { initialEvents } from "../Event";
import EventCard from "../components/EventCard";
import Button from 'react-bootstrap/Button';
function Home() {
  const featuredEvents = initialEvents.slice(0, 3);
  return (
    <Container className ="mt-4 text-center">
      <h1>lessaMaqarrarnash site</h1>
      <p>Welcome to lessaMaqarrarnash, we have some events {"(:"}</p>
      <nav>
        <Button variant="outline-primary">
        <Link className="text-decoration-none" to="/Events">
          View Events
        </Link>
        </Button>
      </nav>
      <Routes>
        <Route path="/Events" element={<Events/>} />
      </Routes>
      <h2>Suggested Events</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    </Container>
  );
}
export default Home;