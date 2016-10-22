import React from 'react';
import Connector from '../connector/connector.js';
import TeamList from './team.list.js';

/*
This component renders the form to add a new team and shows a list of all teams
 */
export default class AddTeam extends React.Component {

    constructor(props) {
        super(props);
        this.connector = new Connector();
        this.addPlayer = this.addPlayer.bind(this);
        this.setPlayers = this.setPlayers.bind(this);
        this.updateStateName = this.updateStateName.bind(this);
        this.state = { players: [], name: '' };
    }

    updateStateName(evt) {
        this.setState({ name: evt.target.value });
    }

    addPlayer(name) {
        console.log(name);
        this.setState({ name: '' });
        this.connector.addPlayer(name, (response) => {
            this.connector.getPlayers((response) => this.setPlayers(response));
        });
    }

    setPlayers(players) {
        this.setState({ players: players });
    }

    componentDidMount() {
        this.connector.getPlayers((response) => this.setPlayers(response));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Neues Team anlegen</h2>
                        <div className="container-fluid">
                            <div className="row">
                                <input type="text" className="form-control" value={this.state.name} onChange={this.updateStateName} />
                            </div>
                            <div className="row">
                                <button className="btn btn-primary" onClick={() => this.addPlayer(this.state.name)}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <TeamList players={this.state.players} />
                    </div>
                </div>
            </div>
        )
    }

}