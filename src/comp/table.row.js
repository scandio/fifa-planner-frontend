import React from 'react';
import TableRowBadge from './table.row.badge.js';

export default class TableRow extends React.Component {

    constructor(props){
        super(props);
        this.state = {player: null};
    }

    componentWillReceiveProps(nextProps){
        this.setState({ player: nextProps.players.filter(p => p.id == this.props.result.id)[0] });
    }

    componentWillMount() {
        this.setState({ player: this.props.players.filter(p => p.id == this.props.result.id)[0] });
    }

    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.state.player.hasFifaBadge ? <TableRowBadge /> : <span className="empty-badge"></span>} <span>{this.state.player.name}</span></td>
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