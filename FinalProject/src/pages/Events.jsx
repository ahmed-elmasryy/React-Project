import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import EventCard from '../components/EventCard';
import { useState, useEffect } from 'react';
import {initialEvents} from "../Event";
import { Routes, Route } from 'react-router-dom';
import EventDetails from './EventDetails';

function Events() {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    // Load registered events from localStorage on component mount
    const saved = localStorage.getItem('registeredEvents');
    if (saved) {
      setRegisteredEvents(JSON.parse(saved));
    }
  }, []);

  const handleRegister = (eventId) => {
    // Check if already registered
    if (!registeredEvents.includes(eventId)) {
      const updated = [...registeredEvents, eventId];
      setRegisteredEvents(updated);
      localStorage.setItem('registeredEvents', JSON.stringify(updated));
      alert('Event registered successfully!');
    } else {
      alert('You are already registered for this event!');
    }
  };

function Events({events}) {
  return (
    <>
    <div style={{justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      <h1>Events</h1>
    </div>
    <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {initialEvents.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event}
                  onRegister={handleRegister}
                  isRegistered={registeredEvents.includes(event.id)}
                />
            ))}
        </div>
    </div>
    </>
  );
}
}
export default Events;