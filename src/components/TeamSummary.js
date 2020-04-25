import React from 'react';
import PropTypes from 'prop-types';
import './TeamSummary.scss';
import classNames from 'classnames';
import GameContext from '../contexts/gameContext';
import Badge from './library/Badge';

const TeamSummary = ({color}) => {
  const {teams, getGuessedCardsAmount, startingTeam} = React.useContext(GameContext);
  const currentStaringTeam = startingTeam === color;
  const totalCards = currentStaringTeam ? 8 : 7;

  return (
    <div className={'TeamSummary'}>
      {!!teams[color].length &&
        <>
          <h3 className={classNames('team-title', `text-${color}`)}>
            Team {color}
            <Badge>
              {getGuessedCardsAmount(color)}
              {startingTeam && <>/{totalCards}</>}
            </Badge>
          </h3>
          <ul className="names">
            {teams[color].map((player, index) => {
              const isSpyMaster = index === 0;
              return <li key={index} className={classNames({
                'spymaster': isSpyMaster,
                [`text-${color}`]: isSpyMaster,
              })}>
                {isSpyMaster && '>'} {player}
              </li>;
            })}
          </ul>
        </>}
    </div>
  );
};

TeamSummary.propTypes = {
  color: PropTypes.string,
};

export default TeamSummary;
