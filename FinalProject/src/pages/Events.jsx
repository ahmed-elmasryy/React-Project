import EventCard from '../components/EventCard';
import { useState, useEffect } from 'react';
import { initialEvents } from '../Event';

function Events({ events = initialEvents }) {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('registeredEvents');
    if (saved) {
      setRegisteredEvents(JSON.parse(saved));
    }
  }, []);

  const handleRegister = (eventId) => {
    if (!registeredEvents.includes(eventId)) {
      const updated = [...registeredEvents, eventId];
      setRegisteredEvents(updated);
      localStorage.setItem('registeredEvents', JSON.stringify(updated));
      alert('Event registered successfully!');
    } else {
      alert('You are already registered for this event!');
    }
  };

  return (
    <>
      <div style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        <h1>Events</h1>
      </div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {events.map((event) => (
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

export default Events;