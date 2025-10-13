import React from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

function RootLayout(props) {
    return (<div>
        <div className="border-2 p-2 m-2">
            <Link to="/">홈페이지 </Link>
            <Link to="/about">소개 </Link>
            <Link to="/profile">사용자 정보 </Link>
            <Link to="/auth">인증페이지</Link>
        </div>
        <Outlet/>
    </div>);
}

export default RootLayout;