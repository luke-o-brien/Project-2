import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fishwatch.gov/sites/default/files/home_banner_mahimahi.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>DETAILED SUSTAINABLE SEAFOOD DATA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fishwatch.gov/sites/default/files/home_banner_salmon2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>MORE THAN 100 DIFFERENT SPECIES PROFILED</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fishwatch.gov/sites/default/files/home_banner_seafood_2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SUSTAINABLE RECIPES</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel