import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import EventCard from '../components/EventCard';
import { useState } from 'react';
import {initialEvents} from "../Event";
import { Routes, Route } from 'react-router-dom';
import EventDetails from './EventDetails';
function Events({events}) {
  return (
    <>
    <div style={{justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      <h1>Events</h1>
    </div>
    <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    </div>
    </>
  );
}

export default Events;