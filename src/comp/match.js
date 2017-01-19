import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateMatch } from '../actions';

class Match extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td className="vert-align">{this.props.players.filter(m => m.id == this.props.match.home)[0].name}</td>
                <td className="vert-align">{this.props.players.filter(m => m.id == this.props.match.away)[0].name}</td>
                <td className="col-xs-2 text-center">
                    <input type="text" className="text-center form-control" defaultValue={this.props.match.homeGoals} ref={(input) => this.homeInput = input} size="2" />
                </td>
                <td className="col-xs-1 text-center">:</td>
                <td className="col-xs-2 text-center">
                    <input type="text" className="text-center form-control" defaultValue={this.props.match.homeGoals} ref={(input) => this.awayInput = input} size="2" />
                </td>
                <td className="col-xs-1">
                    <button className="btn btn-primary" onClick={() => this.props.updateMatch(this.props.match, this.homeInput.value, this.awayInput.value)}>Save</button>
                </td>
            </tr>
        );
    }

}

const mapStateToProps = (state) => {
  return { 
      matches: state.matches,
      players: state.players
    }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    updateMatch: updateMatch
  };

  const boundActionCreators = bindActionCreators(actions, dispatch);
  return boundActionCreators;
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);