import * as React from 'react'
import { IGameContext } from 'interfaces/Game'

// @ts-ignore
const GameContext = React.createContext<IGameContext>({})

export default GameContext
