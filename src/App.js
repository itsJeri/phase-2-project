import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createGlobalStyle } from 'styled-components';

import MainNav from './components/MainNav';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Tests from './components/Tests';
import TypingTest from './components/tests/TypingTest';
import ReactionTest from './components/tests/ReactionTest';
import NumberMemory from './components/tests/NumberMemory';

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin-top: 15px;
//   }
// `

function App() {
  const [testData, setTestData] = useState([]);
  const [currentGame, setCurrentGame] = useState('');

  useEffect(() => {
      fetch('http://localhost:3000/tests')
      .then(r => r.json())
      .then(data => {
          setTestData(data)
          console.log(data)
      })
  }, [])

  function handleGame(game) {
    setCurrentGame(game)
    console.log(game)
  }

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
            element={<Tests tests={testData} handleGame={handleGame}/>}
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
