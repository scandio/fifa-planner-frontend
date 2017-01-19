import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {incrementMatchday, decrementMatchday } from '../actions';

class MatchdayPager extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-xs-6">
                    <h2>Spieltag</h2>
                </div>
                <div className="col-xs-1 header-margin" onClick={this.props.decrementMatchday}>
                    <span className="glyphicon glyphicon-backward"></span>
                </div>
                <div className="col-xs-2 header-margin-input">
                    <input type="text" className="form-control disabled" value={this.props.matchday} size="2" readOnly />
                </div>
                <div className="col-xs-1 header-margin" onClick={this.props.incrementMatchday}>
                    <span className="glyphicon glyphicon-forward"></span>
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state) => {
  return { matchday: state.matchday }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    incrementMatchday: incrementMatchday,
    decrementMatchday: decrementMatchday
  };

  const boundActionCreators = bindActionCreators(actions, dispatch);
  return boundActionCreators;
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchdayPager);