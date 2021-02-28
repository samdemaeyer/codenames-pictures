import React, { useContext, FC } from 'react'
import classNames from 'classnames'
import GameContext from 'contexts/gameContext'
import { TeamColor } from 'interfaces/Game'
import 'components/TeamScore.scss'

interface IProps {
  color: TeamColor
}

const TeamScore: FC<IProps> = ({ color }) => {
  const { score, scorePlayer } = useContext(GameContext)

  return (
    <div className={'TeamScore'}>
      <h1 className={classNames('score', `text-${color}`)}>{score[color]}</h1>
      <button className="btn" onClick={() => scorePlayer(color)}>Score</button>
    </div>
  )
}

export default TeamScore
