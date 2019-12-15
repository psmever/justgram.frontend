import * as React from "react";
import { Route, Router } from "react-router-dom";
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

const App = () => {

    const app =  (
        <Router history={History}>
        <Route component={RouteRoot}/>
        </Router>
    );

    return (
        <div className="App">
            {app}
        </div>
    );
}


export default App;