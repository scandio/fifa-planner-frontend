import React from 'react';
import TeamListRow from './team.list.row.js';

export default class TeamList extends React.Component {
    render() {
        const rows = this.props.players.map((player, index) =>
            <TeamListRow key={player.id} player={player} />
        );
        return (
            <div className="container">
                {rows}
            </div>
        );
    }

}