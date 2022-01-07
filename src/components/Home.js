import React from 'react';

import TestsCarousel from './TestCarousel';
import TestsList from './TestsList';

function Home({ tests }) {
    return (
        <>
        <h1>Earthling Capacity Gauge</h1>
        <TestsCarousel/>
        <br></br>
        <TestsList 
            tests={tests}
        />
        </>
    )
}

export default Home;