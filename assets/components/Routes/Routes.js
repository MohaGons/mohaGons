import React from "react";
import { Route, Switch } from "react-router-dom";
import CryptoPage from "../pages/CryptoPage/CryptoPage.js";
import Test from "../pages/Test/Test.js";

import {
    CRYPTOPAGE,
    TEST,
} from "../../constants/routes.js";

const Routes = () => {
    return (
        <Switch>
            <Route path={CRYPTOPAGE} exact component={CryptoPage} />
            <Route path={TEST} exact component={Test} />
        </Switch>

    )
};

export default Routes;