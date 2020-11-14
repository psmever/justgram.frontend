import React from 'react';
import Routes from './modules/Routes';
import History from "./modules/History";
import GlobalStyle from "styled/GlobalStyle";

const App = () => (
    <>
        <GlobalStyle/>
        <Routes Routerhistory={ History }/>
    </>
)

export default App;
