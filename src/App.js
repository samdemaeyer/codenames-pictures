import React from 'react';
import Rules from './routes/Rules';
import Board from './routes/Board';
import SpyMaster from './routes/SpyMaster';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Rules} />
      <Route exact path="/play" component={Board} />
      <Route exact path="/spy-master/:spyCardId" component={SpyMaster} />
    </HashRouter>
  );
}

export default App;
