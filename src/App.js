import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNav from './components/MainNav';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Tests from './components/Tests';
import TypingTest from './components/tests/TypingTest';
import ReactionTest from './components/tests/ReactionTest';
import NumberMemory from './components/tests/number-memory/NumberMemory';

// GLOBAL STYLE
document.body.style.margin='75px';

// APPLICATION
function App() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/tests')
      .then(r => r.json())
      .then(data => {
          setTestData(data)
          console.log('fetch from app.js')
      })
  }, [])


  return (
    <div className='App'>
      <>
        <MainNav/>

        <Routes>
          <Route
            path='/tests/NumberMemory'
            element={<NumberMemory/>}
          />
          <Route
            path='/tests/ReactionTest'
            element={<ReactionTest/>}
          />
   
          <Route
            path='/tests/TypingTest'
            element={<TypingTest/>}
          />
    
          <Route
            path='/tests'
            element={<Tests tests={testData} />}
          />
          <Route
            path='/dashboard'
            element={<Dashboard tests={testData}/>}
          />  
          <Route
            path='/'
            element={<Home tests={testData}/>}
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
