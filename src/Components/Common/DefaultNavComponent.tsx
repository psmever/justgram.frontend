import * as React from 'react';

import image_logo from 'Assets/Images/logo.png';

function DefaultNavComponent() {
    return (
        <div>
            <nav className="navigation">
                <div className="navigation__column">
                    <a href={`/feed`}><img src={image_logo} alt="logo"/></a>
                </div>
                <div className="navigation__column">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navigation__column">
                    <ul className="navigations__links">
                        <li className="navigation__list-item">
                            <a href={`/explode`} className="navigation__link"><i className="fa fa-compass fa-lg"></i></a>
                        </li>
                        <li className="navigation__list-item">
                            <a href={`/explode`} className="navigation__link"><i className="fa fa-heart-o fa-lg"></i></a>
                        </li>
                        <li className="navigation__list-item">
                            <a href={`/profile`} className="navigation__link"><i className="fa fa-user-o fa-lg"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default DefaultNavComponent;