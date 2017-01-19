import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Match from './match.js';
import MatchdayPager from './matchday.pager.js';
import {getPlayers, getMatches, updateMatch } from '../actions';

class MatchDay extends React.Component {

    render() {
        const rows = this.props.matches.filter((m) => m.matchday == this.props.matchday).map((match, index) => {
            return <Match key={match.id} index={index} match={match} players={this.props.players} />
        });
        return (
            <div className="col-lg-6">
                <MatchdayPager />
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Heim</th>
                                <th>Gast</th>
                                <th colSpan="3">Ergebnis</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
  const props = {
    players: state.players,
    matches: state.matches,
    matchday: state.matchday
  };
  return props;
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    getPlayers: getPlayers,
    getMatches: getMatches,
    updateMatch: updateMatch
  };

  const boundActionCreators = bindActionCreators(actions, dispatch);
  return boundActionCreators;
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchDay);