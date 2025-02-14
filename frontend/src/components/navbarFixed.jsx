import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie'
import { Navbar, Nav, Offcanvas} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logoNav.svg'

function NavbarComponent() {

  
    
    return (
      <Navbar expand="lg" fixed='top'  className='navbar-line blurry-background'>        
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
        <Navbar.Offcanvas id="basic-navbar-nav" placement='end'>
          <Offcanvas.Header closeButton>
              <Offcanvas.Title>Riget Zoo Adventures</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="mx-auto custom-nav" >
              <Nav.Link href="/aboutus">About us</Nav.Link>          
              <Nav.Link href="/aboutus">Animals</Nav.Link>           
              <Nav.Link href="/bookingszoo">Zoo Tickets</Nav.Link>           
              <Nav.Link href="/bookingshotel">Hotel Booking</Nav.Link>          
              <Nav.Link href="/viewbookings">View Bookings</Nav.Link>
              <Nav.Link href="/logout">Log out</Nav.Link>
          </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    );
  }

  
export default NavbarComponent;
  