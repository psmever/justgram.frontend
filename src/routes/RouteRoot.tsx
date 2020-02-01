import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
    LoginPage,
    FeedPage,
    ExplodePage,
    ProfilePage,
    EditProfilePage,
    DefaultPage,
    TestPage,
} from 'pages';

const RouteRoot = () => {
    return (
        <Switch>
            <Route path="/login" exact={ true } component={ LoginPage } />
            <Route path="/feed" exact={ true } component={ FeedPage } />
            <Route path="/explode" exact={ true } component={ ExplodePage } />

            <Route path="/profile" exact={ true } component={ ProfilePage } />
            <Route path="/profile/edit" exact={ true } component={ EditProfilePage } />

            <Route path="/main" exact={ true } component={ FeedPage } />
            <Route path="/default" exact={ true } component={ DefaultPage } />
            <Route path="/test" exact={ true } component={ TestPage } />
            <Redirect path="*" to="/login" />
        </Switch>
    );
};

export default RouteRoot;
