import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getPlayers, getMatches, getResults, updateMatch, getMatchday, incrementMatchday, decrementMatchday } from '../actions';
import Table from './table';
import MatchDay from './matchday';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMatches();
    this.props.getPlayers();
    this.props.getResults();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>Scandio Liga</h1>
          <MatchDay />
          <Table />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    players: state.players,
    matches: state.matches,
    matchday: state.matchday,
    results: state.results
  };
  return props;
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    getPlayers: getPlayers,
    getMatches: getMatches,
    getResults: getResults
  };

  const boundActionCreators = bindActionCreators(actions, dispatch);
  return boundActionCreators;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);