import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='carl'>
          <h3 className="animate__animated animate__fadeInDown">WELCOME TO ASVAN LAUNCHER</h3>
          <p className="animate__animated animate__fadeInUp">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="carl">
          <h3 className='animate__animated animate__fadeInDown'>Grow Your Business</h3>
          <p className='animate__animated animate__fadeInUp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='carl'>
          <h3 className="animate__animated animate__fadeInDown">The Best business info</h3>
          <p className='animate__animated animate__fadeInUp'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;