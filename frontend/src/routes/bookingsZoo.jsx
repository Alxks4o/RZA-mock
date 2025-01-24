import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/navbar';
import '../assets/styles.css'
import axios from 'axios';
import Cookies from 'js-cookie';

function BookingsZoo() {
  const userid = Cookies.get('token');

  const [formData, setFormData] = useState({
    forename: '',
    surname: '',
    children:'',
    adults:'',
    date:'',
    user:''
  });
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Check for empty fields
      if (!formData.forename || !formData.surname || !formData.adults || !formData.children || !formData.date) {
        console.error('Please fill out all fields!');
        return;
      }
    
      const convertedData = {
        ...formData,
        adults: Number(formData.adults), // Convert to number
        children: Number(formData.children), // Convert to number
        date: new Date(formData.date), // Ensure date is properly set
        user: userid 
      };
    
      try {
        const response = await axios.post('http://localhost:3001/api/bookingsZoo', convertedData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Booking saved:', response.data);
      } catch (error) {
        console.error('There was an error saving the booking!', error);
      }
    };
    
  

  return (
    <>
    <NavbarComponent/>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="5">
          <Card style={{ marginTop: '50px' }}>
            <Card.Body>
              <Card.Title className="text-center m-4" style={{fontSize:'1.8rem'}}>Book Your Zoo Tickets</Card.Title>
              <Form onSubmit={handleSubmit}>
              <Form.Group className='m-2 pt-2' controlId="formForename">
                <Form.Label>Forename</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your forename"
                  name="forename"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className='m-2 pt-2' controlId="formSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your surname"
                  name="surname"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className='m-2 pt-2' controlId="formAdults">
                <Form.Label>Adults</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    name="adults"
                    onChange={handleChange}
                  />
                  <InputGroup.Text>adults</InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className='m-2 pt-2' controlId="formChildren">
                <Form.Label>Children</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    name="children"
                    onChange={handleChange}
                  />
                  <InputGroup.Text>children</InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className='m-2 pt-2' controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  onChange={handleChange}
                />
              </Form.Group>

       


                <Container className="text-center mt-4">
                  <Button  variant="primary" type="submit">
                    Book Now
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default BookingsZoo;
