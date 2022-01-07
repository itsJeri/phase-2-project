import React from 'react';

import TestsCarousel from './TestCarousel';
import TestsList from './TestsList';

function Home({ tests }) {
    return (
        <>
        <TestsCarousel/>
        <br></br>
        <TestsList 
            tests={tests}
        />
        </>
    )
}

export default Home;