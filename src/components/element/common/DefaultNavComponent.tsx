import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useParams } from 'react-router-dom';
import * as Helper from 'lib/Helper';
import { NavigationStyle, NavigationNavigationColumn, NavigationColumn, NavigationsLinks, NavigationListItem, NavigationLink } from 'styles';
import image_logo from 'assets/images/logo.png';

interface RouteParams {
    user_name: string
}


function DefaultNavComponent() {

    const params = useParams<RouteParams>();

    // 로그인 상태가 정상일떄 홈 링크 변경. 로그인 페이지로 보내지 않기 위해.
    const login_state = useSelector((state: RootState) => state.login_state.state);
    const login_user_name = useSelector((state: RootState) => state.login_state.user_name);
    const loginState = useMemo(() => login_state, [login_state]);

    const homeLink = (loginState === "success") ? process.env.PUBLIC_URL + "/feed" : process.env.PUBLIC_URL + "/";
    const profileLink = (loginState === "success" && login_user_name) ? process.env.PUBLIC_URL + `/${login_user_name}/profile` : process.env.PUBLIC_URL + "/";

    const signLink = (loginState === "success" && login_user_name) ? process.env.PUBLIC_URL + `/logout` : process.env.PUBLIC_URL + "/login";


    const followersLink = (params.user_name) ? process.env.PUBLIC_URL + `/${params.user_name}/followers` : process.env.PUBLIC_URL + `/${Helper.cookieManager.get('login_user_name')}/followers`;

    return (
            <NavigationStyle>
                <NavigationNavigationColumn>
                    <Link to={homeLink}><img src={image_logo} alt="logo"/></Link>
                </NavigationNavigationColumn>
                <NavigationColumn>
                    {/* 나중에 하자. */}
                    {/* <i className="fa fa-search"></i> */}
                    {/* <input type="text" placeholder="Search" /> */}
                </NavigationColumn>
                <NavigationColumn>
                    <NavigationsLinks>
                        <NavigationListItem>
                            <NavigationLink to={process.env.PUBLIC_URL + "/post"}><i className="fa fa-edit fa-lg"></i></NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            <NavigationLink to={followersLink}><i className="fa fa-heart-o fa-lg"></i></NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            <NavigationLink to={profileLink}><i className="fa fa-user-o fa-lg"></i></NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            <NavigationLink to={signLink}><i className="fa fa-sign-out fa-lg"></i></NavigationLink>
                        </NavigationListItem>
                    </NavigationsLinks>
                </NavigationColumn>
            </NavigationStyle>
    );
}

export default DefaultNavComponent;