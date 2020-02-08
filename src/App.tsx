import * as React from "react";

import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import { Route, Router } from "react-router-dom";
import { Provider } from 'react-redux';
import RouteSwitch from "./routes/RouteSwitch";



import "assets/css/reset.css";
import "assets/css/variables.css";
import "assets/css/globals.css";
import "assets/css/login.css";
import "assets/css/footer.css";
import "assets/css/navigation.css";
import "assets/css/explore.css";
import "assets/css/feed.css";
import "assets/css/profile.css";
import "assets/css/edit-profile.css";
import "assets/css/mobile.css";
import "assets/css/register.css";
import "assets/css/loading.css";


const history = createBrowserHistory();

declare var window: any;
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

const App = () => {


    return (
        <Provider store={ store }>
            <Router history={ history }>
                <Route component={ RouteSwitch }/>
            </Router>
        </Provider>
    );
}

export default App;