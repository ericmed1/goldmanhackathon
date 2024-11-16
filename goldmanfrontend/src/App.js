import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import quizpage from './components/quizPage';
import homepage from './components/homePage';


function App() {
  return (
    <Router>
      
      <div className='main-content'>
        <Routes>
          <Route exact path="/" Component={homepage} />
          <Route path="/quizPage" Component={quizpage} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
