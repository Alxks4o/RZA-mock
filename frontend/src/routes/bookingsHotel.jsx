import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/navbar';
import '../assets/styles.css'
import axios from 'axios';
import Cookies from 'js-cookie';

function BookingsHotel() {
  const userid = Cookies.get('token');

  const [formData, setFormData] = useState({
    forename: '',
    surname: '',
    people: 0,
    checkInDate: '',
    checkOutDate: '',
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
      if (!formData.forename || !formData.surname || !formData.people || !formData.checkInDate || !formData.checkOutDate) {
        console.error('Please fill out all fields!');
        return;
      }
    
      const convertedData = {
        ...formData,
        people: Number(formData.people), // Convert to number
        checkInDate: new Date(formData.checkInDate),
        checkOutDate: new Date(formData.checkOutDate),
        user: userid 
      };
      
      try {
        const response = await axios.post('http://localhost:3001/api/bookingsHotel', convertedData, {
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
              <Card.Title className="text-center m-4" style={{fontSize:'1.8rem'}}>Book Your Room</Card.Title>
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

              <Form.Group className='m-2 pt-2' controlId="formPeople">
                <Form.Label>People</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    name="people"
                    onChange={handleChange}
                  />
                  <InputGroup.Text>people</InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className='m-2 pt-2' controlId="formCheckIn">
                <Form.Label>Check-in Date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkInDate"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className='m-2 pt-2' controlId="formCheckOut">
                <Form.Label>Check-out Date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkOutDate"
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

export default BookingsHotel;
