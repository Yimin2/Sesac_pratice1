import React from 'react';

import {Outlet} from "react-router-dom";
import {Navigate} from "react-router-dom";

function ProtectedLayout(props) {

    const isLogin = false;
    if (!isLogin) {
        return <Navigate to="/auth/login"></Navigate>
    }
    return (<div>
        <Outlet/>
    </div>);
}

export default ProtectedLayout;