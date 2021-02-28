import React, { useState, FC } from 'react'
import GameContext from 'contexts/gameContext'
import Board from 'components/Board'
import { capitalizeFirstLetter } from 'utils/string-helpers'
import { randomise, chunkify } from 'utils/array-helpers'
import { CardColor, ICard, ICardColor, IScore, ITeam, ITeams, TeamColor } from 'interfaces/Game'

const randomiseCards = (amount: number) => randomise(
  [...Array(280)].map((_, i) => ({ cardId: i, color: '' }))
).slice(0, amount)

interface IProps {
  teamColors: Array<TeamColor>
  cardsAmount: number
}

const Game: FC<IProps> = ({ teamColors, cardsAmount }) => {
  const isDuetGame = teamColors.length < 2
  const cardColors: ICardColor[] = [
    { id: 'neutral', display: 'Neutral' },
    { id: 'black', display: 'Game Over' },
  ]
  teamColors.forEach(color => cardColors.unshift({ id: color, display: capitalizeFirstLetter(color) }))

  const getTeamObject = (value: any) => {
    const obj: any = {}
    teamColors.forEach(color => obj[color] = value)
    return obj
  }

  const [cards, setCards] = useState<ICard[]>(randomiseCards(cardsAmount))
  const [startingTeam, setStartingTeam] = useState<TeamColor | undefined>()
  const [teams, setTeams] = useState<ITeams>(getTeamObject([]))
  const [score, setScore] = useState<IScore>(getTeamObject(0))

  const newGame = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setCards(randomiseCards(cardsAmount))
    setStartingTeam(undefined)
  }

  const setColor = (card: ICard, color: CardColor) => {
    const newCards = [...cards]
    newCards.forEach(c => {
      if (card === c) c.color = color
    })
    setCards(newCards)
  }

  const addPlayer = (color: TeamColor, player: string) => {
    const newTeam = [...teams[color]]
    newTeam.push(player)
    setTeams({
      ...teams,
      [color]: newTeam,
    })
  }

  const updatePlayer = (color: TeamColor, newValue: string, index: number) => {
    const newArray = [...teams[color]]
    newArray[index] = newValue
    setTeams({ ...teams, [color]: newArray })
  }

  const removePlayer = (color: TeamColor, index: number) => {
    const newArray = [...teams[color]]
    newArray.splice(index, 1)
    setTeams({ ...teams, [color]: newArray })
  }

  const shuffleTeams = () => {
    const allPlayers = teamColors.reduce((players: ITeam, color: TeamColor) => [...players, ...teams[color]], [])
    const chunkedPlayers = chunkify(randomise(allPlayers), teamColors.length)
    const newTeams: ITeams = {}
    teamColors.forEach((color: TeamColor, index: number) => newTeams[color] = chunkedPlayers[index] || [])
    setTeams(newTeams)
    resetScores()
  }

  const pickSpyMasters = () => {
    const newTeams: ITeams = {}
    teamColors.forEach(color => {
      newTeams[color] = randomise(teams[color])
    })
    setTeams(newTeams)
  }

  const scorePlayer = (color: TeamColor) => setScore({
    ...score,
    [color]: (score[color] + 1),
  })

  const resetScores = () => setScore(getTeamObject(0))
  const getGuessedCardsAmount = (color: TeamColor) => cards.filter(card => card.color === color).length

  return (
    <GameContext.Provider value={{
      cards,
      teams,
      startingTeam,
      setStartingTeam,
      score,
      newGame,
      setColor,
      addPlayer,
      updatePlayer,
      removePlayer,
      shuffleTeams,
      pickSpyMasters,
      scorePlayer,
      getGuessedCardsAmount,
      cardColors,
      teamColors,
      isDuetGame,
    }}>
      <Board/>
    </GameContext.Provider>
  )
}

export default Game
