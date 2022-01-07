import React from 'react';

import TestsCarousel from './TestCarousel';
import TestsList from './TestsList';

function Home({ tests }) {
    return (
        <>
        <TestsCarousel tests={tests} />
        <br></br>
        <br></br>
        <TestsList tests={tests} />
        </>
    )
}

export default Home;