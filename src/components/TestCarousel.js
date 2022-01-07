import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TestsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <div style={{margin: 'auto', width: '70%'}}>
      <style type="text/css">
        {`
        .carousel-item {
          height: 400px;
          max-width: 1500px;
          min-width: 800px;
        }
        .carousel-caption {
          position: absolute;
          top: 0%;
        }
        `}
      </style>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item as={Link} to='/tests/ReactionTest'>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2014/11/16/23/39/superhero-534120_960_720.jpg"
          alt="Reaction Test slide"
        />
        <Carousel.Caption>
          <h2>Reaction Test</h2>
          <p>Are you faster than a sloth?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={Link} to='/tests/TypingTest'>
        <img
          className="d-block w-100"
          src="https://media.npr.org/assets/img/2010/10/28/flyingfingers_wide-66394a3796b3a38b91f672f7ff84351dafa2f818.jpg"
          alt="Typing Test slide"
        />

        <Carousel.Caption>
          <h3>Typing Test</h3>
          <p>How good are you with your fingers?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={Link} to='/tests/NumberMemory'>
        <img
          className="d-block w-100"
          src="https://media.wnyc.org/i/1500/1111/l/80/1/Numbers.png"
          alt="Number Memory slide"
        />

        <Carousel.Caption>
          <h3>Number Memory</h3>
          <p>Useful when a girl gives you her number.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
  }
  


  export default TestsCarousel;