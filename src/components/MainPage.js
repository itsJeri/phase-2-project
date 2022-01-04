import React, { useState, useEffect } from 'react';


import TestCarousel from './TestCarousel';
import TestsList from './TestsList';
import Home from './Home';

function MainPage() {
    const [testData, setTestData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tests')
        .then(r => r.json())
        .then(data => {
            setTestData(data)
            console.log(data)
        })
    }, [])

    return (
        <Home
            tests={testData}
        />
    )
}

export default MainPage;