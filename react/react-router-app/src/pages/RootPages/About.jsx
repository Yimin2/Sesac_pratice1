import React from 'react';
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

function About(props) {
    return (<div>
        <h1>소개페이지</h1>
        <NavLink to="/">홈</NavLink>
        <br/>
        <NavLink to="/about"
                 className={({isActive}) => {
                     return isActive ? "text-red-600" : "text-blue-600"
                 }}>소개</NavLink>
        <br/>
        <NavLink to={"/profile"}>프로필</NavLink>
    </div>);
}

export default About;