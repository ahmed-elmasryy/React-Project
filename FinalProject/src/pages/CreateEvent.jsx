import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function DateTimeValidationForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    // Check if form is valid according to HTML5 validation
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle successful form submission here
      alert(`Submitted! Date: ${formData.date}, Time: ${formData.time}`);
    }
    
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4">
        <h1>Create Event</h1>

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
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">
            Please provide a valid time.
          </Form.Control.Feedback>
        </Form.Group>
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
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">
            Please provide a valid time.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="submit">Submit Form</Button>
    </Form>
  );
}

export default DateTimeValidationForm;