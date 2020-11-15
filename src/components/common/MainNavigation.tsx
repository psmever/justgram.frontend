import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    Navigation,
    NavigationColumn,
    NavigationSearch,
    NavigationLinks,
    NavigationListItem,
    NavigationLink,
    NavigationAvatar,
} from 'styled/MainNavigation';
import { SearchIcon, TopHomeIcon, TopCompassIcon, TopHeartIcon } from 'styled/StyledIcons';

export default function MainNavigation() {

    const history = useHistory();

    // const handleClickUserHome = (e: any) => {
    //     e.preventDefault();
    //     history.push({
    //         pathname: process.env.PUBLIC_URL + `/profile/psmever`
    //     });
    // }

    const handleClickUserHome = (e: any) => {
        e.preventDefault();
        history.push({
            pathname: process.env.PUBLIC_URL + `/feed/main`
        });
    }


    const handleClickExplore = (e: any) => {
        e.preventDefault();
        history.push({
            pathname: process.env.PUBLIC_URL + `/explore`
        });
    }

    const handleClickRecommend = (e: any) => {
        e.preventDefault();
        history.push({
            pathname: process.env.PUBLIC_URL + `/recommend`
        });
    }

    // TODO : 2020-11-15 20:57 내 프로필은 아래인데 대상 프로필은 어쩔껀지?
    const handleClickProfile = (e: any) => {
        e.preventDefault();
        history.push({
            pathname: process.env.PUBLIC_URL + `/profile/psmever`
        });
    }

    return (
        <React.Fragment>
            <Navigation>
                <NavigationColumn>
                    <Link to="/feed/main"><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt=""/></Link>
                </NavigationColumn>
                <NavigationColumn>
                    <SearchIcon size="20px" />
                    <NavigationSearch type="text" placeholder="Search"/>
                </NavigationColumn>
                <NavigationColumn>
                    <NavigationLinks>
                        <NavigationListItem>
                            <NavigationLink to="" onClick={(e) => handleClickUserHome(e)}>
                                <TopHomeIcon size="25px"/>
                            </NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            <NavigationLink to="" onClick={(e) => handleClickExplore(e)}>
                                <TopCompassIcon size="25px"/>
                            </NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            <NavigationLink to="" onClick={(e) => handleClickRecommend(e)}>
                                <TopHeartIcon size="27px"/>
                            </NavigationLink>
                        </NavigationListItem>
                        <NavigationListItem>
                            <NavigationLink to="" onClick={(e) => handleClickProfile(e)}>
                                <NavigationAvatar src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'} alt="" />
                            </NavigationLink>
                        </NavigationListItem>
                    </NavigationLinks>
                </NavigationColumn>
            </Navigation>
        </React.Fragment>
    );
}