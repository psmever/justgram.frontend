import * as React from 'react';
import { Link } from 'react-router-dom';
import image_logo from 'assets/images/logo.png';

function DefaultNavComponent() {
    return (
        <div>
            <nav className="navigation">
                <div className="navigation__column">
                    <Link to="/"><img src={image_logo} alt="logo"/></Link>
                </div>
                <div className="navigation__column">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navigation__column">
                    <ul className="navigations__links">
                        <li className="navigation__list-item">
                            <Link to="/explode" href={`/explode`} className="navigation__link"><i className="fa fa-compass fa-lg"></i></Link>
                        </li>
                        <li className="navigation__list-item">
                            <Link to="/explode" className="navigation__link"><i className="fa fa-heart-o fa-lg"></i></Link>
                        </li>
                        <li className="navigation__list-item">
                            <Link to="/profile" className="navigation__link"><i className="fa fa-user-o fa-lg"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default DefaultNavComponent;