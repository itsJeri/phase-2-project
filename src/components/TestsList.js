import React from 'react';
import TestCard from './TestCard.js';

function TestsList({ tests, handleGame }) {
    const mappedTests = tests.map(test => {
        return (
            <TestCard
                key={test.id}
                test={test}
                handleGame={handleGame}
            />
        )
    })

    return (
        <div className='float-sm-right'>
            {mappedTests}
        </div>
    )
}

export default TestsList;