import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TestCard({ test }) {
    const title = test.title.split(' ').join('');

    return (
        <>
        <style type='text/css'>
        {`
        .card {
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
            transition: box-shadow 0.3s ease-in-out;
        }
        .card:hover{
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            // transition: box-shadow 0.3s ease-in-out;
        }
        // .card::after {
        //     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        //     opacity: 0;
        //     transition: opacity 0.3s ease-in-out;
        // }
        // .card:hover::after {
        //     opacity: 1;
        // }
        `}
        </style>

        <Card as={Link} to={`/tests/${title}`} className='m-auto' style={{ width: '15rem', height: '18rem', textDecoration: 'none', }}>
            <Card.Img variant="top" src={test.image} style={{width: '100%', height: '10rem', objectFit: 'cover'}}/>
            <Card.Body>
                <Card.Title>{test.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{test.subtitle}</Card.Subtitle>
                <Card.Text>
                {test.description}
                </Card.Text>
                {/* <Card.Link as={Link} to={`/tests/${title}`}>Play {test.title}</Card.Link> */}
            </Card.Body>
        </Card>

        {/* <Card as={Link} to={`/tests/${title}`} className='m-auto' >
        <Card.Img variant="top" src={test.image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
        </Card> */}
        </>
    )
}

export default TestCard