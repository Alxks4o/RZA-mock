import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles.css'

function NavbarComponent() {

  const [isLoaded, setisLoaded] = useState(false)
  const [user, setUser] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
      var user = Cookies.get('token');
      var site = Cookies.get('site');

      if(user === undefined){
          navigate('/login')
      }else{
              axios
              .get('http://127.0.0.1:3000/users/'+user+'/email')
              .then((res) => {
                  setUser(res.data);
                  setisLoaded(true)
              })
              .catch((err) =>{
                  navigate('/login');
              })
          }
      
  },[])
  

    return (
      <Navbar expand="lg">        
        <Navbar.Brand href="/">Riget Zoo Adventures</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav" >
            <Nav.Item>
              <Nav.Link href="#about">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/bookingszoo">Zoo Tickets</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/bookingshotel">Hotel Tickets</Nav.Link>
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
  