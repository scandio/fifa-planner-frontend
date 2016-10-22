import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import MainLayout from './layout.js';
import Home from './home.js';
import AddTeam from './add.team.js';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Router history={hashHistory}>
          <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="add">
              <IndexRoute component={AddTeam} />
              <Route path="team" component={AddTeam} />
            </Route>
          </Route>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);