import React from "react";
import { Route, Switch } from "react-router-dom";
import CryptoPage from "../pages/CryptoPage/CryptoPage.js";
import Bourse from "../pages/Bourse/Bourse.js";
import Accueil from "../pages/Accueil/Accueil.js"

import {
    CRYPTOPAGE,
    BOURSE,
    ACCUEIL,
} from "../../constants/routes.js";

const Routes = () => {
    return (
        <Switch>
            <Route path={ACCUEIL} exact component={Accueil} />
            <Route path={CRYPTOPAGE} exact component={CryptoPage} />
            <Route path={BOURSE} exact component={Bourse} />
        </Switch>

    )
};

export default Routes;