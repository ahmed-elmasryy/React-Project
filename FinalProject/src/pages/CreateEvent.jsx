import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
function DateTimeValidationForm({ events, setEvents }) {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    time: '',
    location: '',
    seats: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const newEvent = {
        id: Date.now(),                    
        title: formData.title,
        category: formData.category,
        date: formData.date,               
        time: formData.time,   
        location: formData.location,
        seats: Number(formData.seats),     
        description: formData.description,
      };

      if (setEvents) {
        setEvents([...events, newEvent]);
      }

      setFormData({ title: '', category: '', date: '', time: '', location: '', seats: '', description: '' });
      setValidated(false);
      navigate('/events');
      return;
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4">
      <h1>Create Event</h1>

      <Row className="mb-4">
        <Form.Label htmlFor="inputTitle">Event Name</Form.Label>
        <Form.Control
          required
          type="text"
          id="inputTitle"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter event name"
        />
        <Form.Control.Feedback type="invalid">Please provide an event name.</Form.Control.Feedback>
      </Row>

      <Row className="mb-4">
        <Form.Label htmlFor="inputCategory">Category</Form.Label>
        <Form.Control
          required
          type="text"
          id="inputCategory"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter event category"
        />
        <Form.Control.Feedback type="invalid">Please provide a category.</Form.Control.Feedback>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationDate">
          <Form.Label>Select Date</Form.Label>
          <Form.Control
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            isInvalid={validated && !formData.date}
            isValid={validated && formData.date}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid date.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationTime">
          <Form.Label>Select Time</Form.Label>
          <Form.Control
            required
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            isInvalid={validated && !formData.time}
            isValid={validated && formData.time}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid time.</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Label htmlFor="inputLocation">Location</Form.Label>
        <Form.Control
          required
          type="text"
          id="inputLocation"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter event location"
        />
        <Form.Control.Feedback type="invalid">Please provide a location.</Form.Control.Feedback>
      </Row>

      <Row className="mb-4">
        <Form.Label htmlFor="inputSeats">Seats</Form.Label>
        <Form.Control
          required
          type="number"
          id="inputSeats"
          name="seats"
          value={formData.seats}
          onChange={handleChange}
          placeholder="Enter number of seats"
          min="1"
        />
        <Form.Control.Feedback type="invalid">Please provide a valid number of seats.</Form.Control.Feedback>
      </Row>

      <Row className="mb-4">
        <Form.Label htmlFor="inputDescription">Description</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          id="inputDescription"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter event description"
        />
        <Form.Control.Feedback type="invalid">Please provide a description.</Form.Control.Feedback>
      </Row>

      <Button type="submit">
        Submit Form
      </Button>
    </Form>
  );
}

export default DateTimeValidationForm;