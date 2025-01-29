import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie'
import { Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logoNav.svg'

function NavbarComponent() {

  const [isLoaded, setisLoaded] = useState(false)
  const [user, setUser] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
      var user = Cookies.get('token');

      if(user === undefined){
          navigate('/login')
      }else{
              axios
              .get('http://127.0.0.1:3001/users/'+user+'/email')
              .then((res) => {
                  setUser(res.data);
                  setisLoaded(true)
              })
              .catch((err) =>{
                  navigate('/login');
              })
          }
      
  },[navigate])
  
    
    return (
      <Navbar expand="lg" className='navbar-line blurry-background'>        
        <Navbar.Brand style={{marginLeft:'45px'}} href="/">
        <img
          src={logo}
          width="200"
          height="200"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <Nav.Item>
        </Nav.Item>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'solid 2px'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav" >
            <Nav.Item>
              <Nav.Link href="/aboutus">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutus">Animals</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/bookingszoo">Zoo Tickets</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/bookingshotel">Hotel Booking</Nav.Link>
            </Nav.Item>   
            <Nav.Item>
              <Nav.Link href="/viewbookings">View Bookings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/logout">Log out</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  
export default NavbarComponent;
  