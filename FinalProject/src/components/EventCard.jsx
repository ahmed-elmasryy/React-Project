import {initialEvents} from "../Event";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function EventCard() {
  const [events] = useState(initialEvents);
  return (
    
    <Card style={{ width: '18rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}></div>

      <Card.Body>
        <p >Sports</p>
        <Card.Title>Card Title </Card.Title> 
        <p> Date | Time </p>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => {}} variant="outline-primary">Details</Button>
        <Button onClick={() => {}} variant="outline-danger">Register</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;