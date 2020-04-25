import React from 'react';
import PropTypes from 'prop-types';
import './TeamSummary.css';
import classNames from 'classnames';

const TeamSummary = ({color, teams, getGuessedCards, startingTeam }) => {
  const currentStaringTeam = startingTeam === color;
  const totalCards = currentStaringTeam ? 8 : 7;

  return (
    <div className={'team-summary'}>
      {!!teams[color].length &&
        <>
          <h3 className={classNames('team-title', `text-${color}`)}>
            Team {color}
            <span className={classNames('badge', {'has-total': startingTeam})}>
              {getGuessedCards(color)}
              {startingTeam && <>/{totalCards}</>}
            </span>
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
  startingTeam: PropTypes.string,
  teams: PropTypes.object,
  getGuessedCards: PropTypes.func,
};

export default TeamSummary;
