import * as React from "react";
import { Route, Router } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";

interface RooterRootProps {
    History: any;

}

const RooterRoot = ({
    History
}: RooterRootProps) => {

    return (
        <Router history={ History }>
            <Route component={ RouteSwitch }/>
        </Router>
    );
};

export default RooterRoot;
