import * as React from 'react';
import PropTypes from 'prop-types';
import './SpyCard.css';
import classNames from 'classnames';

const SpyCard = ({card}) => {
  const StartingColor = () => <div className={classNames('starting-color', card.startingColor)}/>;

  return <div className="spy-card card-container">
    <StartingColor/>
    <div className="spy-grid">
      {card.cells.map(({ color }, index) => (
        <div className={`card ${color}`} key={index}/>
      ))}
    </div>
    <StartingColor/>
  </div>;
};

SpyCard.propTypes = {
  card: PropTypes.object,
};

export default SpyCard;
