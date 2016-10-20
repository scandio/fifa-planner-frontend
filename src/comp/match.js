import React from 'react';

export default class Match extends React.Component {

    constructor(props) {
        super(props);
        this.updateHomeGoals = this.updateHomeGoals.bind(this);
        this.updateAwayGoals = this.updateAwayGoals.bind(this);
        this.state = { homeGoals: '', awayGoals: '', match: 0 };
    }

    updateHomeGoals(evt) {
        this.setState({ homeGoals: evt.target.value});
    }
    updateAwayGoals(evt) {
        this.setState({ awayGoals: evt.target.value});
    }

    homeGoalsValueLink(value) {
        return {
            value: this.state.homeGoals,
            requestChange: this.updateHomeGoals
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({ homeGoals: nextProps.match.homeGoals == undefined ? '' : nextProps.match.homeGoals });
        this.setState({ awayGoals: nextProps.match.awayGoals == undefined ? '' : nextProps.match.awayGoals });
        this.setState({ match: nextProps.match });
    }

    componentWillMount() {
        this.setState({ homeGoals: this.props.match.homeGoals == undefined ? '' : this.props.match.homeGoals });
        this.setState({ awayGoals: this.props.match.awayGoals == undefined ? '' : this.props.match.awayGoals });
        this.setState({ match: this.props.match });
    }

    render() {
        return (
            <tr>
                <td className="vert-align">{this.props.players.filter(m => m.id == this.props.match.home)[0].name}</td>
                <td className="vert-align">{this.props.players.filter(m => m.id == this.props.match.away)[0].name}</td>
                <td className="col-lg-2 text-center">
                    <input type="text" className="text-center form-control"  value={this.state.homeGoals} onChange={this.updateHomeGoals} size="2" />
                </td>
                <td className="col-lg-1 text-center">:</td>
                <td className="col-lg-2 text-center">
                    <input type="text" className="text-center form-control" value={this.state.awayGoals} onChange={this.updateAwayGoals} size="2" />
                </td>
                <td className="col-lg-1">
                    <button className="btn btn-primary" onClick={() => this.props.onClick(this.state.match, this.state.homeGoals, this.state.awayGoals)}>Save</button>
                </td>
            </tr>
        );
    }

}