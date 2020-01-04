import * as React from "react";
import { Route, Router } from "react-router-dom";

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from "./modules";
import History from "./routes/History";
import RouteRoot from "./routes/RouteRoot";

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


const store = createStore(
    rootReducer,
    compose(
       (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);


const App = () => {

    return (
        <Provider store={ store }>
            <Router history={ History }>
                <Route component={ RouteRoot }/>
            </Router>
        </Provider>
    );
}

export default App;