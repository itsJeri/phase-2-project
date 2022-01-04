import React from 'react';
import { Card, Button } from 'react-bootstrap';

function TestCard({ test }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{test.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{test.subtitle}</Card.Subtitle>
                <Card.Text>
                {test.description}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default TestCard