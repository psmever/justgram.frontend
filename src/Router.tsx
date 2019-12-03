import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './containers/Main';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            {/* <Route path="/memo" component={Memo} /> */}
            <Route path="/main" component={Main} />
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;