import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TestCard({ test }) {
    const title = test.title.split(' ').join('');

    return (
        <Card as={Link} to={`/tests/${title}`} className='m-auto' style={{ width: '25%', height: '18rem', textDecoration: 'none', }}>
            <Card.Img variant="top" src={test.image} style={{width: '100%', height: '10rem', objectFit: 'cover'}}/>
            <Card.Body>
                <Card.Title>{test.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{test.subtitle}</Card.Subtitle>
                <Card.Text>
                {test.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TestCard