import React from 'react';
import { connect } from 'react-redux';
import TableRow from './table.row.js';

class Table extends React.Component {

    render() {
        var rows = this.props.results.map((result, index) =>
            <TableRow key={result.id} index={index} result={result} players={this.props.players} />
        );
        return (
            <div className="col-lg-6">
                <h2>Tabelle</h2>
                <div className="table-responsive">
                    <table className="table table-striped results">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Mannschaft</th>
                                <th>Spiele</th>
                                <th>S.</th>
                                <th>U.</th>
                                <th>N.</th>
                                <th>Tore</th>
                                <th>Dif.</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
  return { 
      results: state.results,
      players: state.players
    }
}

export default connect(mapStateToProps, null)(Table);