import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

function AuthLayout(props) {
    const token = useSelector((state) => (state.auth.token))
    console.log(token)
    console.log(token)
    if(token) {
        return <Navigate to="/profile" replace/>
    } else {
        return <Outlet/>
    }
}

export default AuthLayout;