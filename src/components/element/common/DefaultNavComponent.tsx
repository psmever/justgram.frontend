import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useParams } from 'react-router-dom';
import { NavigationStyle, NavigationNavigationColumn, NavigationColumn, NavigationsLinks, NavigationListItem, NavigationLink } from 'styles';
import image_logo from 'assets/images/logo.png';
import * as _ from 'lodash';

interface RouteParams {
    user_name: string
}


function DefaultNavComponent() {

    const params = useParams<RouteParams>();

    const login_state = useSelector((state: RootState) => state.login_state.state);

    const login_user_name = useSelector((state: RootState) => state.login_state.user_name);
    const loginState = useMemo(() => login_state, [login_state]);


    const isLogined = (loginState === "success" && _.isEmpty(login_user_name) === false) ? true : false;

    const homeLink = process.env.PUBLIC_URL + "/feed";
    const postLink = isLogined ? process.env.PUBLIC_URL + `/post` : process.env.PUBLIC_URL + "/login";
    const followersLink = isLogined ? process.env.PUBLIC_URL + `/${params.user_name}/followers` : process.env.PUBLIC_URL + "/login";
    const profileLink = isLogined ? process.env.PUBLIC_URL + `/${login_user_name}/profile` : process.env.PUBLIC_URL + "/login";
    const signLink = isLogined ? process.env.PUBLIC_URL + `/logout` : process.env.PUBLIC_URL + "/login";

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
                            <NavigationLink to={postLink}><i className="fa fa-edit fa-lg"></i></NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            <NavigationLink to={followersLink}><i className="fa fa-heart-o fa-lg"></i></NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            <NavigationLink to={profileLink}><i className="fa fa-user-o fa-lg"></i></NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            {isLogined
                            ?
                            <NavigationLink to={signLink}><i className="fa fa-sign-out fa-lg"></i></NavigationLink>
                            :
                            <NavigationLink to={signLink}><i className="fa fa-sign-in fa-lg"></i></NavigationLink>
                            }
                        </NavigationListItem>
                    </NavigationsLinks>
                </NavigationColumn>
            </NavigationStyle>
    );
}

export default DefaultNavComponent;