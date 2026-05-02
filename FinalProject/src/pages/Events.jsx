import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import EventCard from '../components/EventCard';
import { useState } from 'react';
import {initialEvents} from "../Event";

function Events() {
  return (
    <div>
      <h1>Events</h1>
      <p>List of upcoming events will be displayed here.</p>
      <input type="text" placeholder="Search events" />
      <DropdownButton id="dropdown-basic-button" title="All">
      <Dropdown.Item href="#/action-1">Tech</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Career</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Sports</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Arts</Dropdown.Item>
    </DropdownButton>

    </div>
  );
}

export default Events;