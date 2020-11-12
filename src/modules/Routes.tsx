import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import * as Pages from "components/pages";


interface RootProps  {
    Routerhistory: any
};

const Routes = ({Routerhistory} : RootProps) => {

    return (
        <HashRouter basename={process.env.PUBLIC_URL + "/pages"}>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + "/test"} exact={true} component={ Pages.TestPage } />
                    <Route path={process.env.PUBLIC_URL + "/default"} exact={true} component={ Pages.DefaultPage } />
                </Switch>
        </HashRouter>
    );
}

export default Routes;