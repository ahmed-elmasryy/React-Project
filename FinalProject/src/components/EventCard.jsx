import {initialEvents} from "../Event";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function EventCard({ event }) {
  return (    
    <Card style={{ width: '18rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}></div>

      <Card.Body>
        <p >{event.category}</p>
        <Card.Title>{event.title}</Card.Title> 
        <p> {event.date} | {event.time} </p>
        <Card.Subtitle className="mb-2 text-muted">{event.location}</Card.Subtitle>
        <Card.Text>
          {event.description}
        </Card.Text>
        <nav className="mb-2">
          <Button variant="outline-primary">
          <Link className="text-decoration-none" to={`/Events/${event.id}`}>
            Details
          </Link>
          </Button>
          <Button variant="outline-danger">Register</Button>

        </nav>
      </Card.Body>
    </Card>
  );
}

export default EventCard;