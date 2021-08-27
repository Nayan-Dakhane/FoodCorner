 import React from 'react'
 import { Carousel } from 'react-bootstrap'
 import SignUpBtn from '../SignUpBtn'
 import LogInBtn from './LogInBtn'
 import image1 from "./../assets/images/image1.jpg"
 import image2 from "./../assets/images/image2.jpg"
 import image4 from "./../assets/images/image4.jpg"

 import "./carousel-style.css"
 
const CarouselContainer = () => {
     return (
         <div className = "carosel-box">
        <Carousel pause="false">
        <Carousel.Item interval={2000}>
            <img 
            className="d-block w-100"
            className = "carosel-img"
            src={image2}
            alt="First slide"
            />
        <Carousel.Caption>
            <h1 className="name-header">FooBooStay</h1>
            <LogInBtn /><SignUpBtn /> 
        </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item interval={2000}>
            <img 
            className="d-block w-100"
            className = "carosel-img"
            src={image1}
            alt="Second slide"
            />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item interval={2000}>
            <img 
            className="d-block w-100"
            className = "carosel-img"
            src={image4}
            alt="Third slide"
            />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
</Carousel>
</div>
     )
 }
 
 export default CarouselContainer
 