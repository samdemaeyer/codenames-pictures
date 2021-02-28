import React from 'react'
import Rules from 'routes/Rules'
import Game from 'routes/Game'
import SpyMaster from 'routes/SpyMaster'
import { HashRouter, Route } from 'react-router-dom'
import 'App.scss'

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Rules} />
      <Route exact path="/play">
        <Game teamColors={['red', 'blue']} cardsAmount={20}/>
      </Route>
      <Route exact path="/playDuet">
        <Game teamColors={['green']} cardsAmount={25}/>
      </Route>
      <Route exact path="/spy-master/:spyCardId" component={SpyMaster} />
    </HashRouter>
  )
}

export default App
