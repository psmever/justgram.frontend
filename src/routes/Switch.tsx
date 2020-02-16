import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
    LoginPage,
    LogoutPage,
    RegisterPage,
    FeedPage,
    ExplodePage,
    ProfilePage,
    EditProfilePage,
    DefaultPage,
    TestPage,
} from "resources/pages";

const RouterSwitch = () => {
    return (
        <Switch>
            <Route path="/" exact={ true } component={ LoginPage } />
            <Route path="/login" exact={ true } component={ LoginPage } />
            <Route path="/logout" exact={ true } component={ LogoutPage } />
            <Route path="/register" exact={ true } component={ RegisterPage } />
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

export default RouterSwitch;
