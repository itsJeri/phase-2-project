import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TestsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <div>
      <style type="text/css">
        {`
        .carousel-item {
          height: 600px;
          background: #1a75ff;
        }

        .carousel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .carousel-caption {
          position: absolute;
          top: 38%;
        }

        .carousel-caption h2 {
          background: rgba(0, 0, 0, 0.5);
          padding: 1rem;
          width: 70%;
          margin: 0 auto;
        }

        .carousel-caption h5 {
          background: rgba(0, 0, 0, 0.5);
          width: 70%;
          margin: 0 auto;
          padding-bottom: 1rem;
        }
        `}
      </style>

    <Carousel activeIndex={index} onSelect={handleSelect} fade={true} interval={5000}>
      <Carousel.Item as={Link} to='/tests/ReactionTime'>
        <img
          src="https://cdn.pixabay.com/photo/2014/11/16/23/39/superhero-534120_960_720.jpg"
          alt="Reaction Test slide"
        />
        <Carousel.Caption>
          <h2>Reaction Test</h2>
          <h5>Are you faster than a sloth?</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={Link} to='/tests/TypingSpeed'>
        <img
          src="https://media.npr.org/assets/img/2010/10/28/flyingfingers_wide-66394a3796b3a38b91f672f7ff84351dafa2f818.jpg"
          alt="Typing Test slide"
        />
        <Carousel.Caption>
          <h2>Typing Test</h2>
          <h5>How good are you with your fingers?</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={Link} to='/tests/NumberMemory'>
        <img
          src="https://media.wnyc.org/i/1500/1111/l/80/1/Numbers.png"
          alt="Number Memory slide"
        />

        <Carousel.Caption>
          <h2>Number Memory</h2>
          <h5>Useful when a girl gives you her number.</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
  }
  


  export default TestsCarousel;