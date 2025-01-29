import React from 'react';
import '../assets/styles.css'
import NavbarComp from '../components/navbarFixed'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import NavbarComponent from '../components/navbarFixed';
import firstImage from '../assets/images/firstImage.jpg'
import secondImage from '../assets/images/secondImage.jpg'
import thirdImage from '../assets/images/seventhImage.jpg'
import Footer from '../components/footer';

const Homepage = () => {
  return (
    <>
    <NavbarComponent/>
    <Carousel style={{ maxWidth: '100vw',maxHeight:'100%', margin: '0 auto'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstImage}
          alt="First slide"
          style={{ height: '100vh', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondImage}
          alt="Second slide"
          style={{ height: '100vh', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdImage}
          alt="Third slide"
          style={{ height: '100vh', objectFit: 'cover'}}
        />
      </Carousel.Item>
    </Carousel>
    <Footer/>
    </>
  );
};

export default Homepage;