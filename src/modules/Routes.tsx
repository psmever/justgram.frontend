import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import * as Pages from "components/pages";
import { BrowserRouter } from "react-router-dom";

interface RootProps  {
    Routerhistory: any
};

const Routes = ({Routerhistory} : RootProps) => {

    return (
        <BrowserRouter>
            <Router history={ Routerhistory }>
                <Pages.TestHeader/>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + "/test"} exact={true} component={ Pages.TestPage } />
                    <Route path={process.env.PUBLIC_URL + "/default"} exact={true} component={ Pages.DefaultPage } />
                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;