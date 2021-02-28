import { createContext } from 'react'
import { IGameContext } from 'interfaces/Game'

// @ts-ignore
const GameContext = createContext<IGameContext>({})

export default GameContext
