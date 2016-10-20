import React from 'react';

export default class TableRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.players.filter(m => m.id == this.props.result.id)[0].name}</td>
                <td>{this.props.result.played}</td>
                <td>{this.props.result.won}</td>
                <td>{this.props.result.drawn}</td>
                <td>{this.props.result.lost}</td>
                <td>{this.props.result.goals}:{this.props.result.against}</td>
                <td>{this.props.result.diff}</td>
                <td>{this.props.result.points}</td>
            </tr>
        );
    }

}