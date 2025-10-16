import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

function PrivateLayout(props) {
    const token = useSelector((state) => (state.auth.token))
    if (!token) {
        return <Navigate to="/login" replace/>
    } else {
        return <Outlet/>
    }
}

export default PrivateLayout;