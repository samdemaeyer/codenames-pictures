import React from 'react';
import PropTypes from 'prop-types';

function TeamNames(props) {
  return (
    <div className={`team-${props.color}`}>
      <h3>Team {props.color}</h3>
      <ul>
        {props.teamNames.map((player, index) => (
          <li key={index}>
            <p>{player}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


TeamNames.propTypes = {
  color: PropTypes.string,
  teamNames: PropTypes.arrayOf(PropTypes.string),
};

export default TeamNames;
