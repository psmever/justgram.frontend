import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from 'modules';


import image_logo from 'assets/images/logo.png';

function DefaultNavComponent() {

    // 로그인 상태가 정상일떄 홈 링크 변경. 로그인 페이지로 보내지 않기 위해.
    const login_state = useSelector((state: RootState) => state.login_state.state);
    const login_user_name = useSelector((state: RootState) => state.login_state.user_name);
    const loginState = useMemo(() => login_state, [login_state]);

    const homeLink = (loginState === "success") ? process.env.PUBLIC_URL + "/feed" : process.env.PUBLIC_URL + "/";
    const profileLink = (loginState === "success") ? process.env.PUBLIC_URL + `/${login_user_name}/profile` : process.env.PUBLIC_URL + "/";

    return (

        <div>
            <nav className="navigation">
                <div className="navigation__column">
                    <Link to={homeLink}><img src={image_logo} alt="logo"/></Link>
                </div>
                <div className="navigation__column">
                    {/* 나중에 하자. */}
                    {/* <i className="fa fa-search"></i> */}
                    {/* <input type="text" placeholder="Search" /> */}
                </div>
                <div className="navigation__column">
                    <ul className="navigations__links">
                        <li className="navigation__list-item">
                            <Link to={process.env.PUBLIC_URL + "/post"} className="navigation__link"><i className="fa fa-edit fa-lg"></i></Link>
                        </li>
                        <li className="navigation__list-item">
                            <Link to={process.env.PUBLIC_URL + "/explode"} className="navigation__link"><i className="fa fa-heart-o fa-lg"></i></Link>
                        </li>
                        <li className="navigation__list-item">
                            <Link to={profileLink} className="navigation__link"><i className="fa fa-user-o fa-lg"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default DefaultNavComponent;