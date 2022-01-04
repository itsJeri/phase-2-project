import React from 'react';

import TestCarousel from './TestCarousel';
import TestsList from './TestsList';

function Home({ tests }) {
    return (
        <>
        <h1>Earthling Capacity Gauge</h1>
        <TestCarousel/>
        <TestsList 
            tests={tests}
        />
        </>
    )
}

export default Home;