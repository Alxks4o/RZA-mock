import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card, Table} from 'react-bootstrap';
import axios from 'axios';
import NavbarComponent from '../components/navbar';

function Bookings() {
    const [isLoaded, setisLoaded] = useState(false);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:3001/bookings',)
            .then((res) => {
                setBookings(res.data);
                setisLoaded(true);
            })
            .catch((error) => console.log(error));
    }, []);

    if (isLoaded) {
        return (
            <>
                <NavbarComponent />
                <Container>
                    <Card>

                    <Table striped>
                        <thead 
                    >
                            <tr>
                                <th>Forename</th>
                                <th>Surname</th>
                                <th style={{}}>People</th>                                    
                                <th style={{}}>Check In</th>
                                <th style={{}}>Check Out</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => (
                                    <tr key={booking._id}>
                                        <td>{booking.forename}</td>
                                        <td>{booking.surname}</td>
                                        <td>{booking.people}</td>
                                        <td>{(booking.checkInDate).split("T")[0]}</td>
                                        <td>{(booking.checkOutDate).split("T")[0]}</td>
                                        <td>
                                                                                
                                            
                                        </td>
                                    </tr>
                                ))
                            }                            
                        </tbody>
                        </Table>
                    </Card>
                    </Container>  
            </>
        );
    }

    return null;
}

export default Bookings;
