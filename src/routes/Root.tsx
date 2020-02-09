import * as React from "react";
import { Router, Route} from "react-router-dom";
import Switch from "./Switch";

interface RootProps  {
    Routerhistory: any
};

const Root = ({
    Routerhistory
} : RootProps) => {
    return (
        <Router history={ Routerhistory }>
            <Route component={ Switch }/>
        </Router>
    );
}

export default Root;