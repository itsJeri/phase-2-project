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
import TypingSpeed from './components/tests/TypingSpeed';
import ReactionTime from './components/tests/ReactionTime';
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

  // TEST ROUTES
  const testComponents = {
    1: ReactionTime,
    2: TypingSpeed,
    3: NumberMemory,
  }

  const testRoutes = testData.map(test => {
    const title = test.title.split(' ').join('');
    const Component = testComponents[test.id];

    return (
      <Route
        key={test.id}
        path={`/tests/${title}`}
        element={<Component test={test} updateScore={updateScore}/>}
      />
    )
  })

  // HANDLE DASHBOARD SCORES
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

  // RENDER
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
              {testRoutes}
              <Route
                path='/tests'
                element={<Tests tests={testData}/>}
              />
              <Route
                path='/dashboard'
                element={<Dashboard tests={testData} updateScore={updateScore} />}
              />  
              <Route
                path='/'
                element={<Home tests={testData} />}
              />
            </Routes>
          </div> 
      }
      <Footer/>
    </div>
  );
}

export default App;
