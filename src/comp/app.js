import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.js';
import MatchDay from './matchday.js';
import Connector from '../connector.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.connector = new Connector(false);
    this.updateStateMatch = this.updateStateMatch.bind(this);
    this.forwardClick = this.forwardClick.bind(this);
    this.backwardClick = this.backwardClick.bind(this);
    this.setPlayers = this.setPlayers.bind(this);
    this.setMatches = this.setMatches.bind(this);
    this.setResults = this.setResults.bind(this);
    this.state = { players: [], allMatches: [], results: [], currMatches: [], currMatchday: 1 };
  }


  setPlayers(players) {
    this.setState({ players: players });
  }
  setMatches(matches) {
    this.setState({
      allMatches: matches,
      currMatches: matches.filter((m) => m.matchday == this.state.currMatchday)
    });
  }
  setResults(results) {
    this.setState({ results: results });
  }

  updateStateMatch(match, homescore, awayscore) {
    this.connector.updateMatch(match.id, match.home, match.away, homescore, awayscore, this.state.currMatchday, () => {
      this.connector.getMatches((response) => this.setMatches(response));
      this.connector.getResults((response) => this.setResults(response));
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
    this.connector.getMatches((response) => this.setMatches(response));
    this.connector.getPlayers((response) => this.setPlayers(response));
    this.connector.getResults((response) => this.setResults(response))
    this.setState({ currMatchday: 1 });
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