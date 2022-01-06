import React from 'react';
import TestCard from './TestCard.js';

function TestsList({ tests }) {
    const mappedTests = tests.map(test => {
        return (
            <TestCard
                key={test.id}
                test={test}
            />
        )
    })

    return (
        <div className="d-flex flex-row">
            {mappedTests}
        </div>
    )
}

export default TestsList;