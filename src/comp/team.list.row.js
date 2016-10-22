import React from 'react';

export default class TeamListRow extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-6">{this.props.player.name}</div>
            </div>
        );
    }

}