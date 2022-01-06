import { useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

function ScoreCard({ test, handleRefresh }) {
    const [show, setShow] = useState(false);

    const title = test.title.split(' ').join('');

    // HANDLERS
    function handleReset() {
        fetch(`http://localhost:3000/tests/${test.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                score: 0,
            }),
        })
        handleClose()
        handleRefresh()
    }
    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }

    return (
        <>

        <tr>
            <td>{test.title}</td>
            <td>
            <Link to={`/tests/${title}`}>Play {test.title}</Link>
            </td>
            <td>{test.score}</td>
            <td>
                <Button variant="primary" onClick={handleShow}>
                Reset
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Score Reset</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete your score?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleReset}>
                        Delete
                    </Button>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>
        
        </>
    )
}

export default ScoreCard;