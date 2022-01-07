import { Card, Placeholder } from 'react-bootstrap';

function LoadingCard() {
    return (
        <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
    </Card>
    )
}

export default LoadingCard;