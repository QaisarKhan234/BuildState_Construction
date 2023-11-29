import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Carousel.css"; // Import your custom CSS for transitions

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel" > 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/img-slide-1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption className="transition">
            <h3>BUILD STATE CONSTRUCTION</h3>
            <p>We Build Your Dream</p>
            <Button variant="outline-light" className="custom-button">
              More Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/img-slide-2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption className="transition" >
            <h3>BUILD STATE CONSTRUCTION</h3>
            <p>We Are Passionate</p>
            <Button variant="outline-light" className="custom-button">
              More Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/img-slide-3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption className="transition">
            <h3>BUILD STATE CONSTRUCTION</h3>
            <p>We Are Capable</p>
            <Button variant="outline-light" className="custom-button">
              More Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
