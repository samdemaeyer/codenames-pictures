import React from 'react';
import Rules from './components/Rules';
import Board from './components/Board';
import SpyMaster from './components/SpyMaster';
import { HashRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';

const trackingId = 'UA-163953243-1';
ReactGA.initialize(trackingId);

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
