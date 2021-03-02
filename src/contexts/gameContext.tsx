import { createContext } from 'react'
import { IGameContext } from 'interfaces/Game'

const GameContext = createContext<IGameContext>({} as IGameContext)

export default GameContext
