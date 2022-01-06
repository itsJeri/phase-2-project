import { Table } from 'react-bootstrap';
import ScoreCard from './ScoreCard';

function Dashboard({ tests, updateScore }) {

    const data = tests.map(test => {
        return(
            <ScoreCard
                key={test.id}
                test={test}
                updateScore={updateScore}
            />
        )
    })

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

// Legacy: If fetch method is used

    // const [refresh, setRefresh] = useState(false);

    // useEffect(() => {
    //     fetch('http://localhost:3000/tests')
    //     .then(r => r.json())
    //     .then(data => {
    //         setTestData(data)
    //         // updateTests(data)
    //         console.log('fetch from dashboard')
    //     })
    // }, [refresh])

    // HANDLERS
    // function handleRefresh() {
    //     setRefresh(!refresh);
    // }