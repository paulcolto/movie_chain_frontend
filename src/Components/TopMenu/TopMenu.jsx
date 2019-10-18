import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

export default function TopMenu(props) {
    let match = useRouteMatch();
    return (

        <nav className="topmenu">
            <Link to={match.url}>Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to={`${match.url}/programme`}>Programme</Link>
            <Link to="/">Theater selection</Link>
        </nav>

    )
}