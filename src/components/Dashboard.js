import { Table } from 'react-bootstrap';
import ScoreCard from './ScoreCard';

function Dashboard({ tests }) {

    const data = tests.map(test => {
        return(
            <ScoreCard
                key={test.id}
                test={test}
            />
        )
    })

    return (
        <>
        <h1>Margin?</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Test</th>
                <th>Actions</th>
                <th>Score</th>
                <th>?</th>
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </Table>
        </>
    )
}

export default Dashboard;