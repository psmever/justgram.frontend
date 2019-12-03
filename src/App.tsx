import * as React from "react";
import { Route, Router } from "react-router-dom";
import History from "./History";
import Routes from "./routes/Routes";

const App = () => {

    const app =  (
        <Router history={History}>
        <Route component={Routes}/>

        </Router>
    );

    return (
        <div className="App">
            {app}
        </div>
    );
}


export default App;