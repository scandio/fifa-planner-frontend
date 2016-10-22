import React from 'react';
import { Link } from 'react-router';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="root">
                <header className="primary-header"></header>
                <aside className="primary-aside">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add/team">Team anlegen</Link></li>
                    </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}