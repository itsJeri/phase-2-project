import TestsList from './TestsList';

function Tests({ tests }) {
    return (
        <>
        <h1>Tests</h1>
        <TestsList
            tests={tests}
        />
        </>
    )
}

export default Tests;