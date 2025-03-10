import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Alert,
    Button,
    Card,
    Col,
    Container,
    Form,
    Row
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';
import NavbarComponent from '../components/navbarFixed';

export default function Login() {
    const [inputs, setInputs] = useState([]);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        var email = inputs.email;
        var password = inputs.password;

        axios
            .post('http://127.0.0.1:3001/users/login', {
                email: email, password: password
            }).then((res) => {
                console.log(res);
                if (res.data.cookie !== undefined) {
                    Cookies.set('token', res.data.cookie);
                    navigate('/');
                }
            }).catch((error) => {
                setShow(true);
                setMessage(error.response.data.error);
            });
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    return (
        <>
            <NavbarComponent />
            <div className='d-flex align-items-center justify-content-center vh-100'>
                <Container>
                    <Row>
                        <Col xs='2'></Col>
                        <Col xs='8'>
                            <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
                                <Alert.Heading>Oh No!</Alert.Heading>
                                <p>
                                    {message}
                                </p>
                            </Alert>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Login</Card.Title>
                                    <Card.Text>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId='formEmail'>
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control onChange={handleChange} type='email' placeholder='Enter Email' name='email' required />
                                            </Form.Group>

                                            <Form.Group controlId='formPassword'>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={handleChange} type='password' name='password' placeholder='Enter Password' required />
                                            </Form.Group>

                                            <Button variant='primary' type='submit' className='custom-button2' style={{ width: '100%', marginTop: '1rem' }}>
                                                Login
                                            </Button>  <br />
                                            <Button variant='success' href='/register' className="custom-button" style={{ width: '100%', marginTop: '0.5rem' }}>
                                                Go to Register
                                            </Button>
                                        </Form>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs='2'></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
