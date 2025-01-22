import React from 'react';
import { Form, Button, Card, Container, Row, Col, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/navbar';
import '../assets/styles.css'

function BookingsHotel() {



  return (
    <Container>
      <NavbarComponent/>
      <Row className="justify-content-md-center">
        <Col md="5">
          <Card style={{ marginTop: '50px' }}>
            <Card.Body>
              <Card.Title className="text-center m-4" style={{fontSize:'1.8rem'}}>Book Your Tickets</Card.Title>
              <Form>
                <Form.Group className='m-2 pt-2' controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className='m-2 pt-2' controlId="formSurname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="text" placeholder="Enter your surname" />
                </Form.Group>

                <Form.Group className='m-2 pt-2' controlId="formPeople">
                  <Form.Label>People</Form.Label>
                  <InputGroup>
                  <Form.Control type="number" placeholder='0' /><InputGroup.Text>people</InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className='m-2 pt-2' controlId="formCheckIn">
                  <Form.Label>Check-in Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group className='m-2 pt-2' controlId="formCheckOut">
                  <Form.Label>Check-out Date</Form.Label>
                  <Form.Control type="date" />
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
  );
}

export default BookingsHotel;
