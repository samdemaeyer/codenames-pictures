import React from 'react';
import Card from './Card';
import './CardGrid.scss';
import GameContext from '../contexts/gameContext';

const CardGrid = () => {
  const {cards} = React.useContext(GameContext);

  return (
    <div className="CardGrid">
      {cards.map((card, index) => (
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
