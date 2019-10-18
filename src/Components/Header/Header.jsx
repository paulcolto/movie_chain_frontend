import React from 'react';
import TopMenu from '../TopMenu/TopMenu.jsx';
import UserStatus from '../UserStatus';

import './Header.scss';

export default function Header(props) {
    return (

        <header>

            <div className="logo">REACT</div>

            <TopMenu />

            <UserStatus />

        </header>

    )
}