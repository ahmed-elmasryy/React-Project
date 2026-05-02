import {useParams} from 'react-router-dom';
import {initialEvents} from "../Event";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function EventDetails() {
  const {id} = useParams();
  const event = initialEvents.find(e => e.id.toString() === id);
  if(!event){
    return <Container className="mt-5"><h2>Event not found!</h2></Container>;;
  }
  return (
    <Card>
      <Card.Header><h1>{event.title}</h1></Card.Header>
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{event.date} | {event.time}</Card.Subtitle>
        <Card.Text>
          <div>{event.description}</div>
          <div style={{ display: 'flex',justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            <div style={{ padding: '10px', borderRadius: '5px'}}>Location : {event.location}</div>
            <div style={{ padding: '10px', borderRadius: '5px'}}>Seats : {event.seats}</div>
          </div>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="secondary" as={Link} to="/events">Back to Events</Button>
      </Card.Body>
    </Card>
  );
}


export default EventDetails;