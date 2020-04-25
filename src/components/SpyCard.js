import * as React from 'react';
import PropTypes from 'prop-types';
import './SpyCard.scss';
import classNames from 'classnames';

const SpyCard = ({card}) => {
  const StartingColor = () => <div className={classNames('starting-color', card.startingColor)}/>;

  return <div className="SpyCard">
    <StartingColor/>
    <div className="spy-grid">
      {card.cells.map(({ color }, index) => (
        <div className={`cell ${color}`} key={index}/>
      ))}
    </div>
    <StartingColor/>
  </div>;
};

SpyCard.propTypes = {
  card: PropTypes.object,
};

export default SpyCard;
