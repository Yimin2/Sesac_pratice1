import React from 'react';
import {Navigate} from "react-router-dom";
import { useNavigate} from "react-router-dom";

function Profile(props) {
    const isLogin = true;
    const navigate = useNavigate()
    if (!isLogin) {
        return <Navigate to={"/"} replace></Navigate>
    }
    return (<div>사용자정보
    <button className="border-2 p-2 m-2" onClick={() => {
        alert("홈페이지로 이동합니다.")
        navigate("/")
    }}>홈페이지로 이동</button></div>);
}

export default Profile;