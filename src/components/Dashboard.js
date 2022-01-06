import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ScoreCard from './ScoreCard';

function Dashboard({ tests }) {
    const [testData, setTestData] = useState(tests);
    const [refresh, setRefresh] = useState(false);

    const data = testData.map(test => {
        return(
            <ScoreCard
                key={test.id}
                test={test}
                handleRefresh={handleRefresh}
            />
        )
    })

    useEffect(() => {
        fetch('http://localhost:3000/tests')
        .then(r => r.json())
        .then(data => {
            setTestData(data)
            console.log('fetch from dashboard')
        })
    }, [refresh])

    // HANDLERS
    function handleRefresh() {
        setRefresh(!refresh);
    }


    return (
        <>
        <h1>Dashboard</h1>



        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Test</th>
                <th>Actions</th>
                <th>Score</th>
                <th></th>
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