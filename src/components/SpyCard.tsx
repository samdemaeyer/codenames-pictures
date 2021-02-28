import * as React from 'react'
import './SpyCard.scss'
import classNames from 'classnames'
import { ISpyCard, ISpyCardCell } from '../interfaces/SpyMaster'

interface IProps {
  card: ISpyCard
}

const SpyCard: React.FC<IProps> = ({ card }) => {
  const StartingColor = () => <div className={classNames('starting-color', card.startingColor)}/>

  return <div className="SpyCard">
    <StartingColor/>
    <div className="spy-grid">
      {card.cells.map((cell: ISpyCardCell, index: number) => (
        <div className={`cell ${cell.color}`} key={index}/>
      ))}
    </div>
    <StartingColor/>
  </div>
}

export default SpyCard
