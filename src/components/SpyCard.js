import * as React from 'react';
import PropTypes from 'prop-types';
import './SpyCard.css';

const SpyCard = ({card}) => {
  return <div className="spy-card card-container">
    <div className={`starting-color ${card.startingColor}`}/>
    <div className="spy-grid">
      {card.cells.map(({ color }, index) => (
        <div className={`card ${color}`} key={index}/>
      ))}
    </div>
    <div className={`starting-color ${card.startingColor}`}/>
  </div>;
};

SpyCard.propTypes = {
  card: PropTypes.object,
};

export default SpyCard;
