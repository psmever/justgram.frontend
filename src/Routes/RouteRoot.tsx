import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
    LoginPage,
    FeedPage,
    DefaultPage,
    TestPage,
} from 'Pages';

const RouteRoot = () => {
    return (
        <Switch>
            <Route path="/login" exact={ true } component={ LoginPage } />
            <Route path="/main" exact={ true } component={ FeedPage } />
            <Route path="/default" exact={ true } component={ DefaultPage } />
            <Route path="/test" exact={ true } component={ TestPage } />
            <Redirect path="*" to="/login" />
        </Switch>
    );
};

export default RouteRoot;
