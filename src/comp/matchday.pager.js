import React from 'react';

export default class MatchdayPager extends React.Component {

    render() {
        return (
            <div className="row h2-height">
                <div className="col-lg-6">
                    <h2>Spieltag</h2>
                </div>
                <div className="col-lg-1 header-margin" onClick={this.props.backwardClick}>
                    <span className="glyphicon glyphicon-backward"></span>
                </div>
                <div className="col-lg-1 header-margin-input">
                    <input type="text" className="form-control disabled" value={this.props.currMatchday} size="2" readOnly />
                </div>
                <div className="col-lg-1 header-margin" onClick={this.props.forwardClick}>
                    <span className="glyphicon glyphicon-forward"></span>
                </div>
            </div>

        );
    }

}