import React from 'react';
import MoreAboutEventContainer from '../../containers/MoreAboutEventContainer';
import './Header.css';

export const Header = () => {
    return (
        <header className="app__header">
            <div className="header__events">Events</div>
            {/* <MoreAboutEventContainer/> */}
        </header>
    );
}

export default Header;