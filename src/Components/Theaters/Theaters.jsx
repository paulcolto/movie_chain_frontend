import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
/* import Audience from "./audience.jpg";
 */

export default function Theaters(props) {
    return (

        <>
            <h1>Welcome to React Cinemas</h1>

            <div className="calltoaction"><em>"Where films are films on a screen..."</em></div>

            <h2><Link to="/prague">Prague</Link></h2>

            {/* <img src={Audience} alt="" /> */}
        </>

    )
}