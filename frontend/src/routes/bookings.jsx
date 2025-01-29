import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card, Table, Tabs, Tab} from 'react-bootstrap';
import axios from 'axios';
import NavbarComponent from '../components/navbar';
import '../assets/styles.css'
import Cookies from 'js-cookie';

function Bookings() {
    const [isLoaded, setisLoaded] = useState(false);
    const [bookingsHotel, setBookingsHotel] = useState([]);
    // const [bookingsZoo, setBookingsZoo] = useState([]);
    const [key, setKey] = useState('table1');

    useEffect(() => {
        const userid = Cookies.get('token');
        if (userid) {
            axios
                .get(`http://127.0.0.1:3001/bookings?user=${userid}`, { withCredentials: true })
                .then((res) => {
                    setBookingsHotel(res.data);
                    setisLoaded(true);
                })
                .catch((error) => console.log(error));
        } else {
            console.error('Token is undefined');
        }
    }, []);

    // useEffect(() => {
    //     axios
    //         .get('http://127.0.0.1:3001/bookings/zoo',)
    //         .then((res) => {
    //             setBookingsZoo(res.data);
    //             setisLoaded(true);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);


    if (isLoaded) {
        return (
            <>
                <NavbarComponent />
                <Container style={{marginTop:'5rem'}}>
                <Row>
                <Col xs='2'></Col>
                    <Col xs='8'>
                        <Card>
                        <Tabs id="dual-table-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                        <Tab eventKey="table1" title="Hotel Bookings" tabClassName='custom-tab'>
                        <Table striped>
                            <thead 
                        >
                                <tr>
                                    <th>Forename</th>
                                    <th>Surname</th>
                                    <th>People</th>                                    
                                    <th>Check In</th>
                                    <th>Check Out</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookingsHotel.map(booking => (
                                        <tr key={booking._id}>
                                            <td>{booking.forename}</td>
                                            <td>{booking.surname}</td>
                                            <td>{booking.people}</td>
                                            <td>{(booking.checkInDate).split("T")[0]}</td>
                                            <td>{(booking.checkOutDate).split("T")[0]}</td>
                                            <td>{booking.user}</td>
                                            <td>
                                                                                    
                                                
                                            </td>
                                        </tr>
                                    ))
                                }                            
                            </tbody>
                            </Table>
                            </Tab>
                    
                            
                            <Tab eventKey="table2" title="Zoo Tickets" tabClassName='custom-tab'>

                            <Table striped>
                            <thead 
                        >
                                <tr>
                                    <th>Forename</th>
                                    <th>Surname</th>
                                    <th style={{}}>Adults</th>                                    
                                    <th style={{}}>Children</th>
                                    <th style={{}}>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookingsZoo.map(bookingzoo => (
                                        <tr key={bookingzoo._id}>
                                            <td>{bookingzoo.forename}</td>
                                            <td>{bookingzoo.surname}</td>
                                            <td>{bookingzoo.adults}</td>
                                            <td>{bookingzoo.children}</td>
                                            <td>{bookingzoo.date}</td>
                                            <td>
                                                                                    
                                                
                                            </td>
                                        </tr>
                                    ))
                                }                            
                            </tbody>
                            </Table>
                            </Tab>
                            </Tabs>
                            </Card>
                        </Col>
                    <Col xs='2'></Col>
                    </Row>
                    </Container>  
            </>
        );
    }

    return null;
}

export default Bookings;
