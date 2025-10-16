import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (<div className="flex gap-2 border-2 p-2">
        <Link to="/signup">회원가입</Link>
        <Link to="/login">로그인</Link>
        <Link to="/profile">프로필</Link>
    </div>);
}

export default Home;