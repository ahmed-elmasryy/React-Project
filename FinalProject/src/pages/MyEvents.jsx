import { useState, useEffect } from 'react';
import { initialEvents } from '../Event';
import EventCard from '../components/EventCard';
import Button from 'react-bootstrap/Button';

function MyEvents() {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    // Load registered events from localStorage
    const saved = localStorage.getItem('registeredEvents');
    if (saved) {
      setRegisteredEvents(JSON.parse(saved));
    }
  }, []);

  const handleUnregister = (eventId) => {
    const updated = registeredEvents.filter(id => id !== eventId);
    setRegisteredEvents(updated);
    localStorage.setItem('registeredEvents', JSON.stringify(updated));
  };

  // Get the full event objects for registered event IDs
  const myEventsData = registeredEvents
    .map(id => initialEvents.find(event => event.id === id))
    .filter(Boolean);

  return (
    <>
      <div style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        <h1>My Registered Events</h1>
      </div>
      {myEventsData.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '18px' }}>You haven't registered for any events yet.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {myEventsData.map((event) => (
            <div key={event.id} style={{ position: 'relative' }}>
              <EventCard event={event} isRegistered={true} />
              <Button
                variant="danger"
                onClick={() => handleUnregister(event.id)}
                style={{ marginTop: '10px', width: '100%' }}
              >
                Unregister
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MyEvents;
