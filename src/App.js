import React from 'react';
import Rules from './routes/Rules';
import Game from './routes/Game';
import SpyMaster from './routes/SpyMaster';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Rules} />
      <Route exact path="/play" component={Game} />
      <Route exact path="/spy-master/:spyCardId" component={SpyMaster} />
    </HashRouter>
  );
}

export default App;
