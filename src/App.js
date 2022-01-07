import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Loading from './components/loading-page/Loading';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Tests from './components/Tests';
import TypingTest from './components/tests/TypingSpeed';
import ReactionTest from './components/tests/ReactionTime';
import NumberMemory from './components/tests/number-memory/NumberMemory';

// APPLICATION
function App() {
  const [loading, setLoading] = useState(true);
  const [testData, setTestData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/tests')
      .then(r => r.json())
      .then(data => {
          setTestData(data);
          console.log('fetch from app.js');
          setLoading(false);
      })
  }, [])

  function updateScore(id, score) {
    const updatedTests = testData.map(test => {
      if (test.id === id) {
        return {
          ...test, 
          score: score,
        }
      } else return test;
    })
    setTestData(updatedTests)
  }

  if (loading) {
    return (
      <div className='App'>
        <MainNav/>
        <Loading/>
      </div>
    )
  }
  return (
    <div className='App'>
      <MainNav/>
      {
          <div style={{minHeight: '1000px'}}>
            <Routes>
              <Route
                path='/tests/NumberMemory'
                element={<NumberMemory updateScore={updateScore}/>}
              />
              <Route
                path='/tests/ReactionTime'
                element={<ReactionTest updateScore={updateScore}/>}
              />
              <Route
                path='/tests/TypingSpeed'
                element={<TypingTest updateScore={updateScore}/>}
              />
              <Route
                path='/tests'
                element={<Tests tests={testData} />}
              />
              <Route
                path='/dashboard'
                element={<Dashboard tests={testData} updateScore={updateScore}/>}
              />  
              <Route
                path='/'
                element={<Home tests={testData}/>}
              />
            </Routes>
          </div> 
      }
      <Footer/>
    </div>
  );
}

export default App;
