import React from 'react';
import Match from './match.js';
import MatchdayPager from './matchday.pager.js';

export default class MatchDay extends React.Component {

    render() {
        var rows = this.props.matches.map((match, index) => {
            return <Match key={index} index={index} match={match} onClick={this.props.onClick} players={this.props.players} />
        });
        return (
            <div className="col-lg-6">
                <MatchdayPager currMatchday={this.props.currMatchday} forwardClick={this.props.forwardClick} backwardClick={this.props.backwardClick} />
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
        );
    }

}