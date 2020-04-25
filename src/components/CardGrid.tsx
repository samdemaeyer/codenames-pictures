import React from 'react';
import Card from './Card';
import './CardGrid.scss';
import GameContext from '../contexts/gameContext';
import {ICard, IGameContext} from '../interfaces/Game';

const CardGrid = () => {
  const {cards} = React.useContext<IGameContext>(GameContext);

  return (
    <div className="CardGrid">
      {cards.map((card:ICard, index:number) => (
        <Card
          key={card.cardId}
          card={card}
          index={index + 1}
        />
      ))}
    </div>
  );
};

export default CardGrid;
