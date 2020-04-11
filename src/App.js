import React from 'react';
import Board from './components/Board';
import SpyMaster from './components/SpyMaster';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Board} />
      <Route exact path="/spy-master/:spyId" component={SpyMaster} />
    </Router>
  );
}

export default App;
