import * as React from "react";
import { Route, Router } from "react-router-dom";
import History from "./Routes/History";
import RouteRoot from "./Routes/RouteRoot";

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