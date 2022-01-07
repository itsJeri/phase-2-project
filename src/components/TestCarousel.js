import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TestsCarousel({ tests }) {
  const [index, setIndex] = useState(0);

  const mappedTests = tests.map(test => {
    const title = test.title.split(' ').join('');

    return (
      <Carousel.Item key={test.id} as={Link} to={`/tests/${title}`}>
      <img
        src={test.image}
        alt={`${test.title} Slide`}
      />
      <Carousel.Caption>
        <h2>{test.title}</h2>
        <h5>{test.subtitle}</h5>
      </Carousel.Caption>
    </Carousel.Item>
    )
  })

  // HANDLERS
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade={true} interval={5000}>
      {mappedTests}
    </Carousel>
  )
  }
  
  export default TestsCarousel;