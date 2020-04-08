import * as React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import History from "./routes/History";
import { createBrowserHistory } from 'history'
import configureStore from 'configureStore'

import Root from "./routes/Root";

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
import "assets/css/post.css";

const history = createBrowserHistory();

declare var window: any;
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

const App = () => {
    return (
        <Provider store={ store }>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Root Routerhistory={ History }/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;