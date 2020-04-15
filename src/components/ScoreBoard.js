import * as React from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.css';
import TeamNames from './TeamNames';

class ScoreBoard extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      expanded: false,
    }
  }
    
  collapse = () => {
    this.setState({
      expanded: false,
    })
  };
    
  expand = () => {
    this.setState({
      expanded: true,
    })
  };
    
  render() {
    const { teams } = this.props;

    if (!teams.red.length || !teams.blue.length)
      return null;

    return (
      <div 
        className={`score-board ${this.state.expanded ? 'expanded' : ''}`} 
        onMouseEnter={this.expand} 
        onMouseLeave={this.collapse}
      >
        <div className="score-wrapper">
          <TeamNames color="red" {...this.props}/>
          <TeamNames color="blue" {...this.props}/>
        </div>
      </div>
    )
  }
}

ScoreBoard.propTypes = {
  teams: PropTypes.object,
  score: PropTypes.object,
  addScore: PropTypes.func,
};

export default ScoreBoard;
