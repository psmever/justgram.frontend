import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    Navigation,
    NavigationColumn,
    NavigationSearch,
    NavigationLinks,
    NavigationListItem,
    NavigationLink,
} from 'styled/MainNavigation';
import { SearchIcon, TopHomeIcon, TopCompassIcon } from 'styled/StyledIcons';

export default function MainNavigation() {

    const history = useHistory();

    const handleClickUserHome = (e: any) => {
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
                            <NavigationLink to="" onClick={(e) => e.preventDefault()}>
                                <TopCompassIcon size="25px"/>
                            </NavigationLink>
                        </NavigationListItem>
                    </NavigationLinks>
                </NavigationColumn>
            </Navigation>
        </React.Fragment>
    );
}