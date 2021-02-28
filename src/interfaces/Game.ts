export type TeamColor = 'red' | 'blue' | 'green'

export type CardColor = TeamColor | 'neutral' | 'black' | ''

export interface ICardColor {
  id: CardColor
  display: string
}

export interface ICard {
  cardId: number
  color: CardColor
}

export type ITeam = string[]

export interface ITeams {
  [color: string]: ITeam
}

export interface IScore {
  [color: string]: number
}

export interface IGameContext {
  cards: Array<ICard>
  teams: ITeams
  startingTeam: TeamColor
  setStartingTeam: (color: TeamColor) => void
  score: IScore
  newGame: (e: { preventDefault: () => void }) => void
  setColor: (card: ICard, color: CardColor) => void
  addPlayer: (color: TeamColor, player: string) => void
  updatePlayer: (color: TeamColor, newValue: string, index: number) => void
  removePlayer: (color: TeamColor, index: number) => void
  shuffleTeams: () => void
  pickSpyMasters: () => void
  scorePlayer: (color: TeamColor) => void
  getGuessedCardsAmount: (color: TeamColor) => number
  cardColors: Array<ICardColor>
  teamColors: Array<TeamColor>
  isDuetGame: boolean
}
