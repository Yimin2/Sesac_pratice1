import React from 'react';
import {Outlet} from "react-router-dom";
import {NavLink} from "react-router-dom";


function AuthLayout(props) {

    const baseclass = "border-2"
    const activeClass = "border-2 border-red-900"

    return (<div>사용자 인증 관리 레이아웃
        <div>
            <NavLink className={({isActive}) => `${baseclass} ${isActive ? activeClass : ""}`} to="/auth">auth home </NavLink>
            <NavLink to="/auth/login">login </NavLink>
            <NavLink to="/auth/signup">signup </NavLink>
            <NavLink to="/">home</NavLink>
        </div>
        <Outlet/>
    </div>);
}

export default AuthLayout;