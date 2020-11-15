import React from "react";
import { Route, Router, Switch, BrowserRouter } from "react-router-dom";

import * as Pages from "components/pages";
import EtcLayoutComponent from 'components/layout/EtcLayoutComponent';
import MainLayoutComponent from 'components/layout/MainLayoutComponent';


interface RootProps  {
    Routerhistory: any
};

const Routes = ({Routerhistory} : RootProps) => {

    return (
        <BrowserRouter>
            <Router history={ Routerhistory }>
                <Switch>

                    <Route path={process.env.PUBLIC_URL + "/auth/login"} exact component={ Pages.LoginPage } />

                    <Route path='/etc/:path?' exact>
                        <EtcLayoutComponent>
                            <Switch>
                                <Route path='/etc/test' exact component={ Pages.TestPage } />
                                <Route path='/etc/default' exact component={ Pages.DefaultPage } />
                            </Switch>
                        </EtcLayoutComponent>
                    </Route>

                    <Route>
                        <MainLayoutComponent>
                            <Switch>
                                <Route path={process.env.PUBLIC_URL + "/feed/main"} exact component={ Pages.MainPage } />

                                <Route path={process.env.PUBLIC_URL + "/recommend"} exact component={ Pages.RecommendPage } />
                                <Route path={process.env.PUBLIC_URL + "/explore"} exact component={ Pages.ExplorePage } />

                                <Route path={process.env.PUBLIC_URL + "/profile/:user_name"} exact component={ Pages.HomePage } />
                                <Route path={process.env.PUBLIC_URL + "/profile/:user_name/edit"} exact component={ Pages.EditProfilePage } />
                            </Switch>
                        </MainLayoutComponent>
                    </Route>

                </Switch>
            </Router>
        </BrowserRouter>
    );
}

export default Routes;