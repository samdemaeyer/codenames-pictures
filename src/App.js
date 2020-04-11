import React from 'react';
import Board from './components/Board';
import SpyMaster from './components/SpyMaster';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Board} />
      <Route exact path="/spy-master/:spyId" component={SpyMaster} />
    </HashRouter>
  );
}

export default App;
