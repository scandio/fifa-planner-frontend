import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.js';
import MatchDay from './matchday.js';
import { getPlayers, getMatches, getResults, getNewResults, updateMatch } from '../connector.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.updateStateMatch = this.updateStateMatch.bind(this);
    this.forwardClick = this.forwardClick.bind(this);
    this.backwardClick = this.backwardClick.bind(this);
    this.state = { players: [], allMatches: [], results: [], currMatches: [], currMatchday: 1 };
  }


  updateStateMatch(match, homescore, awayscore) {
    updateMatch(match.id, match.home, match.away, homescore, awayscore, this.state.currMatchday);

    let matches = getMatches();
    this.setState({
      players: getPlayers(),
      allMatches: matches,
      currMatches: matches.filter((m) => m.matchday == this.state.currMatchday),
      results: getResults()
    });
  }

  forwardClick() {
    let matchday = this.state.currMatchday + 1;
    this.setState({
      currMatchday: matchday,
      currMatches: this.state.allMatches.filter((m) => m.matchday == matchday)
    });
  }

  backwardClick() {
    let matchday = this.state.currMatchday - 1;
    this.setState({
      currMatchday: matchday,
      currMatches: this.state.allMatches.filter((m) => m.matchday == matchday)
    });
  }

  componentDidMount() {
    let matches = getMatches();
    this.setState({
      players: getPlayers(),
      allMatches: matches,
      currMatches: matches.filter((m) => m.matchday == 1),
      results: getResults(),
      currMatchday: 1
    });

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>Scandio Liga</h1>
          <MatchDay
            matches={this.state.currMatches}
            onClick={this.updateStateMatch}
            players={this.state.players}
            currMatchday={this.state.currMatchday}
            forwardClick={this.forwardClick}
            backwardClick={this.backwardClick} />
          <Table
            results={this.state.results}
            players={this.state.players}
            />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);