import * as React from "react";
import { Route, Router } from "react-router-dom";

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from "./Modules";
import History from "./Routes/History";
import RouteRoot from "./Routes/RouteRoot";

import "Assets/css/reset.css";
import "Assets/css/variables.css";
import "Assets/css/globals.css";
import "Assets/css/login.css";
import "Assets/css/footer.css";
import "Assets/css/navigation.css";
import "Assets/css/explore.css";
import "Assets/css/feed.css";
import "Assets/css/profile.css";
import "Assets/css/edit-profile.css";
import "Assets/css/mobile.css";


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