import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TestCard({ test }) {
    const title = test.title.split(' ').join('');

    return (
        <Card className='m-auto' style={{ width: '18rem', height: '10rem' }}>
            <Card.Body>
                <Card.Title>{test.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{test.subtitle}</Card.Subtitle>
                <Card.Text>
                {test.description}
                </Card.Text>
                <Card.Link as={Link} to={`/tests/${title}`}>Play {test.title}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default TestCard