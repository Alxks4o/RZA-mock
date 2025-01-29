import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Alert,
    Col,
    Container,
    Row,
    Card,
    Form,
    Button
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/navbarFixed';

export default function Register(){
    
    const [inputs, setInputs] = useState({});
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        var email = inputs.email;
        var password = inputs.password
        var repeatPassword = inputs.repeatPassword

        if(password==repeatPassword){
            axios
            .post('http://127.0.0.1:3001/users',{
                email:email, password:password
            }).then((res) => {
                if(res.data.cookie !== undefined)
                {
                    Cookies.set('token',res.data.cookie)
                    navigate('/')
                }
            }).catch((error) =>{
                setShow(true);
                setMessage(error.response.data.error)
            })
        }else{
            setShow(true)
            setMessage("Passwords do not match")
        }
    }

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    // onChange={handleChange} 

    return(
        <>
        <NavbarComponent/>
        <div className='d-flex align-items-center justify-content-center vh-100'>
            <Container>
                <Row>
                    <Col xs='2'></Col>
                    <Col xs='8'>
                        <Alert show={show} onClose={() => setShow(false)} variant='danger' dismissible>
                            <Alert.Heading>Oh no!</Alert.Heading>
                            <p>
                                {message}
                            </p>
                        </Alert>
                        <Card>
                            <Card.Body>
                                <Card.Title>Register</Card.Title>
                                <Card.Text>
                                <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId='email'>
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control onChange={handleChange} type='email' placeholder='Enter Email' name='email' required/>                                            
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onChange={handleChange} type='password' name='password' placeholder='Enter Password' required />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Re-enter Password</Form.Label>
                                            <Form.Control onChange={handleChange} type='password' name='repeatPassword' placeholder='Enter Password' required />
                                        </Form.Group>

                                        <Button variant='primary' type='submit' style={{width:'100%',marginTop:'1rem'}}>
                                            Register
                                        </Button> <br />
                                        <Button variant='success' type='submit' href='/login' className="custom-button" style={{width:'100%',marginTop:'0.5rem'}}>
                                             Go to Login
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
    )
}