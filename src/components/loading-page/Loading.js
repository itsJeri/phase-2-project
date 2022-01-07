import LoadingCard from './LoadingCard';
import { Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <>
        <h1>Loading...</h1>
        <Spinner animation="border" variant="primary"/>
        <div className="d-flex flex-row">
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
        </div>
        </>
    )
}

export default Loading;