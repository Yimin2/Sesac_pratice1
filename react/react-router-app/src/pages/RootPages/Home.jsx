import React from 'react';
import {Link} from "react-router-dom"

function Home(props) {
    return (<div>
        <h1>홈페이지</h1>
        <Link to="/">홈</Link>
        <br/>
        <Link to="/about">소개</Link>
        <br/>
        <Link to={"/profile"}>프로필</Link>
    </div>);
}

export default Home;