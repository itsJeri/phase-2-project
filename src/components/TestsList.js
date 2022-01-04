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
        <div class='float-sm-right'>
            {mappedTests}
        </div>
    )
}

export default TestsList;