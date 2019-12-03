import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../containers/Main";
import Test from "../containers/Test";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Main} />
      <Route path="/test" exact={true} component={Test} />
    </Switch>
  );
};

export default Routes;
