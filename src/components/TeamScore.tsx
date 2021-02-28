import React from 'react'
import './TeamScore.scss'
import classNames from 'classnames'
import GameContext from '../contexts/gameContext'
import { TeamColor } from '../interfaces/Game'

interface IProps {
  color: TeamColor;
}

const TeamScore: React.FC<IProps> = ({ color }) => {
  const { score, scorePlayer } = React.useContext(GameContext)

  return (
    <div className={'TeamScore'}>
      <h1 className={classNames('score', `text-${color}`)}>{score[color]}</h1>
      <button className="btn" onClick={() => scorePlayer(color)}>Score</button>
    </div>
  )
}

export default TeamScore
