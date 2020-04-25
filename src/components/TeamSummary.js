import React from 'react';
import PropTypes from 'prop-types';
import './TeamSummary.css';
import classNames from 'classnames';

const TeamSummary = ({color, teams, getGuessedCards, startingTeam }) => {
  const currentStaringTeam = startingTeam === color;
  const totalCards = currentStaringTeam ? 8 : 7;

  return (
    <div className={classNames('team-summary', color)}>
      {teams[color].length ?
        <>
          <h3 className="team-title">
            Team {color}
            <span className={`badge ${startingTeam ? 'has-total' : ''}`}>
              {getGuessedCards(color)}
              {startingTeam && <>/{totalCards}</>}
            </span>
          </h3>
          <ul className="names">
            {teams[color].map((player, index) => {
              const isSpyMaster = index === 0;
              return <li key={index} className={`${isSpyMaster ? 'spymaster' : ''}`}>{isSpyMaster && '>'} {player}</li>;
            })}
          </ul>
        </> : null}
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
