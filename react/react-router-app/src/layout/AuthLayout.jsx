import React from 'react';
import {Outlet} from "react-router-dom";
import {NavLink} from "react-router-dom";


function AuthLayout(props) {

    const baseClass = "border-2 m-2"
    const activeClass = "border-2 border-blue-400"

    return (<div>사용자 인증 관리 레이아웃
        <div>
            <NavLink className={({isActive}) => `${baseClass} ${isActive ? activeClass : ""}`} to="/auth" end>auth home</NavLink>
            <NavLink className={({isActive}) => `${baseClass} ${isActive ? activeClass : ""}`} to="/auth/login" end>login</NavLink>
            <NavLink className={({isActive}) => `${baseClass} ${isActive ? activeClass : ""}`} to="/auth/signup" end>signup</NavLink>
            <NavLink className={({isActive}) => `${baseClass} ${isActive ? activeClass : ""}`} to="/">home</NavLink>
        </div>
        <Outlet/>
    </div>);
}

export default AuthLayout;